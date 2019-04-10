<template>

  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck">

    <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p><b>503</b> Server Response Error</p>
      </div>
    <!-- END - Flow Title banner -->


    <!-- BEGIN 503 Error flow section -->
    <div class="content has-text-centered" id="flow">
      <div class="notification is-danger">
        <b>STOP HERE</b>.
      </div>
      <article class="message is-small is-info">
        <div class="message-body">
          <p>Advise the customer to reveiw their files further. There is an issue somewhere within the code of their website.</p>
        </div>
      </article>
      <article class="message is-small is-success">
        <div class="message-body">
          <p>Discuss possible upgrade to the hosting platform to meet the resource needs of the website. The customer may need <b>WPPS (Wordpress Premium Support)</b> if this is a Wordpress based website.</p>
        </div>
      </article>

      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/fiveothree/linux/LinYesYyesN" class="button is-small is-info">
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
