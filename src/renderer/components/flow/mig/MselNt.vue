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
        <p>Customer must be able to provide the following information.</p>
      </div>
      <div id="pfcmig" class="content has-text-left">
        <p><b>Control Panel Username:</b></p>
        <p><b>Control Panel Password:</b></p>
        <p><b>Hosting Provider:</b></p>
        <p><b>Domain Name:</b></p>
        <p><b>Root Directory (i.e. /httpdocs, /public_html)</b></p>
        <p><b>IP Address:</b></p>
        <p><b>Username / Password:</b></p>
        <p><b>CMS (WordPress, Joomla, Drupal, etc.):</b></p>
        <p><b>Application dashboard URL:</b></p>
        <p><b>Application Username:</b></p>
        <p><b>Application Password:</b></p>
        <p><b>Database Name:</b></p>
        <p><b>Destination Information</b></p>
        <p><b>GUID:</b></p>
        <p><b>Domain:</b></p>
        <p><b>Directory:</b></p>
      </div>
      <div id="mig-button" class="control">
        <router-link to="/flow/mig/MselNtC" class="tags has-addons">
          <span class="tag is-dark"><p>Continue</p></span>
          <span class="tag is-success"><i class="fas fa-chevron-circle-right"></i></span>
        </router-link>
      </div>

      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/mig/MselN" class="button is-small is-info">
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