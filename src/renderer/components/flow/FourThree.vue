<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck">
    
    <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p><b>403</b> Website Error</p>
      </div> 
    <!-- END - Flow Title banner -->

    
    <!-- BEGIN 403 Error flow section -->
    <div class="content has-text-centered" id="flow">
      <div class="content is-medium">
        <p>Is there a proper and correct index file?</p>
      </div>
      <p class="buttons">
          <router-link to="/flow/fourothree/IndexYes" class="button is-light">
            <span class="icon has-text-success">
              <i class="fas fa-check-circle"></i>
            </span>
            <span><strong>Yes</strong>. There is a proper index file.</span>
          </router-link>  
          <router-link to="/flow/fourothree/IndexNo" class="button is-light">
            <span class="icon has-text-danger">
              <i class="fas fa-exclamation-circle"></i>
            </span>
            <span><strong>No</strong>. The index file is missing.</span>
          </router-link>
        </p>
      
        <!-- BEGIN - Back button -->
        <p class="buttons">
          <router-link to="/SwatFlow" class="button is-small is-info">
            <span class="icon has-text-light">
              <i class="fas fa-chevron-left"></i>
            </span>
            <span>BACK</span>
          </router-link>
        </p>
        <!-- END - Back button -->

      <router-view/>
    </div>
    <!-- END 403 Error flow section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>
export default {
  
}
</script>

<style></style>