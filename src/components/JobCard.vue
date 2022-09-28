<template>
  <div class="card">
<img src="" alt="">
<div class="card-body p-3">
  <div>

    {{job.company}} ||
  </div>
  <div>

    {{job.jobTitle}}
  </div>
</div>

  </div>
</template>


<script>
import { Job } from "../models/Job.js";
import { SellerProfile } from "../models/SellerProfile.js";

export default {
  props:{
    job:{type: Job, required : true},
    seller:{type: SellerProfile, required: true}
  },
  setup(){
    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>