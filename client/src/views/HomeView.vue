<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import axios from "axios";

axios
  .get("http://localhost:5000/vasee")
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => console.log(err));

export default defineComponent({
  name: "HomeView",
  components: {
    HelloWorld,
  },
});
</script>
