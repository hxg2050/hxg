import { Container, Graphics, Rect, Text, Thing } from "../src";

class FPS extends Thing<Text> {

    constructor() {
        super(Text);
    }

    start(): void {
        this.width = 100;
        this.height = 100;
    }

    set value(val: string) {
        this.container.value = val;
    }

    update(dt: number) {
        super.update(dt);
        this.value = dt.toString();
    }
}

class RedRect extends Thing<Graphics> {
    rect: Rect;

    constructor() {
        super(Graphics);
        this.rect = this.addComponent(Rect);
        this.size.set(100);
    }
}


function Rects({ x = 100, y = 0 }) {
    const rects = [];
    for (let i = 0; i < 10; i++) {
        rects.push(<RedRect x={100 + x} y={30 + i * 20 + y}></RedRect>);
    }

    return (
        <>{...rects}</>
    );
}

export class App extends Thing {

    render(): Thing<Container> {
        const rects = [];
        for (let i = 0; i < 10; i++) {
            rects.push(<RedRect x={100} y={30 + i * 20}></RedRect>);
        }

        return (<>
            <FPS></FPS>
            <Rects y={100} />
        </>)
    }
}