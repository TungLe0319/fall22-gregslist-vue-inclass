<template>
  <main class="container-fluid">
    <div class="row">
      <div class="col-md-2 d-none d-md-block bg-dark text-light sidebar">
        
        <div class="mt-3 rounded ">

          <Login />
        </div>
<div class="mt-2">
 <span class="text-primary">Sort By Pages</span>

</div>
        <div class="border-top mt-2 ">
          <button class="btn mt-3 text-success lighten-30 selectable text-uppercase">
            <router-link
              :to="{ name: 'Home' }"
              class="text-success lighten-30  text-uppercase"
            >
              Home
            </router-link>
          </button>
        </div>

          <div>
 <button
          class="btn text-success lighten-30 selectable text-uppercase"
          data-bs-target="#classifiedsCanvas"
          data-bs-toggle="offcanvas"
          v-if="account.id"
        >
          <span class="text-success lighten-30  text-uppercase">
            Add a Listing
          </span>
        </button>

          </div>

          <div>
  <button class="text-success lighten-30 selectable text-uppercase btn">
    
      <router-link
              :to="{ name: 'Cars' }"
              class="text-success lighten-30  text-uppercase"
            >
             Cars
            </router-link>
    
  
  </button>

          </div>
       
<div>
   <button class="text-success lighten-30 selectable text-uppercase btn">
        <router-link
            :to="{ name: 'Jobs' }"
            class="text-success lighten-30  text-uppercase"
          >
            
          Jobs
          </router-link>
        
        </button>

</div>
      
<div>
<button class="text-success lighten-30 selectable text-uppercase btn">
          <router-link
            :to="{ name: 'Houses' }"
            class="text-success lighten-30  text-uppercase"
          >
            Houses
          </router-link>
        </button>

</div>

  <HomeFilter/>
        

      </div>
      <div class="col-md-10 main-content">
        <router-view />
      </div>
    </div>
  </main>

  <div
    class="offcanvas offcanvas-end"
    data-bs-scroll="true"
    data-bs-backdrop="false"
    tabindex="-1"
    id="classifiedsCanvas"
    aria-labelledby="classifiedsCanvasLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="classifiedsCanvasLabel">
        Add your Listing
      </h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <ClassifiedForm />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { AppState } from './AppState';
import ClassifiedForm from './components/ClassifiedForm.vue';
import Login from './components/Login.vue';
import Navbar from './components/Navbar.vue';

export default {
  setup() {
    return {
      appState: computed(() => AppState),
      account: computed(() => AppState.account),
    };
  },
  components: { Navbar, Login, ClassifiedForm },
};
</script>
<style lang="scss">
@import './assets/scss/main.scss';

.sidebar {
  height: 100vh;
}

.main-content {
  height: 100vh;
  overflow-y: auto;
}
</style>
