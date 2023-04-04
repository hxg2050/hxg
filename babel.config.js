import { resolve } from "path"
export default function (api) {
    // api.cache(true);
    return {
        "plugins": [
            "@babel/plugin-syntax-jsx",
            [
                "@babel/plugin-transform-react-jsx",
                {
                    "throwIfNamespace": true, // defaults to true
                    "runtime": "automatic", // defaults to classic
                    "importSource": resolve('./src/jsx'), // defaults to react
                }
            ]
        ],
        "presets": [
            ["@babel/preset-typescript", {
                "isTSX": true,
                "allExtensions": true
            }],
            ["@babel/preset-env", {

            }]
        ]
    }
}