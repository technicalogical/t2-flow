<template>

  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck">

    <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p><b>Form Mail</b> Error</p>
      </div>
    <!-- END - Flow Title banner -->


    <!-- BEGIN Form mail Error flow section -->
    <div class="content has-text-centered" id="flow">
      <div class="content is-medium">
        <p>Upload <strong><a href="https://confluence.godaddy.com/display/C3PHS/General+-+Tools+-+Approved+Test+Scripts?preview=/20748053/95313257/geoff.php" target="_blank">geoff.php</a></strong> to the file structure and send yourself an email. Check <strong><a href="https://godaddy.splunkcloud.com/en-US/app/ahs/search" target="_blank">Splunk</a></strong> to see if the email sent.</p>
      </div>
      <p class="buttons">
          <router-link to="/flow/form/FormY" class="button is-light">
            <span class="icon has-text-success">
              <i class="fas fa-check-circle"></i>
            </span>
            <span><strong>Yes</strong>. The email does show in Splunk</span>
          </router-link>
          <router-link to="/flow/form/FormN" class="button is-light">
            <span class="icon has-text-danger">
              <i class="fas fa-exclamation-circle"></i>
            </span>
            <span><strong>No</strong>. The email doesn't show in Splunk</span>
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
    <!-- END Form mail Error flow section -->

  </div>
  <!-- END - Primary application deck -->

</template>

<script>
export default {

}
</script>

<style></style>
