<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="flow-deck">
    
    <!-- BEGIN - 404 Website Error Text -->
    <article id="wsod-message" class="message is-small has-text-centered">
      <div class="notification is-dark">
        <strong>404</strong> Website Error
      </div>
    </article>
    <!-- END - 404 Website Error Text -->

    
    <!-- BEGIN 404 Error flow section -->
    <div class="content has-text-centered" id="flow">
      <div class="content is-medium">
        <p>Is there a valid .htaccess file present?</p>
      </div>
      <p class="buttons">
          <router-link to="/flow/fourofour/WpYesYes" class="button is-light">
            <span class="icon has-text-success">
              <i class="fas fa-check-circle"></i>
            </span>
            <span><strong>Yes</strong>. There is an .htaccess file.</span>
          </router-link>  
          <router-link to="/flow/fourofour/WpYesNo" class="button is-light">
            <span class="icon has-text-danger">
              <i class="fas fa-exclamation-circle"></i>
            </span>
            <span><strong>No</strong>. The .htaccess file is not present</span>
          </router-link>
        </p>

        <!-- BEGIN - Back button -->
        <p class="buttons">
          <router-link to="/flow/FourFour" class="button is-small is-info">
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