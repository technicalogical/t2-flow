<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="flow-deck">
    
    <!-- START Opening comments for Swat Flow Chart -->
    <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <center><p><b>General</b> WordPress  Support</p></center>
    </div>
    <!-- END Opening comments for Swat Flow Chart -->

    <!-- BEGIN Error flow section -->
    <div class="content has-text-centered" id="flow">
      <div class="content is-medium">
        <p>What is the WordPress issue?</p>
      </div>
      <p class="buttons">
        <router-link to="/flow/ib/wp/ibWpSw" class="button is-light">
          <span class="icon has-text-success">
            <i id="itcolor" class="fas fa-play-circle"></i>
          </span>
          <span><p><b>White screen</b> in browser.</p></span>
        </router-link>  
        <router-link to="/flow/ib/wp/ibWpSn" class="button is-light">
          <span class="icon has-text-success">
            <i id="itcolor" class="fas fa-play-circle"></i>
          </span>
          <span><p>Cannot access <b>wp-admin</b>.</p></span>
        </router-link>
        <router-link to="/flow/ib/wp/ibWpSs" class="button is-light">
          <span class="icon has-text-success">
            <i id="itcolor" class="fas fa-play-circle"></i>
          </span>
          <span><p><b>Slow site</b> issue.</p></span>
        </router-link>
      </p>

      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/ib/wp/ibWp" class="button is-small is-info">
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