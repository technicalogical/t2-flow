<template>
  <div id="swat-deck">
    
    <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p><b>500 Error</b> / W.S.O.D. (White Screen of Death)</p>
      </div> 
    <!-- END - Flow Title banner -->

    
    <!-- BEGIN 500 Error flow section -->
    <div class="content has-text-centered" id="flow">    
      <div class="notification is-danger">
        <b>STOP HERE</b>.
      </div>
      <article class="message is-small is-success">
        <div class="message-body">
          Sell <b>WPPS (Wordpress Premium Support)</b> in order to help customer fix plugin and/or theme issues.
        </div>
      </article>

      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/fivehundrederror/MwpYesNoNo" class="button is-small is-info">
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

<style></style>