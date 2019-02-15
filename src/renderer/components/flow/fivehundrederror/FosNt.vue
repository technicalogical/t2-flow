<template>
  <div id="swat-deck">
    
    <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p><b>500 Error</b> / W.S.O.D. (White Screen of Death)</p>
      </div> 
    <!-- END - Flow Title banner -->

    
    <!-- BEGIN 500 Error flow section -->
    <div class="content has-text-centered" id="flow">    
      <div class="notification is-info">
        <b>TIME TO TRANSFER</b>.
      </div>
      <article class="message is-info is-small">
        <div class="message-body has-text-left">
         <p>At this point you have done all that you can as a <b>Tier 1</b> agent. Advise the customer and transfer your call to a <b>Tier 2</b> agent for further assistance with troubleshooting Managed Wordpress.
         </p>
        </div>
      </article>

      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/fivehundrederror/FosN" class="button is-small is-info">
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
    <!-- END 500 Error flow section -->

  </div>
  <!-- END - Primary application deck -->
  
</template>

<script>
export default {

}
</script>

<style></style>