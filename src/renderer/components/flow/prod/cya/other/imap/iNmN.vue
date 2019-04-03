<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="flow-deck">
    
      <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p>Choose Your Adventure: <b>3rd Party IMAP</b></p>
      </div> 
      <!-- END - Flow Title banner -->

    
    <!-- BEGIN section -->
    <div class="content has-text-centered" id="flow"> 

      <div class="notification is-danger">
        <strong>STOP HERE</strong>.
      </div>

      <article class="message is-info is-small">
        <div class="message-body">
          <p>Use the 3rd Party IMAP tab in the <b>MaaS Tool</b> (x.co/maastool) and load the cart for each migrating domain.</p>
          <p>Be sure to process the entire migration on the same receipt.</p>
        </div>
        <a href="http://x.co/maastool" target="_blank" id="ibcolor" title="Launch MaaS Tool" class="button is-small is-info">
          <span class="icon is-medium">
            <i class="far fa-envelope-open"></i>
          </span>
          <span><b>MaaS Tool</b></span>
        </a>
      </article>

      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/prod/cya/other/imap/iNm" class="button is-small is-info">
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