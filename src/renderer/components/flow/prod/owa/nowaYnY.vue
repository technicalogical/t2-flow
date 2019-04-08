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
          <p>Check to make sure the status of  the domain in WOPR is s "setup" status. Check if the domain needs to continue setup in the WOPR tool.</p>
        </div>
      </article>

      <article class="message is-small has-text-left">
        <div class="message-body">
          <p>Bring to <b>ATS</b> chat if you are unable to get the domain in a setup status in the <b>WOPR</b> tool. In the pre-chat survey provide the shopper ID, the mailbox, in the issue description state</P>
          <p id="atschat"><b>"The domain is not showing setup status. I confirmed the TXT record is added to the DNS. I am unable to continue setup. Please advise."</b></p>
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

      <router-link to="/SwatFlow" class="button is-dark is-fullwidth">Return to start</router-link>

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
