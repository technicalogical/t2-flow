<template>
  <div id="flow-deck-two">
    
    <!-- Form mail Error Text -->
    <article id="wsod-message" class="message is-danger">
      <div class="notification is-danger">
        <strong>Form Error</strong>
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
          Advise the customer that they will need to further troubleshoot the form. The mail function is working. 
        </div>
      </article>
      <article class="message is-success is-small">
        <div class="message-body">
          If this is a Wordpress based form offer <strong>WPPS (Wordpress Premium Support)</strong> to help fix the issue. 
        </div>
      </article>

      <!-- BEGIN - Back button -->
        <p class="buttons">
          <router-link to="/flow/form/FormNa" class="button is-small is-info">
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

<style src="../../../flow-style.scss"></style>