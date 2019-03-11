<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="flow-deck">
    
    <!-- START Opening comments for Swat Flow Chart -->
    <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <center><p>General <b>Migration</b> Support</p></center>
    </div>
    <!-- END Opening comments for Swat Flow Chart -->

    <!-- BEGIN Error flow section -->
    <div class="content" id="flow">
      <div id="serious" class="content has-text-danger has-text-left">
        <p><b>IMPORTANT</b>: Customer acknowledges that this is an "<b>AS-IS</b>" migration, and if we are unable install a plugin on the source the migrated site will be missing plugins, themes, and possibly some images. The customer accepts that they may require a developer to fix any issues after the migration, which is not included with this service.</p>
      </div>
      <div id="pfcmigm" class="content has-text-left">
        <p><b>=== SOURCE ACCOUNT ===</b></p>
        <p><b>Site URL:</b></p>
        <p><b>WP-admin URL:</b></p>
        <p><b>Admin Username:</b></p>
        <p><b>Admin Password:</b></p>
        <p><b>=== DESTINATION ACCOUNT ===</b></p>
        <p><b>GUID:</b></p>
        <p><b>URL:</b></p>
        <p><b>Install Path:</b></p>
      </div>
      <div id="mig-button" class="control">
        <router-link to="/flow/mig/MselNwYg" class="tags has-addons">
          <span class="tag is-dark"><p>Continue</p></span>
          <span class="tag is-success"><i class="fas fa-chevron-circle-right"></i></span>
        </router-link>
      </div>
      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/mig/MselNw" class="button is-small is-info">
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