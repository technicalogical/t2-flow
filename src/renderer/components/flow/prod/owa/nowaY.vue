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
        <p>Is the status of the mailbox in <b>WOPR</b> in a setup status?</p>
      </div>

      <p class="buttons">

        <router-link to="/flow/prod/owa/nowaYy" class="button is-light is-small">
          <span class="icon has-text-success">
            <i id="itcolor" class="fas fa-chevron-circle-right"></i>
          </span>
          <span><b>Yes</b>. The status of the mailbox is in a setup status in <b>WOPR</b>.</span>
        </router-link>

        <router-link to="/flow/prod/owa/nowaYn" class="button is-light is-small">
          <span class="icon has-text-danger">
            <i id="itcolor" class="fas fa-chevron-circle-right"></i>
          </span>
          <span><b>No</b>. The status of the mailbox in <b>WOPR</b> is not setup.</span>
        </router-link>

      </p>

      <a href="https://wopr.int.secureserver.net/support.services/Support" target="_blank" title="Launch WOPR" class="button is-small is-dark">

        <span>Launch <b>WOPR</b></span>
      </a>
      <br>
      <br>

      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/prod/owa/nowa" class="button is-small is-info">
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
