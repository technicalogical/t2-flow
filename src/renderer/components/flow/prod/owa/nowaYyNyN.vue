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
          <p>Provide the customer with steps on how to try logging in using a private browsing session depending on their browser they are using.</p>
        </div>
      </article>

      <article class="message is-small">
        <div class="message-body">
          <p><b>If that is not successful continue to next steps.</b></p>
        </div>
      </article>

      <div id="mig-button" class="control">
        <router-link to="/flow/prod/owa/nowaYyNyY" class="tags has-addons">
          <span class="tag is-dark"><p><b>Continue</b> once this is completed</p></span>
          <span class="tag is-success"><i class="fas fa-chevron-circle-right"></i></span>
        </router-link>
      </div>

      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/prod/owa/nowaYyNy" class="button is-small is-info">
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

<style></style>
