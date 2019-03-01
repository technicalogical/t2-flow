<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck">

    <!-- BEGIN Swat DNS section -->
    <div id="ftp-page" class="content is-small">

      <!-- Swat Tools opening note -->
      <div id="tool-note" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p><b>Flow</b>TP</p>
      </div>

      <!-- BEGIN FTP Login -->
      <div id="ftp-login" class="content">
        <p>
          <input class="input ftph is-small" type="text" placeholder="Host">
        </p>
        <p>
          <input class="input ftpp is-small" type="number" placeholder="Port">
        </p>
      </div>

    
      
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

<style>
#ftp-login {
  position: relative;
  margin: 0px;
  padding: 0px;
  width: 100%;
  border: 1px solid red;
  height: 500px;
}
.ftph {
  
  width: 200px;
 
}
.ftpp {
 
  width: 50px;
  
}


#ftp-page {
  position: relative;
  width: 85%;
  height: 490px;
  display:block;
  margin-left: auto;
  margin-right: auto;
  border: 0px;
}
</style>