<template>
  <div id="flow-deck-two">
    
    <!-- BEGIN - 403 Website Errors Text -->
    <article id="wsod-message" class="message has-text-centered is-small">
      <div class="notification is-dark">
        <strong>403</strong> Website Error
      </div>
    </article>
    <!-- END - 403 Website Errors Text -->

    
    <!-- BEGIN 500 Error flow section -->
    <div class="content has-text-centered" id="flow">    
      <div class="notification is-info">
        <strong>TIME TO TRANSFER</strong>.
      </div>
      <article class="message is-info is-small">
        <div class="message-body">
          Transfer the customer to a <strong>Tier 2</strong> agent so that they can troubleshoot further.
        </div>
      </article>

      <!-- BEGIN - Back button -->
        <p class="buttons">
          <router-link to="/flow/fourothree/IndexYes" class="button is-small is-info">
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