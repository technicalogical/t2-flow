<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="flow-deck">
    
    <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p>Choose Your Adventure: <b>Office 365</b></p>
      </div> 
    <!-- END - Flow Title banner -->

    
    <!-- BEGIN Transfer PFC Checklist section -->
    <div class="content has-text-centered" id="flow">
      <div class="content is-medium">
        <p>Customer is using Office 365 with GoDaddy and is needing to move their 365 accounts from one GoDaddy shopper account to another.</p>
      </div>
      <div id="pfcdeck" class="field">
        <div class="control">
          <div class="tags has-addons">
            <span class="tag is-success"><b>1</b></span>
            <span class="tag is-dark">Purchase mailboxes and migration fees</span>
          </div>
        </div>
        <br>
        <div class="control">
          <div class="tags has-addons">
            <span class="tag is-success"><b>2</b></span>
            <span class="tag is-dark">Change domain(s) on source account(s)</span>
          </div>
        </div>
        <br>
        <div class="control">
          <div class="tags has-addons">
            <span class="tag is-success"><b>3</b></span>
            <span class="tag is-dark">Setup email(s) in new GoDaddy account</span>
          </div>
        </div>
        <br>
        <div class="control">
          <div class="tags has-addons">
            <span class="tag is-success"><b>4</b></span>
            <span class="tag is-dark">Add all O365 DNS records</span>
          </div>
        </div>
      </div>
      <br>
        <!-- BEGIN - Back button -->
        <p class="buttons">
          <router-link to="/flow/prod/cya/cyaG" class="button is-small is-info">
            <span class="icon has-text-light">
              <i class="fas fa-chevron-left"></i>
            </span>
            <span>BACK</span>
          </router-link>
        </p>
        <!-- END - Back button -->

      <router-view/>
    </div>
    <!-- END Transfer PFC Checklist section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>

</script>

<style></style>