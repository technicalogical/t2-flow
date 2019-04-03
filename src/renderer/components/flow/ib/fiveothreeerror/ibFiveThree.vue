<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="flow-deck">
    
    <!-- START Opening comments for Swat Flow Chart -->
    <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <center><p><b>503</b> Error</p></center>
    </div>
    <!-- END Opening comments for Swat Flow Chart -->

    <!-- BEGIN Error flow section -->
    <div class="content has-text-centered" id="flow">
      <div class="content is-medium">
        <p>What hosting is the customer on?</p>
      </div>
      <p class="buttons">
        <router-link to="/flow/ib/fiveothreeerror/ibMwp" class="button is-light">
          <span class="icon has-text-link">
            <i class="fab fa-wordpress-simple"></i>
          </span>
          <span>it is <b>Managed WordPress</b> hosting.</span>
        </router-link>  
        <router-link to="/flow/ib/fiveothreeerror/ibPlk" class="button is-light">
          <span class="icon has-text-info">
            <i class="fab fa-windows"></i>
          </span>
          <span>It is <b>Plesk</b> hosting.</span>
        </router-link>
        <router-link to="/flow/ib/fiveothreeerror/ibLin" class="button is-light">
          <span class="icon has-text-danger">
            <i class="fab fa-linux"></i>
          </span>
          <span>It is <b>Linux</b> Hosting.</span>
        </router-link>
      </p>

      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/ibFlow" class="button is-small is-info">
          <span class="icon has-text-light">
            <i class="fas fa-chevron-left"></i>
          </span>
          <span>BACK</span>
        </router-link>
      </p>
      <!-- END - Back button -->    

      <router-view/>

    </div>
    <!-- END Error flow section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>
export default {
  
}
</script>

<style></style>