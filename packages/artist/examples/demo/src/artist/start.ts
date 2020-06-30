import { artist } from './index';

const apps = [
  {
    name: 'app1',
    entry: 'http://127.0.0.1:8081/index.html',
    type: 'main',
    config: {},
  },
  {
    name: 'app2',
    entry: 'index.html',
    type: 'sub',
    config: {},
  },
];

// 1. 加载子系统资源
// artist.load(apps);

artist.init();
// 调用调试方法
artist.get();

const urls = [
  'https://code.jquery.com/jquery-3.1.1.min',
  './test',
  'http://127.0.0.1:8092/test',
];

import(`${urls[0]}.js`).then((module) => {
  console.log('module', module);
});

import(`${urls[1]}.ts`).then((module) => {
  console.log('module', module);
});

// import(`${urls[2]}.js`).then((module) => {
//   console.log('module', module);
// });

const CDNs = [
  {
    name: 'jQuery.com',
    url: 'https://code.jquery.com/jquery-3.1.1.min.js',
  },
  {
    name: 'googleapis.com',
    url: 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js',
  },
  {
    name: 'test',
    url: './test.ts',
  },
];

console.log('------');
console.log(`jQuery is: ${window}`);

// 获取url
function getUrl(index: number) {
  return CDNs[index].url;
}
// Promise.all([
//   // import(getUrl(0)).then(() => console.log(CDNs[0].name, 'loaded')),
//   // import(getUrl(1)).then(() => console.log(CDNs[1].name, 'loaded')),
//   import(getUrl(2)).then(() => console.log(CDNs[1].name, 'loaded')),
// ]).then(() => {
//   console.log(`jQuery version: ${window}`);
// });
// import(CDNs[1]).then(() => console.log(CDNs[1].name, 'loaded'));

console.log({ artist });
