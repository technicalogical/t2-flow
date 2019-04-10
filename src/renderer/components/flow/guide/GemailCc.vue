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
        <p>Run the site through <b>Sucuri</b> scanner. If this is a WordPress website run the <b>WPPS</b> site check.</p>
      </div>

      <article class="message is-success is-small">
        <div class="message-body is-small has-text-left">
          <p>Consult on  <b>WPPS</b> if there are recommendations. Consult on  <b>WSS</b> if the site returns positive for malware.</p>
        </div>
      </article>

      <div class="content is-medium">
        <p>These are the recommended flows.</p>
      </div>

      <p class="buttons">
        <a href="https://www.godaddy.com/help/configuring-dns-for-your-cpanel-domain-8852" target="_blank" class="button is-dark is-small">
          <span class="icon has-text-success">
            <img src="../../../assets/icons/png/org16.png"/>
          </span>
          <span><b>cPanel</b> DNS</span>
        </a>
        <router-link to="/flow/CpEmail" class="button is-dark is-small">
          <span class="icon has-text-success">
            <img src="../../../assets/icons/png/blu16.png"/>
          </span>
          <span><b>cPanel</b> Usage</span>
        </router-link>   
      </p>

      <article class="message is-small">
        <div class="message-body is-small has-text-left">
          <p>If all scans return clean transfer to hosting for further assistance.</p>
        </div>
      </article>

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

      <router-link to="/FlowIndex" class="button is-dark is-fullwidth">Return to start</router-link>
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