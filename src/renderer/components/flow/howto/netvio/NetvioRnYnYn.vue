<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck">
    
    <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p><b>HOW TO:</b> Net Vio</p>
      </div> 
    <!-- END - Flow Title banner -->

    
    <!-- BEGIN Form mail Error section -->
    <div class="content has-text-centered" id="flow">

      <div class="notification is-info">
        <b>TIME TO TRANSFER</b>
      </div>

      <article class="message is-info is-small has-text-left">
        <div class="message-body">
          <p>Have the customer remove all the files that are listed in IRIS. Once this is complete advise the customer they are being transferred to complete this resolution.</p>
        </div>
      </article>

      <article class="message is-small has-text-left">
        <div class="message-body">
          <p>At this point you have done everything that you can as a Tier 1 agent. It is time to transfer your call to an <b>Advanced Hosting Support</b> agent for further assistance with troubleshooting this issue.</p>
        </div>
      </article>

      <article class="message is-small">
        <div class="message-body">
          <p><b>Transfer to x59171</b></p>
        </div>
      </article>
      
      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/howto/netvio/NetvioRnYnY" class="button is-small is-info">
          <span class="icon has-text-light">
            <i class="fas fa-chevron-left"></i>
          </span>
          <span>BACK</span>
        </router-link>
      </p>
      <!-- END - Back button -->

      <router-link to="/SwatFlow" class="button is-dark is-fullwidth">Return to start</router-link>
      <router-view/>
    </div>
    <!-- END Form mail Error section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>

</script>

<style></style>