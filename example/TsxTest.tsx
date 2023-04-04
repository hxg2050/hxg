import { ImageTexture, Sprite, Text, Thing } from "../src";

export class TextThing extends Thing<Text> {
    set value(val: string) {
        this.container.value = val;
    }

    constructor() {
        super(Text);
        const text = this.getComponent(Text)!;
        this.size.set(100, 100);
        text.value = '你好'
    }
    render() {
        return (<></>)
    }
}

export class TsxTest extends Thing<Sprite> {
    set source(val: ImageTexture) {
        this.container.texture = val;
        this.container.resize();
    }

    constructor() {
        super(Sprite);
    }
    render() {
        return (<>
            <TextThing value="fakjh"/>
        </>)
    }
}