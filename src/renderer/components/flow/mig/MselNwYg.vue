<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="flow-deck">
    
    <!-- START Opening comments for Swat Flow Chart -->
    <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <center><p>General <b>Migration</b> Support</p></center>
    </div>
    <!-- END Opening comments for Swat Flow Chart -->

    <!-- BEGIN Error flow section -->
    <div class="content has-text-centered" id="flow">
      
      <div class="notification is-danger">
        <p><b>STOP HERE</b></p>
      </div>
      
      <article class="message is-info is-small">
        <div class="message-body is-small"> 
          <p>You can now complete the manual submission for migration.</p>
        </div>
      </article>

      <article class="message is-info is-small">
        <div class="message-body is-small"> 
          <p><b>Sell the migration</b> and use Escalation to submit.</p>
          <p><b>Advise customer of the 7-10 day SLA.</b></p>
        </div>
      </article>

      <div id="mig-button" class="control">
        <router-link to="/flow/mig/MselNa" class="tags has-addons">
          <span class="tag is-dark"><p>Continue to "<b>AS-IS</b>" migration</p>.</span>
          <span class="tag is-success"><i class="fas fa-chevron-circle-right"></i></span>
        </router-link>
      </div>

      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/mig/MselNwY" class="button is-small is-info">
          <span class="icon has-text-light">
            <i class="fas fa-chevron-left"></i>
          </span>
          <span>BACK</span>
        </router-link>
      </p>
      <!-- END - Back button -->
      

      <router-view/>

    </div>
    <!-- END Error flow section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>
export default {
  
}
</script>

<style></style>