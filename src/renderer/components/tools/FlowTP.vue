<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="flow-deck">

    <!-- BEGIN Swat DNS section -->
    <div id="ftp-page" class="content is-small">

      <!-- Swat Tools opening note -->
      <div id="tool-note" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p><b>FTP</b> Check</p>
      </div>

      <router-link id="ssl-title" to="/SwatTools" class="button is-small is-link">
        <span class="icon is-large has-text-light">
          <i class="fa fa-angle-left fa-2x"></i>
        </span>
        <span><strong>Back</strong></span>
      </router-link>

      <!-- BEGIN FTP Login -->
      <div id="ftp-login" class="content">

        <div id="ftp-host" class="field is-horizontal">
          <label id="log" class="field-label is-small has-text-bold"><b>Host</b></label>
          <div class="field-control control has-icons-left has-icons-right">
            <input class="input is-small is-hovered" type="text" v-model="ftpHost" placeholder="ftp.domain.com">
            <span class="icon is-small is-left">
              <i class="fas fa-globe"></i>
            </span>
          </div>
        </div>

        <div id="ftp-host" class="field is-horizontal">
          <label id="log" class="field-label is-small"><b>User</b></label>
          <div class="field-control control has-icons-left has-icons-right">
            <input class="input is-small is-hovered" v-model="ftpUser" type="text" placeholder="Username">
            <span class="icon is-small is-left">
              <i class="fas fa-user-circle"></i>
            </span>
          </div>
        </div>

        <div id="ftp-host" class="field is-horizontal">
          <label id="log" class="field-label is-small"><b>Password</b></label>
          <div class="field-control control has-icons-left has-icons-right">
            <input class="input is-small is-hovered" v-model="ftpPswd" type="password" placeholder="••••••••">
            <span class="icon is-small is-left">
              <i class="fas fa-key"></i>
            </span>
          </div>
        </div>

        <div id="ftp-prt" class="field is-horizontal">
          <label id="log" class="field-label is-small"><b>Port</b></label>
          <div class="field-control has-icons-left has-icons-right">
            <input class="input is-small is-hovered" v-model="ftpPort" type="number" min="21" max="22" placeholder="21">
          </div>
        </div>

        <div id="copy-clear" class="buttons">
       
          <button id="copyButton" class="button is-small is-success btn" @click="openFTP"  title="Connect via FTP">
            <span class="icon has-text-light">
              <i class="mdi mdi-power mdi-18px"></i>
            </span>
            <span>Connect</span>
          </button>

          <button id="copyButton"  class="button is-small is-danger btn" @click="closeFTP" title="Click to disconnect FTP">
            <span class="icon has-text-light">
              <i class="mdi mdi-close mdi-18px"></i>
            </span>
            <span>Disconnect</span>
          </button>

          <button id="copyButton"  class="button is-small is-dark btn" @click="clearFTP" title="Click to clear FTP inputs">
            <span class="icon is-medium has-text-light">
              <i class="fas fa-eraser"></i>
            </span>
            <span>Clear Inputs</span>
          </button>
          
        </div>
        <div id="fileDir">

          <!-- File List Display Header -->
          <ul id="flhead">
            <li id="listheadone"><b>File Type</b></li>
            <li id="listhead"><b>File Name</b></li>
            <li id="listheadtwo"><b>File Size</b></li>
          </ul>

          <!-- File List Item Type -->
          <ul id="ftype"> 
            <li v-for="files in ftpFiles" :key="files.ftpFiles">
              {{ files.type }}
            </li>
          </ul>

          <!-- File List Item Name -->
          <ul id="fname">           
            <li v-for="files in ftpFiles" :key="files.ftpFiles">
              {{ files.name }}
            </li>
          </ul>

          <!-- File List Item Size -->
          <ul id="fsize">
            <li v-for="files in ftpFiles" :key="files.ftpFiles">
              {{ files.size + "KB" }}
            </li>
          </ul>

        </div>

      </div>
      
    </div>
    <!-- END Swat DNS section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>
import axios from 'axios';
export default {
  name: 'FlowTP',
  data() {
    return {
      ftpHost: '',
      ftpUser: '',
      ftpPswd: '',
      ftpPort: '',
      ftpFiles: [], 
    }
  },
  methods: {
    openFTP: function(){
      var jsftp = require("jsftp");

      var ftp = new jsftp({
        host: this.ftpHost,
        port: this.ftpPort, // defaults to 21
        user: this.ftpUser, // defaults to "anonymous"
        pass: this.ftpPswd, // defaults to "@anonymous"
      })

      ftp.ls(".", (err, res) => {

        res.forEach(object => {
            console.log(object)
            this.ftpFiles = res;
        });
      });
    },

    closeFTP: function(e){
      var jsftp = require("jsftp");

      var ftp = new jsftp({
        host: this.ftpHost,
        port: this.ftpPort, // defaults to 21
        user: this.ftpUser, // defaults to "anonymous"
        pass: this.ftpPswd, // defaults to "@anonymous"
      })

      ftp.raw("QUIT"); ftp.destroy(
        this.ftpHost = "",
        this.ftpUser = "",
        this.ftpPswd = "",
        this.ftpPort = "",
        this.ftpFiles = ""  
      )
      e.preventDefault();
    },

    clearFTP: function(){
      this.ftpHost = ""
      this.ftpUser = ""
      this.ftpPswd = ""
      this.ftpPort = ""
    }   
  },
  
}
</script>

<style>
#ftp-login {
  position: relative;
  margin: 0px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  padding: 0px;
  width: 90%;
  border: 0px;
  height: 460px;
}

#ftp-page {
  position: relative;
  width: 80%;
  height: 600px;
  display:block;
  margin-left: auto;
  margin-right: auto;
  border: 0px;
}

#ftp-host {
  width: 220px;
  margin-right: 20px;
  float: left;
}
#ftp-prt {
  width: 60px;
  margin-right: 20px;
  float: left;
}
input[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  display: none;
}

#fileDir {
  position: relative;
  margin-top: 25px;
  margin-left: auto;
  margin-right: auto;
  overflow: scroll;
  height: 250px;
  width: 100%;
  background-color: #fff;
  border: 1px solid hsl(0, 0%, 71%);
  border-radius: 3px;
  
}

#flhead {
  position: relative;
  margin:0px;
}

#listheadone {
  width: 60px;
  min-width: 60px;
  background: hsl(0, 0%, 92%);
  border-radius: 3px 0px 0px 0px;
  float: left;
  margin: 0px;
  padding: 0px;
}

#listhead {
  width: 187px;
  min-width: 187px;
  background: hsl(0, 0%, 92%);
  float: left;
  margin: 0px;
  padding: 0px; 
}

#listheadtwo {
  width: 75px;
  background: hsl(0, 0%, 92%);
  border-radius: 0px 3px 0px 0px;
  float: left;
  margin: 0px;
  padding: 0px;
}

#ftype {
  width: 60px;
  float: left;
  margin: 0px;
  padding: 0px;
}

#fname {
  width: 187px;
  float: left;
  margin: 0px;
  padding: 0px;
}
#fsize {
  width: 75px;
  float: right;
  margin: 0px;
  padding: 0px;
}

#fileDir li {
  list-style-type: none;
  text-align: right;
  margin: 0px;
  padding: 2px;
  padding-right: 4px;
  border: 0px;
  border-bottom: 1px solid hsl(0, 0%, 60%); 
}


</style>