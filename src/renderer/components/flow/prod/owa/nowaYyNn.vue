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
          <p>Use the System Notes in <b>CRM</b> to confirm if customer has tried resetting the password</p>
        </div>
      </article>

      <article class="message is-small">
        <div class="message-body">
          <p><b>Provide the customer with these steps to reset the O365 password.</b></p>
        </div>
      </article>

      <a href="https://www.godaddy.com/help/change-a-users-email-password-9270" target="_blank" title="Office 365 from GoDaddy Help" class="button is-small is-dark">
        <span>Launch <b>Office 365 from GoDaddy</b> HELP article</span>
      </a>
      <br>
      <br>

      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/prod/owa/nowaYyN" class="button is-small is-info">
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
