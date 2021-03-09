<template>
  <img alt="Vue logo" src="../../assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<script lang='ts'>
import HelloWorld from "../../components/HelloWorld.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "TestComponent",
  components: { HelloWorld },
  props: {},
  emits: [],
  setup(props) {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    hasConsole() {},
  },
});
</script>
<style  scoped>
</style>