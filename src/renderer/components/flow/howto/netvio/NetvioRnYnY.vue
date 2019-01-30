<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="flow-deck">
    
    <!-- BEGIN - Net Vio how to Text -->
    <article id="wsod-message" class="message is-small">
      <div class="notification is-dark has-text-centered">
        <center><strong>Net Vio</strong> "How To" Flows</center>
      </div>
    </article>
    <!-- END - Net Vio how to Text -->

    <!-- BEGIN Net Vio flow section -->
    <div class="content has-text-centered" id="flow">
      <div class="content is-medium">
        <p>Have the customer guide you to where these files are being used in the hosting. Validate that they are in fact a necessity. Are they being used?</p>
      </div>
      <p class="buttons">
        <router-link to="/flow/howto/netvio/NetvioRnYnYy" class="button is-light">
          <span class="icon has-text-success">
            <i class="fas fa-check-circle"></i>
          </span>
          <span><strong>Yes</strong>. These files belong to customers.</span>
        </router-link>  
        <router-link to="/flow/howto/netvio/NetvioRnYnYn" class="button is-light">
          <span class="icon has-text-success">
            <i class="fas fa-check-circle"></i>
          </span>
          <span><strong>No</strong>.  These files do not belong to customers.</span>
        </router-link>
      </p>
      
      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/howto/netvio/NetvioRnYn" class="button is-small is-info">
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