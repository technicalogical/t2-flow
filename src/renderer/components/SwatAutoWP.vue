<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck">

    <!-- BEGIN Swat Tools section -->
    <div id="tool-page" class="content is-small">

       <!-- Swat Tools opening note -->
      <div id="tool-note" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p><b>CODENAME:</b> ABOVE THE CURVE</p>
      </div>

      <router-link id="ssl-title" to="/SwatTools" class="button is-small is-link">
        <span class="icon is-large has-text-light">
          <i class="fa fa-angle-left fa-2x"></i>
        </span>
        <span><strong>Back</strong></span>
      </router-link>

      <!-- BEGIN ssh Login -->
      <div id="ssh-login" class="content">

        <div id="ssh-host" class="field is-horizontal">
          <label id="log" class="field-label is-small has-text-bold"><b>Host</b></label>
          <div class="field-control control has-icons-left has-icons-right">
            <input class="input is-small is-hovered" type="text" v-model="sshHost" placeholder="IP Address">
            <span class="icon is-small is-left">
              <i class="fas fa-globe"></i>
            </span>
          </div>
        </div>

        <div id="ssh-host" class="field is-horizontal">
          <label id="log" class="field-label is-small"><b>User</b></label>
          <div class="field-control control has-icons-left has-icons-right">
            <input class="input is-small is-hovered" v-model="sshUsername" type="text" placeholder="Username">
            <span class="icon is-small is-left">
              <i class="fas fa-user-circle"></i>
            </span>
          </div>
        </div>

        <div id="ssh-host" class="field is-horizontal">
          <label id="log" class="field-label is-small"><b>Password</b></label>
          <div class="field-control control has-icons-left has-icons-right">
            <input class="input is-small is-hovered" v-model="sshPassword" type="password" placeholder="••••••••">
            <span class="icon is-small is-left">
              <i class="fas fa-key"></i>
            </span>
          </div>
        </div>

        <div id="ssh-prt" class="field is-horizontal">
          <label id="log" class="field-label is-small"><b>Port</b></label>
          <div class="field-control has-icons-left has-icons-right">
            <input class="input is-small is-hovered" v-model="sshPort" type="number" min="21" max="22" placeholder="22">
          </div>
        </div>
  
        <div id="copy-clear" class="buttons">
          
          <button id="copyButton" class="button is-small is-success btn" @click="testing"  title="Connect via ssh">
            <span class="icon has-text-light">
              <i class="mdi mdi-power mdi-18px"></i>
            </span>
            <span>Testing ssh2-promise</span>
          </button>

          <button id="copyButton" class="button is-small is-success btn" @click="connectSSH"  title="Connect via ssh">
            <span class="icon has-text-light">
              <i class="mdi mdi-power mdi-18px"></i>
            </span>
            <span>Show Installed Plugins</span>
          </button>
          
       
          <button id="copyButton" class="button is-small is-success btn" @click="checkPhpMail"  title="Connect via ssh">
            <span class="icon has-text-light">
              <i class="mdi mdi-power mdi-18px"></i>
            </span>
            <span>Check PHP Mail</span>
          </button>

          <button id="copyButton" class="button is-small is-success btn" @click="dbBackup"  title="Connect via ssh">
            <span class="icon has-text-light">
              <i class="mdi mdi-power mdi-18px"></i>
            </span>
            <span>Database Backup</span>
          </button>

          <button id="copyButton" class="button is-small is-success btn" @click="listThemes"  title="Connect via ssh">
            <span class="icon has-text-light">
              <i class="mdi mdi-power mdi-18px"></i>
            </span>
            <span>Show Themes</span>
          </button>

          <button id="copyButton" class="button is-small is-success btn" @click="getConfig"  title="Connect via ssh">
            <span class="icon has-text-light">
              <i class="mdi mdi-power mdi-18px"></i>
            </span>
            <span>Show wp-config.php</span>
          </button>

        
      </div>
      <br><br>
      <!-- <div class="box" id="output">{{ output }}</div> -->
      
<div class="card">
  <!-- <header class="card-header">
    <p class="card-header-title">
      Results
    </p>
  </header> -->
  <div class="card-content">
    <div class="content" id="results"> {{ showSSH }} {{ configResult }}
    </div>

    <div v-if="result === 'showTheme'">
      {{ howManyThemes }}
    </div>
    <div v-else-if="result === 'showPlugins'">
      <b>test: </b>{{ showPlugins2 }}
    </div>
    <div v-else-if="result === 'showSSH'">
      <!-- <b>test: </b>{{ showSSH }}  -->
      
    </div>
  </div>

</div>

      </div>
      </div>
    
    <!-- END Swat DNS section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>
