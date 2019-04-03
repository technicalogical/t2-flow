<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="flow-deck">
    
    <!-- START Opening comments for Swat Flow Chart -->
    <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <center><p><b>503</b> Error <b>Managed WordPress</b></p></center>
    </div>
    <!-- END Opening comments for Swat Flow Chart -->

    <!-- BEGIN Error flow section -->
    <div class="content has-text-centered" id="flow">
      
      <div class="notification is-info">
        <p><b>TIME TO TRANSFER</b></p>
      </div>
      
      <article class="message is-small has-text-left">
        <div class="message-body">
          <p>At this point you have done all that you can as a Tier 1 agent. Advise the customer and transfer your call to an <b>Advanced Hosting Support</b> agent for further assistance with troubleshooting this issue.</p>
          <p>Advise the Hosting agent that you are transferring the call so that they can address the <b>503 error</b> in more detail.</p>
        </div>
      </article>

      <article class="message is-small">
        <div class="message-body">
          <p><b>Transfer to x59171</b></p>
        </div>
      </article>

      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/ib/fiveothreeerror/ibMwp" class="button is-small is-info">
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