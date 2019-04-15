<!-- :::::::::::::::::::: General DNS Check :::::::::::::::::::: -->
<template>

      <!-- BEGIN DNS Check -->
      <form id="dns-deck">

        <!-- Begin DNS input -->
        <div id="dns-input" class="content has-text-left">
          <span><p><b>RUN DNS CHECK</b></p></span>
          <div class="field has-addons ">
            <div id="ssl-search" class="control ">
              <p class="control has-icons-left">
                <input id="speedinput" class="input is-small is-hovered" v-model="dnsDomainName" type="text" placeholder="Search Domain DNS">
                <span class="icon is-small is-left">
                  <i class="fas fa-globe"></i>
                </span>
              </p>
            </div>
            <div class="control">
              <button v-on:click="handleDnsLookup" class="button is-small is-dark">
                <span><b>CHECK</b></span>
              </button>
            </div>
          </div>
        </div>
    
        <!-- BEGIN SSL Readout section -->
        <div v-if="dnsSubmitted" id="dns-output-mod" class="content">

          <!-- A Records -->
          <div class="field-body">
            <div class="field is-expanded">
              <div class="field has-addons">
                <p class="control">
                  <span class="button is-small has-text-light is-link">
                    <b>A Record(s):</b>
                  </span>
                </p>
                <p v-for="a in aRecords" class="control is-expanded" :key="a.aRecords">
                  <input class="input  is-small" type="text" v-model="aRecords" placeholder="A Record IP Address" readonly>
                </p>
              </div>
            </div>
          </div>
          
        </div>
        <!-- END SSL Readout section -->

      </form>
      <!-- END DNS Check -->

</template>

<script>
import axios from 'axios';
export default {
  name: 'dns',
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

<style>

#dns-deck{
  border: 0px;
  margin: 0px;
  margin-left: auto;
  margin-right: auto;
  padding: 0px;
  height: 90px;
  width: 100%;
}

#dns-input {
  position: relative;
  margin: 0px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  padding: 0px;
  border: 0px;
  width: 90%;
  height: 60px;
}

#dns-output-mod {
  position: relative;
  top: -20px;
  margin: 0px;
  margin-top: 0px;
  margin-left: auto;
  margin-right: auto;
  padding: 0px;
  padding-left: 0px;
  padding-right: 0px;
  border: 0px;
  width: 100%;
  height: 30px;
}

</style>