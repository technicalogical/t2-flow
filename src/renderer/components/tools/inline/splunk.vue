<!-- :::::::::::::::::::: SPLUNK> Email & Domain Check :::::::::::::::::::: -->
<template>

    <!-- BEGIN SPLUNK input -->
    <form id="splunk-start" class="field is-grouped has-text-left">
      <span><p><b>RUN SPLUNK CHECK</b></p></span> 
      <div class="field has-addons">
        <p class="control is-expanded is-small has-icons-left">
          <input class="input is-small is-selected" type="text" placeholder="domain / email" v-model="domainName" title="Enter valid domain name or email address">
          <span class="icon is-small is-left">
            <i class="mdi mdi-at mdi-18px"></i>
          </span>
        </p>
        <p class="control">
          <button id="speedgo" class="button is-small is-dark" v-on:click="handleLookup">
            <p><b>CHECK</b></p>
          </button>
        </p>
      </div>
    </form>
    <!-- END SPLUNK input -->
    
</template>

<script>
import axios from 'axios';
export default {
  name: 'splunk',
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
      let apiPrefix = 'https://godaddy.splunkcloud.com/en-US/app/ahs/search?q=search%20';
      let apiPostfix = '&display.page.search.mode=smart&dispatch.sample_ratio=1&earliest=-7d%40&latest=now&sid=1550618926.135529';
      window.open(apiPrefix + readyUrl + apiPostfix, "_blank");
      e.preventDefault();
    }
  },
}
</script>

<style>

#splunk-start {
  position: relative;
  width: 100%;
  text-align: center;
  display: block;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  border: 0px;
}

#splunk-start p {
  font-size: 10px;
}

</style>