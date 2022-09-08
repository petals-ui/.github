const { resolve: resolvePath } = require('path');
const { safeDump } = require('js-yaml');

const { LOCAL_DATA_ROOT, ensureDirExists, scanAndSortByAsc, readData, saveData } = require('./helper');

const controlDir = `${LOCAL_DATA_ROOT}/controls`;
const controlDistDir = resolvePath(__dirname, '../site/_controls');

ensureDirExists(controlDistDir, true);

scanAndSortByAsc(controlDir).forEach(controlName => {
  const controlSourceDir = `${controlDir}/${controlName}`;
  const { title } = readData(`${controlSourceDir}/metadata.yml`);
  const frontMatter = safeDump({ title: `${title} ${controlName.split('-').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('')}` });
  const content = readData(`${controlSourceDir}/readme.md`)
    .replace(/src=\"([^\"]+)\"/g, (match, srcPath) => match.replace(srcPath, `{{ 'notes/${id}/${srcPath.replace(/.(jp(e)?g)/g, '')}' | asset_path }}`))
    .replace(/\n\`{3}([^\n]+)/g, (_, lang) => `\n{% highlight ${lang} %}`)
    .replace(/\`{3}/g, '{% endhighlight %}');

  saveData(`${controlDistDir}/${controlName}.md`, `---\n${frontMatter}---\n\n${content}\n`);
});
