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
        <p>Are you setting up a new DSSL or making changes to an existing DSSL?</p>
      </div>
      <p class="buttons">
          <router-link to="/flow/ssl/howto/DsslE" class="button is-light">
            <span class="icon has-text-success">
              <i class="fas fa-unlock-alt"></i>
            </span>
            <span>Changes to existing <strong>DSSL</strong></span>
          </router-link>  
          <router-link to="/flow/ssl/howto/DsslN" class="button is-light">
            <span class="icon has-text-success">
              <i class="fas fa-unlock-alt"></i>
            </span>
            <span>Setting up new <strong>DSSL</strong></span>
          </router-link>
        </p>
      
        <!-- BEGIN - Back button -->
        <p class="buttons">
          <router-link to="/flow/ssl/howto/Ssl" class="button is-small is-info">
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