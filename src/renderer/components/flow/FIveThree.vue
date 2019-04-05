<template>

  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck">

    <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p><b>503</b> Server Response Error</p>
      </div>
    <!-- END - Flow Title banner -->


    <!-- BEGIN 503 Error flow section -->
    <div class="content has-text-centered" id="flow">
      <div class="content is-medium">
        <p>Which platform is the customer's website Hosted on?</p>
      </div>
      <p class="buttons">
          <router-link to="/flow/fiveothree/mwp/MwpY" class="button is-dark is-small">
            <span class="icon has-text-success">
              <i class="fas fa-server"></i>
            </span>
            <span>Website is hosted on <b>Managed Wordpress</b></span>
          </router-link>
          <router-link to="/flow/fiveothree/linux/LinYes" class="button is-dark is-small">
            <span class="icon has-text-danger">
              <i class="fas fa-server"></i>
            </span>
            <span>Website is hosted on <b>Linux (Cpanel)</b></span>
          </router-link>
          <router-link to="/flow/fiveothree/win/WinYes" class="button is-dark is-small">
            <span class="icon has-text-info">
              <i class="fas fa-server"></i>
            </span>
            <span>Website is hosted on <b>Windows (Plesk)</b></span>
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
    <!-- END 503 Error flow section -->

  </div>
  <!-- END - Primary application deck -->

</template>

<script>
export default {

}
</script>

<style></style>
