<template>

  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck">

    <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p><b>FTP</b> (File Transfer Protocol) Support</p>
      </div>
    <!-- END - Flow Title banner -->


    <!-- BEGIN - flow section -->
    <div class="content has-text-centered" id="flow">
      <div class="notification is-info">
        <strong>Managed WordPress FTP User</strong>.
      </div>
      <article class="message is-info is-small">
        <div class="message-body">
          <p>Advise the customer that SFTP is the only option for Managed WordPress. They can find the login on the MWP settings page. They can not create multiple user. They can update the password here if needed.</p>
        </div>
      </article>

      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/ftp/create/Cftp" class="button is-small is-info">
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
    <!-- END - flow section -->

  </div>
  <!-- END - Primary application deck -->

</template>

<script>
export default {

}
</script>

<style></style>
