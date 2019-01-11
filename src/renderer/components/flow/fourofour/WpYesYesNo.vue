<template>
  <div id="flow-deck-two">
    
    <!-- BEGIN - 404 Website Error Text -->
    <article id="wsod-message" class="message is-small has-text-centered">
      <div class="notification is-dark">
        <strong>404</strong> Website Error
      </div>
    </article>
    <!-- END - 404 Website Error Text -->

    
    <!-- BEGIN 404 Error flow section -->
    <div class="content has-text-centered" id="flow">    
      <div class="notification is-info">
        <strong>TIME TO TRANSFER</strong>.
      </div>
      <article class="message is-info is-small">
        <div class="message-body">
          Transfer customer to a <strong>Teir 2</strong> agent for further troubleshooting.
        </div>
      </article>

      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/fourofour/WpYesYes" class="button is-small is-info">
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
    <!-- END 404 Error flow section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>
export default {

}
</script>

<style></style>