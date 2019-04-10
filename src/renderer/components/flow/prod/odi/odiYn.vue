<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="flow-deck">
    
      <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p><b>OneDrive</b> Sync Issues</p>
      </div> 
      <!-- END - Flow Title banner -->

    
    <!-- BEGIN section -->
    <div class="content has-text-centered" id="flow"> 

      <div class="notification is-danger">
        <strong>STOP HERE</strong>.
      </div>

      <article class="message is-info is-small">
        <div class="message-body">
          <p>Have the customer run the SARA tool.</p>
        </div>
      </article>

      <a href="https://diagnostics.office.com/#/?env=Maven" target="_blank" title="Launch SARA Tool" class="button is-small is-dark">
        <span><b>Launch SARA Tool</b></span>
      </a>
      <br>
      <br>

      <article class="message is-small has-text-left">
        <div class="message-body">
          <p>This can help troubleshoot sync issues and possibly give you next steps.</p>
          <p><b>If they run this and it doesn't help, move on to the next step.</b></p>
        </div>
      </article>

      <div id="mig-button" class="control">
        <router-link to="/flow/prod/odi/odiYy" class="tags has-addons">
          <span class="tag is-dark"><p><b>Continue</b> once these are completed</p></span>
          <span class="tag is-success"><i class="fas fa-chevron-circle-right"></i></span>
        </router-link>
      </div>
      
      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/prod/odi/odiY" class="button is-small is-info">
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