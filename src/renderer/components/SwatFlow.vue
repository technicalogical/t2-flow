<template>

  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck" class="hello">

    <!-- START Opening comments for Swat FLow Chart -->
    <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <center><p><b>S.W.A.T.</b> Call Flows</p></center>
    </div>
    <!-- END Opening comments for Swat Flow Chart -->

    <!-- BEGIN - Primary application deck -->
    <div class="content" id="flow">
      <div class="content" id="flow-deck-two">
        <p class="buttons">
          <router-link to="/flow/FiveError" class="button is-dark is-small">
            <span class="icon has-text-success">
              <i id="itcolor" class="fas fa-play-circle"></i>
            </span>
            <span><b>500</b> Error</span>
          </router-link>  
          <router-link to="/flow/FourThree" class="button is-dark is-small">
            <span class="icon has-text-success">
              <i id="itcolor" class="fas fa-play-circle"></i>
            </span>
            <span><b>403</b> Site Error</span>
          </router-link>
          <router-link to="/flow/FourFour" class="button is-dark is-small">
            <span class="icon has-text-success">
              <i id="itcolor" class="fas fa-play-circle"></i>
            </span>
            <span><b>404</b> Site Error</span>
          </router-link>
          <router-link to="/flow/FiveThree" class="button is-dark is-small">
            <span class="icon has-text-success">
              <i id="itcolor" class="fas fa-play-circle"></i>
            </span>
            <span><b>503</b> Error</span>
          </router-link>
          <router-link to="/flow/FormError" class="button is-dark is-small">
            <span class="icon has-text-success">
              <i id="itcolor" class="fas fa-play-circle"></i>
            </span>
            <span><b>Form Mail</b> Issues</span>
          </router-link>
          <router-link to="/flow/SslError" class="button is-dark is-small">
            <span class="icon has-text-success">
              <i id="itcolor" class="fas fa-play-circle"></i>
            </span>
            <span><b>SSL</b> Errors</span>
          </router-link>
          <router-link to="/flow/CpEmail" class="button is-dark is-small">
            <span class="icon has-text-success">
              <i id="itcolor" class="fas fa-play-circle"></i>
            </span>
            <span><b>cPanel</b> Email issues</span>
          </router-link>
          <router-link to="/flow/pfc/Transfer" class="button is-dark is-small" title="Transfer Preflight Checklist">
            <span class="icon has-text-success">
              <i id="itcolor" class="fas fa-play-circle"></i>
            </span>
            <span><b>Transfer</b> PFC</span>
          </router-link>
          <router-link to="/flow/Malware" class="button is-dark is-small">
            <span class="icon has-text-success">
              <i id="itcolor" class="fas fa-play-circle"></i>
            </span>
            <span>Identifying <b>Malware</b></span>
          </router-link>
          <router-link to="/flow/Splunk" class="button is-dark is-small">
            <span class="icon has-text-success">
              <i id="itcolor" class="fas fa-play-circle"></i>
            </span>
            <span><b>SPLUNK</b> Usage</span>
          </router-link>
        </p>
      </div> 
      <div id="flow-break"></div>
    </div>
    <!-- END - Primary application deck -->

    <!-- BEGIN - Flow page toggles -->
    <div id="flow-toggle" >
      <div class="go-left">
        <p class="buttons">
          <router-link to="/FlowFour" class="button is-small is-dark">
            <span id="go-hover" class="icon is-large">
              <i class="fas fa-chevron-left"></i>
            </span>
          </router-link>
        </p>
      </div>
      <div class="go-right">
        <p class="buttons">
          <router-link to="/FlowTwo" class="button is-small is-dark">
            <span id="go-hover" class="icon is-small">
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
          <li><router-link to="/SwatFlow" class="active"></router-link></li>
          <li><router-link to="/FlowTwo"></router-link></li>
          <li><router-link to="/FlowThree"></router-link></li>
          <li><router-link to="/FlowFour"></router-link></li>
        </ul>
      </div>
    <!-- END - Flow gaination -->
  </div>
  <!-- END - Primary application deck -->
  
</template>

<script>
export default {
  
}
</script>

<style></style>