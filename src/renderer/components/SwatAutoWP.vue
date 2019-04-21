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

      <!-- BEGIN FTP Login -->
      <div id="ftp-login" class="content">

        <div id="ftp-host" class="field is-horizontal">
          <label id="log" class="field-label is-small has-text-bold"><b>Host</b></label>
          <div class="field-control control has-icons-left has-icons-right">
            <input class="input is-small is-hovered" type="text" v-model="sshHost" placeholder="ftp.domain.com" value="50.63.14.87">
            <span class="icon is-small is-left">
              <i class="fas fa-globe"></i>
            </span>
          </div>
        </div>

        <div id="ftp-host" class="field is-horizontal">
          <label id="log" class="field-label is-small"><b>User</b></label>
          <div class="field-control control has-icons-left has-icons-right">
            <input class="input is-small is-hovered" v-model="sshUsername" type="text" placeholder="Username" value="blehman">
            <span class="icon is-small is-left">
              <i class="fas fa-user-circle"></i>
            </span>
          </div>
        </div>

        <div id="ftp-host" class="field is-horizontal">
          <label id="log" class="field-label is-small"><b>Password</b></label>
          <div class="field-control control has-icons-left has-icons-right">
            <input class="input is-small is-hovered" v-model="sshPassword" type="password" placeholder="••••••••" value="DetroitLions2!">
            <span class="icon is-small is-left">
              <i class="fas fa-key"></i>
            </span>
          </div>
        </div>

        <div id="ftp-prt" class="field is-horizontal">
          <label id="log" class="field-label is-small"><b>Port</b></label>
          <div class="field-control has-icons-left has-icons-right">
            <input class="input is-small is-hovered" v-model="sshPort" type="number" min="21" max="22" placeholder="22" value="22">
          </div>
        </div>

        <div id="copy-clear" class="buttons">
       
          <button id="copyButton" class="button is-small is-success btn" @click="connectSSH"  title="Connect via FTP">
            <span class="icon has-text-light">
              <i class="mdi mdi-power mdi-18px"></i>
            </span>
            <span>Connect</span>
          </button>
          <div id="copy-clear" class="buttons">
       
          <button id="copyButton" class="button is-small is-success btn" @click="checkPhpMail"  title="Connect via FTP">
            <span class="icon has-text-light">
              <i class="mdi mdi-power mdi-18px"></i>
            </span>
            <span>Check PHP Mail</span>
          </button>

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
export default {
  name: 'SwatAutoWP',
  data() {
    return {
      sshHost: '50.63.14.87',
      sshPort: '22',
      sshUsername: 'blehman',
      sshPassword: 'DetroitLions2!',
    }
  },
  methods: {  
  connectSSH: function(){
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
        stream.end('cd /var/www/html/ && wp plugin update --all\nexit\n');
      });
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
        stream.end('php -r \'$from = "blheman@s166-62-125-174.secureserver.net"; $to = "lehman.brandon@gmail.com, nic8869@godaddy.com, steven1096@godaddy.com"; $subject = "PHP Mail test from FlowTool"; $message = "This came directly from the flowtool, no scripts were uploaded, just commands through shell script";$headers = "From:" . $from; mail($to,$subject,$message, $headers);echo "Test email sent";\'\nexit\n');
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