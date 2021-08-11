<template>
  <div class="card-section">
    <Title :text="'Consultores(as)'" />
    <Cards />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.card-section {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
</style>
