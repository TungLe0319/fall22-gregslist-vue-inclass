<template>
  <div class="container-fluid">
    <div class="row">
      <!-- here if i put the v-if differently filter could've worked... VVV -->
      <div class="col-lg-3 col-md-4 my-3" v-for="c in classifieds" :key="c.id">
        <div v-if="c.listingType == 'Car'">
          <router-link :to="{
            name: 'Details',
            params:{
              id: c.id
            }
          }">
            <CarCard :car="c.listing" :seller="c.seller" @deleteClassified="deleteClassified(c.id)" />
          </router-link>
        </div>
        <!-- SECTION HOUSES -->
        <div v-else-if="c.listingType == 'House'">
          <!-- Sends each individual listing to DetailsPage 
          In router.js the magic Variable we made was    path: '/classifieds/:id', so it must match in the params here -->
          <router-link :to="{
            name: 'Details',
            params:{
              id: c.id
            }
          }">
            <HouseCard :house="c.listing" :seller="c.seller" @deleteClassified="deleteClassified(c.id)" />
          </router-link>
        </div>
        <!-- ! SECTION JOBS -->
        <div v-else-if="c.listingType == 'Job'">
          <router-link :to="{
            name: 'Details',
            params:{
              id: c.id
            }
          }">
            <JobCard :job="c.listing" :seller="c.seller" @deleteClassified="deleteClassified(c.id)" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
import { AppState } from '../AppState.js';
import CarCard from '../components/CarCard.vue';
import { classifiedsService } from '../services/ClassifiedsService.js';
import Pop from '../utils/Pop.js';
import HouseCard from "../components/HouseCard.vue";
import JobCard from "../components/JobCard.vue";

export default {
  setup() {

    async function getClassifieds() {
      try {
        await classifiedsService.getClassifieds()
      } catch (error) {
        Pop.error(error, '[GettingClassifieds]')
      }
    }

    onMounted(() => {
      getClassifieds()
    })

    return {
      classifieds: computed(() => AppState.classifieds),
      async deleteClassified(id) {
        try {
          const yes = await Pop.confirm('Delete the Listing?')
          if (!yes) { return }
          await classifiedsService.deleteClassified(id)
        } catch (error) {
          Pop.error(error, '[Deleting Classified]')
        }
      }
    };
  },
  components: { CarCard, HouseCard, JobCard }
}
</script>

<style scoped lang="scss">

.text-shadow{
  color: aliceblue;
  text-shadow: 1px 1px black, 0px 0px 5px salmon;
  font-weight: bold;
  letter-spacing: 0.08rem
  
  /* Second Color  in text-shadow is the blur */
}
</style>
