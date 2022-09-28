<template>
  <div class="details d-flex" v-if="classified">
    <div class="col-6" v-if="classified.listingType == 'Car'">
      <CarCard :car="classified.listing" :seller="classified.seller" />
    </div>

    <div class="col-6" v-if="classified.listingType == 'Job'">
      <!-- jobCard here -->
    </div>
    <div class="col-6" v-if="classified.listingType == 'House'">
      <!-- HouseCard here -->
    </div>

    <div class="col-6 ms-2">
      <div class="d-flex justify-content-center">
        <h2>
          {{ classified.listingType }}
        </h2>
      </div>
      <div>
        <h3>Make: {{ classified.listing.make }}</h3>
      </div>
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
  components: { CarCard },
};
</script>
