<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="flow-deck">
    
      <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
         <p><b>Outlook</b> Wont Setup | <span class="mdi mdi-windows"></span></p>
      </div> 
      <!-- END - Flow Title banner -->

    
    <!-- BEGIN section -->
    <div class="content has-text-centered" id="flow"> 

      <div class="notification is-danger">
        <strong>STOP HERE</strong>.
      </div>

      <article class="message is-info is-small">
        <div class="message-body">
          <p>If there are incorrect credentials save in the credential manager, that could be causing the issue.</p>
        </div>
      </article>

      <article class="message is-small">
        <div class="message-body">
          <p>Assist with clearing this out.</p>
          <p><b>If this doesn't help, move on to the next step.</b></p>
        </div>
      </article>
      <div id="mig-button" class="control">
        <router-link to="/flow/prod/ows/pc/owsPyY" class="tags has-addons">
          <span class="tag is-dark"><p><b>Continue</b> if this did not help</p></span>
          <span class="tag is-success"><i class="fas fa-chevron-circle-right"></i></span>
        </router-link>
      </div>
      
      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/prod/ows/pc/owsPy" class="button is-small is-info">
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