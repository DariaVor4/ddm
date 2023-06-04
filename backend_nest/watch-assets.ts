import * as chokidar from 'chokidar';
import * as fs from 'fs';
import * as path from 'path';

const srcDir = 'src';
const distDir = 'dist';
const directoriesToWatch = [
  ['email', 'templates'],
  ['email', 'assets'],
  ['api', 'visa-request', 'templates'],
];

// Define the function to copy a file
const copyFile = (source: string, target: string) => {
  // Ensure that the target directory exists
  fs.mkdirSync(path.dirname(target), {recursive: true});
  // Copy the file
  fs.copyFileSync(source, target);
};

// Create the watchers
const srcRootFullPath = path.resolve(__dirname, srcDir);
const distRootFullPath = path.resolve(__dirname, distDir);
directoriesToWatch.forEach(dir => {
  const watchFullPath = path.resolve(srcRootFullPath, ...dir);
  const watcher = chokidar.watch(watchFullPath, {persistent: true});
  // Handle the add and change events
  ['add', 'change'].forEach(event => {
    watcher.on(event, filePath => {
      const relativePath = path.relative(srcRootFullPath, filePath);
      const targetPath = path.resolve(distRootFullPath, relativePath);
      copyFile(filePath, targetPath);
      console.log(`Copied file\n\t"${filePath}"\n\t"${targetPath}"`);
    });
  });

  console.log(`Watching for file changes in ${watchFullPath}`);
});
