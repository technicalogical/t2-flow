<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="flow-deck">
    
      <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p>Domain <b>Unblocking</b></p>
      </div> 
      <!-- END - Flow Title banner -->

    
    <!-- BEGIN section -->
    <div class="content has-text-centered" id="flow"> 

      <div class="notification is-danger">
        <strong>STOP HERE</strong>.
      </div>

      <article class="message is-info is-small">
        <div class="message-body">
          <p>If you cannot validate into the account where the emails are set up, you have <b>2 options</b>:.</p>
        </div>
      </article>

      <article class="message is-small has-text-left">
        <div class="message-body">
          <p><b>Customer can contact account holder to delete emails</b></p>
          <p><b>Reach out to ATS and they can submit a cease and desist (Gives account holder 24 hours to delete the emails)</b></p>
        </div>
      </article>

      <article class="message is-small">
        <div class="message-body">
          <p>If you can validate into the account, you may proceed to the next step.</p>
        </div>
      </article>

      <div id="mig-button" class="control">
        <router-link to="/flow/prod/du/duYyY" class="tags has-addons">
          <span class="tag is-dark"><p><b>Continue</b> if you can validate account</p></span>
          <span class="tag is-success"><i class="fas fa-chevron-circle-right"></i></span>
        </router-link>
      </div>
      
      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/prod/du/duYn" class="button is-small is-info">
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