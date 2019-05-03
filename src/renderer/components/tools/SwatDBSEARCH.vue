<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck">

    <!-- BEGIN Swat Tools section -->
    <div id="tool-page" class="content is-small">

       <!-- Swat Tools opening note -->
      <div id="tool-note" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p>WP Database Search and Replace</p>
      </div>
        <!-- Swat Tools opening note -->
        
        <!-- BEGIN - Swat Tool Tabs -->
      <div id="tool-tabs">
        <div id="tool-tab-left">
          <router-link to="/SwatAutoWP" class="button is-small is-dark">
            <span class="icon is-large has-text-link">
              <i id="itcolor" class="fa fa-angle-left fa-2x"></i>
            </span>
            <span><b>Auto</b> WPPS</span>
          </router-link>
        </div>

      </div>
      <!-- END - Swat Tool Tabs -->

      <!-- BEGIN ssh Login -->
      
      <div id="ssh-login" class="content">
        <div id="ssh-host" class="field is-horizontal">
          <label id="log" class="field-label is-small has-text-bold"><b>Old Value</b></label>
          <div class="field-control control has-icons-left has-icons-right">
            <input class="input is-small is-hovered" type="text" v-model="oldValue" placeholder="Old Value">
            <span class="icon is-small is-left">
              <i class="fas fa-globe"></i>
            </span>
          </div>
        </div>
        <div id="ssh-host" class="field is-horizontal">
          <label id="log" class="field-label is-small has-text-bold"><b>New Value</b></label>
          <div class="field-control control has-icons-left has-icons-right">
            <input class="input is-small is-hovered" type="text" v-model="newValue" placeholder="New Value">
            <span class="icon is-small is-left">
              <i class="fas fa-globe"></i>
            </span>
          </div>
        </div>
        <br><br><br><br><br>
  
        <div id="copy-clear" class="buttons">

          <button id="copyButton" class="button is-small is-success btn" @click="dryRun"  title="Connect via ssh">
            <span class="icon has-text-light">
              <i class="mdi mdi-power mdi-18px"></i>
            </span>
            <span>Dry Run</span>
          </button>

          <button id="copyButton" class="button is-small is-success btn" @click="searchReplace"  title="Connect via ssh">
            <span class="icon has-text-light">
              <i class="mdi mdi-power mdi-18px"></i>
            </span>
            <span>Search and Replace</span>
          </button>
      
      </div>
      <br><br>
        <div class="content" id="output-area-dbsearch">
            
                <div class="db-list-med content" v-html="content"></div> 

        </div>
        </div>

      </div>
      </div>
    
    <!-- END Swat DNS section -->


  <!-- END - Primary application deck -->
    
</template>

<script>
import AnsiUp from 'ansi_up'
import axios from 'axios';
export default {
  name: 'SwatTERMINAL',
  data() {
    return {

      sshHost: '50.63.14.87',
      sshPort: '22',
      sshUsername: 'blehman',
      sshPassword: 'DetroitLions2!',
      data: '',
      content: '',
      oldValue: '',
      newValue: ''
    }
  },
  methods: {
  dryRun: function() {
    var SSH2Promise = require('ssh2-promise');
      var sshconfig = {
      host: this.sshHost,
      port: this.sshPort,
      username: this.sshUsername,
      password: this.sshPassword,
    }
        var ansi_up = new AnsiUp();
        let newValue = this.newValue;
        let oldValue = this.oldValue;
        let regex = /([+\-])/g;
        let regex1 = /([|])/g;
        var ssh = new SSH2Promise(sshconfig);
        ssh.exec('cd /var/www/html && wp search-replace ' + oldValue + ' ' + newValue + ' --dry-run --format=count\n').then((data) => {
          
          let results = ansi_up.ansi_to_html(data);
          this.content="There are " +results+ "changes to be made.";
        //   this.results=results.replace(/\n/gm, '<br>');
        //   this.content=this.results.replace(regex, "");
        //   this.content=this.content.replace(regex1, ",")
          console.log(results);
          
        });
  },
    searchReplace: function() {
    var SSH2Promise = require('ssh2-promise');
      var sshconfig = {
      host: this.sshHost,
      port: this.sshPort,
      username: this.sshUsername,
      password: this.sshPassword,
    }
        var ansi_up = new AnsiUp();
        let newValue = this.newValue;
        let oldValue = this.oldValue;
        let regex = /([+\-])/gi;
        var ssh = new SSH2Promise(sshconfig);
        ssh.exec('cd /var/www/html && wp search-replace ' + oldValue + ' ' + newValue + ' --format=count\n').then((data) => {
          
          let results = ansi_up.ansi_to_html(data);
          this.content= +results+ " changes have been made.";
        //   this.results=results.replace(/\n/gm, '<br>');
        //   this.content=this.results.replace(regex, "");
        //   this.content=this.content.replace(regex1, ",")
          console.log(results);
          
        });
  },
  }
}
//use spawn, if you want to stream on output of command

// ssh.exec("wp theme status").then(([data]) => {
//   console.log([data]); //ubuntu
//   this.data=([data]);
// });

</script>



<style>
#ssh-login {
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

#ssh-page {
  position: relative;
  width: 80%;
  height: 600px;
  display:block;
  margin-left: auto;
  margin-right: auto;
  border: 0px;
}

#ssh-host {
  width: 220px;
  margin-right: 20px;
  float: left;
}
#ssh-prt {
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

#results {
  overflow-y: scroll;
    overflow-x:hidden;
}
#content {
  overflow: scroll;
  
}
#card-content {
    position: relative;
  border-style: none !important;
  margin: 0px;
  padding: 0px;
  margin-left: auto;
  margin-right: auto;
  height: 58vh;
  border: 1px solid hsl(0, 0%, 80%);
  border-radius: 0px 0px 4px 4px;
  overflow: scroll;
  overflow-y: scroll;
  -webkit-app-region: no-drag;
  width: 100%;
  font-size: 11px;
  
}
/* .content {
    position: relative;
  border-style: none !important;
  margin: 0px;
  padding: 0px;
  margin-left: auto;
  margin-right: auto;
  height: 58vh;
  border: 1px solid hsl(0, 0%, 80%);
  border-radius: 0px 0px 4px 4px;
  overflow: scroll;
  overflow-y: scroll;
  -webkit-app-region: no-drag;
  width: 100%;
  font-size: 11px;
  
} */
.card-content {
    position: relative;
  border-style: none !important;
  margin: 0px;
  padding: 0px;
  margin-left: auto;
  margin-right: auto;
  height: 58vh;
  border: 1px solid hsl(0, 0%, 80%);
  border-radius: 0px 0px 4px 4px;
  overflow: scroll;
  overflow-y: scroll;
  -webkit-app-region: no-drag;
  width: 100%;
  font-size: 11px;
  
}
.db-list-med{
  border-style: none !important;
  margin: 0px;
  padding-left: 10px;
  padding-bottom: 15px;
  margin-left: -40px;
  margin-right: -40px;
  height: 42vh;
  border: 1px solid hsl(0, 0%, 80%);
  border-radius: 0px 0px 4px 4px;
  overflow: scroll;
  -webkit-app-region: no-drag;
}
.output-area-dbsearch {
  position: relative;
  margin: 0px;
  margin-top: 0px;
  margin-left: auto;
  margin-right: auto;
  padding: 0px;
  padding-left: 0px;
  padding-right: 0px;
  border: 0px;
  width: 100%;
  height: 100px;
}

</style>
