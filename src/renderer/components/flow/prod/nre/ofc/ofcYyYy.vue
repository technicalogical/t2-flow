<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="flow-deck">
    
      <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p>Not Receiving <b>Email</b> | <b>O365</b></p>
      </div> 
      <!-- END - Flow Title banner -->

    
    <!-- BEGIN section -->
    <div class="content has-text-centered" id="flow"> 

      <div class="notification is-danger">
        <strong>STOP HERE</strong>.
      </div>

      <article class="message is-info is-small">
        <div class="message-body">
          <p>If recent emails are showing up in the message trace, that means they are receiving emails.</p>
        </div>
      </article>

      <article class="message is-small has-text-left">
        <div class="message-body">
          <p><b>Delivered =</b> The email was delivered to the Inbox or another folder if there are inbox rules.</p>
          <p><b>Resolved =</b> The email was forwarded to another address. If they don't see it in the inbox, they've designated not to keep a copy on the server.</p>
          <p><b>Filtered as Spam =</b> It was filtered to the Junk Mail folder</p>
          <p><b>Rejected =</b> The email was rejected by our server and the sender should have received a bounce back message.</p>
        </div>
      </article>
      
      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/prod/nre/ofc/ofcYyY" class="button is-small is-info">
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