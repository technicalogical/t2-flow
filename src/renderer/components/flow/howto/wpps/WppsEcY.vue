<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck">
    
    <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p><b>HOW TO:</b> Sucuri Support Tickets</p>
      </div> 
    <!-- END - Flow Title banner -->

    
    <!-- BEGIN Form mail Error section -->
    <div class="content has-text-centered" id="flow">    
      <div class="notification is-danger">
        <b>STOP HERE</b>
      </div>
      <article class="message is-info is-small">
        <div class="message-body">
          <p>If all work has been completed advise the customer of the 14 day SLA on addressing issues with a closed ticket. They will need open a new ticket.</p>
        </div>
      </article>
      <article class="message is-info is-small">
        <div class="message-body">
          <p>If there is work that remains to be completed, or WPPS was waiting for a response advise the customer and Transfer the call to a Tier 2 agent.</p>
        </div>
      </article>
      
      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/howto/wpps/WppsEc" class="button is-small is-info">
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