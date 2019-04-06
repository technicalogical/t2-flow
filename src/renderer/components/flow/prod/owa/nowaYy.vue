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

      <div class="content is-medium">
        <p>Is there a lock showing when you search the username inside the <b>Central Auth tool</b></p>
      </div>

      <p class="buttons">

        <router-link to="/flow/prod/owa/nowaYyN" class="button is-light is-small">
          <span class="icon has-text-success">
            <i id="itcolor" class="fas fa-chevron-circle-right"></i>
          </span>
          <span><b>No</b>. There is not a Login lock showing in the Central Auth tool.</span>
        </router-link>

        <router-link to="/flow/prod/owa/nowaYyY" class="button is-light is-small">
          <span class="icon has-text-danger">
            <i id="itcolor" class="fas fa-chevron-circle-right"></i>
          </span>
          <span><b>Yes</b>. There is a lock showing in the Central Auth tool.</span>
        </router-link>

      </p>

      <a href="https://sso.godaddy.com/tools/loginlock/" target="_blank" title="Launch Central Auth Tool" class="button is-small is-dark">

        <span>Launch <b>Central Auth Tool</b></span>
      </a>
      <br>
      <br>

      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/prod/owa/nowaY" class="button is-small is-info">
          <span class="icon has-text-light">
            <i class="fas fa-chevron-left"></i>
          </span>
          <span>BACK</span>
        </router-link>
      </p>
      <!-- END - Back button -->

      <router-view/>

    </div>
    <!-- END flow section -->

  </div>
  <!-- END - Primary application deck -->

</template>

<script>

</script>

<style></style>
