<template>
    <div>
      <input type="text" placeholder="color" v-model="colorCode">
    </div>
</template>

<script>
export default {
  name: "ColorCode",
  computed: {
    colorCode: {
      get(){
        return this.$store.state.colorCode
      },
      set(payload){
        this.$store.dispatch('setColorCode', payload)
      },
    }
  }
}
</script>

<style scoped>
  div {
    margin-bottom: 20px;
  }
</style>