import Vue from "vue";
import VueLazyload from "vue-lazyload";

// import error from '~/static/loading.jpg'
// import loading from '~/static/loading.jpg'

Vue.use(VueLazyload, {
  preLoad: 1,
  error: require("~/assets/lazy.jpg"),
  loading: require("~/assets/lazy.jpg"),
  attempt: 1,
});
