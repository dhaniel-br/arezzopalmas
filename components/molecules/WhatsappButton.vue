<template>
  <div>
    <a :href="link" target="_blank" class="whatsapp-button">
      <p>whatsapp</p>
      <img src="@/assets/img/whatsapp.svg" alt="whatsapp" />
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    link: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.whatsapp-button {
  all: unset;
  cursor: pointer;

  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: 177px;
  height: 48px;

  background: linear-gradient(85.79deg, #20c941 0.26%, #44ec62 100.26%);
  box-shadow: 0px 8px 16px rgba(51, 220, 88, 0.2);
  border-radius: 16px;

  transition: all 300ms ease;
  &:hover {
    transform: scale(1.1);
  }
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: white;
    margin: 0px;
  }
}
</style>
