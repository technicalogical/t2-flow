<template>

  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck">

    <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p><b>503</b> Server Response Error</p>
      </div>
    <!-- END - Flow Title banner -->


    <!-- BEGIN Plesk 503 Error flow section -->
    <div class="content has-text-centered" id="flow">
      <div class="notification is-danger">
        <b>STOP HERE</b>.
      </div>
      <article class="message is-info is-small">
        <div class="message-body">
          <p>Advise the customer that there may be issues with their code. They should reveiw their code further to prevent this from happening again.</p>
        </div>
      </article>
      <article class="message is-small is-success">
        <div class="message-body">
          <p>Discuss adding <b>website backups</b> to this hosting for the future. Show the customer where this function is located in their hosting so they may be able to resolve this issue on their own in the future.</p>
        </div>
      </article>

      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/fiveothree/win/WinYesY" class="button is-small is-info">
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
    <!-- END 503 Error flow section -->

  </div>
  <!-- END - Primary application deck -->

</template>

<script>
export default {

}
</script>

<style></style>
