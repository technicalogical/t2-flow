<template>

  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck">

    <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p><b>FTP</b> (File Transfer Protocol) Support</p>
      </div>
    <!-- END - Flow Title banner -->


    <!-- BEGIN Form mail Error section -->
    <div class="content has-text-centered" id="flow">
      <div class="notification is-danger">
        <strong>STOP HERE</strong>
      </div>
      <article class="message is-info is-small">
        <div class="message-body">
          <p>Advise the customer that the issue is with the local ISP. The customer will need to address the issue with them. Advise to use the trace route as an example for the ISP.</p>
        </div>
      </article>

      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/ftp/troubleshoot/TftpNnNnN" class="button is-small is-info">
          <span class="icon has-text-light">
            <i class="fas fa-chevron-left"></i>
          </span>
          <span>BACK</span>
        </router-link>
      </p>
      <!-- END - Back button -->

      <router-link to="/FlowIndex" class="button is-dark is-fullwidth">Return to start</router-link>
      <router-view/>
    </div>
    <!-- END Form mail Error section -->

  </div>
  <!-- END - Primary application deck -->

</template>

<script>
export default {

}
</script>

<style></style>
