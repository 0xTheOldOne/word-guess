import Vue from 'vue'
import Vuex from 'vuex'
import wordsFile from "../assets/words.txt";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        alphabet: "abcdefghijklmnopqrstuvwxyz",
        letters: [],
        words: [],
        current_letters: [],
        current_words: [],
        current_word: ""
    },
    mutations: {
        initialize(state) {
            console.log('init...');
            state.letters= [];
            state.words = wordsFile.split("\n");

            // Letters
            for (var i = 0; i < state.alphabet.length; i++) {
                state.letters.push(state.alphabet.charAt(i))
            }

            // Words
            for (var i = 0; i < state.words.length; i++) {
                state.words[i] = state.words[i].toLowerCase();
            }

            state.current_letters = state.letters,
            state.current_words = state.words,
            state.current_word = "";
        },
        reset(state) {
            console.log('reset...');
            state.current_letters = state.letters,
            state.current_words = state.words,
            state.current_word = "";
        },
        selectChar(state, char) {
            state.current_word += char;

            // MAJ words
            state.current_words = state.words.filter(word => word.startsWith(state.current_word));
        },
        deleteLastChar(state) {
            if(state.current_word.length > 1) {
                state.current_word = state.current_word.substring(0, state.current_word.length - 1);
            } else {
                state.current_word = '';
            }

            // MAJ words
            state.current_words = state.words.filter(word => word.startsWith(state.current_word));
        }
    },
    actions: {
    },
    modules: {
    }
})
