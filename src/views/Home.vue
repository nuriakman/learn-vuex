<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <counter />
    <counter-squared />
    <buttons />
    <color-code />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    counter: require("@/components/Counter.vue").default,
    "counter-squared": require("@/components/CounterSquared.vue").default,
    buttons: require("@/components/Buttons.vue").default,
    "color-code": require("@/components/ColorCode.vue").default
  },
  data() {
    return {
      //
    };
  },
  methods: {
    //
  },
  computed: {
    //
  }
};
</script>
