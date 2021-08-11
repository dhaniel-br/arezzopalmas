<template>
    <header class="header">
      <Container>
        <Logo />  
      </Container>
      
    </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 120px;
  @include screen('small') {
    height: 60px;
  }
  .container {
    display: grid;
    height: 100%;
    grid-auto-flow: column;
    justify-content: center;
    align-items: center;
  }
}
</style>