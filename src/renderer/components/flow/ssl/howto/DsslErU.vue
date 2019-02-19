<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck">
    
    <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p><b>SSL</b> Product Setup</p>
      </div> 
    <!-- END - Flow Title banner -->

    
    <!-- BEGIN SSL Website Errors section -->
    <div class="content has-text-centered" id="flow">    
      <div class="notification is-danger">
        <strong>STOP HERE</strong>.
      </div>
      <article class="message is-info is-small">
        <div class="message-body">
         	Advise the customer on rekeying the certificate. They will need to select <strong>"Change the site your certificate protects"</strong> and select the option to <strong>"Uninstall"</strong>.
        </div>
      </article>

      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/ssl/howto/DsslEr" class="button is-small is-info">
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
    <!-- END SSL Website Errors section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>

</script>

<style></style>