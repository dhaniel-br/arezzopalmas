<template>
  <div class="social-buttons">
    <a
      href="https://www.instagram.com/arezzopalmas/"
      target="_blank"
      class="instagram-button"
    >
      <img src="@/assets/img/instagram.svg" alt="instagram-arezzo" />
    </a>
    <a
      href="https://www.facebook.com/arezzopalmas1"
      target="_blank"
      class="facebook-button"
    >
      <img src="@/assets/img/facebook.svg" alt="facebook-arezzo" />
    </a>
  </div>
</template>

<style lang="scss" scoped>
.social-buttons {
  display: flex;
  flex-direction: row;
  gap: 10px;
  @include screen('small') {
    justify-content: center;
    align-items: center;
  }
  .instagram-button,
  .facebook-button {
    all: unset;
    cursor: pointer;

    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: center;
    align-items: center;

    width: 96px;
    height: 56px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: color(arezzo);

    border-radius: 16px;

    transition: all 300ms ease;
    &:hover {
      transform: scale(1.1);
    }
  }
  .instagram-button {
    background: linear-gradient(89.09deg, #f7980b 0.24%, #ea349f 99.61%);
    box-shadow: 0px 8px 16px rgba(232, 53, 161, 0.2);
  }
  .facebook-button {
    background: linear-gradient(89.09deg, #0b5bf7 0.24%, #34beea 99.61%);
    box-shadow: 0px 8px 16px rgba(49, 184, 235, 0.2);
  }
}
</style>
