<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="flow-deck">
    
    <!-- START Opening comments for Swat Flow Chart -->
    <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <center><p><b>503</b> Error <b>Managed WordPress</b></p></center>
    </div>
    <!-- END Opening comments for Swat Flow Chart -->

    <!-- BEGIN Error flow section -->
    <div class="content has-text-centered" id="flow">
      <div class="content is-medium">
        <p>Run the website through a speed test. Does it return any results?</p>
      </div>
      <p class="buttons">
        <router-link to="/flow/ib/fiveothreeerror/ibMwpY" class="button is-light">
          <span class="icon has-text-link">
            <i id="itcolor" class="fas fa-play-circle"></i>
          </span>
          <span><b>Yes</b>. It returns results.</span>
        </router-link>  
        <router-link to="/flow/ib/fiveothreeerror/ibMwpN" class="button is-light">
          <span class="icon has-text-info">
            <i id="itcolor" class="fas fa-play-circle"></i>
          </span>
          <span><b>No</b>. It does not return results.</span>
        </router-link>
      </p>

      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/ib/fiveothreeerror/ibFiveThree" class="button is-small is-info">
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