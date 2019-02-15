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
        <p>Is <strong>MX entry (email routing)</strong> set to "local mail exchanger"?</p>
      </div>
      <p class="buttons">
        <router-link to="/flow/cpemail/cpmRyR" class="button is-light">
          <span class="icon has-text-success">
            <i class="fas fa-play-circle"></i>
          </span>
          <span>This is set to <strong>remote</strong></span>
        </router-link>  
        <router-link to="/flow/cpemail/cpmRyL" class="button is-light">
          <span class="icon has-text-success">
            <i class="fas fa-play-circle"></i>
          </span>
          <span>This is set to <strong>local</strong></span>
        </router-link>
      </p>

      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/cpemail/cpmR" class="button is-small is-info">
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