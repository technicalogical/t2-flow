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
        <p>Advise the customer of the time frame in which they have to complete moving the files to the new hosting. Is the date too close for the customer to get this completed on their own?</p>
      </div>
      <p class="buttons">
        <router-link to="/flow/howto/netvio/NetvioRnYyNy" class="button is-light">
          <span class="icon has-text-success">
            <i class="fas fa-check-circle"></i>
          </span>
          <span><strong>Yes</strong>. The deadline is too soon.</span>
        </router-link>  
        <router-link to="/flow/howto/netvio/NetvioRnYyNn" class="button is-light">
          <span class="icon has-text-success">
            <i class="fas fa-check-circle"></i>
          </span>
          <span><strong>No</strong>.  The deadline is manageable.</span>
        </router-link>
      </p>
      
      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/howto/netvio/NetvioRnY" class="button is-small is-info">
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