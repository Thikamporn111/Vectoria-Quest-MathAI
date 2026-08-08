import { mkdir, readFile, writeFile, cp } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve('.');
const dist = resolve('dist');
await mkdir(resolve(dist, 'server'), { recursive: true });
await mkdir(resolve(dist, 'static'), { recursive: true });
await mkdir(resolve(dist, '.openai'), { recursive: true });
await cp(resolve(root, 'index.html'), resolve(dist, 'static', 'index.html'));
await cp(resolve(root, 'styles.css'), resolve(dist, 'static', 'styles.css'));
await cp(resolve(root, 'graph.css'), resolve(dist, 'static', 'graph.css'));
await cp(resolve(root, 'app.js'), resolve(dist, 'static', 'app.js'));
await cp(resolve(root, '.openai', 'hosting.json'), resolve(dist, '.openai', 'hosting.json'));
await writeFile(resolve(dist, 'server', 'index.js'), `export default {
  async fetch(request, env) {
    if (env.ASSETS) return env.ASSETS.fetch(request);
    return new Response('Vectoria Quest', { headers: { 'content-type': 'text/plain; charset=utf-8' } });
  }
};\n`);
const html = await readFile(resolve(dist, 'static', 'index.html'), 'utf8');
if (!html.includes('Vectoria Quest')) throw new Error('Build validation failed');
console.log('Vectoria Quest build complete');
