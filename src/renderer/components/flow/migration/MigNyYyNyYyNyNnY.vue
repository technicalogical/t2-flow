<template>
 
  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck">
    
    <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p><b>Paid Migration</b> Flow</p>
      </div> 
    <!-- END - Flow Title banner -->

    
    <!-- BEGIN Form mail Error section -->
    <div class="content has-text-centered" id="flow">    
      <div class="notification is-info">
        <strong>TIME TO TRANSFER</strong>.
      </div>
      <article class="message is-info is-small">
        <div class="message-body">
          <p>The customer needs to update the DNS to point to the destination hosting. Advise of propagation time.</p>
        </div>
      </article>
      
      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/migration/MigNyYyNyYyNy" class="button is-small is-info">
          <span class="icon has-text-light">
            <i class="fas fa-chevron-left"></i>
          </span>
          <span>BACK</span>
        </router-link>
      </p>
      <!-- END - Back button -->

      <router-link to="/SwatFlow" class="button is-dark is-fullwidth">Return to start</router-link>
      <router-view/>
    </div>
    <!-- END Form mail Error section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>

</script>

<style></style>