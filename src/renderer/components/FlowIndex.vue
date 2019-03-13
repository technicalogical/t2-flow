<template>

  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck" class="hello">
    
    <!-- START Opening comments for Swat FLow Chart -->
    <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <center><p>Call <b>Flow</b> Index</p></center>
    </div>
    <!-- END Opening comments for Swat Flow Chart -->
    

    <!-- BEGIN Section -->
    <div id="index-start" class="content">
      <div id="flow-search" class="content">
        <div class="field">
          <p class="control has-icons-left">
            <input id="flow-index-search" class="input is-small" type="text" title="Search for Call Flows using keywords here." v-on:input="filterIndex" placeholder="Search The Flow Index">
            <span class="icon is-left">
              <img src="../assets/icons/png/blu16.png"/>
            </span>
          </p>
        </div>
      </div>

      <div id="indexkey">
        <p class="buttons"> 
          <a  class="icon">
            <i id="keystay" class="fas fa-key fa-sm" title="Index key"></i>
          </a>
          <a class="icon">
            <img src="../assets/icons/png/blu16.png" title="Tier 1 flows"/>
          </a>
          <a class="icon">
            <img src="../assets/icons/png/org16.png" title="Inbound flows"/>
          </a>
        </p>
      </div>

      <!-- Scroll reminder -->
      <div id="updown" title="scroll through Flow Index">
        <p class="buttons">
          <span class="icon ">
            <i class="fas fa-angle-up"></i>
          </span>
          <span class="icon">
          </span>
          <span class="icon">
            <i class="fas fa-angle-down"></i>
          </span>
        </p>
      </div>
      <!-- End Scroll reminder -->

      <!-- Begin FLow Index -->
      <div id="indexed" class="content">

        <ul id="flowidx" class="navList">
          <li>
            <div class="buttons has-addons">
              <router-link to="/flow/FourThree" class="button is-dark is-small has-addons" v-on:click="handleFourThree">
                <span class="icon has-text-success">
                  <img src="../assets/icons/png/blu16.png"/>
                </span>
                <span><p><b>403</b> Error</p></span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Website error file forbidden to access
              </span>
            </div>
          </li>
          <li>
            <div class="buttons has-addons">
              <router-link to="/flow/FourFour" class="button is-dark is-small">
                <span class="icon has-text-success">
                  <img src="../assets/icons/png/blu16.png"/>
                </span>
                <span><b>404</b> Site Error</span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Website error file not found
              </span>
            </div>
          </li>
          <li>
            <div class="buttons has-addons">
              <router-link to="/flow/FiveError" class="button is-dark is-small">
                <span class="icon has-text-success">
                  <img src="../assets/icons/png/blu16.png"/>
                </span>
                <span><b>500</b> Error</span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                W.S.O.D. (White Screen of Death)
              </span>
            </div>
          </li>
          <li>
            <div class="buttons has-addons">
              <router-link to="/flow/FiveThree" class="button is-dark is-small">
                <span class="icon has-text-success">
                  <img src="../assets/icons/png/blu16.png"/>
                </span>
                <span><b>503</b> Error</span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Service unavailable, can not handle request(s)
              </span>
            </div>
          </li>
          <li>
            <div class="buttons has-addons">
              <router-link to="/flow/CpEmail" class="button is-dark is-small">
                <span class="icon has-text-success">
                  <img src="../assets/icons/png/blu16.png"/>
                </span>
                <span><b>cPanel</b> Email issues</span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                cPanel specific email troubleshooting
              </span>
            </div>
          </li>
          <li>
            <div class="buttons has-addons">
              <router-link to="/flow/dns/Dcheck" class="button is-dark is-small" v-on:click="handleDcheck">
                <span class="icon has-text-success">
                  <img src="../assets/icons/png/org16.png"/>
                </span>
                <span><p><b>DNS</b> Check</p></span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Checking global DNS to match server
              </span>
            </div>
          </li>    
          <li>
            <div class="buttons has-addons">
              <router-link to="/flow/howto/debugmode/Debug" class="button is-dark is-small">
                <span class="icon has-text-success">
                  <img src="../assets/icons/png/blu16.png"/>
                </span>
                <span>Enable <b>Debug Mode</b></span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Turn on WordPress Debug Mode
              </span>
            </div>
          </li>    
          <li>
            <div class="buttons has-addons">
              <router-link to="/flow/FormError" class="button is-dark is-small">
                <span class="icon has-text-success">
                  <img src="../assets/icons/png/blu16.png"/>
                </span>
                <span><b>Form Mail</b> Issues</span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Website form submission error
              </span>
            </div>
          </li>
          <li>
            <div class="buttons has-addons">
              <router-link to="/flow/Ftp" class="button is-dark is-small">
                <span class="icon has-text-success">
                  <img src="../assets/icons/png/blu16.png"/>
                </span>
                <span><b>FTP</b> Support</span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                FTP connecting &amp; Troubleshooting
              </span>
            </div>
          </li>
          <li>
            <div class="buttons has-addons">
              <a href="https://www.godaddy.com/help/godaddy-email-marketing" target="_blank" class="button is-dark is-small">
                <span class="icon has-text-success">
                  <img src="../assets/icons/png/blu16.png"/>
                </span>
                <span><b>GEM</b></span>
              </a>
              <span id="idinfo" class="button is-static is-small is-expanded">
                GoDaddy Email Marketing HELP article
              </span>
            </div>
          </li>
          <li>
            <div class="buttons has-addons">
              <a href="https://www.godaddy.com/help/gocentral" target="_blank" class="button is-dark is-small">
                <span class="icon has-text-success">
                  <img src="../assets/icons/png/blu16.png"/>
                </span>
                <span><b>Go</b>Central</span>
              </a>
              <span id="idinfo" class="button is-static is-small is-expanded">
                GoCentral GoDaddy HELP artilce
              </span>
            </div>
          </li>
          <li>
            <div class="buttons has-addons">
              <router-link to="/flow/Malware" class="button is-dark is-small">
                <span class="icon has-text-success">
                  <img src="../assets/icons/png/blu16.png"/>
                </span>
                <span>Identifying <b>Malware</b></span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Guided Malware Identification
              </span>
            </div>
          </li>
          <li>
            <div class="buttons has-addons">
              <router-link to="/flow/mig/Mig" class="button is-dark is-small" v-on:click="handleMig">
                <span class="icon has-text-success">
                  <img src="../assets/icons/png/org16.png"/>
                </span>
                <span><p><b>Migrations</b></p></span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Selling / addressing hosting restores
              </span>
            </div>
          </li>
          <li>
            <div class="buttons has-addons">
              <router-link to="/flow/mwp/Migsync" class="button is-dark is-small">
                <span class="icon has-text-success">
                  <img src="../assets/icons/png/blu16.png"/>
                </span>
                <span><b>MWP</b> Migration/Sync</span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                "One-Click" Migrations &amp; Sync
              </span>
            </div>
          </li>
          <li>
            <div class="buttons has-addons">
              <router-link to="/flow/howto/netvio/Netvio" class="button is-dark is-small">
                <span class="icon has-text-success">
                  <img src="../assets/icons/png/blu16.png"/>
                </span>
                <span><b>Net Vio</b></span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Proper procedure for Network violations
              </span>
            </div>
          </li>
          <li>
            <div class="buttons has-addons">
              <a href="https://www.godaddy.com/help/office-365-from-godaddy" target="_blank" class="button is-dark is-small">
                <span class="icon has-text-success">
                  <img src="../assets/icons/png/blu16.png"/>
                </span>
                <span><b>O365</b></span>
              </a>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Office 365 GoDaddy HELP article
              </span>
            </div>
          </li>
          <li>
            <div class="buttons has-addons">
              <router-link to="/flow/restore/Rst" class="button is-dark is-small" v-on:click="handleRst">
                <span class="icon has-text-success">
                  <img src="../assets/icons/png/org16.png"/>
                </span>
                <span><p><b>Restores</b></p></span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Selling / addressing hosting restores 
              </span>
            </div>
          </li>
          <li>
            <div class="buttons has-addons">
               <a href="https://www.godaddy.com/help/search-engine-visibility" target="_blank" class="button is-dark is-small">
              <span class="icon has-text-success">
                <img src="../assets/icons/png/blu16.png"/>
              </span>
              <span><b>SEO</b> &amp; <b>SEV</b></span>
              </a>
              <span id="idinfo" class="button is-static is-small is-expanded">
                SEO &amp; SEV GoDaddy HELP article 
              </span>
            </div>
          </li>
          <li>
            <div class="buttons has-addons">
              <router-link to="/flow/pfc/ServerCheck" class="button is-dark is-small">
                <span class="icon has-text-success">
                  <img src="../assets/icons/png/blu16.png"/>
                </span>
                <span><b>Server</b> Checklist</span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Checks to complete prior to transfer
              </span>
            </div>
          </li>
          <li>
            <div class="buttons has-addons">
              <router-link to="/flow/howto/uptime/Uptime" class="button is-dark is-small">
                <span class="icon has-text-success">
                  <img src="../assets/icons/png/blu16.png"/>
                </span>
                <span><b>Server</b> Issues</span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Checking SSH and PuTTy access to hosting
              </span>
            </div>
          </li>
          <li>
            <div class="buttons has-addons">
              <router-link to="/flow/slow/Slow" class="button is-dark is-small">
                <span class="icon has-text-success">
                  <img src="../assets/icons/png/blu16.png"/>
                </span>
                <span><b>Slow</b> Sites</span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Slow Website: Things to check.
              </span>
            </div>
          </li>
          <li>
            <div class="buttons has-addons">
              <router-link to="/flow/Splunk" class="button is-dark is-small">
                <span class="icon has-text-success">
                  <img src="../assets/icons/png/blu16.png"/>
                </span>
                <span><b>SPLUNK</b> Usage</span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Guided SPLUNK troubleshooting
              </span>
            </div>
          </li>          
          <li>
            <div class="buttons has-addons">
              <router-link to="/flow/SslError" class="button is-dark is-small">
                <span class="icon has-text-success">
                  <img src="../assets/icons/png/blu16.png"/>
                </span>
                <span><b>SSL</b> Errors</span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Guided SSL error troubleshooting 
              </span>
            </div>
          </li>
          <li>
            <div class="buttons has-addons">
              <router-link to="/flow/ssl/howto/Ssl" class="button is-dark is-small">
                <span class="icon has-text-success">
                  <img src="../assets/icons/png/blu16.png"/>
                </span>
                <span><b>SSL</b> Setup</span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Guided "After The Sale" product setup 
              </span>
            </div>
          </li>
          <li>
            <div class="buttons has-addons">
              <router-link to="/flow/howto/sucuri/Sucuri" class="button is-dark is-small">
                <span class="icon has-text-success">
                  <img src="../assets/icons/png/blu16.png"/>
                </span>
                <span><b>Sucuri</b> support tickets</span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Checking &amp; Setting up Sucuri Tickets 
              </span>
            </div>
          </li>
          <li>
            <div class="buttons has-addons">
              <router-link to="/flow/pfc/Transfer" class="button is-dark is-small" title="Transfer Preflight Checklist">
                <span class="icon has-text-success">
                  <img src="../assets/icons/png/blu16.png"/>
                </span>
                <span><b>Transfer</b> PFC</span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                The Official Transfer Preflight Checklist 
              </span>
            </div>
          </li>
          <li>
            <div class="buttons has-addons">
              <router-link to="/flow/howto/uptime/Uptime" class="button is-dark is-small">
                <span class="icon has-text-success">
                  <img src="../assets/icons/png/blu16.png"/>
                </span>
                <span><b>VPS</b> Uptime check</span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Check PuTTy and RDP connectivity 
              </span>
            </div>
          </li>        
          <li>
            <div class="buttons has-addons">
              <router-link to="/flow/howto/wpps/Wpps" class="button is-dark is-small">
                <span class="icon has-text-success">
                  <img src="../assets/icons/png/blu16.png"/>
                </span>
                <span><b>WPPS</b></span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                (WordPress Premium Support) selling / supporting
              </span>
            </div>
          </li>
          <li>
            <div class="buttons has-addons">
              <a href="https://www.godaddy.com/help/website-builder-7" target="_blank" class="button is-dark is-small">
                <span class="icon has-text-success">
                  <img src="../assets/icons/png/blu16.png"/>
                </span>
                <span>WSB <b>v7</b></span>
              </a>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Website Builder v7 GoDaddy HELP article
              </span>
            </div>
          </li>
        </ul>
      </div>
      <!-- End Flow Index -->

    </div>
    <!-- End Section -->
    
    <router-view/>
    
  </div>
  <!-- END - Primary application deck -->
  
