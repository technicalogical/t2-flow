<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck">
    
    <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p><b>503</b> Server Response Error</p>
      </div> 
    <!-- END - Flow Title banner -->

    
    <!-- BEGIN Plesk 503 Error flow section -->
    <div class="content has-text-centered" id="flow">
      <div class="content is-medium">
        <p>Stop and Start the <b>IIS App Pool</b>. Is the site now able to load in browser?</p>
      </div>
      <p class="buttons">
          <router-link to="/flow/fiveothree/win/WinYesYyes" class="button is-light">
            <span class="icon has-text-success">
              <i class="fas fa-check-circle"></i>
            </span>
            <span><b>Yes</b>. The website now loads in browser</span>
          </router-link>  
          <router-link to="/flow/fiveothree/win/WinYesYno" class="button is-light">
            <span class="icon has-text-danger">
              <i class="fas fa-exclamation-circle"></i>
            </span>
            <span><b>No</b>. The website does not load in browser</span>
          </router-link>
        </p>

        <!-- BEGIN - Back button -->
        <p class="buttons">
          <router-link to="/flow/fiveothree/win/WinYes" class="button is-small is-info">
            <span class="icon has-text-light">
              <i class="fas fa-chevron-left"></i>
            </span>
            <span>BACK</span>
          </router-link>
        </p>
        <!-- END - Back button -->

      <router-view/>

    </div>
    <!-- END Plesk 503 Error flow section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>
export default {
  
}
</script>

<style></style>