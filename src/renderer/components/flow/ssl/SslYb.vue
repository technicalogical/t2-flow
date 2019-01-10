<template>
  <div id="flow-deck-two">
    
    <!-- SSL Website Errors Text -->
    <article id="wsod-message" class="message is-danger">
      <div class="notification is-danger">
        <strong>SSL</strong> Website Error
      </div>
    </article>
    <!-- END - SSL Website Errors Text -->

    
    <!-- BEGIN SSL Website Errors section -->
    <div class="content has-text-centered" id="flow">    
      <div class="notification is-danger">
        <strong>STOP HERE</strong>.
      </div>
      <article class="message is-info">
        <div class="message-body">
          Advise that due to the <strong>third party</strong> nature of the certificate they will need to troubleshoot to resolve the issue with the SSL.
        </div>
      </article>

      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/ssl/SslY" class="button is-small is-info">
          <span class="icon has-text-light">
            <i class="fas fa-chevron-left"></i>
          </span>
          <span>BACK</span>
        </router-link>
      </p>
      <!-- END - Back button -->

      <article class="message is-success">
        <div class="message-body">
          Offer <strong>HELP</strong> documentation for the customer to follow while troubleshooting the SSL.
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