</template>

<script>
import JQuery from 'jquery'
let $ = JQuery

export default {
  name: 'App',

  data(){

    return{

    }

  },

  methods:{

    handleFourThree: function(){

      let data = {flowname: '403-error'};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleFourFour: function(){

      let data = {flowname: '404-error'};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleFiveError: function(){

      let data = {flowname: '500-error'};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleFiveThree: function(){

      let data = {flowname: '503-error'};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleDcheck: function(){

      let data = {flowname: 'dns-check'};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleFormMail: function(){

      let data = {flowname: 'form-mail'};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleMig: function(){

      let data = {flowname: 'migration-flow'};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleRst: function(){

      let data = {flowname: 'restores-flow'};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleTransfer: function(){

      let data = {flowname: 'transfer-pfc'};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleWp: function(){

      let data = {flowname: 'wordpress-support'};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleWPPS: function(){

      let data = {flowname: 'wpps-support'};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleNetVio: function(){

      let data = {flowname: 'net-vio'};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleSplunk: function(){

      let data = {flowname: 'splunk-usage'};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleSsl: function(){

      let data = {flowname: 'ssl-setup'};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleCpEmail: function(){

      let data = {flowname: 'cp-email'};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleSEO: function(){

      let data = {flowname: 'seo-sev'};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleWSB: function(){

      let data = {flowname: 'wsb-v7'};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleGoCentral: function(){

      let data = {flowname: 'go-central'};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleOffice: function(){

      let data = {flowname: 'office-365'};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleGEM: function(){

      let data = {flowname: 'gd-gem'};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleCpDNS: function(){

      let data = {flowname: 'cpanel-dns'};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleWorkspace: function(){

      let data = {flowname: 'workspace-email'};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

// Index key word filtering

    filterIndex: function () {

      $("#flow-index-search").on("keyup", function () {               		        	
        var searchText = $(this).val();
          searchText = searchText.toLowerCase();
          searchText = searchText.replace(/\s+/g, '');
            $('.navList > li').each(function(){
              var currentLiText = $(this).text(),      
              showCurrentLi = ((currentLiText.toLowerCase()).replace(/\s+/g, '')).indexOf(searchText) !== -1;

            $(this).toggle(showCurrentLi);

        });  
      });
    }
  }

}

// jQuery insertion for $ dependancy

</script>

<style></style>