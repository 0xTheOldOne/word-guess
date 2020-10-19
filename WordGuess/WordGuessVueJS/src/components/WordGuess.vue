<template>
  <div class="wordguess">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="title"><img src="../../public/favicon.png" />WordGuess</div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-8 letters">
          <div class="box letter" v-for="char in letters" :key="char" v-on:click="letterClick(char)">
            {{ char }}
          </div>
        </div>
        <div class="col-sm-4">
          <div class="button current">
            <span v-if="currentWord != ''">{{ currentWord }}</span>
            <span v-else><i>...</i></span>
          </div>
          <div class="button delete" v-on:click="deleteLastChar()">Supprimer une lettre</div>
          <div class="button reset" v-on:click="reset()">Remise à zéro</div>
          <div class="infos">
            <b>{{ words.length }} mot<span v-if="words.length > 1">s</span></b>&nbsp;
            <span v-if="currentWord != ''">correspondent à la combinaison choisie.</span>
            <span v-else>disponibles dans le dictionnaire de l'application.</span>
          </div>
          <div class="infos">
            Par soucis de performance, la liste des mots restants sera affichée quand il ne restera plus que {{ maxElements }} mots correspondants à la combinaison de lettres choisie
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 words" v-if="words.length <= maxElements">
          <div class="box word" v-for="word in words" :key="word">
            {{ word }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WordGuess",
  data: function () {
    return {
      maxElements: 500,
    };
  },
  created: function () {
    this.$store.commit("initialize");
    this.$store.commit("reset");
  },
  mounted() {
    document.body.className = document.body.className.replace("loading", "");
  },
  computed: {
    letters() {
      return this.$store.state.current_letters;
    },
    words() {
      return this.$store.state.current_words;
    },
    currentWord() {
      return this.$store.state.current_word;
    },
  },
  methods: {
    reset: function () {
      this.$store.commit("reset");
    },
    letterClick: function (char) {
      this.$store.commit("selectChar", char);
    },
    deleteLastChar: function() {
      this.$store.commit("deleteLastChar");
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import url("../style/material-colors.less");

.wordguess {
  .title {
    @title-size : 6rem;
    font-size: @title-size;
    line-height: @title-size;
    margin: @title-size/2 0;
    text-align: center;

    img {
      width:@title-size;
      height: @title-size;
      margin-right: .5em;
      vertical-align: bottom;
    }
  }

  .box(@size, @color) {
    @padding: @size / 8;
    position: relative;
    min-width: @size;
    min-height: @size;
    font-size: @size;
    line-height: @size;
    border-radius: @padding;
    padding: @padding !important;
    text-align: center;
    display: inline-block;

    color: darken(@color, 75%);
    background-color: @color;
    border: 1px solid darken(@color, 25%);
  }

  .letters {
    margin-bottom: 1rem;
    display: flex;
    flex-wrap: wrap;
    text-align: center;

    .letter {
      .box(3rem, beige);
      flex: 1 0 100% / 8; 
      margin: 0px 10px 20px 10px !important;
      text-transform: uppercase;
      text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
    }
  }

  .button {
    @size: 2rem;
    width: 100%;
    margin-bottom: .5em;

    &.current {
      text-transform: uppercase;
      font-family: "Courier New", Courier, monospace;
      .box(@size, white);
    }

    &.reset {
      .box(@size, @clr-green);
    }

    &.delete {
      .box(@size, @clr-red);
    }
  }

  .infos {
    text-align: justify;
    margin-bottom: 1em;
  }

  .words {
    display: flex;
    flex-wrap: wrap;

    .word {
      .box(1.5rem, white);
      flex: 1 0 100% / 5; 
      margin: 0px 4px 8px 4px !important;
    }
  }
}
</style>
