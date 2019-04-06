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
        <p>Is DNS pointing to the correct O365 settings?</p>
      </div>

      <p class="buttons">

        <router-link to="/flow/prod/owa/nowaY" class="button is-light">
          <span class="icon has-text-success">
            <i id="itcolor" class="fas fa-chevron-circle-right"></i>
          </span>
          <span><b>Yes</b>. They have the correct O365 DNS.</span>
        </router-link>

        <router-link to="/flow/prod/owa/nowaN" class="button is-light">
          <span class="icon has-text-danger">
            <i id="itcolor" class="fas fa-chevron-circle-right"></i>
          </span>
          <span><b>No</b>. They are not using the correct DNS.</span>
        </router-link>

      </p>

      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/FlowIndex" class="button is-small is-info">
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
