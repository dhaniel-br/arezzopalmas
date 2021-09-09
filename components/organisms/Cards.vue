<template>
  <div class="cards">
    <div class="card">
      <img src="@/assets/img/avatars/tallyta.png" alt="Tallyta" />
      <div class="texts">
        <CardTitle text="Tallyta" />
      </div>
      <WhatsappButton link="https://api.whatsapp.com/message/SHQKEV77MWSZJ1" />
    </div>
    <div class="card">
      <img src="@/assets/img/avatars/virna.png" alt="Virna" />
      <div class="texts">
        <CardTitle text="Virna" />
      </div>
      <WhatsappButton link="https://api.whatsapp.com/message/VQSWSAVTKMMNK1" />
    </div>
    <div class="card">
      <img src="@/assets/img/avatars/solange.png" alt="Solange" />
      <div class="texts">
        <CardTitle text="Solange" />
      </div>
      <WhatsappButton link="https://api.whatsapp.com/message/EKHNQAQKNXBPL1" />
    </div>
    <div class="card">
      <img src="@/assets/img/avatars/priscilla.png" alt="Priscilla" />
      <div class="texts">
        <CardTitle text="Priscilla" />
      </div>
      <WhatsappButton link="https://api.whatsapp.com/message/3F6TFFC65JB6K1" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.cards {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 650px) {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  @media only screen and (min-width: 650px) and (max-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    row-gap: 24px;
    justify-items: center;
    padding: 0px;
  }
  .card {
    all: unset;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;

    width: 264px;
    height: 330px;

    background: color(arezzo);
    border-radius: 16px;
    .texts {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 8px;
    }
  }
}
</style>
