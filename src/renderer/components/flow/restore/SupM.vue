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
      
      <div class="notification is-info">
        <p><b>TIME TO TRANSFER</b></p>
      </div>
      
      <article class="message is-small">
        <div class="message-body is-small"> 
          <p>Transfer to Tier 2 so that they can help with any issues with the restore in progress.</p>
        </div>
      </article>

      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/restore/Sup" class="button is-small is-info">
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