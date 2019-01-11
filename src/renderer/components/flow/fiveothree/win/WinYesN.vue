<template>
  <div id="flow-deck-two">
    
    <!-- BEGIN - Plesk 503 Server response Error Text -->
    <article id="wsod-message" class="message is-small">
      <div class="notification is-dark has-text-centered">
        <strong>Plesk 503</strong> Server Response Error
      </div>
    </article>
    <!-- END - Plesk 503 Server response Error Text -->

    
    <!-- BEGIN Plesk 503 Error flow section -->
    <div class="content has-text-centered" id="flow">    
      <div class="notification is-info">
        <strong>TIME TO TRANSFER</strong>.
      </div>
      <article class="message is-info is-small">
        <div class="message-body">
          You have done everything that you can as a <strong>Tier 1</strong> agent. Advise the customer that you will be transfering the call to a <strong>Tier 2</strong> agent for further troubleshooting.
        </div>
      </article>

      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/fiveothree/win/WinYes" class="button is-small is-info">
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
    <!-- END Plesk 503 Error flow section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>
export default {

}
</script>

<style></style>