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
export default {
  methods: {
    go() {
      history.go(-1);
    },
    pushState(path) {
      history.pushState('', document.title, path);
    },
    replaceState(path){
      history.replaceState('', document.title, path);
    },
    popState(){
      history.popState()
    }
  },
};
window.addEventListener('popstate',function(){
  console.log('change,----')
})
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
