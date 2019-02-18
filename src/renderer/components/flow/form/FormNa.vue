<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck">
    
    <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p><b>Form Mail</b> Error</p>
      </div> 
    <!-- END - Flow Title banner -->

    
    <!-- BEGIN Form mail Error flow section -->
    <div class="content has-text-centered" id="flow">
      <div class="content is-medium">
        <p>Mail function is working. Fill out the customer's form and send test. Did that also show in <strong>Splunk</strong>?</p>
      </div>
      <p class="buttons">
          <router-link to="/flow/form/FormNaY" class="button is-light">
            <span class="icon has-text-success">
              <i class="fas fa-check-circle"></i>
            </span>
            <span><strong>Yes</strong>. The mail did show in <strong>Splunk</strong></span>
          </router-link>  
          <router-link to="/flow/form/FormNaN" class="button is-light">
            <span class="icon has-text-danger">
              <i class="fas fa-exclamation-circle"></i>
            </span>
            <span><strong>No</strong>. The mail did not hit <strong>Splunk</strong></span>
          </router-link>
        </p>
      
        <!-- BEGIN - Back button -->
        <p class="buttons">
          <router-link to="/flow/form/FormY" class="button is-small is-info">
            <span class="icon has-text-light">
              <i class="fas fa-chevron-left"></i>
            </span>
            <span>BACK</span>
          </router-link>
        </p>
        <!-- END - Back button -->

      <router-view/>
    </div>
    <!-- END Form mail Error flow section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>
export default {
  
}
</script>

<style></style>