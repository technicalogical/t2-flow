<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="flow-deck">
    
      <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p>Choose Your Adventure: <b>Workspace</b></p>
      </div> 
      <!-- END - Flow Title banner -->

    
    <!-- BEGIN section -->
    <div class="content has-text-centered" id="flow"> 

      <div class="notification is-danger">
        <strong>STOP HERE</strong>.
      </div>

      <article class="message is-info is-small">
        <div class="message-body">
          <p>Due to SSO, the Workspace emails need to be in the same GoDaddy shopper account as the Office 365 credits. Whether the accounts are in GoDaddy or Reseller Work-space, you can follow the instructions on the guide below:</p>
        </div>
        <a href="https://www.godaddy.com/help/change-the-shopper-id-for-emails-pending-delete-8326" target="_blank" title="Launch GoDaddy Workspace Email HELP article" class="button is-small is-dark">
          <span class="icon is-medium">
            <i class="far fa-envelope-open"></i>
          </span>
          <span><b>Go To Workspace Email HELP</b></span>
        </a>
      </article>

      <article class="message is-small">
        <div class="message-body has-text-left">
          <p>Once the mailboxes are in the same shopper account as the Office 365 accounts, go to <b>x.co/maastool</b> and use the <b>Mass Tool</b> to submit your migration.</p>
        </div>
        <a href="https://wopr.int.secureserver.net/support.services/MigrationLauncher" target="_blank" title="Launch MaaS Tool" class="button is-small is-dark">
        <span class="icon is-medium">
          <i class="far fa-envelope-open"></i>
        </span>
        <span><b>Launch MaaS Tool</b></span>
      </a>
      </article>

      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/prod/cya/wksp/wksNn" class="button is-small is-info">
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