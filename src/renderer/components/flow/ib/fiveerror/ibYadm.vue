<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="flow-deck">
    
    <!-- START Opening comments for Swat Flow Chart -->
    <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <center><p><b>500</b> Error</p></center>
    </div>
    <!-- END Opening comments for Swat Flow Chart -->
    
    <!-- BEGIN Error flow section -->
    <div class="content has-text-centered" id="flow">
      
      <div class="notification is-info">
        <p><b>TIME TO TRANSFER</b></p>
      </div>
      
      <article class="message is-info is-small has-text-left">
        <div class="message-body is-small">
          <p>Run <b>Sucuri</b> scanner and <b>WPPS</b> Checker on the website. If the customer objects to <b>WPPS</b></p>
        </div>
      </article>

      <article class="message is-success is-small has-text-left">
        <div class="message-body is-small">
          <p>Consult on <b>WSS (Website Security)</b> if the <b>Sucuri</b> scan returns positive for malware. Consult on <b>WPPS</b> for WordPress based websites.</p>
        </div>
      </article>

      <article class="message is-small">
        <div class="message-body is-small">
          <p>Transfer to hosting. Hosting will make sure they can get into wp-admin. Hosting <b>will not fix the issue</b>.</p>
          <p><b>Transfer to x59171</b></p>
        </div>
      </article>

      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/ib/fiveerror/ibY" class="button is-small is-info">
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