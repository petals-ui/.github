const { resolve: resolvePath } = require('path');
const { safeDump } = require('js-yaml');

const {
  LOCAL_DATA_ROOT,
  ensureDirExists, ensureFileExists,
  scanAndSortByAsc, isDirectory,
  readData, saveData,
  cp,
} = require('./helper');

function generateDocs() {
  scanAndSortByAsc(LOCAL_DATA_ROOT).forEach(collection => {
    const sourceDir = `${LOCAL_DATA_ROOT}/${collection}`;

    if (collection.indexOf('.') === 0 || !isDirectory(sourceDir)) {
      return;
    }

    const imageDistDir = resolvePath(__dirname, `../site/_assets/images/${collection}`);
    const distDir = resolvePath(__dirname, `../site/_${collection}`);
    const dataFile = resolvePath(__dirname, `../site/_data/${collection}.yml`);

    ensureDirExists(imageDistDir, true);
    ensureDirExists(distDir, true);
    ensureFileExists(dataFile, true);

    const data = { items: {} };
    const isControl = collection === 'controls';

    if (isControl) {
      data.classified = {};
    }

    scanAndSortByAsc(sourceDir).reverse().forEach(docName => {
      const docSourceDir = `${sourceDir}/${docName}`;

      if (docName.indexOf('.') === 0 || !isDirectory(docSourceDir)) {
        return;
      }

      const metadata = readData(`${docSourceDir}/metadata.yml`);
      const content = readData(`${docSourceDir}/readme.md`)
        .replace(/src=\"([^\"]+)\"/g, (match, srcPath) => match.replace(srcPath, `{{ '${collection}/${docName}/${srcPath.replace(/.(jp(e)?g|png|gif|svg)/g, '')}' | asset_path }}`))
        .replace(/\n\`{3}([^\n]+)/g, (_, lang) => `\n{% highlight ${lang} %}`)
        .replace(/\`{3}/g, '{% endhighlight %}');

      metadata.slug = docName;

      if (isControl) {
        metadata.componentName = docName.split('-').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('');
      }

      data.items[docName] = metadata;

      if (isControl) {
        if (!data.classified[metadata.type]) {
          data.classified[metadata.type] = [];
        }

        data.classified[metadata.type].push(docName);
      }

      saveData(`${distDir}/${docName}.md`, `---\n${safeDump({ title: metadata.title })}---\n\n${content}\n`);

      scanAndSortByAsc(docSourceDir).forEach(fileName => {
        if (/(jp(e)?g|png|gif|svg)\b/ig.test(fileName)) {
          ensureDirExists(`${imageDistDir}/${docName}`);
          cp(`${docSourceDir}/${fileName}`, `${imageDistDir}/${docName}/${fileName}`)
        }
      });
    });

    if (!isControl) {
      data.sequence = Object.entries(data.items).sort(([k1, v1], [k2, v2]) => v1.order > v2.order  ? 1 : -1).map(([_, { slug }]) => slug);
    }

    saveData(dataFile, data);
  });
}

generateDocs();
