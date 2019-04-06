<template>

  <!-- BEGIN - Primary application deck -->
  <div id="flow-deck">

      <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p>Cannot Login into <b>OWA</b></p>
      </div>
      <!-- END - Flow Title banner -->


    <!-- BEGIN section -->
    <div class="content has-text-centered" id="flow">

      <div class="notification is-danger">
        <strong>STOP HERE</strong>.
      </div>

      <article class="message is-info is-small">
        <div class="message-body">
          <p>If you have tried all of the previous steps and the customer cannot log into <b>OWA</b> do the following. Get a full page screenshot of the error message the customer is getting when attempting to log into OWA using a private browsing sessions. Go to <b>ATS</b> chat and provide the Shopper ID, mailbox, in the issue description state</p>
        </div>
      </article>

      <article class="message is-small has-text-left">
        <div class="message-body">
          <p id="atschat"><b>"Customer unable to log into OWA. Getting an error message after they enter in their credentials. Confirmed DNS is good, mailbox is setup, there is not a login lock, customer reset password and I have sent to apsupport@godaddy.com a full page screenshot within a private browser."</b></p>
        </div>
      </article>

      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/prod/owa/nowaYyNy" class="button is-small is-info">
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
    <!-- END section -->

  </div>
  <!-- END - Primary application deck -->

</template>

<script>
export default {

}
</script>

<style></style>
