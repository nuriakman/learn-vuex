<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="counter" :style="{color: $store.state.colorCode}">{{ $store.state.counter}}</div>
    <div class="counter-quared">
      {{ $store.state.counter}}<sup>2</sup> = {{ $store.getters.counterSquared }}
    </div>
    <div class="buttons">
      <button @click="$store.dispatch('decreaseCounter')">-</button>
      <button @click="$store.dispatch('increaseCounter')">+</button>
    </div>
    <div>
      <input type="text" placeholder="color" v-model="colorCode">

    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      //
    }
  },
  methods: {
    //
  },
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

<style>
div {
  margin-bottom: 20px;
}
.counter {
  font-size: 80px;
}
.buttons button {
  font-size: 40px;
  width: 100px;
  margin: 0 20px;
}
</style>