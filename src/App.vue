<template>
  <div id="app">
    <Editor />
    <Fab id="fab" />
  </div>
</template>

<script>
import Editor from './components/Editor.vue';
import Fab from './components/Fab.vue';

export default {
  name: 'App',
  components: {
    Editor,
    Fab,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  border: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #141414;
  height: 100vh;
  display: flex;
  justify-content: center;
}

#fab {
  position: absolute;
  right: 15px;
  bottom: 15px;
}
</style>
