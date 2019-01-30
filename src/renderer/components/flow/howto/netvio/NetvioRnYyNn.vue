<template>
  <div id="flow-deck-two">
    
    <!-- BEGIN - Form mail Error Text -->
    <article id="wsod-message" class="message is-small has-text-centered">
      <div class="notification is-dark">
        <center><strong>Net Vio</strong> "How To" Flows</center>
      </div>
    </article>
    <!-- END - Form mail Error Text -->

    
    <!-- BEGIN Form mail Error section -->
    <div class="content has-text-centered" id="flow">    
      <div class="notification is-danger">
        <strong>STOP HERE</strong>.
      </div>
      <article class="message is-info is-small">
        <div class="message-body">
          <p>Advise the customer of the timeframe once more.</p>
        </div>
      </article>
      <article class="message is-success is-small">
        <div class="message-body">
          <p>Discuss the possibility of a paid for migration of files to new hosting. We can handle this for the customer.</p>
        </div>
      </article>
      
      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/howto/netvio/NetvioRnYyN" class="button is-small is-info">
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