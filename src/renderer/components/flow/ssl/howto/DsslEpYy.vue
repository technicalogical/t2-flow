<template>
  <div id="flow-deck-two">
    
    <!-- BEGIN - SSL Website Errors Text -->
    <article id="wsod-message" class="message is-small">
      <div class="notification is-dark has-text-centered">
        <strong>SSL</strong> Product Setup
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
         		Advise the customer that certificate is setup and functioning as intended however they are not currently forcing redirection to https.
        </div>
      </article>
      <article class="message is-success is-small">
        <div class="message-body">
         	  Consult on moving the customer over to an <strong>ESSL (Easy SSL)</strong> to avoid this in the future. Consult on <strong>WPPS</strong> to help correct this if it is a WordPress base website. Consult on <strong>expert service</strong> for .htaccess redirect for non WordPress based websites.
        </div>
      </article>

      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/ssl/howto/DsslEpY" class="button is-small is-info">
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

</script>

<style></style>