import { execFileSync } from 'node:child_process';
import {
  cpSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  readdirSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

const gameRepo = 'briantfbell/Hells_Vengeance_Game';
const gamePath = '/hells_vengeance';
const publishDir = resolve('dist');
const gameDir = join(publishDir, gamePath.slice(1));
const sourceDir = mkdtempSync(join(resolve(tmpdir()), 'hells-vengeance-'));

try {
  const revision = execFileSync(
    'git',
    ['ls-remote', '--exit-code', `https://github.com/${gameRepo}.git`, 'refs/heads/main'],
    { encoding: 'utf8' },
  ).split(/\s+/)[0];
  if (!/^[a-f0-9]{40}$/.test(revision)) {
    throw new Error('Could not resolve the latest game revision.');
  }

  const archive = join(sourceDir, 'game.tar.gz');
  console.log(`Downloading Hell's Vengeance revision ${revision}`);
  execFileSync(
    'curl',
    ['--fail', '--location', '--silent', '--show-error', '--retry', '2',
      '--output', archive, `https://codeload.github.com/${gameRepo}/tar.gz/${revision}`],
    { stdio: 'inherit' },
  );
  execFileSync('tar', ['-xf', archive, '-C', sourceDir, '--strip-components=1'], {
    stdio: 'inherit',
  });

  const html = readFileSync(join(sourceDir, 'index.html'), 'utf8');
  const head = /<head\b[^>]*>/i;
  if (!head.test(html) || /<base\b/i.test(html)) {
    throw new Error('Expected the game entry page to have a head and no base element.');
  }

  mkdirSync(gameDir);
  cpSync(join(sourceDir, 'art-test'), join(gameDir, 'art-test'), { recursive: true });
  for (const filename of readdirSync(sourceDir).filter((name) => name.endsWith(' Studio.html'))) {
    cpSync(join(sourceDir, filename), join(gameDir, filename));
  }
  writeFileSync(
    join(gameDir, 'index.html'),
    html.replace(head, `$&<base href="${gamePath}/"><!-- Game revision: ${revision} -->`),
  );

  const redirectsPath = join(publishDir, '_redirects');
  const redirects = readFileSync(redirectsPath, 'utf8');
  writeFileSync(redirectsPath, `${gamePath} ${gamePath}/index.html 200\n${redirects}`);
  console.log(`Published Hell's Vengeance revision ${revision} at ${gamePath}`);
} finally {
  rmSync(sourceDir, { recursive: true, force: true, maxRetries: 3 });
}
