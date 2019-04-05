<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck">
    
    <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p><b>HOW TO:</b> WordPress Premium Support</p>
      </div> 
    <!-- END - Flow Title banner -->

    <!-- BEGIN SSL Error flow section -->
    <div class="content has-text-centered" id="flow">
      <div class="content is-medium">
        <p>What do you need to do with WPPS (WordPress Premium Support)?</p>
      </div>
      <p class="buttons">
        <router-link to="/flow/howto/wpps/WppsP" class="button is-light">
          <span class="icon has-text-success">
            <i class="fas fa-check-circle"></i>
          </span>
          <span><b>WPPS</b> Product Setup.</span>
        </router-link>  
        <router-link to="/flow/howto/wpps/WppsN" class="button is-light">
          <span class="icon has-text-success">
            <i class="fas fa-check-circle"></i>
          </span>
          <span>New <b>WPPS</b> Ticket.</span>
        </router-link>
        <router-link to="/flow/howto/wpps/WppsE" class="button is-light">
          <span class="icon has-text-success">
            <i class="fas fa-check-circle"></i>
          </span>
          <span>Existing <b>WPPS</b> Ticket.</span>
        </router-link>
      </p>
      
      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/FlowIndex" class="button is-small is-info">
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