<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck">
    
    <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p><b>HOW TO:</b> Enable Debug Mode</p>
      </div> 
    <!-- END - Flow Title banner -->

    <!-- BEGIN SSL Error flow section -->
    <div class="content has-text-centered" id="flow">
      <div class="content is-medium">
        <p>Does the customer have a <b>web.config</b> file?</p>
      </div>
      <p class="buttons">
          <router-link to="/flow/howto/debugmode/DebugWfY" class="button is-light">
            <span class="icon has-text-success">
              <i class="fas fa-check-circle"></i>
            </span>
            <span><b>Yes</b>. there is a <b>web.config</b> file.</span>
          </router-link>  
          <router-link to="/flow/howto/debugmode/DebugWfN" class="button is-light">
            <span class="icon has-text-success">
              <i class="fas fa-check-circle"></i>
            </span>
            <span><b>No</b>. there is no <b>web.config</b> file.</span>
          </router-link>
        </p>
      
        <!-- BEGIN - Back button -->
        <p class="buttons">
          <router-link to="/flow/howto/debugmode/Debug" class="button is-small is-info">
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