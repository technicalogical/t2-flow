<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck">

    <!-- BEGIN Swat DNS section -->
    <div id="tool-page" class="content is-small">

      <!-- Swat Tools opening note -->
      <div id="tool-note" class="notification is-dark has-text-centered is-static is-active" readonly>
        <strong>S.W.A.T. SSL Lookup</strong>
      </div>

      <!--BEGIN Swat DNS section -->
      <form id="tool-deck">

        <!-- BEGIN Swat SSL input section -->
        <div id="ssl-tool-input" class="content">
  
          <router-link id="ssl-title" to="/SwatTools" class="button is-small is-dark">
            <span class="icon is-large has-text-success">
              <i class="fa fa-angle-left fa-2x"></i>
            </span>
            <span><strong>Back</strong></span>
          </router-link>
          <div class="field">
            <div id="ssl-search" class="control has-icons-left has-icons-right">
              <input v-model="domainName" class="input is-small" type="text" placeholder="Domain(s)" />
              <span class="icon is-small is-left has-text-success">
                <i class="fas fa-globe"></i>
              </span>
            </div>
            <!-- BEGIN Search button section -->
            <button id="ssl-go"  v-on:click="handleLookup" class="button is-small is-dark" value="">
              <span class="icon has-text-success">
                <i class="fas fa-search"></i>
              </span>
              <span>Search</span>
            </button>
            <!-- END Search button section -->
          </div>
          
        </div>
        <!-- END Swat SSL input section -->

        <!-- BEGIN SSL Readout section -->
        <div v-if="submitted" id="output-area" class="content">
          <div class="field-body">
            <div class="field is-expanded">
              <div class="field has-addons">
                <p class="control">
                  <a class="button is-static  is-small">
                    Domain:
                  </a>
                </p>
                <p id="ssl-fix" class="control is-expanded">
                  <input class="input  is-small" type="text" v-model="domainName" placeholder="Domain Name" readonly>
                </p>
              </div>
            </div>
          </div>
          <div class="field-body">
            <div class="field is-expanded">
              <div class="field has-addons">
                <p class="control">
                  <a class="button is-static  is-small">
                    IP:
                  </a>
                </p>
                <p id="ssl-fix" class="control is-expanded">
                  <input class="input  is-small" type="text" v-model="ip" placeholder="IP Address" readonly>
                </p>
              </div>
            </div>
          </div>
          <div class="field-body">
            <div class="field is-expanded">
              <div class="field has-addons">
                <p class="control">
                  <a class="button is-static  is-small">
                    Common Name:
                  </a>
                </p>
                <p id="ssl-fix" class="control is-expanded">
                  <input class="input  is-small" type="text" v-model="commonName" placeholder="Common Name" readonly>
                </p>
              </div>
            </div>
          </div>
          <div class="field-body">
            <div class="field is-expanded">
              <div class="field has-addons">
                <p class="control">
                  <a class="button is-static  is-small">
                    Expire Date:
                  </a>
                </p>
                <p id="ssl-fix" class="control is-expanded">
                  <input class="input  is-small" type="text" v-model="expireDate" placeholder="Expire Date" readonly>
                </p>
              </div>
            </div>
          </div>
          <div class="field-body">
            <div class="field is-expanded">
              <div class="field has-addons">
                <p class="control">
                  <a class="button is-static  is-small">
                    Issuer:
                  </a>
                </p>
                <p id="ssl-fix" class="control is-expanded">
                  <input class="input  is-small" type="text" v-model="issuer" placeholder="Issuer" readonly>
                </p>
              </div>
            </div>
          </div>
          <div class="field-body">
            <div class="field is-expanded">
              <div class="field has-addons">
                <p class="control">
                  <a class="button is-static is-small">
                    Serial Number:
                  </a>
                </p>
                <p id="ssl-fix" class="control is-expanded">
                  <input class="input is-small" type="text" v-model="serialNumber" placeholder="Serial Number" readonly>
                </p>
              </div>
            </div>
          </div>
          <span id="ssl-sans-title" class="button is-static is-small is-fullwidth">Subject Alternative Names:</span>
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

      // I ALSO CHANGED SANS TO AN ARRAY SO WE
      // CAN ITERATE OVER IT
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