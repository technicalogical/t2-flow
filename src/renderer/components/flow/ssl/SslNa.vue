<template>
  <div id="flow-deck-two">
    
    <!-- BEGIN - SSL Website Errors Text -->
    <article id="wsod-message" class="message is-small">
      <div class="notification is-dark has-text-centered">
        <strong>SSL</strong> Website Error
      </div>
    </article>
    <!-- END - SSL Website Errors Text -->

    
    <!-- BEGIN SSL Website Errors section -->
    <div class="content has-text-centered" id="flow">    
      <div class="notification is-info">
        <strong>TIME TO TRANSFER</strong>.
      </div>
      <article class="message is-info is-small">
        <div class="message-body">
          You have done all that you can as a <strong>Tier 1</strong> agent. Advise your customer and transfer them to a <strong>Tier 2</strong> agent for further torubleshooting.
        </div>
      </article>

      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/ssl/SslN" class="button is-small is-info">
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
    <!-- END SSL Website Errors section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>
export default {

}
</script>

<style></style>