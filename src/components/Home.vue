<template>
  <h1>Home</h1>
  <div>
    <div>
        <h1>hhhhhhhhhhhhh</h1>
      <p v-if="data.status_code === 200">Success: data: {{ data }}</p>
      <p v-if="data.status_code !== 200">Uh oh.... {{data.message}}</p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import appApi from "@/services/app-data.js";
export default {
  setup() {
    const data = ref('')
    const res = appApi.getHeadlines();   
    res.then(r =>  data.value = r).catch(e => { data.value = e})
    return { data };
  },
};
</script>

<style scoped>
</style>
