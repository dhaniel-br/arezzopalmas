<template>
  <div class="card-section">
    <div class="texts">
      <Title :text="'Localização'" />
      <SubTitle
        :text="' Quadra 104 Sul Av. L0 01 ,340 - Centro, Palmas - TO, 77020-020'"
      />
    </div>

    <Map />
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
  .texts {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
}
</style>
