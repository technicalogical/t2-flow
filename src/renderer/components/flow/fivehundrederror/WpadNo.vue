<template>
  <div id="swat-deck">
    
    <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p><b>500 Error</b> / W.S.O.D. (White Screen of Death)</p>
      </div> 
    <!-- END - Flow Title banner -->

    
    <!-- BEGIN 500 Error flow section -->
    <div class="content has-text-centered" id="flow">
      <!-- BEGIN - Primary application deck -->
      <div class="content is-medium" id="flow-deck-two">
      <p>Is this a Managed Wordpress Hosting platform?</p>
      <p class="buttons">
          <router-link to="/flow/fivehundrederror/MwpYes" class="button is-light">
            <span class="icon has-text-success">
              <i class="fas fa-check-circle"></i>
            </span>
            <span><b>Yes</b>. It is Managed Wordpress.</span>
          </router-link>  
          <router-link to="/flow/fivehundrederror/MwpNo" class="button is-light">
            <span class="icon has-text-danger">
              <i class="fas fa-exclamation-circle"></i>
            </span>
            <span><b>No</b>. It is a different Hosting platform.</span>
          </router-link>
        </p>
      </div> 
      <!-- END - Primary application deck -->
            <p class="buttons">
        <router-link to="/flow/fivehundrederror/Wpad" class="button is-small is-info">
          <span class="icon has-text-light">
            <i class="fas fa-chevron-left"></i>
          </span>
          <span>BACK</span>
        </router-link>
      </p>
      <!-- END - Back button -->
      <router-view/>
    </div>
    <!-- END 500 Error flow section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>
export default {
  
}
</script>

<style></style>