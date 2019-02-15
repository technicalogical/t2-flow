<template>
  <div id="swat-deck">
    
    <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p><b>500 Error</b> / W.S.O.D. (White Screen of Death)</p>
      </div> 
    <!-- END - Flow Title banner -->

    
    <!-- BEGIN 500 Error flow section -->
    <div class="content has-text-centered" id="flow">
      <!-- BEGIN - Primary application deck -->
      <div class="content is-medium" id="flow-deck-two">
      <p>Can you load a test file from the hosting?</p>
      <p class="buttons">
          <router-link to="/flow/fivehundrederror/FosN" class="button is-light">
            <span class="icon has-text-success">
              <i class="fas fa-check-circle"></i>
            </span>
            <span><b>Yes</b>. Test file loads</span>
          </router-link>  
          <router-link to="/flow/fivehundrederror/FosYes" class="button is-light">
            <span class="icon has-text-danger">
              <i class="fas fa-exclamation-circle"></i>
            </span>
            <span><b>No</b>. Test file does not load</span>
          </router-link>
        </p>
      </div> 
      <!-- END - Primary application deck -->
      
      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/FiveError" class="button is-small is-info">
          <span class="icon has-text-light">
            <i class="fas fa-chevron-left"></i>
          </span>
          <span>BACK</span>
        </router-link>
      </p>
      <!-- END - Back button -->

      <router-view/>
      
    </div>
    <!-- END 500 Error flow section -->    
    
  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>
export default {
  
}
</script>

<style></style>