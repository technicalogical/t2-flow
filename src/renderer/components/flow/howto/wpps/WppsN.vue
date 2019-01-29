<template>
  <div id="flow-deck-two">
    
    <!-- BEGIN - Form mail Error Text -->
    <article id="wsod-message" class="message is-small has-text-centered">
      <div class="notification is-dark">
         <center><strong>WPPS</strong> "HOW TO"</center>
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
          <p>Select the appropriate service from the available services list and fill out the data requested in the ticket submission process.</p>
        </div>
      </article>
      <article class="message is-info is-small">
        <div class="message-body">
          <p>Submit the ticket. Advise the customer that they are ready to open new tickets in <strong>WPPS (WordPress Premium Support)</strong></p>
        </div>
      </article>
      
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