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
        <p>Does the customer need to keep any or all of these files?</p>
      </div>
      <p class="buttons">
        <router-link to="/flow/howto/netvio/NetvioRnY" class="button is-light">
          <span class="icon has-text-success">
            <i class="fas fa-check-circle"></i>
          </span>
          <span><strong>Yes</strong>. The customer needs these files.</span>
        </router-link>  
        <router-link to="/flow/howto/netvio/NetvioRnN" class="button is-light">
          <span class="icon has-text-success">
            <i class="fas fa-check-circle"></i>
          </span>
          <span><strong>No</strong>.  The customer does not need these files.</span>
        </router-link>
      </p>
      
      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/howto/netvio/NetvioR" class="button is-small is-info">
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