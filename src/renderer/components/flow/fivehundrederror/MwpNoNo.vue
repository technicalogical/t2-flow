<template>
  <div id="swat-deck">

    <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p><b>500 Error</b> / W.S.O.D. (White Screen of Death)</p>
      </div>
    <!-- END - Flow Title banner -->


    <!-- BEGIN 500 Error flow section -->
    <div class="content has-text-centered" id="flow">
      <div class="notification is-danger">
        <b>STOP HERE</b>.
      </div>
      <article class="message is-small is-success">
        <div class="message-body">
          Sell <b>WSS (Website Security)</b>. Customer needs to address the malicious files in their website.
        </div>
        <br>
        <div class="message-body">
          The customer may also need <b>WPPS (Website Premium Support)</b> for fixing broken files after the clean up.
        </div>
      </article>
      <router-link to="/FlowIndex" class="button is-dark is-fullwidth">Return to start</router-link>
      <router-view/>
    </div>
    <!-- END 500 Error flow section -->

  </div>
  <!-- END - Primary application deck -->

</template>

<script>
export default {

}
</script>

<style></style>
