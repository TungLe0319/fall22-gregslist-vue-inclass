<template>
   <div class="car-details row">
        <div class="col-md-6 ">
          <img
            :src="classified.listing.imgUrl"
            alt=""
            class="rounded img-fluid elevation-3"
          />
        </div>
       <div class="col-md-6">
      <h2>Make: {{classified.listing.make}}</h2>
      <h2>Model: {{classified.listing.model}}</h2>
      <h2>Year: {{classified.listing.year}}</h2>
      <h2>Price: $ {{classified.listing.price}}</h2>
       </div>
      </div>
</template>


<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState.js";

export default {
  setup(){
    return {
      classified:computed(()=>AppState.activeClassified)
    }
  }
}
</script>


<style lang="scss" scoped>

</style>