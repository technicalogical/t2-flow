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

      <article class="message is-danger is-small">
        <div class="message-body">
          <p><b>DO NOT PROCEED WITHOUT PERMISSION</b></p>
          <p>Deleting the accounts and removing the domain could cause permanent loss of email.</p>
        </div>
      </article>

      <article class="message is-info is-small has-text-left">
        <div class="message-body">
          <p>Advised the customer to call back when they are able to sign in or they are willing to allow you to delete the accounts for them.</p>
        </div>
      </article>
      
      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/prod/du/duYyYy" class="button is-small is-info">
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