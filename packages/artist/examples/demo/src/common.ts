/* eslint-disable */
// @ts-nocheck
// import { createBrowserHistory } from 'history';
// const history  = createBrowserHistory()
// window.history = history

window.addEventListener('popstate', (event) => {
  console.log('change111,----', event);
});

window.addEventListener('popstate', (event) => {
  console.log('change22,----', event);
});

window.addEventListener('pushstate', (e) => {
  console.log('pushState', e);
});

// type history = History

const _wr = function (type:string) {
  const orig = history[type];
  return function () {
    const e = new Event(type);
    e.arguments = arguments;
    window.dispatchEvent(e);
    // 注意事件监听在url变更方法调用之前 也就是在事件监听的回调函数中获取的页面链接为跳转前的链接
    const rv = orig.apply(this, arguments);
    return rv;
  };
};

history.pushState = _wr('pushState');
history.replaceState = _wr('replaceState');
window.addEventListener('pushState', (e) => {
  const path = e && e.arguments.length > 2 && e.arguments[2];
  const url = /^http/.test(path) ? path : (`${location.protocol}//${location.host}${path}`);
  console.log(`old:${location.href}`, `new:${url}`);
});
window.addEventListener('replaceState', (e) => {
  const path = e && e.arguments.length > 2 && e.arguments[2];
  const url = /^http/.test(path) ? path : (`${location.protocol}//${location.host}${path}`);
  console.log(`old:${location.href}`, `new:${url}`);
});
