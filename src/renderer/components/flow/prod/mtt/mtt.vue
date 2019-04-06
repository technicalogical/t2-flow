<template>

  <!-- BEGIN - Primary application deck -->
  <div id="flow-deck">

      <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p><b>Mig Team Transfer</b> | Pre-Flight Checklist</p>
      </div>
      <!-- END - Flow Title banner -->

    <!-- BEGIN section -->
    <div class="content has-text-centered" id="flow">

      <div class="content is-medium">
        <p>Have you validated into the account, confirmed a migration was purchased, and checked the status of the migration?</p>
      </div>

      <p class="buttons">

        <router-link to="/flow/prod/mtt/mttY" class="button is-light">
          <span class="icon has-text-success">
            <i id="itcolor" class="fas fa-chevron-circle-right"></i>
          </span>
          <span><b>Yes</b>. All 3 have been completed.</span>
        </router-link>

        <router-link to="/flow/prod/mtt/mttN" class="button is-light">
          <span class="icon has-text-danger">
            <i id="itcolor" class="fas fa-chevron-circle-right"></i>
          </span>
          <span><b>No</b>. One or more have not been completed.</span>
        </router-link>

      </p>

      <div class="content is-medium">
        <p>How do I check the status of a Migration?</p>
      </div>

      <p class="buttons">

        <router-link to="/flow/prod/mtt/mttMaaS" class="button is-light">
          <span class="icon has-text-success">
            <i id="itcolor" class="fas fa-chevron-circle-right"></i>
          </span>
          <span><b>MaaS</b> Migration.</span>
        </router-link>

        <router-link to="/flow/prod/mtt/mttManual" class="button is-light">
          <span class="icon has-text-danger">
            <i id="itcolor" class="fas fa-chevron-circle-right"></i>
          </span>
          <span><b>Manual</b> Migration.</span>
        </router-link>

      </p>

      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/FlowIndex" class="button is-small is-info">
          <span class="icon has-text-light">
            <i class="fas fa-chevron-left"></i>
          </span>
          <span>BACK</span>
        </router-link>
      </p>
      <!-- END - Back button -->

      <router-view/>

    </div>
    <!-- END flow section -->

  </div>
  <!-- END - Primary application deck -->

</template>

<script>

</script>

<style></style>
