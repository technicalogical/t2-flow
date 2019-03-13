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
      
      <div class="notification is-danger">
        <p><b>STOP HERE</b></p>
      </div>
      
      <article class="message is-info is-small">
        <div class="message-body is-small">
          <p>Run the site through <b>Sucuri</b> scanner and sites peed scanner. If this is a WordPress website run the <b>WPPS</b> site check.</p>
        </div>
      </article>
      <article class="message is-success is-small">
        <div class="message-body is-small has-text-left">
          <p>Consult on <b>WSS</b> if that returns positive results for malware.</p>
          <p>Consult on <b>WPPS</b> if that check returns recommendations.</p>
        </div>
      </article>

      <article class="message is-small">
        <div class="message-body is-small has-text-left">
          <p>If all scans return clean transfer to hosting for further assistance.</p>
        </div>
      </article>

      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/guide/GhW" class="button is-small is-info">
          <span class="icon has-text-light">
            <i class="fas fa-chevron-left"></i>
          </span>
          <span>BACK</span>
        </router-link>
      </p>
      <!-- END - Back button -->
      
      <router-link to="/SwatFlow" class="button is-dark is-fullwidth">Return to start</router-link>
      <router-view/>

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