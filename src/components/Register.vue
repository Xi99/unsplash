<template>
<form name="topic-tracker-form">
  <div>
    <h1>Settle down and Unsplash a little!</h1>

    <div>
        <h2>What would you like to see on the screen?</h2>
        <input 
        name="tag" 
        id="userInput" 
        type="text"
        v-model="topicType" />

        <br>
    
        <button
          @click.prevent="topic">
          Topic    
          </button>
    </div>

  </div>
</form>
</template>

<script>
export default {
  data () {
    return  {
      topicType: '',
    }
},
methods: {
  topic () {
    console.log('topic button was clicked', this.topicType)
    }
  }
}
</script>

<style scoped>

</style>
