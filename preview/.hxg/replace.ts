import { readFile, writeFile } from "fs/promises";
import { fileURLToPath } from "url";

export default async function(transformPath: string) {
    const __dirname = fileURLToPath(new URL('.', import.meta.url))
    let template = (await readFile(__dirname + '/index.template.html')).toString();
    template = template.replace('{{StartTransfrom}}', '@' + transformPath);
    console.log(template);
    await writeFile(__dirname + '/' + transformPath + '/index.html', template);
    return __dirname + '/' + transformPath + '';
}