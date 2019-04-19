<template>
  <div>
    <div style="height: 50vh !important;
    overflow: scroll;
    -ms-overflow-style: scrollbar;
    -webkit-app-region: no-drag;
    width: 100%;
    margin-left: -12px;
    border-left: 6px solid #A37A00;
    ">
    <ul class="no-style">
      <li>
        <input type="checkbox" id="checkbox_01" v-model="checked_01">
        <label v-bind:class="{strike: checked_01}" for="checkbox_01">Make sure SSH is enabled</label>
      </li>
      <div class="box">
        <p style="font-size: 10px"><b>Secure shell</b> is a method for secure login from one computer to another. It is an alternative to perfoming actions in a GUI, or transfering files in FTP. Enabling SSH can be done is easily done in the Godaddy account. <a target="_blank" class="orange-link" href="https://www.godaddy.com/help/enable-ssh-16102">How to</a></p>
      </div>


      <li>
        <input type="checkbox" id="checkbox_02" v-model="checked_02">
        <label v-bind:class="{strike: checked_02}" for="checkbox_02">Get trace route</label>
      </li>
      <div class="box">
        <p style="font-size: 10px"><b>traceroute</b> can be completed by opening the Windows command prompt, and typing <br><b><i> - tracert exampledomain.tld</i></b><br>Learn more about traceroutes with this Godaddy Garage <a target="_blank" class="orange-link" href="https://www.godaddy.com/garage/intro-troubleshooting-traceroute-works-steps-use/">Article</a>.</p>
      </div>


      <li>
        <input type="checkbox" id="checkbox_03" v-model="checked_03">
        <label v-bind:class="{strike: checked_03}" for="checkbox_03">check ip in host.deny</label>
      </li>
      <div class="box">
        <p style="font-size: 10px">At the server level the <b>/etc/hosts.deny</b> file includes rules deny access to the server, from an external host or IP. We can verify a client's IP address is not blocked using the cPanel tools <a target="_blank" class="orange-link" href="https://hs.int.godaddy.com/cpTools/">here</a>.</p>
      </div>


      <li>
        <input type="checkbox" id="checkbox_04" v-model="checked_04">
        <label v-bind:class="{strike: checked_04}" for="checkbox_04">Try and duplicate</label>
      </li>
      <div class="box">
        <p style="font-size: 10px">Connecting to a server via ssh requires a terminal emulator like <a target="_blank" class="orange-link" href="https://www.putty.org/">Putty</a>. One can connect using the username and host, for example<br><b><i> - username@123.456.78.90</i></b><br>If the terminal prompts for a password, it means the SSH server is up and running. SSH credentials can be found in the Agent Toolkit or in <a href="https://toolzilla.int.godaddy.com/" target="_blank" class="orange-link"> Toolzilla</a>.</p>
      </div>




      <li>
        <input type="checkbox" id="checkbox_05" v-model="checked_05">
        <label v-bind:class="{strike: checked_05}" for="checkbox_05">Reach out to HTL</label>
      </li>
      <div class="box">
        <p style="font-size: 10px">Beyond the SSH server prompting for a password, a hosting tech <b>will not</b> troubleshoot any issues within the SSH terminal. </p>
      </div>


    </ul>
  </div>

</div>
</template>

<script>
export default{
  data(){
    return{
      checked_01: false,
      checked_02: false,
      checked_03: false,
      checked_04: false,
      checked_05: false,
    }
  }
  // toggle_1: false,
}

</script>

<style scoped>
.strike{
  text-decoration: line-through;
}
.no-style{
  list-style-type: none;
}
.box{
  background-color: hsl(0, 0%, 96%);
  border-radius: 1px;
  padding: 5px 5px 5px 12px;
  margin-bottom: 6px !important;
  -webkit-box-shadow: -0.6px 1px 5px -2px rgba(0,0,0,0.75);
  -moz-box-shadow: -0.6px 1px 5px -2px rgba(0,0,0,0.75);
  box-shadow: -0.6px 1px 5px -2px rgba(0,0,0,0.75);
}
.orange-link{
  color: #ff7900 !important;
}
</style>
