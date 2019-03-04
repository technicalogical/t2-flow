<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck">
    
    <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p><b>Slow</b> Site</p>
      </div> 
    <!-- END - Flow Title banner -->

    <!-- BEGIN Net Vio flow section -->
    <div class="content has-text-centered" id="flow">

      <div class="content is-medium">
        <p>Upload a test script to the hosting. Does the test script load quickly?</p>
      </div>

      <p class="buttons">
        <router-link to="/flow/slow/SmwYyNnYnY" class="button is-light">
          <span class="icon has-text-success">
            <i class="fas fa-check-circle"></i>
          </span>
          <span><b>Yes.</b> Test script loads quickly.</span>
        </router-link>  
        <router-link to="/flow/slow/SmwYyNnYnN" class="button is-light">
          <span class="icon has-text-danger">
            <i class="fas fa-check-circle"></i>
          </span>
          <span><b>No.</b> It still loads slowly.</span>
        </router-link>
      </p>
      
      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/slow/SmwYyNnY" class="button is-small is-info">
          <span class="icon has-text-light">
            <i class="fas fa-chevron-left"></i>
          </span>
          <span>BACK</span>
        </router-link>
      </p>
      <!-- END - Back button -->

      <router-view/>

    </div>
    <!-- END Net Vio flow section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>

</script>

<style></style>