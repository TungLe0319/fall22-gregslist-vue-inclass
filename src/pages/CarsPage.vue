<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-3 col-md-4 my-3" v-for="c in classifieds" :key="c.id">
      
        <!-- SECTION HOUSES -->
        <div v-if="c.listingType == 'Car'" >
          <router-link :to="{
            name: 'Details',
            params:{
              id: c.id
            }
          }">
            <CarCard :car="c.listing" :seller="c.seller" @deleteClassified="deleteClassified(c.id)" />
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
import { useRoute } from "vue-router";

export default {
  setup() {
//  const route = useRoute();
//     const router = useRouter();
    async function getClassifieds() {
      try {
        await classifiedsService.getClassifiedByListingType('Car')
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
  components: { CarCard, HouseCard }
}
</script>

<style scoped lang="scss">

</style>
