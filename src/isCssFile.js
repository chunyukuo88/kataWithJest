export function entityShouldBeIgnored(entity){
  return (entitiesToBeIgnored.includes(entity) || !isCssFile(entity));
}

function isCssFile(entity){
  const asArray = entity.split('.');
  const fileExtension = asArray[asArray.length - 1];
  return fileExtension === 'css';
}

const entitiesToBeIgnored = [
  '.git',
  '.gitignore',
  '.husky',
  '.idea',
  'coverage',
  'LICENSE',
  'node_modules',
  'package-lock.json',
  'package.json',
  'README.md',
  'References.md',
  'vitest.config.ts',
];
