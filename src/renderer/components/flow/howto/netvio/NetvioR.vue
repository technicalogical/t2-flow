<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck">
    
    <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p><b>HOW TO:</b> Net Vio</p>
      </div> 
    <!-- END - Flow Title banner -->

    <!-- BEGIN Net Vio flow section -->
    <div class="content has-text-centered" id="flow">
      <div class="content is-medium">
        <p>Has the customer removed the files listed in the IRIS ticket? They received this list via email.</p>
      </div>
      <p class="buttons">
        <router-link to="/flow/howto/netvio/NetvioRy" class="button is-light">
          <span class="icon has-text-success">
            <i class="fas fa-check-circle"></i>
          </span>
          <span><b>Yes</b>. They have removed the files.</span>
        </router-link>  
        <router-link to="/flow/howto/netvio/NetvioRn" class="button is-light">
          <span class="icon has-text-success">
            <i class="fas fa-check-circle"></i>
          </span>
          <span><b>No</b>.  They have not removed the files.</span>
        </router-link>
      </p>
      
      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/howto/netvio/Netvio" class="button is-small is-info">
          <span class="icon has-text-light">
            <i class="fas fa-chevron-left"></i>
          </span>
          <span>BACK</span>
        </router-link>
      </p>
      <!-- END - Back button -->

      <router-view/>
    </div>
    <!-- END Net Vio flow section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>

</script>

<style></style>