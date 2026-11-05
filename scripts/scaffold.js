#!/usr/bin/env node
/**
 * Scaffolding script for Dental Clinic Landing Page (Dental 1:1 Clone)
 * Usage:
 *   node scaffold.js [target-directory] [--name <project-name>]
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const templateDir = path.resolve(__dirname, '../templates');
const args = process.argv.slice(2);

let targetDir = args[0] && !args[0].startsWith('--') 
  ? path.resolve(process.cwd(), args[0])
  : path.resolve(process.cwd(), 'dental-clinic-site');

// Check name argument
const nameIndex = args.indexOf('--name');
const projectName = nameIndex !== -1 && args[nameIndex + 1] 
  ? args[nameIndex + 1] 
  : path.basename(targetDir);

console.log(`[Dental Clinic Landing Page Scaffolder]`);
console.log(`Target directory: ${targetDir}`);
console.log(`Project name:     ${projectName}`);

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  const stats = fs.statSync(src);
  if (stats.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const child of fs.readdirSync(src)) {
      copyRecursive(path.join(src, child), path.join(dest, child));
    }
  } else {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    let content = fs.readFileSync(src, 'utf8');
    if (path.basename(src) === 'package.json') {
      try {
        const pkg = JSON.parse(content);
        pkg.name = projectName;
        content = JSON.stringify(pkg, null, 2);
      } catch (e) {}
    }
    fs.writeFileSync(dest, content, 'utf8');
  }
}

try {
  copyRecursive(templateDir, targetDir);
  console.log(`\n Successfully scaffolded project to: ${targetDir}`);
  console.log(`\nNext steps:`);
  console.log(`  cd "${targetDir}"`);
  console.log(`  pnpm install (or npm install)`);
  console.log(`  pnpm run dev (or npm run dev)`);
} catch (err) {
  console.error(` Error scaffolding project:`, err);
  process.exit(1);
}
