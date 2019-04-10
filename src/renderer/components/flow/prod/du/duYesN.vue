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

      <article class="message is-info is-small">
        <div class="message-body">
          <p>Double check to make sure all of the emails have been successfully deleted from the <b>GoDaddy</b> account.</p>
        </div>
      </article>

      <article class="message is-small has-text-left">
        <div class="message-body">
          <p>Wait a few minutes and refresh <b>WOPR</b>. This should update them to delete status and you should be able to click the red trash can.</p>
        </div>
      </article>

       <a href="https://wopr.int.secureserver.net/support.services/Support" target="_blank" title="Launch WOPR account lookup" class="button is-small is-dark">
        <span><b>Launch WOPR</b></span>
      </a>
      <br>
      <br>
      
      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/prod/du/duYes" class="button is-small is-info">
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