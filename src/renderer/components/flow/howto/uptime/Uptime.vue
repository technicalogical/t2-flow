<template>
 
  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck">
    
    <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p><b>VPS</b> Up Time Check</p>
      </div> 
    <!-- END - Flow Title banner -->

    <!-- BEGIN SSL Error flow section -->
    <div class="content has-text-centered" id="flow">
      <div class="content is-medium">
        <p>What type of server is it?</p>
      </div>
      <p class="buttons">
        <router-link to="/flow/howto/uptime/UptimeL" class="button is-light">
          <span class="icon has-text-dark">
            <i class="fab fa-linux"></i>
          </span>
          <span>This is a <strong>Linux</strong> server.</span>
        </router-link>  
        <router-link to="/flow/howto/uptime/UptimeW" class="button is-light">
          <span class="icon has-text-dark">
            <i class="fab fa-windows"></i>
          </span>
          <span>This is a <strong>Windows</strong> server.</span>
        </router-link>
      </p>
      
      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/FlowThree" class="button is-small is-info">
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