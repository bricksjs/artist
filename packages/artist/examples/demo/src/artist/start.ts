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
artist.load(apps);

// 调用调试方法
artist.get();

console.log({ artist });
