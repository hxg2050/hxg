import './style.scss';
import { Resource } from '../src/core/resource';
// json 加载
Resource.load('./example/assets/config/res.json').then((res) => {
	console.log(res);
});

// image 加载
Resource.load('./example/assets/images/img.png').then((res) => {
	console.log(res);
});

// audio 加载
Resource.load('./example/assets/audio/horse.mp3').then((res) => {
	console.log(res);
});
