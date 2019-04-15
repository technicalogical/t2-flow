<!-- :::::::::::::::::::: General SSL Check :::::::::::::::::::: -->
<template>

      <!--BEGIN SSL Check -->
      <form id="ssl-deck">

        <!-- BEGIN SSL input -->
        <div id="ssl-input-mod" class="content has-text-left">
          <span><p><b>RUN SSL CERTIFICATE CHECK</b></p></span> 
          <div class="field has-addons ">
            <div id="ssl-search" class="control ">
              <p class="control has-icons-left">
                <input id="speedinput" class="input is-small is-hovered" v-model="domainName" type="text" placeholder="www.example.com" title="check domain for valid SSL Certificate">
                <span class="icon is-small is-left">
                  <i class="mdi mdi-lock mdi-18px"></i>
                </span>
              </p>
            </div>
            <div class="control">
              <button v-on:click="handleLookup" class="button is-small is-dark">
                <span><b>CHECK</b></span>
              </button>
            </div>
          </div>
        </div>

        <!-- BEGIN SSL Readout -->
        <div v-if="submitted" id="ssl-output-mod" class="content">

          <!-- IP Address -->
          <div class="field-body">
            <div class="field is-expanded">
              <div class="field has-addons">
                <p class="control">
                  <span class="button is-dark is-small has-text-light">
                    <p><b>IP:</b></p>
                  </span>
                </p>
                <p class="control is-expanded">
                  <input class="input  is-small" type="text" v-model="ip" placeholder="IP Address" readonly>
                </p>
              </div>
            </div>
          </div>

          <!-- Common Name -->
          <div class="field-body">
            <div class="field is-expanded">
              <div class="field has-addons">
                <p class="control">
                  <span class="button is-dark is-small has-text-light">
                    <p><b>Common Name:</b></p>
                  </span>
                </p>
                <p class="control is-expanded">
                  <input class="input  is-small" type="text" v-model="commonName" placeholder="Common Name" readonly>
                </p>
              </div>
            </div>
          </div>

          <!-- Experation Date -->
          <div class="field-body">
            <div class="field is-expanded">
              <div class="field has-addons">
                <p class="control">
                  <span class="button is-dark is-small has-text-light">
                    <p><b>Expire Date:</b></p>
                  </span>
                </p>
                <p class="control is-expanded">
                  <input class="input  is-small" type="text" v-model="expireDate" placeholder="Expire Date" readonly>
                </p>
              </div>
            </div>
          </div>

          <!-- Certificate Issuer -->
          <div class="field-body">
            <div class="field is-expanded">
              <div class="field has-addons">
                <p class="control">
                  <span class="button is-dark is-small has-text-light">
                    <p><b>Issuer:</b></p>
                  </span>
                </p>
                <p class="control is-expanded">
                  <input class="input  is-small" type="text" v-model="issuer" placeholder="Issuer" readonly>
                </p>
              </div>
            </div>
          </div>

          <!-- Certificate Serial Number -->
          <div class="field-body">
            <div class="field is-expanded">
              <div class="field has-addons">
                <p class="control">
                  <span class="button is-dark is-small has-text-light">
                    <p><b>Serial Number:</b></p>
                  </span>
                </p>
                <p class="control is-expanded">
                  <input class="input is-small" type="text" v-model="serialNumber" placeholder="Serial Number" readonly>
                </p>
              </div>
            </div>
          </div>

        </div>

      </form>

</template>

<script>
import axios from 'axios';
export default {
  name: 'ssl',
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

<style>

#ssl-deck{
  position: relative;
  border: 0px;
  margin: 0px;
  margin-left: auto;
  margin-right: auto;
  padding: 0px;
  height: 270px;
  width: 100%;
}

#ssl-input-mod {
  position: relative;
  margin: 0px;
  margin-left: auto;
  margin-right: auto;
  padding: 0px;
  border: 0px;
  width: 90%;
  height: 40px;
}

#ssl-input-mod p {
  font-size: 10px;
}

#ssl-output-mod {
  position: relative;
  margin: 0px;
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  padding: 0px;
  padding-left: 0px;
  padding-right: 0px;
  border: 0px;
  width: 100%;
  height: 250px;
}

</style>