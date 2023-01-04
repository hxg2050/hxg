import './style.scss';
import { Resource } from '../src/core/resource';
import { LoadResListConfig } from '../src/core/resource/GroupLoader';

let resList: LoadResListConfig = [
	'./example/assets/config/res.json',
	['./example/assets/images/img.png', 'img'],
	'./example/assets/audio/horse.mp3'
];

// 组资源，批量加载
const loader = Resource.loadGroup(resList, 2)
loader.on('loaded', (res) => {
	console.log(res);
});

loader.on('complate', () => {
	console.log('全部资源加载完成');
	console.log(Resource.cache, Resource.nameCache, Resource.get('img'));
});