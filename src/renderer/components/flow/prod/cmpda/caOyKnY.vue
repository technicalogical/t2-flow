<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="flow-deck">
    
      <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p><b>Compromised</b> Email Accounts | <b>O365</b></p>
      </div> 
      <!-- END - Flow Title banner -->

    
    <!-- BEGIN section -->
    <div class="content has-text-centered" id="flow"> 

      <div class="notification is-danger">
        <strong>STOP HERE</strong>.
      </div>

      <article class="message is-info is-small has-text-left">
        <div class="message-body">
          <p>Check in <b>WOPR</b> under support tools for bad outbound sender block. If you do not see a block in WOPR, then confirm in either the bounce or in Message Trace if it is a Tenant Exceeded Threshold bounce.</p>
          <p>Reach out to ATS Chat so they can get a ticket created to unblock the accounts. (In ATS chat you will need to specify if it is a bad outbound sender or tenant exceeded threshold and if the email blast was intentionally sent by customer or if their account was compromised)</p>
        </div>
      </article>

      <article class="message is-small has-text-left">
        <div class="message-body">
          <p><b>After ATS creates the ticket, proceed to the next step.</b></p>
        </div>
      </article>

      <div id="mig-button" class="control">
        <router-link to="/flow/prod/cmpda/caOyKnN" class="tags has-addons">
          <span class="tag is-dark"><p><b>Continue</b> to next steps</p></span>
          <span class="tag is-success"><i class="fas fa-chevron-circle-right"></i></span>
        </router-link>
      </div>
      
      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/prod/cmpda/caOyKn" class="button is-small is-info">
          <span class="icon has-text-light">
            <i class="fas fa-chevron-left"></i>
          </span>
          <span>BACK</span>
        </router-link>
        <a href="https://wopr.int.secureserver.net/support.services/SpamProtection" target="_blank" class="button is-small is-dark">
          <span><b>WOPR</b></span>
        </a>
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