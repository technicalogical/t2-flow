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
          <p>Have the customer try to run an <b>Online Repair</b> through the control panel.</p>
        </div>
      </article>

      <a href="https://support.office.com/en-gb/article/repair-an-office-application-7821d4b6-7c1d-4205-aa0e-a6b40c5bb88b" target="_blank" title="Launch Online Repair" class="button is-small is-dark">
        <span><b>Launch Online Repair</b></span>
      </a>
      <br>
      <br>

      <article class="message is-small">
        <div class="message-body">
          <p><b>This process can take a while, so don't wait on the phone with them.</b></p>
        </div>
      </article>
      
      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/prod/ows/pc/owsPyYyY" class="button is-small is-info">
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