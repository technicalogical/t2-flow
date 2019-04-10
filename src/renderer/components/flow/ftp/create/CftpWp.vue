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
        <strong>Create Plesk FTP User</strong>.
      </div>
      <article class="message is-info is-small">
        <div class="message-body">
          <p>From the Plesk admin page click the "show more" tab to see all of the available icons. Click on the "FTP Accounts" icon to create a new Plesk FTP user.</p>
        </div>
      </article>
      <a href="https://www.godaddy.com/help/add-ftp-users-in-plesk-hosting-16048" target="_blank" class="tags has-addons">
        <span class="tag is-success"><i class="mdi mdi-library-books mdi-18px"></i></span>
        <span class="tag is-dark">GoDaddy HELP article for Plesk FTP</span>
      </a>

      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/ftp/create/CftpW" class="button is-small is-info">
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
