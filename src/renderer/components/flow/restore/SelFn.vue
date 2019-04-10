<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="flow-deck">
    
    <!-- START Opening comments for Swat Flow Chart -->
    <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <center><p>4gh <b>Restore</b> Support</p></center>
    </div>
    <!-- END Opening comments for Swat Flow Chart -->

    <!-- BEGIN Error flow section -->
    <div class="content has-text-centered" id="flow">
      
      <div class="notification is-danger">
        <p><b>STOP HERE</b></p>
      </div>
      
      <article class="message is-success is-small">
        <div class="message-body is-small">
          <p><b>SELL A RESTORE</b></p> 
          <p>There is a viable restore point available for this hosting.
          <b>( The restore fee is per site )</b></p>
        </div>
      </article>
      <article class="message is-success is-small">
        <div class="message-body is-small">
          <p>Consult on new hosting package.</p>
          <p><b>Remember you must sell the same hosting that was removed in order to restore the hosting.</b></p>
        </div>
      </article>
      <article class="message is-small">
        <div class="message-body is-small">
          <p>Use RestoreU <b>SELECT OVERIDE CONTENT</b> unless customer says otherwise.</p>
        </div>
      </article>

      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/restore/SelF" class="button is-small is-info">
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