<template>
  <div>
    <!-- <div
      class="col-lg-10 col-md-12 col-12 offset-lg-1 offset-md-0 offset-0 px-0"
    >
      <div class="pt-3">
        <div class="card rounded-lg bg-dark text-white neon-shadow-red mt-5">
          <div class="view">
            <img
              :src="show.background"
              alt=""
              class="card-image-stories rounded-lg"
            />
            <div class="mask texture-mask-3"></div>
            <div
              class="card-img-overlay h-100 d-flex flex-column justify-content-end"
            >
              <div class="p-2">
                <h1 class="quote mb-2">
                  <span v-if="show.quote" class="marker marker-dark"
                    >{{ show.quote }}
                  </span>
                  <span v-else class="marker marker-dark">
                    Clique no botão para gerar uma frase!
                  </span>
                </h1>
                <h5>
                  <strong>
                    <span
                      v-if="show.author"
                      class="badge badge-dark badge-tag mt-3"
                    >
                      Ultimate {{ show.author }}
                    </span>
                    <span v-else class="badge badge-dark badge-tag mt-3">
                      Autor totalmente aleatório
                    </span>
                  </strong>
                </h5>
              </div>
            </div>
          </div>
        </div>
        <button
          class="btn btn-dark mt-3 mx-auto d-block"
          @click="randomQuote()"
        >
          Gerar frase
        </button>
      </div>
    </div> -->

    <div
      v-lazy:background-image="show.background"
      class="block-background pt-lg-5 pt-3 view"
    >
      <div class="mask pattern-7 rgba-black-medium"></div>
      <div class="container pt-4 px-lg-0 px-4">
        <div class="card card-plain text mt-5">
          <div class="card-header">
            <h1 class="">
              <strong>
                <span class="marker marker-dark">Ultimate Quotes</span>
              </strong>
            </h1>
          </div>
          <div class="card-body">
            <h1 class="quote mb-3">
              <span v-if="show.quote" class="marker marker-dark"
                >{{ show.quote }}
              </span>
              <span v-else class="marker marker-dark">
                Clique no botão para gerar uma frase!
              </span>
            </h1>
            <h3>
              <strong>
                <span v-if="show.author" class="marker marker-dark mt-3">
                  Ultimate {{ show.author }}
                </span>
                <span v-else class="marker marker-dark">
                  Autor totalmente aleatório
                </span>
              </strong>
            </h3>
          </div>
          <div class="card-footer">
            <button class="btn btn-dark ml-auto" @click="randomQuote()">
              Gerar frase
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { quotes } from "~/content/quotes.js";

export default {
  components: {},
  data() {
    return {
      show: {
        author: "",
        quote: "",
        background: "",
      },
      quotesData: quotes,
    };
  },

  methods: {
    randomQuote() {
      const data = this.quotesData;
      const numData = Math.floor(Math.random() * data.length);
      const quotable = data[numData];
      const dataAuthor = quotable.author;
      const num = quotable.quote;
      const numQuotes = Math.floor(Math.random() * num.length);
      const finalQuote = quotable.quote[numQuotes];
      // console.log(quotable, author, numQuotes);
      this.show.author = dataAuthor;
      this.show.quote = finalQuote;
      this.show.background = quotable.bg;
    },
  },
};
</script>
<style lang="scss">
.block {
  position: relative;
  width: 100% !important;
  min-height: 100vh;
  overflow: hidden;
  cursor: default;
  z-index: -1;
  &-background {
    width: 100% !important;
    min-height: 100vh;
    // background-image: url('https://i.imgur.com/PfaL9wP.jpg');
    background-color: #121212;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: 1;
  }
}

.quote {
  font-family: "Playfair Display", "Roboto Mono", "IBM Plex Sans Condensed",
    monospace;
  font-style: italic;
}

.bg-transparent-dark {
  background-color: rgba(18, 18, 18, 0.5);
}
</style>
