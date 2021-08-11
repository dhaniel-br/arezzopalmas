<template>
  <div class="banner">
    <div class="aside">
      <h1>@arezzopalmas</h1>
      <SocialButtons />
    </div>
    <div>
      <img
        src="@/assets/img/instagram-images.png"
        alt="imagens"
        class="image"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: color(arezzo);
  width: 100%;
  height: 380px;
  overflow: hidden;
  border-radius: 16px;
  @include screen('small') {
    display: flex;
    flex-direction: column;
    height: 498px;
  }
  .aside {
    margin: 80px 40px 80px 80px;
    @include screen('small') {
      margin: 80px 40px;
    }
    h1 {
      color: color(arezzo, 'darkest');
      font-style: normal;
      font-size: 64px;
      font-weight: 600;
      @include screen('small') {
        font-size: 36px;
      }
    }
  }
  .image {
    @include screen('small') {
      width: 345px;
      height: 226px;
    }
  }
}
</style>
