<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="flow-deck">
    
      <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p>Choose Your Adventure: <b>3rd Party Exchange</b></p>
      </div> 
      <!-- END - Flow Title banner -->

    
    <!-- BEGIN section -->
    <div class="content has-text-centered" id="flow"> 

      <div class="notification is-danger">
        <strong>STOP HERE</strong>.
      </div>

      <article class="message is-info is-small">
        <div class="message-body has-text-left">
          <p>Customer is using Office 365 with GoDaddy and is needing to move their 365 accounts from one GoDaddy shopper account to another.</p>
          <p><b>Purchase mailboxes and migration fees</b>, <b>Change domain on email accounts in the source GD shopper account</b>, <b>Setup email accounts in the new GoDaddy shopper account with desired domain</b>, <b>Add all O365 DNS records</b></p>
          <p>Go to x.co/migratepro and use the “Office 365 to Office 365” migration scenario.</p>
        </div>
      </article>
      <a href="http://x.co/migratepro" target="_blank" id="ibcolor" title="Launch Migrate Pro" class="button is-small is-info">
        <span class="icon is-medium">
          <i class="far fa-envelope-open"></i>
        </span>
        <span><b>Migrate Pro</b></span>
      </a>
      <br>
      <br>

      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/prod/cya/other/exng/eNyN" class="button is-small is-info">
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