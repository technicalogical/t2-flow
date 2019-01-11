<template>
  <div id="flow-deck-two">
    
    <!-- BEGIN - 403 Website Errors Text -->
    <article id="wsod-message" class="message has-text-centered is-small">
      <div class="notification is-dark">
        <strong>403</strong> Website Error
      </div>
    </article>
    <!-- END - 403 Website Errors Text -->

    
    <!-- BEGIN 403 Error flow section -->
    <div class="content has-text-centered" id="flow">    
      <div class="notification is-danger">
        <strong>STOP HERE</strong>.
      </div>
      <article class="message is-info is-small">
        <div class="message-body">
          Advise the customer that they need to upload a valid index file to their hosting file strucutre for the website to load correctly.
        </div>
      </article>
      <router-link to="/SwatFlow" class="button is-dark is-fullwidth">Return to start</router-link>
      <router-view/>
    </div>
    <!-- END 403 Error flow section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>
export default {

}
</script>

<style></style>