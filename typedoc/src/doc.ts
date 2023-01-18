import { Application, TSConfigReader } from 'typedoc';
import path from 'path';
import { load } from './plugin';
const __dirname = path.resolve();

console.log(__dirname);
const app = new Application();
app.options.addReader(new TSConfigReader());
// 根目录
function rootPath(...args: string[]) {
    return path.join(__dirname, ...args);
}
app.bootstrap({
    entryPoints: [rootPath('src/index.ts')],
    tsconfig: rootPath('tsconfig.json'),
    plugin: ['typedoc-plugin-markdown'],
    excludePrivate: true
});
app.options.setValue('hideBreadcrumbs', true);
// function load(app: Application) {
//     app.converter.on(Converter.EVENT_CREATE_DECLARATION, (_context: Context, reflection: Reflection, node: Node) => {
//         console.log(node);

//     });
// }
load(app);
(async () => {

    // 输出产物位置
    const outputDir = path.join(__dirname, 'docs/dist');
    const outputJsonPath = path.join(__dirname, 'docs/dist', 'apis.json');
    await app.generateDocs(app.convert()!, outputDir);
    await app.generateJson(app.convert()!, outputJsonPath);
})();