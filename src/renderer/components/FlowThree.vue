<template>

  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck" class="hello">

    <!-- START Opening comments for Swat FLow Chart -->
    <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <center><p><b>SWAT</b> "Check" Flows</p></center>
    </div>
    <!-- END Opening comments for Swat Flow Chart -->

    <!-- BEGIN - Primary application deck -->
    <div class="content" id="flow">
      <div class="content" id="flow-deck-two">
        <p class="buttons">
          <router-link to="/flow/howto/uptime/Uptime" class="button is-dark is-small">
            <span class="icon has-text-success">
              <i id="itcolor" class="fas fa-play-circle"></i>
            </span>
            <span>Server <b>Uptime</b> Check</span>
          </router-link>
          <router-link to="/flow/mwp/Migsync" class="button is-dark is-small">
            <span class="icon has-text-success">
              <i id="itcolor" class="fas fa-play-circle"></i>
            </span>
            <span><b>MWP</b> Migration/Sync</span>
          </router-link>
          <router-link to="/flow/Ftp" class="button is-dark is-small">
            <span class="icon has-text-success">
              <i id="itcolor" class="fas fa-play-circle"></i>
            </span>
            <span><b>FTP</b> Support</span>
          </router-link>
          <!--<router-link to="/flow/migration/Mig" class="button is-dark is-small">
            <span class="icon has-text-success">
              <i class="fas fa-play-circle"></i>
            </span>
            <span><strong>Paid</strong> Migration</span>
          </router-link>-->
        </p>
      </div> 
    </div>
    <!-- END - Primary application deck -->

    <!-- BEGIN - Flow page toggles -->
    <div id="flow-toggle" >
      <div class="go-left">
        <p class="buttons">
          <router-link to="/FlowTwo" class="button is-small is-dark">
            <span id="go-hover" class="icon is-large">
              <i class="fas fa-chevron-left"></i>
            </span>
          </router-link>
        </p>
      </div>
      <div class="go-right">
        <p class="buttons">
          <router-link to="/FlowFour" class="button is-small is-dark">
            <span id="go-hover" class="icon is-large">
              <i class="fas fa-chevron-right"></i>
            </span>
          </router-link>
        </p>
      </div>    
    </div>
    <!-- END - Flow page toggles -->

    

    
    <router-view/>
     <!-- BEGIN Flow pagination -->
      <div id="flow-pagi" class="pagidot pagination-wrapper">
        <ul class="pagination">
          <li><router-link to="/SwatFlow"></router-link></li>
          <li><router-link to="/FlowTwo"></router-link></li>
          <li><router-link to="/FlowThree" class="active"></router-link></li>
          <li><router-link to="/FlowFour"></router-link></li>
        </ul>
      </div>
    <!-- END - Flow pagination -->
  </div>
  <!-- END - Primary application deck -->
  
</template>

<script>
export default {
  
}
</script>

<style></style>