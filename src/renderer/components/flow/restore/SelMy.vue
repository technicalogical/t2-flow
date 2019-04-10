<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="flow-deck">
    
    <!-- START Opening comments for Swat Flow Chart -->
    <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <center><p>General <b>Restore</b> Support</p></center>
    </div>
    <!-- END Opening comments for Swat Flow Chart -->

    <!-- BEGIN Error flow section -->
    <div class="content has-text-centered" id="flow">
      
      <div class="notification is-danger">
        <p><b>STOP HERE</b></p>
      </div>
      
      <article class="message is-danger is-small">
        <div class="message-body is-small">
          <p><b>DO NOT SELL A RESTORE</b></p> 
          <p>There is no longer a viable restore point available for this hosting.</p>
        </div>
      </article>
      <article class="message is-info is-small">
        <div class="message-body is-small">
          <p>If the customer has <b>Sucuri Backup</b> you can sell the hosting, and the customer can restore a backup.</p>
        </div>
      </article>
      <article class="message is-success is-small">
        <div class="message-body is-small">
          <p>Consult on new hosting package.</p>
          <p><b>Remember you must sell the same hosting that was removed in order to restore a backup.</b></p>
        </div>
      </article>

      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/restore/SelM" class="button is-small is-info">
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