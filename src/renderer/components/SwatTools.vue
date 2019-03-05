<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck">

    <!-- BEGIN Swat DNS section -->
    <div id="tool-page" class="content is-small">

      <!-- Swat Tools opening note -->
      <div id="tool-note" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p><b>SWAT</b> Tools</p>
      </div>

      <p id="who-tool" class="buttons">
        <!-- <router-link to="tools/FlowTP" class="button is-dark is-small" title="Flow TP">
          <span>
            <p><b>Flow</b>TP</p>
          </span>
        </router-link> -->
        <router-link to="tools/SwatWHOIS" class="button is-dark is-small" title="GoDaddy WHOIS Search">
          <span>
            <p><b>WHOIS</b></p>
          </span>
        </router-link>
        <router-link to="tools/SwatSPLUNK" class="button is-dark is-small" title="SPLUNK Search">
          <span>
            <p><b>SPLUNK</b></p>
          </span>
        </router-link>
      </p>

      <!-- BEGIN Start button -->
      <div id="tool-start" class="field is-grouped">
        <p class="control">
          <router-link id="ssl-title" to="tools/SwatDNS" class="button is-small is-dark is-fullwidth">
            <span class="icon is-large has-text-info">
              <i class="fa fa-globe"></i>
            </span>
            <span><b>DNS</b> LOOKUP</span>
          </router-link>
          <br>
          <router-link id="ssl-title" to="tools/SwatSSL" class="button is-small is-dark is-fullwidth">
            <span class="icon is-large has-text-info">
              <i class="fas fa-unlock-alt"></i>
            </span>
            <span><b>SSL</b> LOOKUP</span>
          </router-link>
          <br>
          <router-link id="ssl-title" to="tools/SwatSPEED" class="button is-small is-dark is-fullwidth">
            <span class="icon is-large has-text-info">
              <i class="fas fa-stopwatch"></i>
            </span>
            <span><b>SPEED</b> CHECK</span>
          </router-link>
          <br>
          <router-link id="ssl-title" to="tools/SwatWPPS" class="button is-small is-dark is-fullwidth">
            <span class="icon is-large has-text-info">
              <i class="fas fa-shield-alt"></i>
            </span>
            <span><b>WPPS</b> CHECK</span>
          </router-link>
          <br>
          <router-link id="ssl-title" to="tools/SwatSUCURI" class="button is-small is-dark is-fullwidth">
            <span class="icon is-large has-text-info">
              <i class="fas fa-briefcase-medical"></i>
            </span>
            <span><b>SUCURI</b> CHECK</span>
          </router-link>
        </p>
      </div>
      <!-- END Start button -->
      
    </div>
    <!-- END Swat DNS section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>
import axios from 'axios';
export default {
  name: 'App',
  data() {
    return {
      submitted: false,
      domainName: '',
      ip: '',
      commonName: '',
      expireDate: '',
      issuer: '',
      serialNumber: '',
      sans: '' 
    }
  },
  methods: {
    cleanUrl: function (dirtyURL){
      var a = dirtyURL.toLowerCase();
      if (a.startsWith("http") ) {
        a = a.split('/')[2];
        a = a
        .replace('https', '')
        .replace('http', '')
        .replace('www.', '')
        .replace('://', '')
        .replace(/\/$/, '')
        return a;
      } else if(a.startsWith("www.")){
        a = a
        .replace('https', '')
        .replace('http', '')
        .replace('www.', '')
        .replace('://', '')
        .replace(/\/$/, '')
        return a;
      } else {
        return a;
      }
    },
    handleLookup: function (e){
      var cleanedUrl = this.cleanUrl(this.domainName);
      let apiPrefix = 'https://test.testmyssl.xyz/api/swat-flow/ssltool/';
      axios.get(apiPrefix + cleanedUrl)
      .then(response => {
        this.ip = response.data.ip;
        this.commonName = response.data.commonName;
        this.sans = response.data.sans;
        this.expireDate = response.data.expireDate;
        this.issuer = response.data.issuer;
        this.serialNumber = response.data.serialNumber;
        this.submitted = true;
      })
      e.preventDefault();
    }
  },
}
</script>

<style></style>