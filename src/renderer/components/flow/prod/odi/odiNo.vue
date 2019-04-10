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
          <p>The customer can attempt to reset OneDrive by following these steps</p>
        </div>
      </article>

      <a href="https://www.thewindowsclub.com/reset-onedrive-in-windows-10" target="_blank" title="Steps to Reset OneDrive" class="button is-small is-dark">
        <span><b>Reset OneDrive</b></span>
      </a>
      <br>
      <br>

      <article class="message is-small has-text-left">
        <div class="message-body">
          <p><b>Make sure they know that you will not walk them through this as this part is out of scope.</b></p>
        </div>
      </article>
      
      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/prod/odi/odiYyYy" class="button is-small is-info">
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