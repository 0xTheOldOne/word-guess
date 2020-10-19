<template>
  <div id="app">
    <WordGuess />
  </div>
</template>

<script>
import WordGuess from "./components/WordGuess.vue";

export default {
  name: "App",
  components: {
    WordGuess,
  },
};
</script>

<style lang="less">
@import url("./style/material-colors.less");
@import url("./style/variables.less");

html, body, #app {
  margin: 0;
  padding: 0;

  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: @font-color;
  background-color: @background-color;

  * {
    -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
      -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
              user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
  }
}
</style>
