import { Graphics, Rect, Sprite, Text, Texture, Thing, Vector2 } from "../src";

export class TextThing extends Thing<Text> {
    set value(val: string) {
        this.container.value = val;
    }

    constructor() {
        super(Text);
        const text = this.getComponent(Text)!;
        this.size.set(100, 100);
        text.value = '你好'
        this.position.x = 50;
    }
    render() {
        return (<></>)
    }
}

export class RectThing extends Thing<Graphics> {

    rect: Rect;

    constructor() {
        super(Graphics);
        this.rect = this.addComponent(Rect);
        this.size.set(100, 100);
        // this.position.x = -100;
    }

    start(): void {
        this.size.set(100, 100);
    }
}

export class TsxTest extends Thing<Sprite> {
    constructor() {
        super(Sprite);
    }

    set source(val: Texture) {
        this.container.texture = val;
        this.container.resize();
        // this.find('fight');
        // this.select('fight,close');
    }

    render() {
        return (<>
            <TextThing name="fight" value="123">
                <TextThing value="45678"/>
                <RectThing />
            </TextThing>
        </>)
    }
}