<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck">
    
    <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p><b>SPLUNK</b> Log Usage</p>
      </div> 
    <!-- END - Flow Title banner -->

    
    <!-- BEGIN SSL Error flow section -->
    <div class="content has-text-centered" id="flow">
      <div class="content is-medium">
        <p>This is saying that the Relay Server dropped the queued email and did not send.  Do the logs show <b>"CLNTTMPFAIL"</b> as the action?</p>
      </div>
      <p class="buttons">
          <router-link to="/flow/splunk/SplunkDy" class="button is-light">
            <span class="icon has-text-success">
              <i class="fas fa-check-circle"></i>
            </span>
            <span>It is shows <b>CLNTTMPFAIL</b>.</span>
          </router-link>  
          <router-link to="/flow/splunk/SplunkDn" class="button is-light">
            <span class="icon has-text-success">
              <i class="fas fa-check-circle"></i>
            </span>
            <span>It does not show <b>CLNTTMPFAIL</b>.</span>
          </router-link>
        </p>
      
        <!-- BEGIN - Back button -->
        <p class="buttons">
          <router-link to="/flow/Splunk" class="button is-small is-info">
            <span class="icon has-text-light">
              <i class="fas fa-chevron-left"></i>
            </span>
            <span>BACK</span>
          </router-link>
        </p>
        <!-- END - Back button -->

      <router-view/>
    </div>
    <!-- END SSL Error flow section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>
export default {
  
}
</script>

<style></style>