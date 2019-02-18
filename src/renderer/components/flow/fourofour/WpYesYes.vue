<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck">
    
    <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p><b>404</b> Website Error</p>
      </div> 
    <!-- END - Flow Title banner -->

    
    <!-- BEGIN 404 Error flow section -->
    <div class="content has-text-centered" id="flow">
      <div class="content is-medium">
        <p>Is the home page the only page that loads?</p>
      </div>
      <p class="buttons">
          <router-link to="/flow/fourofour/WpYesYesFinal" class="button is-light">
            <span class="icon has-text-success">
              <i class="fas fa-check-circle"></i>
            </span>
            <span><strong>Yes</strong>. Only the home page loads</span>
          </router-link>  
          <router-link to="/flow/fourofour/WpYesYesNo" class="button is-light">
            <span class="icon has-text-danger">
              <i class="fas fa-exclamation-circle"></i>
            </span>
            <span><strong>No</strong>. None of the pages load</span>
          </router-link>
        </p>
      
        <!-- BEGIN - Back button -->
        <p class="buttons">
          <router-link to="/flow/fourofour/WpYes" class="button is-small is-info">
            <span class="icon has-text-light">
              <i class="fas fa-chevron-left"></i>
            </span>
            <span>BACK</span>
          </router-link>
        </p>
        <!-- END - Back button -->

      <router-view/>
    </div>
    <!-- END 404 Error flow section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>
export default {
  
}
</script>

<style></style>