<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="flow-deck">
    
    <!-- START Opening comments for Swat Flow Chart -->
    <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <center><p>General <b>Migration</b> Support</p></center>
    </div>
    <!-- END Opening comments for Swat Flow Chart -->

    <!-- BEGIN Error flow section -->
    <div class="content has-text-centered" id="flow">
      <div class="content">
        <p>Have the customer verify if all of the correct content has been moved over.</p> 
        <p><b>Remember to check DNS before continuing</b>.</p> 
        <p>Are all the correct files and DBs present and accounted for?</p>

      </div>
      <p class="buttons">
        <router-link to="/flow/mig/closed/clY" class="button is-light">
          <span class="icon has-text-success">
            <i id="itcolor" class="fas fa-play-circle"></i>
          </span>
          <span><p><b>Yes</b>. All files are present.</p></span>
        </router-link>  
        <router-link to="/flow/mig/closed/clN" class="button is-light">
          <span class="icon has-text-success">
            <i id="itcolor" class="fas fa-play-circle"></i>
          </span>
          <span><p><b>No</b>. All files are not present.</p></span>
        </router-link>
      </p>

      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/mig/closed/cFirst" class="button is-small is-info">
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