<template>
  <div class="details mt-2 " v-if="classified">
    <div
      class="col-md-12 d-flex justify-content-start align-items-center"
      v-if="classified.listingType == 'Car'"
    >
      <!-- <CarCard :car="classified.listing" :seller="classified.seller" /> -->
  <CarDetails />
    </div>



    <div class="col-6" v-if="classified.listingType == 'Job'">
      <!-- jobCard here -->
    </div>
    <div class="col-6" v-if="classified.listingType == 'House'">
      <!-- HouseCard here -->
    </div>
  </div>
  <div v-else>loading...</div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { AppState } from '../AppState.js';
import CarCard from '../components/CarCard.vue';
import { classifiedsService } from '../services/ClassifiedsService.js';
import Pop from '../utils/Pop.js';
import CarDetails from "../components/CarDetails.vue";

export default {
  props: {},
  setup() {
    const route = useRoute();
    const router = useRouter();
    async function getClassifiedById() {
      try {
        await classifiedsService.getClassifiedById(route.params.id);
      } catch (error) {
        Pop.error('Sorry that listing no longer exists', '[GettingClassified]');
        router.push({ name: 'Home' });
      }
    }
    onMounted(() => {
      getClassifiedById();
    });
    return {
      classified: computed(() => AppState.activeClassified),
    };
  },
  components: { CarCard, CarDetails },
};
</script>


