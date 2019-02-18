<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck">
    
    <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p><b>HOW TO:</b> Sucuri Support Tickets</p>
      </div> 
    <!-- END - Flow Title banner -->

    <!-- BEGIN SSL Error flow section -->
    <div class="content has-text-centered" id="flow">
      <div class="content is-medium">
        <p>Click <b>SETUP</b> For this product. Complete the following then continue.</p>
      </div>
      <div class="field">
        <div class="control">
          <div class="tags has-addons">
            <span class="tag is-success"><i class="fas fa-check"></i></span>
            <span class="tag is-dark">Fill in the wp-login credentials.</span>
          </div>
        </div>
        <br>
        <div class="control">
          <div class="tags has-addons">
            <span class="tag is-success"><i class="fas fa-check"></i></span>
            <span class="tag is-dark">Fill in the FTP credentials.</span>
          </div>
        </div>
      </div>
      <p class="buttons">
        <router-link to="/flow/howto/wpps/WppsPn" class="button is-light">
          <span class="icon has-text-success">
            <i class="fas fa-check-circle"></i>
          </span>
          <span><b>Continue</b> to next steps.</span>
        </router-link>  
      </p>
      
      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/howto/wpps/Wpps" class="button is-small is-info">
          <span class="icon has-text-light">
            <i class="fas fa-chevron-left"></i>
          </span>
          <span>BACK</span>
        </router-link>
      </p>
      <!-- END - Back button -->

      <router-view/>
    </div>
    <!-- END SSL Error flow section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>

</script>

<style></style>