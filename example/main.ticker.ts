import { Ticker } from "../src";

const ticker = new Ticker();
// ticker.FPS = 7;
ticker.start();
ticker.on('update', (time: number) => {
    console.log(time);
});