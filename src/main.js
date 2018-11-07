import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  data() {
      return {
          imgSrc: null,
          quoteSrc: null,
          tagValue: null,
          searchQuery: null,
          api_key: "c476f78c27cc9c43ab2444e9e75b5e9adfdfbd70984188bc45c20ebeed25431b",
          secret_key: "8cbbf641ec65777938e3cc224f43c8a8c7fac78897a27b43dbe336b7310a7f99",
          url: `https://api.unsplash.com/photos/random`,
          query: `dogs`

      };
  },
  methods: {
      fetchGif() {

          // var searchQuery = document.getElementById("userInput");

          // var tag = searchQuery.value; 

          fetch(`${this.url}?query=${this.query}&client_id=${this.api_key}`)
          .then(response => response.ok ? response.json() : Promise.reject(response))
          .then(results => {
              console.log(results);
              this.imgSrc = results.urls.regular
              console.log("we received a response!")
          })
      },

  },

  created() {
      this.fetchGif()

  }

})

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')
