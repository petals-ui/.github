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

  saveData(`${controlDistDir}/${controlName}.md`, [`---\n${frontMatter}---\n`, readData(`${controlSourceDir}/readme.md`)].join('\n'));
});
