<template>
  <div class="counter-quared">
      {{ $store.state.counter}}<sup>2</sup> = {{ $store.getters.counterSquared }}
  </div>
</template>

<script>
export default {
name: "CounterSquared"
}
</script>

<style scoped>
  div {
    margin-bottom: 20px;
    font-size:40px;
  }
</style>