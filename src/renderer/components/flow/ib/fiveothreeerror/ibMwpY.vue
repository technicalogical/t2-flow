<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="flow-deck">
    
    <!-- START Opening comments for Swat Flow Chart -->
    <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <center><p><b>503</b> Error <b>Managed WordPress</b></p></center>
    </div>
    <!-- END Opening comments for Swat Flow Chart -->

    <!-- BEGIN Error flow section -->
    <div class="content has-text-centered" id="flow">
      
      <div class="notification is-danger">
        <p><b>STOP HERE</b></p>
      </div>
      
      <article class="message is-info is-small">
        <div class="message-body is-small">
          <p>Run <b>Sucuri</b> scanner and <b>WPPS</b> Checker on the website. Advise customer this is a content related issue. The customer will need to research any recent changes that may have caused this issue.</p>
        </div>
      </article>
      <article class="message is-success is-small">
        <div class="message-body is-small">
          <p>Consult on <b>WSS</b> if the <b>Sucuri</b> scan returns positive for malware.</p>
        </div>
      </article>
      <article class="message is-success is-small">
        <div class="message-body is-small">
          <p>Consult on <b>WPPS</b> for outstanding issues that can be addressed.</p>
        </div>
      </article>

      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/ib/fiveothreeerror/ibMwp" class="button is-small is-info">
          <span class="icon has-text-light">
            <i class="fas fa-chevron-left"></i>
          </span>
          <span>BACK</span>
        </router-link>
      </p>
      <!-- END - Back button -->
      <router-link to="/FlowIndex" class="button is-dark is-fullwidth">Return to start</router-link>
      <router-view/>

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