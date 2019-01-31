<template>

  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck">

    <!-- BEGIN Swat DNS section -->
    <div id="tool-page" class="content is-small">

      <!-- Swat Tools opening note -->
      <div id="tool-note" class="notification is-dark has-text-centered is-static is-active" readonly>
        <strong>S.W.A.T. DNS Lookup</strong>
      </div>

      <!--BEGIN Swat DNS section -->
      <form id="dns-deck">

        <!-- BEGIN Swat SSL input section -->
        <div id="ssl-tool-input" class="content">

          <!-- Swat DNS Title -->
          <router-link id="ssl-title" to="/SwatTools" class="button is-small is-dark">
            <span class="icon is-large has-text-success">
              <i class="fa fa-angle-left fa-2x"></i>
            </span>
            <span><strong>Back</strong></span>
          </router-link>

          <div class="field has-addons ">
            <div id="ssl-search" class="control ">
              <p class="control has-icons-left">
                <input class="input is-small is-hovered" v-model="dnsDomainName" type="text" placeholder="Search Domain DNS">
                <span class="icon is-small is-left">
                  <i class="fas fa-globe"></i>
                </span>
              </p>
            </div>
            <div class="control">
              <button v-on:click="handleDnsLookup" class="button is-small is-dark">
                <span class="icon is-medium has-text-success">
                  <i class="fas fa-search"></i>
                </span>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
        <!-- END Swat SSL input section -->
    
        <!-- BEGIN SSL Readout section -->
        <div v-if="dnsSubmitted" id="output-area" class="content">

          <!-- A Records -->
          <div class="field-body">
            <div class="field is-expanded">
              <div class="field has-addons">
                <p class="control">
                  <strong><span class="button is-small has-text-light is-dark">
                    A Record(s):
                  </span></strong>
                </p>
                <p v-for="a in aRecords" class="control is-expanded">
                  <input class="input  is-small" type="text" v-model="aRecords" placeholder="A Record IP Address" readonly>
                </p>
              </div>
            </div>
          </div>

          <!-- Mx Records -->
          <strong><span id="ssl-sans-title" class="button is-dark is-small is-fullwidth has-text-light">MX Record(s):</span></strong>
          <div id="mx-list" class="content">
            <ul>
              <li v-for="mx in mxRecords">
                {{ mx }}
              </li>
            </ul>
          </div>
          <br>

          <!-- TXT Records -->
          <strong><span id="ssl-sans-title" class="button is-dark is-small is-fullwidth has-text-light">TXT Record(s):</span></strong>
          <div id="txt-list" class="content">
            <ul>
              <li id="txt-sep" v-for="txt in txtRecords">
                {{ txt }}
              </li>
            </ul>
          </div>
          <br>

          <!-- NS Records -->
          <strong><span id="ssl-sans-title" class="button is-dark is-small is-fullwidth has-text-light">NS Record(s):</span></strong>
          <div id="ns-list" class="content">
            <ul>
              <li v-for="ns in nsRecords">
                {{ ns }}
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
      dnsSubmitted: false,
      dnsDomainName: '',
      aRecords: [],
      mxRecords: [],
      txtRecords: [],
      nsRecords: [],
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
    handleDnsLookup: function (e){
      var cleanedDnsUrl = this.cleanUrl(this.dnsDomainName);
      let apiDnsPrefix = 'https://test.testmyssl.xyz/api/swat-flow/dnstool/';
      axios.get(apiDnsPrefix + cleanedDnsUrl)
      .then(response => {  
        this.aRecords = response.data.a;
        this.mxRecords = response.data.mx;
        this.txtRecords = response.data.txt;
        this.nsRecords = response.data.ns;
        this.dnsSubmitted = true;
      })
      e.preventDefault();
    }
  },
}
</script>

<style></style>