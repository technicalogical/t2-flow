<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="flow-deck">
    
      <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p>Not Receiving <b>Email</b> | <b>Workspace</b></p>
      </div> 
      <!-- END - Flow Title banner -->

    
    <!-- BEGIN section -->
    <div class="content has-text-centered" id="flow"> 

      <div class="notification is-danger">
        <strong>STOP HERE</strong>.
      </div>

      <article class="message is-info is-small">
        <div class="message-body">
          <p>Have the customer check the Junk folder to see if there are recent emails</p>
          <p>If they see the emails in there, <b>Congrats!</b> Problem solved.</p>
        </div>
      </article>

      <article class="message is-small">
        <div class="message-body">
          <p>If the Junk folder is empty, continue to the next step.</p>
        </div>
      </article>
      <div id="mig-button" class="control">
        <router-link to="/flow/prod/nre/wse/wseYy" class="tags has-addons">
          <span class="tag is-dark"><p><b>Continue</b> if the junk folder is empty</p></span>
          <span class="tag is-success"><i class="fas fa-chevron-circle-right"></i></span>
        </router-link>
      </div>
      
      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/prod/nre/wse/wseY" class="button is-small is-info">
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