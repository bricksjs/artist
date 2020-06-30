<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="This is a home page"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/app-vue/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
};
</script>
