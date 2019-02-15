<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck">
    
    <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p><b>cPanel Email</b> issues</p>
      </div> 
    <!-- END - Flow Title banner -->

    <!-- BEGIN 500 Error flow section -->
    <div class="content has-text-centered" id="flow">
      <div class="content is-medium">
        <p>Check the Splunk log. Are they being flagged for a <b>"BAD-ACCT"</b>?</p>
      </div>
      <p class="buttons">
        <router-link to="/flow/cpemail/cpmSyRwNnY" class="button is-light">
          <span class="icon has-text-success">
            <i class="fas fa-play-circle"></i>
          </span>
          <span><b>Yes.</b> They are flagged.</span>
        </router-link>  
        <router-link to="/flow/cpemail/cpmSyRwNnN" class="button is-light">
          <span class="icon has-text-success">
            <i class="fas fa-play-circle"></i>
          </span>
          <span><b>No.</b> They are not flagged.</span>
        </router-link>
      </p>

      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/cpemail/cpmSyRwN" class="button is-small is-info">
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