<template>

  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck" class="hello">

    <!-- START Opening comments for Swat FLow Chart -->
    <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <center><p><b>Miscellaneous</b> Flows</p></center>
    </div>
    <!-- END Opening comments for Swat Flow Chart -->

    <!-- BEGIN - Primary application deck -->
    <div class="content" id="flow">
      <div class="content" id="flow-deck-two">
        <p class="buttons">
          <a href="https://www.godaddy.com/help/configuring-dns-for-your-cpanel-domain-8852" target="_blank" class="button is-dark is-small" v-on:click="handleCpDNS">
            <span class="icon has-text-success">
              <img src="../assets/icons/png/org16.png"/>
            </span>
            <span><b>cPanel</b> DNS</span>
          </a>
          <a href="https://www.godaddy.com/help/godaddy-email-marketing" target="_blank" class="button is-dark is-small">
            <span class="icon has-text-success">
              <img src="../assets/icons/png/blu16.png"/>
            </span>
            <span><b>GEM</b></span>
          </a>
          <a href="https://www.godaddy.com/help/gocentral" target="_blank" class="button is-dark is-small">
            <span class="icon has-text-success">
              <img src="../assets/icons/png/blu16.png"/>
            </span>
            <span><b>Go</b>Central</span>
          </a>
          <a href="https://www.godaddy.com/help/office-365-from-godaddy" target="_blank" class="button is-dark is-small">
            <span class="icon has-text-success">
              <img src="../assets/icons/png/blu16.png"/>
            </span>
            <span><b>O365</b></span>
          </a>
          <a href="https://www.godaddy.com/help/search-engine-visibility" target="_blank" class="button is-dark is-small">
            <span class="icon has-text-success">
              <img src="../assets/icons/png/blu16.png"/>
            </span>
            <span><b>SEO</b> &amp; <b>SEV</b></span>
          </a>
          <router-link to="/flow/pfc/ServerCheck" class="button is-dark is-small" title="Transfer Preflight Checklist">
            <span class="icon has-text-success">
              <img src="../assets/icons/png/blu16.png"/>
            </span>
            <span><b>Server</b> Checklist</span>
          </router-link>
          <router-link to="/flow/pfc/Transfer" class="button is-dark is-small" title="Transfer Preflight Checklist">
            <span class="icon has-text-success">
              <img src="../assets/icons/png/blu16.png"/>
            </span>
            <span><b>Transfer</b> PFC</span>
          </router-link>
          <a href="https://www.godaddy.com/help/website-builder-7" target="_blank" class="button is-dark is-small">
            <span class="icon has-text-success">
              <img src="../assets/icons/png/blu16.png"/>
            </span>
            <span>Website Builder <b>v7</b></span>
          </a>
          <a href="https://www.godaddy.com/help/workspace-email-1000008" target="_blank" class="button is-dark is-small" v-on:click="handleWorkspace">
            <span class="icon has-text-success">
              <img src="../assets/icons/png/org16.png"/>
            </span>
            <span><b>Workspace</b> Email</span>
          </a>
        </p>
      </div> 
    </div>
    <!-- END - Primary application deck -->

    <!-- BEGIN - Flow page toggles -->
    <div id="flow-toggle" >
      <div class="go-left">
        <p class="buttons">
          <router-link to="/FlowThree" class="button is-small is-dark">
            <span id="go-hover" class="icon is-large">
              <i class="fas fa-chevron-left"></i>
            </span>
          </router-link>
        </p>
      </div>
      <div class="go-right">
        <p class="buttons">
          <router-link to="/SwatFlow" class="button is-small is-dark">
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
          <li><router-link to="/FlowThree"></router-link></li>
          <li><router-link to="/FlowFour" class="active"></router-link></li>
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