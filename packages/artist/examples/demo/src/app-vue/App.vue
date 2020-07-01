<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div>
      common
      <button @click="go">go -1</button>
      <button @click="pushState('/about')">pushState /about</button>
      <button @click="pushState('/')">pushState /home</button>
      <button @click="replaceState('/about')">replaceState /about</button>
      <button @click="replaceState('/')">replaceState /home</button>
       <button @click="popState">popState </button>
    </div>
    <div>

    </div>
    <router-view/>
  </div>
</template>
<script>
/* eslint-disable */
// import { createBrowserHistory } from 'history';
// const history  = createBrowserHistory()
export default {
  methods: {
    go() {
      history.go(-1);
    },
    pushState(path) {
      history.pushState('', document.title, path);
      this.$router.push(path)
      // history.push(path)
    },
    replaceState(path){
      history.replaceState('', document.title, path);
    },
    popState(){
    }
  },
};

// window.addEventListener('popstate',function(event){
//   console.log('change111,----',event)
// })

// window.addEventListener('popstate',function(event){
//   console.log('change22,----',event)
// })

// window.addEventListener('pushstate', function(e) {
//   console.log('pushState',e)
// });

// var _wr = function(type) {
//   var orig = history[type];
//   return function() {
//     var e = new Event(type);
//     e.arguments = arguments;
//     window.dispatchEvent(e);
//     // 注意事件监听在url变更方法调用之前 也就是在事件监听的回调函数中获取的页面链接为跳转前的链接
//     var rv = orig.apply(this, arguments);
//     return rv;
//   };
// };
// history.pushState = _wr('pushState');
// history.replaceState = _wr('replaceState');
// window.addEventListener('pushState', function(e) {
//   var path = e && e.arguments.length > 2 && e.arguments[2];
//   var url = /^http/.test(path) ? path : (location.protocol + '//' + location.host + path);
//   console.log('old:'+location.href,'new:'+url);
// });
// window.addEventListener('replaceState', function(e) {
//   var path = e && e.arguments.length > 2 && e.arguments[2];
//   var url = /^http/.test(path) ? path : (location.protocol + '//' + location.host + path);
//   console.log('old:'+location.href,'new:'+url);
// });



</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
