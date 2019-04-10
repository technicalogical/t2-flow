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
        <strong>Create 4gh FTP User</strong>.
      </div>
      <article class="message is-info is-small">
        <div class="message-body">
          <p>From the Hosting Details page go to FTP Users. Here the customer will be able to create additional FTP users.</p>
        </div>
      </article>
      <article class="message is-danger is-small">
        <div class="message-body">
          <p>This will trigger an Orion event. Advise the customer of the expected time frame for completion of this process.</p>
        </div>
      </article>
      <a href="https://www.godaddy.com/help/add-ftp-users-in-web-and-classic-hosting-1236?" target="_blank" class="tags has-addons">
        <span class="tag is-success"><i class="mdi mdi-library-books mdi-18px"></i></span>
        <span class="tag is-dark">GoDaddy HELP article for 4gh FTP</span>
      </a>
      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/ftp/create/CftpL" class="button is-small is-info">
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
