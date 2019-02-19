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
        <p>Are you adding or removing a <strong>SAN</strong>?</p>
      </div>
      <p class="buttons">
          <router-link to="/flow/ssl/howto/DsslErAa" class="button is-light">
            <span class="icon has-text-success">
              <i class="fas fa-unlock-alt"></i>
            </span>
            <span>Adding <strong>SANs</strong>to certificate.</span>
          </router-link>  
          <router-link to="/flow/ssl/howto/DsslErAr" class="button is-light">
            <span class="icon has-text-success">
              <i class="fas fa-unlock-alt"></i>
            </span>
            <span>Removing <strong>SANs</strong> from certificate.</span>
          </router-link>
        </p>
      
        <!-- BEGIN - Back button -->
        <p class="buttons">
          <router-link to="/flow/ssl/howto/DsslEr" class="button is-small is-info">
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