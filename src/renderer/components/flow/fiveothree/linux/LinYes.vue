<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="flow-deck">
    
    <!-- BEGIN - cPanel 503 Server response Error Text -->
    <article id="wsod-message" class="message is-small">
      <div class="notification is-dark has-text-centered">
        <strong>cPanel 503</strong> Server Response Error
      </div>
    </article>
    <!-- END - cPanel 503 Server response Error Text -->

    
    <!-- BEGIN 503 Error flow section -->
    <div class="content has-text-centered" id="flow">
      <div class="content is-medium">
        <p>Is <strong>cPanel</strong> Dashboard accessible?</p>
      </div>
      <p class="buttons">
          <router-link to="/flow/fiveothree/linux/LinYesY" class="button is-light">
            <span class="icon has-text-success">
              <i class="fas fa-check-circle"></i>
            </span>
            <span><strong>Yes</strong>. The cPanel dashboard is accessible</span>
          </router-link>  
          <router-link to="/flow/fiveothree/linux/LinYesN" class="button is-light">
            <span class="icon has-text-danger">
              <i class="fas fa-exclamation-circle"></i>
            </span>
            <span><strong>No</strong>. The cPanel dashboard is not accessible</span>
          </router-link>
        </p>
      	<!-- BEGIN - Back button -->
        <p class="buttons">
          <router-link to="/flow/FiveThree" class="button is-small is-info">
            <span class="icon has-text-light">
              <i class="fas fa-chevron-left"></i>
            </span>
            <span>BACK</span>
          </router-link>
        </p>
        <!-- END - Back button -->
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