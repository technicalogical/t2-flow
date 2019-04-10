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
          <p>Anything relating to tutorials or showing a customer how to use a product is not a valid transfer.</p>
        </div>
      </article>

      <article class="message is-small has-text-left">
        <div class="message-body">
          <p>You can refer to <b>GoDaddy Help Pages</b> for articles to send to the customer.</p>
        </div>
      </article>

      <a href="https://www.godaddy.com/help" target="_blank" title="GoDaddy HELP" class="button is-small is-dark">
        <span><b>Go To GoDaddy HELP</b></span>
      </a>
      <br>
      <br>
      
      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/prod/mtt/mttY" class="button is-small is-info">
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