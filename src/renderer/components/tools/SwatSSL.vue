<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck">

    <!-- BEGIN Swat DNS section -->
    <div id="tool-page" class="content is-small">

      <!-- Swat Tools opening note -->
      <div id="tool-note" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p><b>SSL</b> Lookup</p>
      </div>

      <!--BEGIN Swat DNS section -->
      <form id="tool-deck">

        <!-- BEGIN Swat SSL input section -->
        <div id="ssl-tool-input" class="content">
  
          <router-link id="ssl-title" to="/SwatTools" class="button is-small is-link">
            <span class="icon is-large has-text-light">
              <i class="fa fa-angle-left fa-2x"></i>
            </span>
            <span>Back</span>
          </router-link>
          
          <div class="field has-addons ">
            <div id="ssl-search" class="control ">
              <p class="control has-icons-left">
                <input class="input is-small is-hovered" v-model="domainName" type="text" placeholder="Search Domain Name">
                <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <div class="control">
              <button v-on:click="handleLookup" class="button is-small is-link">
                <span class="icon is-medium has-text-light">
                  <i class="fas fa-search"></i>
                </span>
                <span>Search</span>
              </button>
            </div>
          </div>

        </div>
        <!-- END Swat SSL input section -->

        <!-- BEGIN SSL Readout section -->
        <div v-if="submitted" id="output-area" class="content">
          <div class="field-body">
            <div class="field is-expanded">
              <div class="field has-addons">
                <p class="control">
                  <span class="button is-link  is-small has-text-light">
                    <b>Domain:</b>
                  </span>
                </p>
                <p class="control is-expanded">
                  <input class="input is-small" type="text" v-model="domainName" placeholder="Domain Name" readonly>
                </p>
              </div>
            </div>
          </div>
          <div class="field-body">
            <div class="field is-expanded">
              <div class="field has-addons">
                <p class="control">
                  <span class="button is-link is-small has-text-light">
                    <b>IP:</b>
                  </span>
                </p>
                <p class="control is-expanded">
                  <input class="input  is-small" type="text" v-model="ip" placeholder="IP Address" readonly>
                </p>
              </div>
            </div>
          </div>
          <div class="field-body">
            <div class="field is-expanded">
              <div class="field has-addons">
                <p class="control">
                  <span class="button is-link is-small has-text-light">
                    <b>Common Name:</b>
                  </span>
                </p>
                <p class="control is-expanded">
                  <input class="input  is-small" type="text" v-model="commonName" placeholder="Common Name" readonly>
                </p>
              </div>
            </div>
          </div>
          <div class="field-body">
            <div class="field is-expanded">
              <div class="field has-addons">
                <p class="control">
                  <span class="button is-link is-small has-text-light">
                    <b>Expire Date:</b>
                  </span>
                </p>
                <p class="control is-expanded">
                  <input class="input  is-small" type="text" v-model="expireDate" placeholder="Expire Date" readonly>
                </p>
              </div>
            </div>
          </div>
          <div class="field-body">
            <div class="field is-expanded">
              <div class="field has-addons">
                <p class="control">
                  <span class="button is-link is-small has-text-light">
                    <b>Issuer:</b>
                  </span>
                </p>
                <p class="control is-expanded">
                  <input class="input  is-small" type="text" v-model="issuer" placeholder="Issuer" readonly>
                </p>
              </div>
            </div>
          </div>
          <div class="field-body">
            <div class="field is-expanded">
              <div class="field has-addons">
                <p class="control">
                  <span class="button is-link is-small has-text-light">
                    <b>Serial Number:</b>
                  </span>
                </p>
                <p class="control is-expanded">
                  <input class="input is-small" type="text" v-model="serialNumber" placeholder="Serial Number" readonly>
                </p>
              </div>
            </div>
          </div>
          <span id="ssl-sans-title" class="button is-link is-small is-fullwidth has-text-light"><b>Subject Alternative Names:</b></span>
          <div id="ssl-sans" class="content">
            <ul>
              <li v-for="s in sans">
                {{ s }}
              </li>
            </ul>
          </div>
        </div>
        <!-- END SSL Readout section -->

      </form>
      <!--END Swat DNS section -->
      
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
      sans: [],
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