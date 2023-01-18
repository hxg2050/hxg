import { Application, Context, DeclarationReflection, ProjectReflection, ReflectionKind, RendererEvent, Serializer } from "typedoc";
import path from 'path';
import { writeFile } from "fs/promises";

/**
 * 思路
 * 根据typedoc生成的json文件生成一个vitepress侧边导航的数据，其它的保持不变
 * 额外信息，包括侧边导航标题，多级分类，参考cocos-engine的做法，在对应目录创建一个额外的json文件用于描述，或则在对应目录的index.ts中标注（需要测试是否可行）
 */
// let api = [
//     {
//         text: 'Guide',
//         collapsible: true,
//         collapsed: true,
//         items: [
//             { text: 'Introduction', link: '/introduction' },
//             { text: 'Getting Started', link: '/getting-started' },
//         ]
//     }
// ]
// ReflectionKind.Class // 类
// ReflectionKind.Enum // 枚举
// ReflectionKind.Constructor // 类构造函数
// ReflectionKind.Function // 函数
// ReflectionKind.Interface // 接口
// ReflectionKind.Variable // 变量

/**
 * 文件夹为一级分类
 * 然后分类、接口、函数、枚举、变量
 * @param api 
 * @returns 
 */
function parseApiJson(api: ProjectReflection) {
    if (!api.children) {
        return;
    }
    let sidebar: any[] = [];
    // 第一步按照文件夹分类class
    let dir_class: {
        [props: string]: {
            matedata: DeclarationReflection[]
        }
    } = {};
    for (let i = 0; i < api.children.length; i++) {
        const fileName = api.children[i].sources![0].fileName;
        const dir = path.dirname(fileName);
        if (!dir_class[dir]) {
            dir_class[dir] = {
                matedata: []
            };
        }
        dir_class[dir].matedata.push(api.children[i]);
    }
    // 第二步，提取类型并分类
    for (let p in dir_class) {
        const pr = dir_class[p].matedata;

        const items = {};
        items[ReflectionKind.Class] = {
            text: '类',
            dir: 'classes',
            items: []
        };
        items[ReflectionKind.Interface] = {
            text: '接口',
            dir: 'interfaces',
            items: []
        };
        items[ReflectionKind.Function] = {
            text: '函数',
            dir: 'functions',
            items: []
        };
        items[ReflectionKind.Enum] = {
            text: '枚举',
            dir: 'enums',
            items: []
        };
        items[ReflectionKind.Variable] = {
            text: '变量',
            dir: 'variables',
            items: []
        };

        const item = {
            text: p,
            collapsible: true,
            collapsed: true,
            items: []
        };
        for (let i = 0; i < pr.length; i++) {
            const pr_item = pr[i];

            const list = items[pr_item.kind];
            if (!list) {
                continue;
            }
            let link = path.join('dist', list.dir, pr_item.name);
            if (pr_item.kind == ReflectionKind.Variable || pr_item.kind == ReflectionKind.Function) {
                link = path.join('dist', `modules.html#${pr_item.name}`);
            }
            list.items.push({
                text: pr_item.name,
                link: link
            });
        }
        
        item.items = [
            items[ReflectionKind.Class],
            items[ReflectionKind.Interface],
            items[ReflectionKind.Function],
            items[ReflectionKind.Enum],
            items[ReflectionKind.Variable]
        ];
        sidebar.push(item);
    }
    // console.log(sidebar);
    // writeFile()
    return sidebar;
}

async function writeApiJson(json: any, outDir: string) {
    if (!json || !outDir) {
        return;
    }
    const file = path.join(outDir, 'api.json');
    console.log('成功写入菜单导航配置文件:', file);
    await writeFile(file, JSON.stringify(json, null, 4));
}

export function load(app: Application) {
    // const tsconfig = import(app.options.getValue('tsconfig'), { assert: { type: 'json' } }).then((data) => {
    //     console.log(data);

    // });
    //   const app = pluginHost.owner;
    // console.log(app.options.getRawValues());
    app.options.addDeclaration({
        name: 'hxg',
        help: 'doc',
        // type: ParameterType.Object,
        // defaultValue: defaultOptions,
    });
    let outDir = '';
    let apiJson: any;
    app.renderer.on(RendererEvent.BEGIN, (out: RendererEvent, n: any) => {
        outDir = out.outputDirectory;
        writeApiJson(apiJson, outDir);
    });

    app.converter.on(
        Serializer.EVENT_END,
        (pr: Context) => {
            apiJson = parseApiJson(pr.project);
            writeApiJson(apiJson, outDir);
            // readFile(app.options.getValue('tsconfig')).then((data) => {
            //     const tsconfig = JSON5.parse(data.toString());
            //     const file = path.join(path.resolve(), tsconfig.compilerOptions.outDir, 'api.json');
            //     console.log(file);
            //     writeFile(file, JSON.stringify(apiJson, null, 4));
            //     // console.log(apiJson);
            // });
        }
    );
}