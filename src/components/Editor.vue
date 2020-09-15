<template>
  <div id="editor-container">
    <textarea-autosize id="editor" ref="textarea" spellcheck="false" />
  </div>
</template>

<script>
export default {
  name: 'Editor',
  mounted() {
    this.$refs.textarea.$el.style.minHeight = '99.9vh';
    this.$refs.textarea.$el.focus();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#editor-container {
  width: 768px;
  height: 100%;
  background-color: #282828;
}

#editor {
  padding: 30px;
  background-color: transparent;
  width: 100%;
  box-sizing: border-box;
  font-size: 24px;
  color: #fff;
}

#editor:focus {
  outline: none;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
