<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="flow-deck">
    
      <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p>Unable To Install <b>Office</b></p>
      </div> 
      <!-- END - Flow Title banner -->

    
    <!-- BEGIN section -->
    <div class="content has-text-centered" id="flow"> 

      <div class="notification is-danger">
        <strong>STOP HERE</strong>.
      </div>

      <article class="message is-info is-small">
        <div class="message-body">
          <p>Have the customer run the <b>SARA tool</b></p>
        </div>
      </article>

      <a href="https://diagnostics.office.com/#/?env=Maven" target="_blank" title="Launch SARA Tool" class="button is-small is-dark">
        <span><b>Launch SARA Tool</b></span>
      </a>
      <br>
      <br>

      <article class="message is-small has-text-left">
        <div class="message-body">
          <p><b>This will assist with installing the Office license.</b></p>
          <p><b>If it fails, take your findings to ATS. They will need a screenshot of the error if available.</b></p>
        </div>
      </article>
      
      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/prod/uio/uioYyYn" class="button is-small is-info">
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