<!-- :::::::::::::::::::: Email DNS Check :::::::::::::::::::: -->
<template>

      <!-- BEGIN DNS Check -->
      <form id="dns-deck" class="has-text-left">

        <!-- Begin DNS input -->
        
        <div id="email-input" class="content">
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
                  <span class="button is-small has-text-light is-dark">
                    <b>A Record(s):</b>
                  </span>
                </p>
                <p v-for="a in aRecords" class="control is-expanded" :key="a.aRecords">
                  <input class="input  is-small" type="text" v-model="aRecords" placeholder="A Record IP Address" readonly>
                </p>
              </div>
            </div>
          </div>

          <!-- Mx Records -->
          <span id="ssl-sans-title" class="button is-dark is-small is-fullwidth has-text-light"><b>MX Record(s):</b></span>
          <div id="mx-list-mod" class="content has-text-left">
            <ul>
              <li v-for="mx in mxRecords" :key="mx.mxRecords">
                {{ mx }}
              </li>
            </ul>
          </div>
          <br>

          <!-- TXT Records -->
          <span id="ssl-sans-title" class="button is-dark is-small is-fullwidth has-text-light"><b>TXT Record(s):</b></span>
          <div id="txt-list-mod" class="content has-text-left">
            <ul>
              <li id="txt-sep-mod" v-for="txt in txtRecords" :key="txt.txtRecords" wrap>
                {{ txt }}
              </li>
            </ul>
          </div>
          
        </div>
        <!-- END SSL Readout section -->

      </form>
      <!-- END DNS Check -->

</template>

<script>
import axios from 'axios';
export default {
  name: 'email',
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
  height: 315px;
  width: 100%;
  font-size: 10px;
}

#email-input {
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

#mx-list-mod {
  margin: 0px;
  padding: 0px;
  height: 60px;
  border: 1px solid hsl(0, 0%, 80%);
  border-radius: 0px 0px 3px 3px;
  overflow: scroll;
  -webkit-app-region: no-drag;
}

#mx-list-mod ul {
  list-style-type: none;
  font-size: 12px;
}

#txt-list-mod {
  margin: 0px;
  padding: 5px;
  height: 80px;
  width: 100%;
  border: 1px solid hsl(0, 0%, 80%);
  border-radius: 0px 0px 3px 3px;
  overflow: scroll;
  -webkit-app-region: no-drag;
  font-size: 12px;
}

#txt-list-mod ul {
  width: 100%;
  margin: 0px;
  list-style-type: none;
  word-wrap: break-word;
}

#txt-list-mod ul li {
  width: 100%;
}

#txt-sep-mod {
  border-bottom: 1px solid #ff7900;
  margin-bottom: 10px;
  padding-bottom: 5px;
}


</style>