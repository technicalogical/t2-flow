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
      <div class="content is-medium">
        <p>Open the <b>wp-config</b> file. Are the following lines of code present?</p>
        <article class="message is-small has-text-left">
          <div class="message-body">
            <p id="coded"><b>/** CloudTech (Remove These Lines) */;<br>
                define('WP_SITEURL','http://new.customerdomain.com');<br>
                define('WP_HOME','http://new.customerdomain.com');</b></p>
          </div>
        </article>
      </div>
      <p class="buttons">
        <router-link to="/flow/mig/closed/clYwY" class="button is-light">
          <span class="icon has-text-success">
            <i id="itcolor" class="fas fa-play-circle"></i>
          </span>
          <span><p><b>Yes</b>. CloudTech lines are present.</p></span>
        </router-link>  
        <router-link to="/flow/mig/closed/clYwN" class="button is-light">
          <span class="icon has-text-success">
            <i id="itcolor" class="fas fa-play-circle"></i>
          </span>
          <span><p><b>No</b>. CloudTech lines are not present.</p></span>
        </router-link>
      </p>

      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/mig/closed/clY" class="button is-small is-info">
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

<style>

#coded {
  font-size: 11px;
}

</style>