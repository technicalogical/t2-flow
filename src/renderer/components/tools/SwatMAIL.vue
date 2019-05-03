<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck">

    <!-- BEGIN Swat Tools section -->
    <div id="tool-page" class="content is-small">

       <!-- Swat Tools opening note -->
      <div id="tool-note" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p>PHP Mail Test</p>
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
        <div id="ssh-to" class="field is-horizontal">
          <label id="log" class="field-label is-small"><b>To</b></label>
          <div class="field-control control has-icons-left has-icons-right">
            <input class="input is-small is-hovered" v-model="phpTo" type="text" placeholder="To Address">
            <span class="icon is-small is-left">
              <i class="fas fa-user-circle"></i>
            </span>
          </div>
        </div>

        <div id="ssh-from" class="field is-horizontal">
          <label id="log" class="field-label is-small"><b>From</b></label>
          <div class="field-control control has-icons-left has-icons-right">
            <input class="input is-small is-hovered" v-model="phpFrom" type="text" placeholder="From Address">
            <span class="icon is-small is-left">
              <i class="fas fa-user-circle"></i>
            </span>
          </div>
        </div>
  
        <div id="copy-clear" class="buttons">

          <button id="copyButton" class="button is-small is-success btn" @click="checkPhpMail"  title="Connect via ssh">
            <span class="icon has-text-light">
              <i class="mdi mdi-power mdi-18px"></i>
            </span>
            <span>Check PHP Mail</span>
          </button>
      
      </div>
      <br><br>
      <div class="notification is-info" v-html="data"></div> 
</div>

      </div>
      
    
    <!-- END Swat DNS section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>
import axios from 'axios';
export default {
  name: 'SwatMAIL',
  data() {
    return {

      sshHost: '50.63.14.87',
      sshPort: '22',
      sshUsername: 'blehman',
      sshPassword: 'DetroitLions2!',
      data: '',
      phpTo: '',
      phpFrom: '',
    }
  },
  methods: {
  checkPhpMail: function() {
      let phpFrom = this.phpFrom;
    let phpTo = this.phpTo;
    let data = this.data;
    var SSH2Promise = require('ssh2-promise');
      var sshconfig = {
      host: this.sshHost,
      port: this.sshPort,
      username: this.sshUsername,
      password: this.sshPassword,
    }
        var ssh = new SSH2Promise(sshconfig);
        ssh.exec('php -r \'$from = "  ' + phpFrom + ' "; $to =  " '+ phpTo +' "; $subject = "PHP Mail test from FlowTool1"; $message = "This came directly from the flowtool, no scripts were uploaded, just commands through shell script";$headers = "From:" . $from; mail($to,$subject,$message, $headers);echo "Test email sent to ' + phpTo + ' ";\'\nexit\n').then((data) => {

          console.log(data); //ubuntu
          this.data=(data);
          
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
