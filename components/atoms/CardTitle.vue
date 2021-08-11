<template>
  <div>
    <h3 class="card-title">{{ text }}</h3>
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
.card-title {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 18px;
  margin: 0px;

  /* identical to box height */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: color(arezzo, 'darkest');
}
</style>
