<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="flow-deck">
    
    <!-- BEGIN - Form mail Error Text -->
    <article id="wsod-message" class="message is-small has-text-centered">
      <div class="notification is-dark">
        <strong>Form Mail</strong> Error
      </div>
    </article>
    <!-- END - Form mail Error Text -->

    
    <!-- BEGIN Form mail Error flow section -->
    <div class="content has-text-centered" id="flow">
      <div class="content is-medium">
        <p>What does the <strong>Splunk</strong> log show you about the email you sent?</p>
      </div>
      <p class="buttons">
          <router-link to="/flow/form/FormYb" class="button is-light">
            <span class="icon has-text-success">
              <i class="fas fa-check-circle"></i>
            </span>
            <span>The log shows <strong>BAD-ACCT</strong></span>
          </router-link>  
          <router-link to="/flow/form/FormNa" class="button is-light">
            <span class="icon has-text-danger">
              <i class="fas fa-exclamation-circle"></i>
            </span>
            <span><strong>Accept/Delivered</strong>. The email function works</span>
          </router-link>
        </p>

        <!-- BEGIN - Back button -->
        <p class="buttons">
          <router-link to="/flow/FormError" class="button is-small is-info">
            <span class="icon has-text-light">
              <i class="fas fa-chevron-left"></i>
            </span>
            <span>BACK</span>
          </router-link>
        </p>
        <!-- END - Back button -->
      
      <router-view/>
    </div>
    <!-- END Form mail Error flow section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>
export default {
  
}
</script>

<style></style>