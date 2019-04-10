<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="flow-deck">
    
      <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p><b>Mig Team Transfer</b> | Pre-Flight Checklist</p>
      </div> 
      <!-- END - Flow Title banner -->

    
    <!-- BEGIN section -->
    <div class="content has-text-centered" id="flow"> 

      <div class="notification is-danger">
        <strong>STOP HERE</strong>.
      </div>

      <article class="message is-info is-small">
        <div class="message-body">
          <p>You <b>MUST</b> complete these tasks before transferring:</p>
        </div>
      </article>

      <article class="message is-small has-text-left">
        <div class="message-body">
          <p><b>Confirm a migration for the domain is in flight or has been completed (MaaS Status Tab)</b></p>
          <p><b>Find out where DNS is hosted</b></p>
          <p><b>Find out if their source server (the existing email host) is still active</b></p>
          <p><b>Confirm user(s) experiencing issues and errors if any (screen shots not required) defining the purpose of the call and source of pain experienced by your customer. Notate these facts on the account in cases.</b></p>
        </div>
      </article>

      <div id="mig-button" class="control">
        <router-link to="/flow/prod/mtt/mttYmY" class="tags has-addons">
          <span class="tag is-dark"><p><b>Continue</b> once these are completed</p></span>
          <span class="tag is-success"><i class="fas fa-chevron-circle-right"></i></span>
        </router-link>
      </div>
      
      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/prod/mtt/mttYm" class="button is-small is-info">
          <span class="icon has-text-light">
            <i class="fas fa-chevron-left"></i>
          </span>
          <span>BACK</span>
        </router-link>
      </p>
      <!-- END - Back button -->

      <router-link to="/FlowIndex" class="button is-dark is-fullwidth">Return to start</router-link>

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