<!-- :::::::::::::::::::: WordPress Premium Support Pre-Qualification :::::::::::::::::::: -->
<template>
  
    <!-- BEGIN WPPS input -->
    <form id="wpps-start-mobile" class="field is-grouped has-text-left"> 
      <span><p><b>PRE-QUALIFY WEBSITE FOR WPPS</b></p></span>
      <div class="field has-addons">
        <p class="control is-small">
          <span class="button is-small is-dark">
            <span id="wpps-id" class="icon">
              <p><b>WPPS</b></p>
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
          <button id="speedgo" class="button is-small is-dark" v-on:click="handleLookup" title="Pre-Qualify Site for WPPS">
            <p><b>CHECK</b></p>
          </button>
        </p>
      </div>

    </form>
    <!-- END WPPS input -->
      
</template>

<script>
import axios from 'axios';
export default{
  name: 'wpps',

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

<style>

#wpps-start-mobile {
  position: relative;
  width: 100%;
  text-align: center;
  top: 0px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border: 0px;
  margin-bottom: 20px;
}

#wpps-start-mobile p {
  font-size: 10px;
}


#wpps-id {
  width: 60px
}
</style>