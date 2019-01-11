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
      <div class="notification is-danger">
        <strong>STOP HERE</strong>.
      </div>
      <article class="message is-info is-small">
        <div class="message-body">
          Advise the customer to <strong>rekey and reinstall</strong> the SSL certificate. 
        </div>
      </article>
      <article class="message is-small is-danger">
        <div class="message-body">
          <strong>SSL processes can take up to 24-72 hrs to complete</strong>
        </div>
      </article>
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