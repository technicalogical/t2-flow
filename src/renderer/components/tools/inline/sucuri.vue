<!-- :::::::::::::::::::: Sucuri Website Malware Check :::::::::::::::::::: -->
<template>
  
    <!-- BEGIN WPPS input -->
    <form id="sucuri-start" class="field is-grouped has-text-left">
      <span><p><b>RUN SUCURI SITE CHECK</b></p></span>
      <div class="field has-addons">
        <p class="control is-expanded is-small has-icons-left">
          <input class="input is-small is-selected" type="text" placeholder="www.example.com" v-model="domainName" title="Use this tool as a precursor to consulting on your customer's overall security needs.">
          <span class="icon is-small is-left">
            <i class="mdi mdi-shield-half-full mdi-18px"></i>
          </span>
        </p>
        <p class="control">
          <button id="speedgo" class="button is-small is-dark" v-on:click="handleLookup">
            <p><b>CHECK</b></p>
          </button>
        </p>
      </div>
    </form>
    <!-- END WPPS input -->

</template>

<script>
import axios from 'axios';
export default {
  name: 'sucuri',
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
      let apiPrefix = 'https://sitecheck.sucuri.net/results/';
      window.open(apiPrefix + readyUrl, "_blank");
      e.preventDefault();
    }
  },
}
</script>

<style>

#sucuri-start {
  position: relative;
  width: 100%;
  text-align: center;
  display: block;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  border: 0px;
}

#sucuri-start p {
  font-size: 10px;
}

</style>