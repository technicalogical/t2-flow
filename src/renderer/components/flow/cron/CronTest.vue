<template>

  <!-- BEGIN - Primary application deck -->
  <div id="flow-deck">

    <!-- START Opening comments for Swat Flow Chart -->
    <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <center><p><b>Cron Job</b> Test</p></center>
    </div>
    <!-- END Opening comments for Swat Flow Chart -->

    <!-- BEGIN Error flow section -->
    <div class="content has-text-centered" id="flow">
      <div class="content is-medium">
        <p>Test Cron by uploading test script <b>cron_test.php</b> and path to it. This creates a file in the same directory named <b>"crontest-[DATE]"</b> where [DATE] is the current date.</p>
        <p>Was the file created?</p>
      </div>
      <p class="buttons">
        <router-link to="/flow/cron/CronY" class="button is-light">
          <span class="icon has-text-success">
            <i id="itcolor" class="fas fa-play-circle"></i>
          </span>
          <span><p><b>Yes</b>. The file was created.</p></span>
        </router-link>
        <router-link to="/flow/cron/CronN" class="button is-light">
          <span class="icon has-text-success">
            <i id="itcolor" class="fas fa-play-circle"></i>
          </span>
          <span><p><b>No</b>. The file was not created.</p></span>
        </router-link>
      </p>

      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/toneFlow" class="button is-small is-info">
          <span class="icon has-text-light">
            <i class="fas fa-chevron-left"></i>
          </span>
          <span>BACK</span>
        </router-link>
      </p>
      <!-- END - Back button -->


      <router-view/>

    </div>
    <!-- END Error flow section -->

  </div>
  <!-- END - Primary application deck -->

</template>

<script>
export default {

}
</script>

<style></style>
