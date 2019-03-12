<template>

  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck" class="hello">

    <!-- START Opening comments for Swat FLow Chart -->
    <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <center><p><b>SWAT</b> Call Flows</p></center>
    </div>
    <!-- END Opening comments for Swat Flow Chart -->

    <!-- BEGIN - Primary application deck -->
    <div class="content" id="flow">
      <div class="content" id="flow-deck-two">
        <p class="buttons">
          <router-link to="/flow/FourThree" class="button is-dark is-small has-addons" v-on:click="handleFourThree">
            <span class="icon has-text-success">
              <img src="../assets/icons/png/blu16.png"/>
            </span>
            <span><p><b>403</b> Error</p></span>
          </router-link>
          <router-link to="/flow/FourFour" class="button is-dark is-small">
            <span class="icon has-text-success">
              <img src="../assets/icons/png/blu16.png"/>
            </span>
            <span><b>404</b> Site Error</span>
          </router-link>
          <router-link to="/flow/FiveError" class="button is-dark is-small">
            <span class="icon has-text-success">
              <img src="../assets/icons/png/blu16.png"/>
            </span>
            <span><b>500</b> Error</span>
          </router-link>
          <router-link to="/flow/FiveThree" class="button is-dark is-small">
            <span class="icon has-text-success">
              <img src="../assets/icons/png/blu16.png"/>
            </span>
            <span><b>503</b> Error</span>
          </router-link>
          <router-link to="/flow/CpEmail" class="button is-dark is-small">
            <span class="icon has-text-success">
              <img src="../assets/icons/png/blu16.png"/>
            </span>
            <span><b>cPanel</b> Email issues</span>
          </router-link>
          <router-link to="/flow/howto/debugmode/Debug" class="button is-dark is-small">
            <span class="icon has-text-success">
              <img src="../assets/icons/png/blu16.png"/>
            </span>
            <span>Enable <b>Debug</b> mode</span>
          </router-link>
          <router-link to="/flow/FormError" class="button is-dark is-small">
            <span class="icon has-text-success">
              <img src="../assets/icons/png/blu16.png"/>
            </span>
            <span><b>Form Mail</b> Issues</span>
          </router-link>
          <router-link to="/flow/Ftp" class="button is-dark is-small">
            <span class="icon has-text-success">
              <img src="../assets/icons/png/blu16.png"/>
            </span>
            <span><b>FTP</b> Support</span>
          </router-link>
          <router-link to="/flow/Malware" class="button is-dark is-small">
            <span class="icon has-text-success">
              <img src="../assets/icons/png/blu16.png"/>
            </span>
            <span>Identifying <b>Malware</b></span>
          </router-link>
          <router-link to="/flow/mwp/Migsync" class="button is-dark is-small">
            <span class="icon has-text-success">
              <img src="../assets/icons/png/blu16.png"/>
            </span>
            <span><b>MWP</b> Mig/Sync</span>
          </router-link>
          <router-link to="/flow/howto/netvio/Netvio" class="button is-dark is-small">
            <span class="icon has-text-success">
              <img src="../assets/icons/png/blu16.png"/>
            </span>
            <span><b>Net Vio</b></span>
          </router-link>
          <router-link to="/flow/howto/uptime/Uptime" class="button is-dark is-small">
            <span class="icon has-text-success">
              <img src="../assets/icons/png/blu16.png"/>
            </span>
            <span><b>Server</b> Issues</span>
          </router-link>
          <router-link to="/flow/slow/Slow" class="button is-dark is-small">
            <span class="icon has-text-success">
              <img src="../assets/icons/png/blu16.png"/>
            </span>
            <span><b>Slow</b> Sites</span>
          </router-link>
          <router-link to="/flow/Splunk" class="button is-dark is-small">
            <span class="icon has-text-success">
              <img src="../assets/icons/png/blu16.png"/>
            </span>
            <span><b>SPLUNK</b> Usage</span>
          </router-link>
          <router-link to="/flow/SslError" class="button is-dark is-small">
            <span class="icon has-text-success">
              <img src="../assets/icons/png/blu16.png"/>
            </span>
            <span><b>SSL</b> Errors</span>
          </router-link>
          <router-link to="/flow/ssl/howto/Ssl" class="button is-dark is-small">
            <span class="icon has-text-success">
              <img src="../assets/icons/png/blu16.png"/>
            </span>
            <span><b>SSL</b> Setup</span>
          </router-link>
          <router-link to="/flow/howto/sucuri/Sucuri" class="button is-dark is-small">
            <span class="icon has-text-success">
              <img src="../assets/icons/png/blu16.png"/>
            </span>
            <span><b>Sucuri</b> support tickets</span>
          </router-link>
          <router-link to="/flow/howto/uptime/Uptime" class="button is-dark is-small">
            <span class="icon has-text-success">
              <img src="../assets/icons/png/blu16.png"/>
            </span>
            <span><b>VPS</b> Uptime check</span>
          </router-link>
          <router-link to="/flow/howto/wpps/Wpps" class="button is-dark is-small">
            <span class="icon has-text-success">
              <img src="../assets/icons/png/blu16.png"/>
            </span>
            <span><b>WPPS</b></span>
          </router-link>
          
          
        </p>
      </div> 
    </div>
    <!-- END - Primary application deck -->

    <!-- BEGIN - Flow page toggles -->
    <div id="flow-toggle" >
      <div class="go-left">
        <p class="buttons">
          <router-link to="/SwatFlow" id="smashb" class="button is-small is-dark">
            <span id="go-hover" class="icon is-large">
              <i class="mdi mdi-chevron-left mdi-18px"></i>
            </span>
          </router-link>
        </p>
      </div>
      <div class="go-right">
        <p class="buttons">
          <router-link to="/FlowThree" id="smashb" class="button is-small is-dark">
            <span id="go-hover" class="icon is-large">
              <i class="mdi mdi-chevron-right mdi-18px"></i>
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
          <li><router-link to="/FlowTwo" class="active"></router-link></li>
          <li><router-link to="/FlowThree"></router-link></li>
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