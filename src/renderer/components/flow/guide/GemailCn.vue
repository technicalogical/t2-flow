<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="flow-deck">
    
    <!-- START Opening comments for Swat Flow Chart -->
    <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <center><p><b>Flow</b> Guide</p></center>
    </div>
    <!-- END Opening comments for Swat Flow Chart -->

    <!-- BEGIN Error flow section -->
    <div class="content has-text-centered" id="flow">
      <div class="content is-medium">
        <p>Advise the customer that they will need to correct the DNS records to work correctly with cPanel email.</p>
      </div>
      

      <div class="content is-medium">
        <p>Here is the recommended flow.</p>
      </div>
      <p class="buttons">
        <a href="https://www.godaddy.com/help/configuring-dns-for-your-cpanel-domain-8852" target="_blank" class="button is-dark is-small">
          <span class="icon has-text-success">
            <img src="../../../assets/icons/png/org16.png"/>
          </span>
          <span><b>cPanel</b> DNS</span>
        </a>
      </p>

      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/guide/GemailC" class="button is-small is-info">
          <span class="icon has-text-light">
            <i class="fas fa-chevron-left"></i>
          </span>
          <span>BACK</span>
        </router-link>
      </p>
      <!-- END - Back button -->
      
      <router-link to="/SwatFlow" class="button is-dark is-fullwidth">Return to start</router-link>

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