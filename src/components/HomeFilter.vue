<template>
  <div class="mt-2 border-top">
      <span class="text-primary mt-3">Home page Filter</span>
      <div class="d-flex flex-column ">
        <button class="btn text-warning text-start fs-5" @click="getOnlyType('House')">houses</button>
        <button class="btn text-warning text-start fs-5" @click="getOnlyType('Job')">Jobs</button>
        <button class="btn text-warning text-start fs-5 " @click="getOnlyType('Car')">Cars</button>
      </div>
    </div>
</template>


<script>
  import { classifiedsService } from '../services/ClassifiedsService.js';
export default {
  setup(){
    return {
      // async getOnlyCars(){
      //   await classifiedsService.getOnlyCars()
      // },
      // async getOnlyJobs(){
      //   await classifiedsService.getOnlyJobs()
      // },
      // async getOnlyHouses(){
      //   await classifiedsService.getOnlyHouses()
      // },
      async getOnlyType(name){
        await classifiedsService.getOnlyType(name)
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>