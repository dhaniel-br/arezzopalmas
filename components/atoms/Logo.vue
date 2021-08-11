<template>
    <div>
      <img src="@/assets/img/logo.png" alt="arezzopalmas-logo" class="logo">
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        
    })
</script>

<style lang="scss" scoped>
.logo {
    max-width: 316px;
    max-height: 44px;
  @include screen('small') {
    width: 72%;
  }
  @include screen('medium') {
    width: 80%;
  }
  @include screen('large') {
    width: 100%;
  }
  @include screen('infinity') {
    width: 100%;
  }
}
</style>