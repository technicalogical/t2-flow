<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="flow-deck">
    
    <!-- BEGIN - Managed WordPress 503 Server response Error Text -->
    <article id="wsod-message" class="message is-small">
      <div class="notification is-dark has-text-centered">
        <strong>Managed WordPress</strong> 503 Server Response Error
      </div>
    </article>
    <!-- END - Managed WordPress 503 Server response Error Text -->

    
    <!-- BEGIN Managed WordPress 503 Error flow section -->
    <div class="content has-text-centered" id="flow">
      <div class="content is-medium">
        <p>Did the site come back with poor or less than desireable results?</p>
      </div>
      <p class="buttons">
          <router-link to="/flow/fiveothree/mwp/MwpYyesFinal" class="button is-light">
            <span class="icon has-text-success">
              <i class="fas fa-check-circle"></i>
            </span>
            <span><strong>Yes</strong>. The website is poorly optimized</span>
          </router-link>  
          <router-link to="/flow/fiveothree/mwp/MwpYnoFinal" class="button is-light">
            <span class="icon has-text-danger">
              <i class="fas fa-exclamation-circle"></i>
            </span>
            <span><strong>No</strong>. The website is properly optimized</span>
          </router-link>
        </p>
        <!-- BEGIN - Back button -->
        <p class="buttons">
          <router-link to="/flow/fiveothree/mwp/MwpY" class="button is-small is-info">
            <span class="icon has-text-light">
              <i class="fas fa-chevron-left"></i>
            </span>
            <span>BACK</span>
          </router-link>
        </p>
        <!-- END - Back button -->
      <router-view/>
    </div>
    <!-- END Managed WordPress 503 Error flow section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>
export default {
  
}
</script>

<style></style>