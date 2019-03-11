<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="flow-deck">
    
    <!-- START Opening comments for Swat Flow Chart -->
    <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <center><p>General <b>Migration</b> Support</p></center>
    </div>
    <!-- END Opening comments for Swat Flow Chart -->

    <!-- BEGIN Error flow section -->
    <div class="content has-text-centered" id="flow">
      <div class="content is-medium">
        <p>If the FTP/SSH test in MigrateU is failing but you can manually connect successfully manually create an IRIS ticket. Choose an option below.</p>
      </div>
      <p class="buttons">
        <router-link to="/flow/mig/MselNg" class="button is-light">
          <span class="icon has-text-success">
            <i id="itcolor" class="fas fa-play-circle"></i>
          </span>
          <span><p>Migrating from other <b>GoDaddy</b> account.</p></span>
        </router-link>  
        <router-link to="/flow/mig/MselNt" class="button is-light">
          <span class="icon has-text-success">
            <i id="itcolor" class="fas fa-play-circle"></i>
          </span>
          <span><p>Migrating from <b>Third Party</b> account.</p></span>
        </router-link>
        <router-link to="/flow/mig/MselNw" class="button is-light">
          <span class="icon has-text-success">
            <i id="itcolor" class="fas fa-play-circle"></i>
          </span>
          <span><p><b>Only</b> have <b>WordPress LOGIN</b>.</p></span>
        </router-link>
        <router-link to="/flow/mig/MselNa" class="button is-light">
          <span class="icon has-text-success">
            <i id="itcolor" class="fas fa-play-circle"></i>
          </span>
          <span><p><b>AS-IS</b> migration.</p></span>
        </router-link>
      </p>

      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/mig/Msel" class="button is-small is-info">
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