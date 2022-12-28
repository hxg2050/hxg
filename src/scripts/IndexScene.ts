import Component from "../core/src/Component";
import BaseContainer from "../core/src/components/BaseContainer";
// import Container from "../core/src/components/Container";
// import IContainer from "../core/src/components/IContainer";
// import Layout from "../core/src/components/Layout";
// import Sprite from "../core/src/components/Sprite";
import Transform, { Constructor } from "../core/src/Transform";
// import Vector2 from "../core/src/Vector2";

interface ISceneConfig {
    name?: string;
    node: Constructor<BaseContainer>;
    components?: [Constructor<Component>, any][],
    children?: ISceneConfig[];
    init?(node: Transform): void;
}

// type test<T> =  T extends {[P in keyof T]: infer U} ? (U extends Vector2 ? Partial<T> : never) : never;// (infer P) in key T ? P : never;
// {
//     [props in keyof T, T[props] extends string]?: T[props]
// };
// let a: test<Layout>;
// a.
// let data: ISceneConfig = {
//     name: 'header',
//     node: Container,
//     init: (node: Transform) => {
//         const size = node.size;
//         size.y = 400;
//         node.size = size;

//         const layout = node.addComponent(Layout);
//         layout.left = 0;
//         layout.right = 0;
//         console.log(node.size);
//     },
//     children: [
//         {
//             name: 'right',
//             node: Sprite,
//             components: [
//                 [Layout, {
                    
//                 }]
//             ],
//             init: (node: Transform) => {
//                 const sprite = node.getComponent(Sprite)!;
//                 sprite.source = '../../assets/images/hero_1_2.png';
//             },
//             children: [
//                 {
//                     name: 'photo',
//                     node: Sprite,
//                     init: (node: Transform) => {
//                         // node.position = new Vector2(100, 100);
//                         const sprite = node.getComponent(Sprite)!;
//                         sprite.source = '../../assets/images/hero_2_1.png';
//                     }
//                 }
//             ]
//         }
//     ]
// }

// const createTransform = (config: ISceneConfig) => {

// }

const scene = (config: ISceneConfig) => {
    const node = new Transform(config.node);
    config.name && (node.name = config.name);
    if (config.children) {
        for (let i = 0; i < config.children.length; i ++) {
            node.addChild(scene(config.children[i]));
        }
    }
    if (config.init) {
        setTimeout(() => {
            config.init!(node);
        }, 0);
    }
    return node;
}

export default function() {
    // return scene(data);
}