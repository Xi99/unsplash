<!--Vue.component('Topic', {
  props: ['imgSrc'], -->
<template>
    <div>
        <img 
        class="bfgImage"
        id="bg"
        :src="imgSrc" />
    </div>
    
</template>

<script>

export default {
  data () {
    return  {
      imgSrc: null,
      api_key: "c476f78c27cc9c43ab2444e9e75b5e9adfdfbd70984188bc45c20ebeed25431b",
      secret_key: "8cbbf641ec65777938e3cc224f43c8a8c7fac78897a27b43dbe336b7310a7f99",
      url: `https://api.unsplash.com/photos/random`,
      query: `dogs`
    };
  },
  methods: {
    fetchGif() {
      fetch(`${this.url}?query=${this.query}&client_id=${this.api_key}`)
        .then(response => response.ok ? response.json() : Promise.reject(response))
        .then(results => {
          console.log(results);
          this.imgSrc = results.urls.regular
          console.log("we received a response!")
          setTimeout(()=>{
            this.fetchGif()
          },72000);
        })
    },
  },
  created() {
    this.fetchGif()
  },
}


</script>

<style scoped>
#bg {
  position: fixed; 
  top: 0; 
  left: 0; 
	
  /* Preserve aspet ratio */
  min-width: 100%;
  min-height: 100%;
}
/* .bfgImage {
    height: 100vh;
    width: 100vw; 
}*/

.quote {
    position: fixed;
    top: 0;
    left: 0;
    font-size: 40px;
    color: whitesmoke;
    font-family: 'Corben', Georgia, Times, serif;
    /* text-shadow: #000 1px 0 10px; */
    text-shadow: 1px 1px 2px black, 0 0 1em black, 0 0 0.2em white;
}

/* body {
    margin: 0;
} */
</style>
