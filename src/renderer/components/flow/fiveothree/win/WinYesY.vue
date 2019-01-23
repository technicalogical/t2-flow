<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="flow-deck">
    
    <!-- BEGIN - Plesk 503 Server response Error Text -->
    <article id="wsod-message" class="message is-small">
      <div class="notification is-dark has-text-centered">
        <strong>Plesk 503</strong> Server Response Error
      </div>
    </article>
    <!-- END - Plesk 503 Server response Error Text -->

    
    <!-- BEGIN Plesk 503 Error flow section -->
    <div class="content has-text-centered" id="flow">
      <div class="content is-medium">
        <p>Stop and Start the <strong>IIS App Pool</strong>. Is the site now able to load in browser?</p>
      </div>
      <p class="buttons">
          <router-link to="/flow/fiveothree/win/WinYesYyes" class="button is-light">
            <span class="icon has-text-success">
              <i class="fas fa-check-circle"></i>
            </span>
            <span><strong>Yes</strong>. The website now loads in browser</span>
          </router-link>  
          <router-link to="/flow/fiveothree/win/WinYesYno" class="button is-light">
            <span class="icon has-text-danger">
              <i class="fas fa-exclamation-circle"></i>
            </span>
            <span><strong>No</strong>. The website does not load in browser</span>
          </router-link>
        </p>

        <!-- BEGIN - Back button -->
        <p class="buttons">
          <router-link to="/flow/fiveothree/win/WinYes" class="button is-small is-info">
            <span class="icon has-text-light">
              <i class="fas fa-chevron-left"></i>
            </span>
            <span>BACK</span>
          </router-link>
        </p>
        <!-- END - Back button -->

      <router-view/>

    </div>
    <!-- END Plesk 503 Error flow section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>
export default {
  
}
</script>

<style></style>