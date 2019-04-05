<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="flow-deck">
    
    <!-- START Opening comments for Swat Flow Chart -->
    <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <center><p><b>403</b> Error</p></center>
    </div>
    <!-- END Opening comments for Swat Flow Chart -->

    <!-- BEGIN Error flow section -->
    <div class="content has-text-centered" id="flow">
      
      <div class="notification is-danger">
        <p><b>STOP HERE</b></p>
      </div>
      
      <article class="message is-info is-small">
        <div class="message-body is-small">
          <p>Run <b>Sucuri</b> scanner. Run <b>WPPS</b> check if the website is WordPress based.</p>
        </div>
      </article>
      <article class="message is-success is-small">
        <div class="message-body is-small">
          <p>Consult on <b>WSS (Website Security)</b> if the <b>Sucuri</b> returns positive for malware. Consult on <b>WPPS</b> for outstanding issues that can be fixed.</p>
        </div>
      </article>
      <article class="message is-small">
        <div class="message-body is-small">
          <p><b>Transfer to Hosting</b> if both scans come back clean.</p>
        </div>
      </article>

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
    <!-- END Error flow section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>
export default {
  
}
</script>

<style></style>