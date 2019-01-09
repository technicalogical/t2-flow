<template>
  <div id="flow-deck-two">
    
    <!-- 500 Error / WSOD Text -->
    <article id="wsod-message" class="message is-small">
      <div class="notification is-dark has-text-centered">
        <strong>500 Error / W.S.O.D. (White Screen of Death)</strong>
      </div>
    </article>
    <!-- END - 500 Error / WSOD Text -->

    
    <!-- BEGIN 500 Error flow section -->
    <div class="content has-text-centered" id="flow">    
      <div class="notification is-info">
        <strong>TIME TO TRANSFER</strong>.
      </div>
      <article class="message is-info is-small">
        <div class="message-body">
         At this point you have done all that you can as a <strong>Tier 1</strong> agent. Advise the customer and transfer your call to a <strong>Tier 2</strong> agent for further assistance with troubleshooting Managed Wordpress.
        </div>
      </article>

      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/fivehundrederror/Fos" class="button is-small is-info">
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

<style src="../../../flow-style.scss"></style>