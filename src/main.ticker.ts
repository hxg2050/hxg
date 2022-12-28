import Ticker from "./core/ticker/Ticker";

const ticker = new Ticker();
// ticker.FPS = 7;
ticker.start();
ticker.on('update', (time: number) => {
    console.log(time);
});