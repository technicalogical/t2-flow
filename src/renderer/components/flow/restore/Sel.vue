<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="flow-deck">
    
    <!-- START Opening comments for Swat Flow Chart -->
    <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <center><p>General <b>Restore</b> Support</p></center>
    </div>
    <!-- END Opening comments for Swat Flow Chart -->

    <!-- BEGIN Error flow section -->
    <div class="content has-text-centered" id="flow">
      <div class="content is-medium">
        <p>What type of hosting needs to be restored?</p>
      </div>
      <p class="buttons">
        <router-link to="/flow/restore/SelM" class="button is-light">
          <span class="icon has-text-success">
            <i id="itcolor" class="fas fa-play-circle"></i>
          </span>
          <span><p>It is a <b>Managed WordPress</b> restore.</p></span>
        </router-link>  
        <router-link to="/flow/restore/SelC" class="button is-light">
          <span class="icon has-text-success">
            <i id="itcolor" class="fas fa-play-circle"></i>
          </span>
          <span><p>It is a <b>cPanel</b> restore.</p></span>
        </router-link>
        <router-link to="/flow/restore/SelP" class="button is-light">
          <span class="icon has-text-success">
            <i id="itcolor" class="fas fa-play-circle"></i>
          </span>
          <span><p>It is a <b>Plesk</b> restore.</p></span>
        </router-link>
        <router-link to="/flow/restore/SelF" class="button is-light">
          <span class="icon has-text-success">
            <i id="itcolor" class="fas fa-play-circle"></i>
          </span>
          <span><p>It is a <b>4gh</b> restore.</p></span>
        </router-link>
      </p>

      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/restore/Rst" class="button is-small is-info">
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