<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck">
    
    <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p><b>Form Mail</b> Error</p>
      </div> 
    <!-- END - Flow Title banner -->

    
    <!-- BEGIN Form mail Error section -->
    <div class="content has-text-centered" id="flow">

      <div class="notification is-info">
        <strong>TIME TO TRANSFER</strong>.
      </div>

      <article class="message is-small has-text-left">
        <div class="message-body">
          <p>At this point you have done all that you can as a Tier 1 agent. Advise the customer and transfer your call to an <b>Advanced Hosting Support</b> agent for further assistance with troubleshooting this issue.</p>
        </div>
      </article>

      <article class="message is-small">
        <div class="message-body">
          <p><b>Transfer to x59171</b></p>
        </div>
      </article>
      
      <router-link to="/FlowIndex" class="button is-dark is-fullwidth">Return to start</router-link>
      <router-view/>
    </div>
    <!-- END Form mail Error section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>
export default {

}
</script>

<style></style>