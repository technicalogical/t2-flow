<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck">
    
    <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p><b>HOW TO:</b> Enable Debug Mode</p>
      </div> 
    <!-- END - Flow Title banner -->

    
    <!-- BEGIN Form mail Error section -->
    <div class="content has-text-centered" id="flow">    
      <div class="notification is-danger">
        <b>STOP HERE</b>.
      </div>
      <article class="message is-info is-small">
        <div class="message-body">
          <p>The customer needs to create a new web.config file in order to enable debug mode. Send them this <a href="https://www.godaddy.com/help/what-is-a-webconfig-file-5445?" target="_blank"><b>article</b></a> to do so.</p>
        </div>
      </article>
      
      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/howto/debugmode/DebugWp" class="button is-small is-info">
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
export default {

}
</script>

<style></style>