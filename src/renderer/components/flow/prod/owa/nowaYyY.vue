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
          <p>Use the <b>Central Auth tool</b> to unlock the login locks</p>
        </div>
      </article>

      <article class="message is-small">
        <div class="message-body">
          <p>Have the customer open a brand new private browser and attempt to login again.</p>
        </div>
      </article>

      <a href="https://sso.godaddy.com/tools/loginlock/" target="_blank" title="Launch Central Auth Tool" class="button is-small is-dark">
        <span><b>Launch Central Auth Tool</b></span>
      </a>
      <br>
      <br>

      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/prod/owa/nowaYy" class="button is-small is-info">
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
