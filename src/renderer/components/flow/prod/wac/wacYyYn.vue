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
          <p>Go to the Email Tool and select the option "Change Shopper for Emails Pending Delete". You will first need to search for the domain. Then you will need to fill out the following:</P>
        </div>
      </article>

      <a href="https://emailmanager.int.godaddy.com/user_info.php?infolevel=20&showAllAddresses=0&page_action=user_info&email_address=?infolevel=20&showAllAddresses=0&page_action=user_info&email_address=" target="_blank" title="Launch WS Email Tool" class="button is-small is-dark">
        <span><b>Launch WS Tool</b></span>
      </a>
      <br>

      <article class="message is-small has-text-left">
        <div class="message-body">    
          <p><b>Current Shopper's PIN</b></P>
          <p><b>New Shopper ID (Customer #)</b></p>
          <p><b>New Private Label ID (it will be 1 as long as you are not moving emails to a reseller account)</b></p>
          <p><b>New Shopper's PIN</b></p>
          <p>Once you process this, proceed to the next step.</P>
        </div>
      </article>

      <div id="mig-button" class="control">
        <router-link to="/flow/prod/wac/wacYyYy" class="tags has-addons">
          <span class="tag is-dark"><p><b>Continue</b> to next step</p></span>
          <span class="tag is-success"><i class="fas fa-chevron-circle-right"></i></span>
        </router-link>
      </div>
      
      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/prod/wac/wacYyY" class="button is-small is-info">
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