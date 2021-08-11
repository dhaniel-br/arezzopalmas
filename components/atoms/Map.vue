<template>
  <div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.900193987541!2d-48.328721285664706!3d-10.188760212891468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x933b341497dc9473%3A0x1f8045e81e42f89f!2sArezzo!5e0!3m2!1sen!2sbr!4v1628691368173!5m2!1sen!2sbr"
      width="600"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      class="map"
    ></iframe>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.map {
  width: 100%;
}
</style>
