<template>
  <div>
    <p class="subtitle">{{ text }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    text: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.subtitle {
  font-family: Montserrat;
  font-style: normal;
  font-size: 14px;
  line-height: 17px;
  margin: 0px;

  /* identical to box height */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: color(arezzo, 'dark');
}
</style>
