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

      <div class="notification is-danger">
        <strong>STOP HERE</strong>.
      </div>

      <article class="message is-info is-small">
        <div class="message-body">
          <p>Check the Country on the shopper address, the market, the language , the billing address, and the recipient's address. Most likely it will not match</p>
        </div>
      </article>

      <article class="message is-small has-text-left">
        <div class="message-body">
          <p>Go to <b>ATS</b> chat with the shopper ID, the mailbox, the correct country address, and state in the issue description</p>
          <p id="atschat"><b>"The Org is in error in the WOPR tool. I have confirmed the correct country is supposed to be XX. Please advise with next steps."</b></p>
        </div>
      </article>

      <a href="https://wopr.int.secureserver.net/support.services/Support" target="_blank" title="Launch WOPR" class="button is-small is-dark">
        <span><b>Launch WOPR</b></span>
      </a>
      <br>
      <br>

      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/prod/owa/nowaYn" class="button is-small is-info">
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
    <!-- END section -->

  </div>
  <!-- END - Primary application deck -->

</template>

<script>
export default {

}
</script>

<style>

#atschat {
  -webkit-app-region: no-drag;
}

</style>
