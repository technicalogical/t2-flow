<template>
  <div>
    <div style="height: 50vh !important;
                overflow: scroll;
                -ms-overflow-style: scrollbar;
                -webkit-app-region: no-drag;
                width: 100%;
                margin-left: -12px;
                border-left: 6px solid #A37A00;
                ">
  <ul class="no-style">
    <li>
      <input type="checkbox" id="checkbox_01" v-model="checked_01">
      <label v-bind:class="{strike: checked_01}" for="checkbox_01">Attempt to connect on you machine</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">Attempt to connect to FTP with a client, if you can connect ftp is working if you cant connect you will need to reach out to an HTL<a target="_blank" class="orange-link" href="https://www.godaddy.com/help/what-is-ftp-19304"> here</a></p>
    </div>

    <li>
      <input type="checkbox" id="checkbox_02" v-model="checked_02">
      <label v-bind:class="{strike: checked_02}" for="checkbox_02">verify credentials</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">Verify what FTP user the customer is connecting with and that the ftp user has the correct permissions. If customer just had a site migrated they might be trying to use the wrong ftp user. <a target="_blank" class="orange-link" href="https://www.godaddy.com/help/what-is-ftp-19304"> here</a></p>
    </div>

    <li>
      <input type="checkbox" id="checkbox_03" v-model="checked_03">
      <label v-bind:class="{strike: checked_03}" for="checkbox_03">Update credentials for 530 error</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">530 error is incorrect ftp username and password if you are getting same error verifying credentials from toolzilla reach out to HTL. If you can't duplicate have customer change ftp password. <a target="_blank" class="orange-link" href="https://www.godaddy.com/help/find-my-ftp-username-and-password-4881"> 4gh</a>, <a target="_blank" class="orange-link" href="https://www.godaddy.com/help/reset-your-ftp-username-and-password-for-plesk-hosting-16012"> Plesk</a>, <a target="_blank" class="orange-link" href="https://www.godaddy.com/help/reset-your-primary-ftp-password-in-cpanel-16011"> Cpanel</a> </p>
    </div>

    <li>
      <input type="checkbox" id="checkbox_04" v-model="checked_04">
      <label v-bind:class="{strike: checked_04}" for="checkbox_04">Get trace route and ip from customer</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">If customer is getting connection time outs get a trace route from them to see if there is any time outs between their connection and ours. <a target="_blank" class="orange-link" href="https://www.godaddy.com/help/performing-a-traceroute-in-mac-os-x-3366"> Mac</a>, <a target="_blank" class="orange-link" href="https://www.godaddy.com/help/traceroutes-on-windows-3142"> Windows</a></p>
    </div>

    <li>
      <input type="checkbox" id="checkbox_05" v-model="checked_05">
      <label v-bind:class="{strike: checked_05}" for="checkbox_05">Run ip in host.deny for cpanel</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">While getting trace route from customer get their public ip and run it in host deny to see if they are potentially being blocked in ip tables if the hosting account it Cpanel. <a target="_blank" class="orange-link" href="x.co/cptools"> here</a></p>
    </div>

    <li>
      <input type="checkbox" id="checkbox_06" v-model="checked_06">
      <label v-bind:class="{strike: checked_06}" for="checkbox_06">Have customer go to ftp://*ip*</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">If customer can connect via browser then its an issues with their client and need to review settings in the client</p>
    </div>

    <li>
      <input type="checkbox" id="checkbox_07" v-model="checked_07">
      <label v-bind:class="{strike: checked_07}" for="checkbox_07">Reach out to HTL if you confirmed correct credentials and trace looks okay</label>
    </li>
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
      checked_07: false,
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
