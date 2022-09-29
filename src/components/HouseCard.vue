<template>
  <div class="card" >
    <div class="d-flex justify-content-center mt-2 "  >

      <img :src="house.imgUrl " alt="" class="rounded top elevation-4 forcedImg img-fluid" >
    </div>
<div class="card-body text-center">
  <h3 class="text-info">

    <span class="text-warning">$</span>{{house.price }}
  </h3>
</div>
 <div class="align-items-center d-flex gap-2 justify-content-between ms-2 mb-1">
        <img :src="seller.picture" :alt="seller.name" :title="seller.name" height="30" class="rounded">
        {{seller.name}}
        <div class="me-3">

          <i class="mdi mdi-delete-forever fs-4 selectable rounded" @click.stop="$emit('deleteClassified')"
            v-if="account.id == seller.id"></i>
        </div>
      </div>
  </div>
</template>


<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { SellerProfile } from "../models/SellerProfile.js";

export default {

  props:{
house:{type:House, required :true},
seller:{type: SellerProfile, required:true}
  },

  setup(){
    return {
      account: computed(() => AppState.account),
    }
  }
}
</script>


<style lang="scss" scoped>
.forcedImg{
  height: 200px;
  width: 270px;
  object-fit: cover;
}
</style>