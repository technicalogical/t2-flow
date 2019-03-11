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
      
      <article class="message is-info is-small">
        <div class="message-body is-small"> 
          <p>Advise the customer on the expected SLA of 72 hours to complete. Until that time has passed there is nothing that we can do. Their Restore is in progress.</p>
        </div>
      </article>
      <article class="message is-danger is-small">
        <div class="message-body is-small">
          <p><b>DO NOT TRANSFER THIS CALL TO HOSTING</b></p>
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