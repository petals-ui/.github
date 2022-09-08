const { resolve: resolvePath } = require('path');
const { safeDump } = require('js-yaml');

const { LOCAL_DATA_ROOT, ensureDirExists, ensureFileExists, scanAndSortByAsc, readData, saveData, cp } = require('./helper');

const controlDir = `${LOCAL_DATA_ROOT}/controls`;
const controlImageDistDir = resolvePath(__dirname, '../site/_assets/images/controls');
const controlDistDir = resolvePath(__dirname, '../site/_controls');
const controlDataFile = resolvePath(__dirname, '../site/_data/controls.yml');

function generateControls() {
  ensureDirExists(controlImageDistDir, true);
  ensureDirExists(controlDistDir, true);
  ensureFileExists(controlDataFile, true);

  const controlData = { items: {}, classified: {} };

  scanAndSortByAsc(controlDir).reverse().forEach(controlName => {
    const controlSourceDir = `${controlDir}/${controlName}`;
    const metadata = readData(`${controlSourceDir}/metadata.yml`);
    const controlClassName = controlName.split('-').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('');
    const frontMatter = safeDump({ title: `${controlClassName} ${metadata.title}` });
    const content = readData(`${controlSourceDir}/readme.md`)
      .replace(/src=\"([^\"]+)\"/g, (match, srcPath) => match.replace(srcPath, `{{ 'controls/${controlName}/${srcPath.replace(/.(jp(e)?g|png|gif|svg)/g, '')}' | asset_path }}`))
      .replace(/\n\`{3}([^\n]+)/g, (_, lang) => `\n{% highlight ${lang} %}`)
      .replace(/\`{3}/g, '{% endhighlight %}');

    controlData.items[controlName] = { ...metadata, componentName: controlClassName };

    if (!controlData.classified[metadata.type]) {
      controlData.classified[metadata.type] = [];
    }

    controlData.classified[metadata.type].push(controlName);

    saveData(`${controlDistDir}/${controlName}.md`, `---\n${frontMatter}---\n\n${content}\n`);

    scanAndSortByAsc(controlSourceDir).forEach(fileName => {
      if (/(jp(e)?g|png|gif|svg)\b/ig.test(fileName)) {
        ensureDirExists(`${controlImageDistDir}/${controlName}`);
        cp(`${controlSourceDir}/${fileName}`, `${controlImageDistDir}/${controlName}/${fileName}`)
      }
    });
  });

  saveData(controlDataFile, controlData);
}

generateControls();
