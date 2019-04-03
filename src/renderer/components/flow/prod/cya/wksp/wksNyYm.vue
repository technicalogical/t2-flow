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

      <div class="content is-small has-text-left">
        <p>Due to SSO, the Work-space emails need to be in the same GoDaddy shopper account as the Office 365 credits. Whether the accounts are in GoDaddy or Reseller Workspace, you can follow the instructions on the guide below:</p>
      </div>

      <a href="https://www.godaddy.com/help/change-the-shopper-id-for-emails-pending-delete-8326" target="_blank" title="GoDaddy Workspace Email HELP article" class="button is-small is-dark">
        <span class="icon is-medium">
          <i class="far fa-envelope-open"></i>
        </span>
        <span><b>Go To Workspace Email HELP</b></span>
      </a>

      <br>
      <br>

      <div class="content is-small has-text-left">
        <p>Once the mailboxes are in the same shopper account as the Office 365 accounts, continue below:</p>
      </div>

      <div class="content is-small has-text-left">
        <p>Are the domains related to each other or a part of the same business? (do they need to be a part of the same organization?)</p>
      </div>

      <p class="buttons">

        <router-link to="/flow/prod/cya/wksp/wksNyYmY" class="button is-light">
          <span class="icon has-text-success">
            <i id="itcolor" class="fas fa-chevron-circle-right"></i>
          </span>
          <span><b>Yes</b>. Same organization.</span>
        </router-link>
      
        <router-link to="/flow/prod/cya/wksp/wksNyYmN" class="button is-light">
          <span class="icon has-text-danger">
            <i id="itcolor" class="fas fa-chevron-circle-right"></i>
          </span>
          <span><b>No</b>. They can be seperate.</span>
        </router-link>

      </p>
      
      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/prod/cya/wksp/wksNyY" class="button is-small is-info">
          <span class="icon has-text-light">
            <i class="fas fa-chevron-left"></i>
          </span>
          <span>BACK</span>
        </router-link>
      </p>
      <!-- END - Back button -->

      <router-view/>

    </div>
    <!-- END flow section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>

</script>

<style></style>