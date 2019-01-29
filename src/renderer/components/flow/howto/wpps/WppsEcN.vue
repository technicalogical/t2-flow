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
          <p>Advise the customer that there may have been more information required. Help to gather that information if possible.</p>
        </div>
      </article>
      <article class="message is-info is-small">
        <div class="message-body">
          <p>If the customer has issues with the work that has been completed advise the customer and transfer the call to a Tier 2 agent.</p>
        </div>
      </article>
      
      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/howto/wpps/WppsEc" class="button is-small is-info">
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