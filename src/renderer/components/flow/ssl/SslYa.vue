<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck">
    
    <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p><b>SSL</b> Website Error</p>
      </div> 
    <!-- END - Flow Title banner -->

    
    <!-- BEGIN SSL Error flow section -->
    <div class="content has-text-centered" id="flow">
      <div class="content is-medium">
        <p>Check to make sure the <strong>SSL</strong> is installed and active. </p>
      </div>
      <article class="message is-small is-danger">
        <div class="message-body">
          <strong>Check Orion events in TZ (Toolzilla) for pending SSL installs.</strong>
        </div>
      </article>
      <p class="buttons">
          <router-link to="/flow/ssl/SslYaB" class="button is-light">
            <span class="icon has-text-success">
              <i class="fas fa-check-circle"></i>
            </span>
            <span>The <strong>SSL</strong> is installed and active</span>
          </router-link>  
          <router-link to="/flow/ssl/SslYaA" class="button is-light">
            <span class="icon has-text-danger">
              <i class="fas fa-exclamation-circle"></i>
            </span>
            <span>The <strong>SSL</strong> is not properly installed</span>
          </router-link>
        </p>

        <!-- BEGIN - Back button -->
        <p class="buttons">
          <router-link to="/flow/ssl/SslY" class="button is-small is-info">
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