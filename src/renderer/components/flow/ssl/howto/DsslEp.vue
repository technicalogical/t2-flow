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
        <p>Check domain with SSL checker. Is there an SSL installed?</p>
      </div>
      <p class="buttons">
          <router-link to="/flow/ssl/howto/DsslEpY" class="button is-light">
            <span class="icon has-text-success">
              <i class="fas fa-unlock-alt"></i>
            </span>
            <span><strong>Yes</strong>. There is an SSL installed.</span>
          </router-link>  
          <router-link to="/flow/ssl/howto/DsslEpN" class="button is-light">
            <span class="icon has-text-success">
              <i class="fas fa-unlock-alt"></i>
            </span>
            <span>There is <strong>no</strong> SSL installed</span>
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