import axios from 'axios';
import { log } from 'util';
export default {
  name: 'SwatAutoWP',
  data() {
    return {
      result: 'showTheme',
      howManyThemes: '',
      sshHost: '50.63.14.87',
      sshPort: '22',
      sshUsername: 'blehman',
      sshPassword: 'DetroitLions2!',
      data: '',
      showSSH: '',
      showPlugins2: '',
      configResult: '',
    }
  },
  computed: {
    hmt: function(){
      return this.howManyThemes;
    }
  },
  methods: { 
    testing: function() {
      
    var SSH2Promise = require('ssh2-promise');
      var sshconfig = {
      host: this.sshHost,
      port: this.sshPort,
      username: this.sshUsername,
      password: this.sshPassword,
    }
        var ssh = new SSH2Promise(sshconfig);
        ssh.exec('cd /var/www/html && wp plugin status --color=none').then((data) => {
          let s = String(data);

            var buffArray = JSON.stringify(s).split('\n');

            buffArray.forEach((ba)=>{

              this.howManyThemes.push(ba);
          console.log(howManyThemes); //ubuntu
          this.showSSH=(howManyThemes);
          })
        });
        //use spawn, if you want to stream on output of command
        ssh.spawn("tail /var/www/html/log.txt").then((socket) => {
          // this.showSSH(data);
          socket.on('data', () => {
            // this.showSSH=(data);
            //file content will be available here
          })
        });
 
 
          //Async Await
          //use exec, if output of command is limited
          (async function(){
              // var showSSH = (data);
              var data = await ssh.exec("cd /var/www/html && wp plugin status --color=none");
              console.log(data); //ubuntu
              // this.showSSH=(data);
              
              
          })();
          
          //use spawn, if you want to stream on output of command
          (async function(){
              var socket = await ssh.spawn("tail -f /var/log.txt");
              socket.on('data', () => {
                //file content will be available here
              })
          })(); 
          },
    
  connectSSH: function(){
    this.result = 'showPlugins';
    var Client = require('ssh2').Client;
    var conn = new Client();
    conn.on('ready', function() {
      console.log('Client :: ready');
      conn.shell(function(err, stream) {
        if (err) throw err;
        stream.on('close', function() {
          console.log('Stream :: close');
          conn.end();
        }).on('data', function(data) {
          console.log('STDOUT: ' + data);
          this.showPlugins2=(data);
          
        }).stderr.on('data', function(data) {
          console.log('STDERR: ' + data);
          
        });
        
        stream.end('cd /var/www/html/ && wp plugin status\n');
      });
//     var conn = new Client();
// conn.on('ready', function() {
//   console.log('Client :: ready');
//   conn.exec('cd /var/www/html/ && wp plugin status', function(err, stream) {
//     if (err) throw err;
//     stream.on('close', function(code, signal) {
//       console.log('Stream :: close :: code: ' + code + ', signal: ' + signal);
//       conn.end();
//     }).on('data', function(data) {
//       console.log('STDOUT: ' + data);
//       document.getElementById('output').innerHTML = (data);
//     }).stderr.on('data', function(data) {
//       console.log('STDERR: ' + data);
//     });
//   });
      
        }).connect({
          host: this.sshHost,
          port: this.sshPort,
          username: this.sshUsername,
          password: this.sshPassword,
        });
    },


  checkPhpMail: function(){
    var Client = require('ssh2').Client;
    var conn = new Client();
    conn.on('ready', function() {
      console.log('Client :: ready');
      conn.shell(function(err, stream) {
        if (err) throw err;
        stream.on('close', function() {
          console.log('Stream :: close');
          conn.end();
        }).on('data', function(data) {
          console.log('STDOUT: ' + data);
        }).stderr.on('data', function(data) {
          console.log('STDERR: ' + data);
        });
        stream.end('php -r \'$from = "blehman@s166-62-125-174.secureserver.net"; $to = "lehman.brandon@gmail.com"; $subject = "PHP Mail test from FlowTool"; $message = "This came directly from the flowtool, no scripts were uploaded, just commands through shell script";$headers = "From:" . $from; mail($to,$subject,$message, $headers);echo "Test email sent";\'\nexit\n');
      });
        }).connect({
          host: this.sshHost,
          port: this.sshPort,
          username: this.sshUsername,
          password: this.sshPassword,
        });
    },
  dbBackup: function(){
    var Client = require('ssh2').Client;
    var conn = new Client();
    conn.on('ready', function() {
      console.log('Client :: ready');
      conn.shell(function(err, stream) {
        if (err) throw err;
        stream.on('close', function() {
          console.log('Stream :: close');
          conn.end();
        }).on('data', function(data) {
          console.log('STDOUT: ' + data);
        }).stderr.on('data', function(data) {
          console.log('STDERR: ' + data);
        });
        stream.end('cd /var/www/html && wp db export\nexit\n');
      });
        }).connect({
          host: this.sshHost,
          port: this.sshPort,
          username: this.sshUsername,
          password: this.sshPassword,
        });
    },


    listThemes: function(){
      this.result = 'showTheme';
      
    var Client = require('ssh2').Client;
    var conn = new Client();
    conn.on('ready', function() {
      console.log('Client :: ready');
      this.howManyThemes = 'steven';
      conn.shell(function(err, stream) {
        
        if (err) throw err;
        stream.on('close', function() {
          console.log('Stream :: close');
          conn.end();
        }).on('data', function(data) {
          this.howManyThemes = (data);
          console.log('STDOUT: ' + data);
          
        }).stderr.on('data', function(data) {
          console.log('STDERR: ' + data);
        });
        stream.end('cd /var/www/html && wp theme status\nexit\n');
      });
        }).connect({
          host: this.sshHost,
          port: this.sshPort,
          username: this.sshUsername,
          password: this.sshPassword,
        });
    },

    getConfig: function(){
    var Client = require('ssh2').Client;
    var conn = new Client();
    conn.on('ready', function() {
      console.log('Client :: ready');
      conn.shell(function(err, stream) {
        if (err) throw err;
        stream.on('close', function() {
          console.log('Stream :: close');
          conn.end();
        }).on('data', function(data) {
          console.log('STDOUT: ' + data);
        }).stderr.on('data', function(data) {
          console.log('STDERR: ' + data);
        });
        stream.end('cd /var/www/html && wp config get > log2.txt && tail log2.txt\nexit\n');
        this.configResult=(data);
      });
        }).connect({
          host: this.sshHost,
          port: this.sshPort,
          username: this.sshUsername,
          password: this.sshPassword,
        });
    },
  },
}
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


</style>