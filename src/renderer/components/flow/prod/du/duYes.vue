<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="flow-deck">
    
      <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p>Domain <b>Unblocking</b></p>
      </div> 
      <!-- END - Flow Title banner -->

    <!-- BEGIN section -->
    <div class="content has-text-centered" id="flow">

      <div class="content is-medium">
        <p>Once all of the emails have been removed from the account, open <b>WOPR</b> and search using the domain we are trying to remove.</p>
      </div>

      <a href="https://wopr.int.secureserver.net/support.services/Support" target="_blank" title="Launch WOPR account lookup" class="button is-small is-dark">
        <span><b>Launch WOPR</b></span>
      </a>
      <br>
      <br>

      <article class="message is-small">
        <div class="message-body">
          <p>Does it show that all emails are in a delete status?</p>
        </div>
      </article>

      <p class="buttons">

        <router-link to="/flow/prod/du/duYesY" class="button is-light is-small">
          <span class="icon has-text-success">
            <i id="itcolor" class="fas fa-chevron-circle-right"></i>
          </span>
          <span><b>Yes</b>. All of the emails are in a delete status.</span>
        </router-link>
      
        <router-link to="/flow/prod/du/duYesN" class="button is-light is-small">
          <span class="icon has-text-danger">
            <i id="itcolor" class="fas fa-chevron-circle-right"></i>
          </span>
          <span><b>No</b>. Not all of the emails are showing in delete status.</span>
        </router-link>
        
      </p>
      
      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/prod/du/duYyY" class="button is-small is-info">
          <span class="icon has-text-light">
            <i class="fas fa-chevron-left"></i>
          </span>
          <span>BACK</span>
        </router-link>
      </p>
      <!-- END - Back button -->

      <router-view/>

    </div>
    <!-- END flow section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>

</script>

<style></style>