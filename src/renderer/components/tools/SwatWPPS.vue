<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck">

    <!-- BEGIN Swat DNS section -->
    <div id="tool-page" class="content is-small">

      <!-- Swat Tools opening note -->
      <div id="tool-note" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p><b>WPPS</b> Preflight Check</p>
      </div>
    
    <router-link id="ssl-title" to="/SwatTools" class="button is-small is-link">
      <span class="icon is-large has-text-light">
        <i class="fa fa-angle-left fa-2x"></i>
      </span>
      <span>Back</span>
    </router-link>

    <!-- BEGIN Site speed instruction -->
    <div id="speed-instruct" class="content">
      <p>The <b>WPPS</b> site check is intended to ensure that agents are able to correctly identify not only if there is or is not a need for WPPS services but also more specfically that the right services are being selected for the customer.</p>
      <p><b>Step One:</b> Drop domain name in search input.</p>
      <p><b>Step Two:</b> Click "<b>GO</b>".</p>
    </div>

    <!-- BEGIN WPPS input -->
    <div id="wpps-start" class="field is-grouped"> 
      <div class="field has-addons">
        <p class="control is-small">
          <span class="button is-small is-dark">
            <span class="icon">
              <img src="../../assets/icons/png/godaddy.png">
            </span>
          </span>
        </p>
        <p class="control is-expanded is-small has-icons-left">
          <input class="input is-small is-selected" type="text" placeholder="Domain Name" v-model="domainName">
          <span class="icon is-small is-left">
            <i class="fas fa-shield-alt"></i>
          </span>
        </p>
        <p class="control">
          <button id="speedgo" class="button is-small is-dark" v-on:click="handleLookup">
            <p><b>GO</b></p>
          </button>
        </p>
      </div>
    </div>
    <!-- END WPPS input -->
      
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
      options: [
      { protocol: 'http://', value: 'http://' },
      { protocol: 'https://', value: 'https://' }
    ],
      domProtocol: '',
      domainName: '',
      submitted: false
    }
  },
  methods: {
    fullUrl: function (myURL){
      var a = myURL.toLowerCase();
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
      var readyUrl = this.fullUrl(this.domainName);
      let apiPrefix = 'https://psq.wpps.int.godaddy.com/results/';
      window.open(apiPrefix + readyUrl, "_blank");
      e.preventDefault();
    }
  },
}
</script>

<style></style>