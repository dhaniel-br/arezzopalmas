<template>
  <div>
    <h2 class="title">{{ text }}</h2>
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
.title {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  margin: 0px;

  /* identical to box height */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: color(arezzo, 'darkest');
}
</style>
