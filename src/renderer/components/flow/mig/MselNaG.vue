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
      
      <div class="notification is-danger">
        <p><b>STOP HERE</b></p>
      </div>
      
      <article class="message is-info has-text-left is-small">
        <div class="message-body is-small"> 
          <p><b>Charge customer for the migration.</b> Advise customer of the <b>7-10 day SLA</b>.</p>
        </div>
      </article>
      <article class="message is-danger has-text-left is-small">
        <div class="message-body is-small">
          <p><b>DO NOT</b> attach files/links to the escalation. Create the escalation with the following information.</p>
        </div>
      </article>
      <article class="message has-text-left is-small">
        <div class="message-body is-small">
          <p><b>Destination GUID:</b></p>
          <p><b>Destination Domain:</b></p>
          <p><b>Name and location of the backups files(s):</b></p>
          <p><b>Install Path:</b></p>
        </div>
      </article>
      
      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/mig/MselNa" class="button is-small is-info">
          <span class="icon has-text-light">
            <i class="fas fa-chevron-left"></i>
          </span>
          <span>BACK</span>
        </router-link>
      </p>
      <!-- END - Back button -->
      <router-link to="/FlowIndex" class="button is-dark is-fullwidth">Return to start</router-link>
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