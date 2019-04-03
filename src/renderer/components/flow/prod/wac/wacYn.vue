<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="flow-deck">
    
      <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p><b>WSE</b> Account Change</p>
      </div> 
      <!-- END - Flow Title banner -->

    
    <!-- BEGIN section -->
    <div class="content has-text-centered" id="flow"> 

      <div class="notification is-danger">
        <strong>STOP HERE</strong>.
      </div>

      <article class="message is-info is-small">
        <div class="message-body">
          <p>You will need to purchase a <b>WSE</b> plan in the account we are moving the emails to.</p>
        </div>
      </article>

      <article class="message is-small">
        <div class="message-body">
          <p><b>MAKE SURE YOU PURCHASE THE SAME REGION THEY WERE ON BEFORE (US, AP, EU)</b></p>
          <p>Make sure to purchase enough emails on the plan as well.</P>
          <p>Once the plan is purchased and in the account, move on to the next step</P>
        </div>
      </article>

      <div id="mig-button" class="control">
        <router-link to="/flow/prod/wac/wacYy" class="tags has-addons">
          <span class="tag is-dark"><p><b>Continue</b> once WSE plans are in place</p></span>
          <span class="tag is-success"><i class="fas fa-chevron-circle-right"></i></span>
        </router-link>
      </div>
      
      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/prod/wac/wac" class="button is-small is-info">
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
    <!-- END section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>
export default {

}
</script>

<style></style>