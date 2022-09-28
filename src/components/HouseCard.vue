<template>
  <div class="card">
<img :src="house.imgUrl" alt="" class="rounded top ">
<div class="card-body">
{{house.price }}
</div>
 <div class="align-items-center d-flex gap-2">
        <img :src="seller.picture" :alt="seller.name" :title="seller.name" height="30" class="rounded">
        <i class="mdi mdi-delete-forever fs-4 selectable rounded" @click.stop="$emit('deleteClassified')"
          v-if="account.id == seller.id"></i>
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

</style>