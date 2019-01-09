<template>
<div id="flow-deck-two">
    
    <!-- 500 Error / WSOD Text -->
    <article id="wsod-message" class="message is-small">
      <div class="notification is-dark has-text-centered">
        <strong>500 Error / W.S.O.D. (White Screen of Death)</strong>
      </div>
    </article>
    <!-- END - 500 Error / WSOD Text -->

    
    <!-- BEGIN 500 Error flow section -->
    <div class="content" id="flow">    
      <div class="notification has-text-centered is-danger">
        <strong>STOP HERE</strong>.
      </div>
      <article class="message is-small is-info">
        <div class="message-body">
          Advise customer about possible temporary corruption of website files. 
        </div>
      </article>
      <article class="message is-small is-success">
        <div class="message-body">
          Discuss <strong>WSS (Website Security)</strong> if it is not already in the account.
        </div>
      </article>

      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/fivehundrederror/MwpYes" class="button is-small is-info">
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
    <!-- END 500 Error flow section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>
export default {
  
}
</script>

<style src="../../../flow-style.scss"></style>