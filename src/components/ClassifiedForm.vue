<template>
  <form @submit.prevent="handleSubmit">
    <div>
      
      <label for="listingType">What are you Selling?</label>
      <select name="listingType" v-model="editable.listingType">
        <option value="Car">🚗</option>
        <option value="Job">💼</option>
        <option value="House">🏠</option>
      </select>
    </div>

    <div v-if="editable.listingType == 'Car'">
      <div class="form-group">
        <label for="make">Make:</label>
        <input
          type="text"
          v-model="editable.listing.make"
          placeholder="Make"
          required
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label for="model">Model:</label>
        <input
          type="text"
          v-model="editable.listing.model"
          placeholder="Model"
          required
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label for="model">ImgUrl:</label>
        <input
          type="url"
          v-model="editable.listing.imgUrl"
          placeholder="https://youknow.com"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label for="price">price:</label>
        <input
          type="number"
          v-model="editable.listing.price"
          placeholder="Price"
          required
          class="form-control"
          min="0"
        />
      </div>
      <div class="form-group">
        <label for="year">Year:</label>
        <input
          type="number"
          v-model="editable.listing.year"
          placeholder="Year"
          required
          class="form-control"
          min="1886"
          :max="new Date().getFullYear() + 1"
        />
      </div>
      <div class="form-group">
        <label for="description">Description:</label>
        <textarea
          v-model="editable.listing.description"
          placeholder="description"
          class="form-control"
          rows="4"
        ></textarea>
      </div>
    </div>
    <!-- SECTION HOUSE FORM ---------- -->
    <div v-if="editable.listingType == 'House'">
      <div class="house-form text-dark mt-5" >
      
          <div class="form-floating mb-3">
            <input
              type="number"
              class="form-control"
              name="bedrooms"
              required
              minlength="3"
              v-model="editable.listing.bedrooms"
            />
            <label for="bedrooms">Bedrooms</label>
          </div>

          <div class="form-floating mb-3">
            <input
              type="number"
              class="form-control"
              name="bathrooms"
              required
             v-model="editable.listing.bathrooms"
            />
            <label for="bathrooms">Bathrooms</label>
          </div>

          <div class="form-floating mb-3">
            <input
              type="number"
              class="form-control"
              name="levels"
              required
              min="1"
             v-model="editable.listing.levels"
            />
            <label for="levels">Levels</label>
          </div>

          <div class="form-floating mb-3">
            <input
              type="url"
              class="form-control"
              name="imgUrl"
              required
             v-model="editable.listing.imgUrl"
            />
            <label for="imgUrl">Picture!</label>
          </div>

          <div class="form-floating mb-3">
            <input
              type="number"
              class="form-control"
              name="year"
              required
              max="9999"
            v-model="editable.listing.year"
            />
            <label for="year">Year</label>
          </div>

          <div class="form-floating mb-3">
            <input
              type="number"
              class="form-control"
              name="price"
              required
              min="0"
             v-model="editable.listing.price"
            />
            <label for="price">Price</label>
          </div>

          <div class="form-floating">
            <textarea
              class="form-control"
              placeholder="Describe your Listing"
              name="description"
              v-model="editable.listing.description"
            >
</textarea
            >
            <label for="description">Description</label>
          </div>
      </div>
    </div>
<!-- -------SECTION JOB FORM -->
    <div v-if="editable.listingType == 'Job'">
      <div class="job-form text-dark" >
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              name="company"
              required
              v-model="editable.listing.company"
            />
            <label for="company">Company</label>
          </div>

          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              name="jobTitle"
              required
              v-model="editable.listing.jobTitle"
            />
            <label for="jobtitle">Job title</label>
          </div>

          <div class="form-floating mb-3">
            <input
              type="number"
              class="form-control"
              name="hours"
              required
              v-model="editable.listing.hours"
            />
            <label for="hours">Hours</label>
          </div>

          <div class="form-floating mb-3">
            <input
              type="number"
              class="form-control"
              name="rate"
              required
              v-model="editable.listing.rate"
            />
            <label for="rate">Rate</label>
          </div>

          <div class="form-floating">
            <textarea
              class="form-control"
              placeholder="Describe your Listing"
              name="description"
              v-model="editable.listing.description"
            >
</textarea
            >
            <label for="description">Description</label>
          </div>
      </div>
    </div>

    <div class="my-3" v-if="editable.listingType">
      <button class="btn btn-success" type="submit">SEND IT</button>
    </div>
  </form>
</template>

<script>
import { ref } from 'vue';
import { classifiedsService } from '../services/ClassifiedsService.js';
import Pop from '../utils/Pop.js';

export default {
  setup() {
    const editable = ref({
      listing: {},
    });
    return {
      editable,
      async handleSubmit() {
        try {
          const formData = editable.value;
          await classifiedsService.createClassified(formData);
          editable.value = {
            listing: {},
          };
        } catch (error) {
          Pop.error(error, '[Submitting Form]');
        }
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
