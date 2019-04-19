<template>
  <div>
    <br>

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
      <label v-bind:class="{strike: checked_01}" for="checkbox_01">Check to see if fully managed</label>
    </li>
    <div class='box'>
      <p style="font-size: 10px">Manage into the server from MYA, check dashboard to see if the accoutn is fully managed. If so Transfer call to x59043 </p>
    </div>
    <li>
      <input type="checkbox" id="checkbox_02" v-model="checked_02">
      <label v-bind:class="{strike: checked_02}" for="checkbox_02">Ping server</label>
    </li>
    <div class='box'>
      <p style="font-size: 10px">open a command prompt on you computer (windows button > type "cmd" > press enter) then type in "ping" then the IP address of the server -> ping 0.0.0.0, hit enter then see under packets if they are sent and received in the results  </p>
    </div>
    <li>
      <input type="checkbox" id="checkbox_03" v-model="checked_03">
      <label v-bind:class="{strike: checked_03}" for="checkbox_03">Attempt to login with Cpanel/WHM</label>
    </li>
    <div class='box'>
      <p style="font-size: 10px">We do this to make sure the client has the ability to get into and control the softwares installed on the server.<a href="https://www.godaddy.com/help/c3-hosting-support-server-cpanelwhm-accessing-cpanel-19412" target="_blank" class="orange-link"> Accessing <b>Cpanel</b></a>, <a href="https://www.godaddy.com/help/c3-hosting-support-server-cpanelwhm-accessing-whm-19414?" target="_blank" class="orange-link"> Accessing <b>WHM</b></a></p>
    </div>
    <li>
      <input type="checkbox" id="checkbox_04" v-model="checked_04">
      <label v-bind:class="{strike: checked_04}" for="checkbox_04">Does SSH/RDP prompt for login</label>
    </li>
    <div class='box'>
      <p style="font-size: 10px">Testing for the prompt shows us that the server is responding to a request, therefore functioning. <a href="https://www.godaddy.com/help/connect-to-my-web-hosting-account-with-ssh-secure-shell-4943?" target="_blank" class="orange-link"> Connecting with <b>SSH</b></a>, <a href="https://www.godaddy.com/help/c3-hosting-support-server-windows-remote-desktop-19763?" target="_blank" class="orange-link"> Accessing <b>RDP</b></a></p>
    </div>
    <li>
      <input type="checkbox" id="checkbox_05" v-model="checked_05">
      <label v-bind:class="{strike: checked_05}" for="checkbox_05">Reboot server</label>
    </li>
    <div class='box'>
      <p style="font-size: 10px">There are two main reasons to reboot on a regular basis: to verify the ability of the server to reboot successfully and to apply patches that cannot be applied without rebooting. Applying patches is why most businesses reboot. ... Most servers have changes applied to them on a regular basis.<a href="https://www.godaddy.com/help/restart-your-server-19089" target="_blank" class="orange-link"> Rebooting the Server</a></p>
    </div>
    <li>
      <input type="checkbox" id="checkbox_06" v-model="checked_06">
      <label v-bind:class="{strike: checked_06}" for="checkbox_06">Reach out to htl if customer cant login with RDP/SSH</label>
    </li>
    <div class='box'>
      <p style="font-size: 10px">to reach out to an HTL for further assistnace with this click<a href="https://l2chat.godaddy.com/" target="_blank" class="orange-link"> HERE</a> </p>
    </div>

  </ul>
</div>
  <div v-if="checked">
    Clicked
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
      checked_06: false,
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
