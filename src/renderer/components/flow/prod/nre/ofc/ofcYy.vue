<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="flow-deck">
    
      <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p>Not Receiving <b>Email</b> | <b>O365</b></p>
      </div> 
      <!-- END - Flow Title banner -->

    <!-- BEGIN section -->
    <div class="content has-text-centered" id="flow">

      <div class="content is-medium">
        <p>Have you checked the <b>DNS</b> to make sure the <b>MX</b> records are correct?</p>
      </div>

      <p class="buttons">

        <router-link to="/flow/prod/nre/ofc/ofcYyY" class="button is-light is-small">
          <span class="icon has-text-success">
            <i id="itcolor" class="fas fa-chevron-circle-right"></i>
          </span>
          <span><b>Yes</b>. The MX records are correctly pointing to O365.</span>
        </router-link>
      
        <router-link to="/flow/prod/nre/ofc/ofcYyN" class="button is-light is-small">
          <span class="icon has-text-danger">
            <i id="itcolor" class="fas fa-chevron-circle-right"></i>
          </span>
          <span><b>No</b>. The MX records are not the correct records for O365.</span>
        </router-link>
        
      </p>
      
      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/prod/nre/ofc/ofcY" class="button is-small is-info">
          <span class="icon has-text-light">
            <i class="fas fa-chevron-left"></i>
          </span>
          <span>BACK</span>
        </router-link>
      </p>
      <!-- END - Back button -->

      <router-view/>

    </div>
    <!-- END flow section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>

</script>

<style></style>