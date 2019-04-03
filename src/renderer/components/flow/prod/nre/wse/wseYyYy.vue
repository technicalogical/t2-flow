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
          <p>If recent emails are showing up in the Workspace Email Tool, that means they are successfully receiving emails.</p>
        </div>
      </article>

      <a href="https://emailmanager.int.godaddy.com/user_info.php?infolevel=20&showAllAddresses=0&page_action=user_info&email_address=?infolevel=20&showAllAddresses=0&page_action=user_info&email_address=?infolevel=20&showAllAddresses=0&page_action=user_info&email_address=?infolevel=20&showAllAddresses=0&page_action=user_info&email_address=" target="_blank" title="Workspace Email Tool" class="button is-small is-dark">
        <span><b>Launch Workspace Email Tool</b></span>
      </a>
      <br>
      <br>

      <article class="message is-small has-text-left">
        <div class="message-body">
          <p>If they still don't see them, they very well could have a setting causing an issue such as but not limited to:</p>
          <p><b>Filtered by From, Subject, Date (Inverted), or Size.</b></p>
          <p><b>Filtered by Preferred or Not Preferred.</b></p>
        </div>
      </article>
      
      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/prod/nre/wse/wseYyY" class="button is-small is-info">
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