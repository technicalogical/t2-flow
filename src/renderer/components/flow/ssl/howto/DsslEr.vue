<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck">
    
    <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p><b>SSL</b> Product Setup</p>
      </div> 
    <!-- END - Flow Title banner -->

    
    <!-- BEGIN SSL Error flow section -->
    <div class="content has-text-centered" id="flow">
      <div class="content is-medium">
        <p>Why is the certificate being rekeyed?</p>
      </div>
      <p class="buttons">
          <router-link to="/flow/ssl/howto/DsslErR" class="button is-light">
            <span class="icon has-text-success">
              <i class="fas fa-unlock-alt"></i>
            </span>
            <span>Refresh/Reinstall Rekey</span>
          </router-link>  
          <router-link to="/flow/ssl/howto/DsslErC" class="button is-light">
            <span class="icon has-text-success">
              <i class="fas fa-unlock-alt"></i>
            </span>
            <span>Changing the domain name</span>
          </router-link>
          <router-link to="/flow/ssl/howto/DsslErU" class="button is-light">
            <span class="icon has-text-success">
              <i class="fas fa-unlock-alt"></i>
            </span>
            <span>Uninstalling the Certificate</span>
          </router-link>  
          <router-link to="/flow/ssl/howto/DsslErA" class="button is-light">
            <span class="icon has-text-success">
              <i class="fas fa-unlock-alt"></i>
            </span>
            <span>Adding/removing SANs</span>
          </router-link>
        </p>
      
        <!-- BEGIN - Back button -->
        <p class="buttons">
          <router-link to="/flow/ssl/howto/DsslE" class="button is-small is-info">
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

</script>

<style></style>