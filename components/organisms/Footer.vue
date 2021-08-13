<template>
  <footer class="footer">
    <div class="border-top" />
    <Container>
      <Logo class="logo" />
      <p>arezzopalmas &copy;{{ currentYear }}</p>
    </Container>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
})
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  height: 120px;
  margin-top: 120px;
  .border-top {
    max-width: 1280px;
    background: color(arezzo, 'darkest');
    @include screen('small') {
      width: 50%;
    }
    @include screen('medium') {
      width: 70%;
    }
    @include screen('large') {
      width: 90%;
    }
    @include screen('infinity') {
      width: 100%;
    }
  }
  .container {
    display: grid;
    height: 100%;
    grid-auto-flow: column;
    justify-content: space-between;
    align-items: center;
    @include screen('medium') {
      display: grid;
      grid-auto-flow: row;
      justify-content: center;
    }
    p {
      color: color(arezzo, 'darkest');
      margin: 0px;
      text-align: center;
    }
  }
}
</style>
