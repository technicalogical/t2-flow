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
      <label v-bind:class="{strike: checked_01}" for="checkbox_01">Check DNS with tool</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">Use the <router-link to="../../tools/SwatDNS" class="orange-link">DNS Tool</router-link> to verify the DNS is correctly configured to point to the hosting server. Verify the IP address to the hosting server using <a target="_blank" class="orange-link" href="https://toolzilla.int.godaddy.com/">Toolzilla</a></p>
    </div>

    <li>
      <input type="checkbox" id="checkbox_02" v-model="checked_02">
      <label v-bind:class="{strike: checked_02}" for="checkbox_02">Ping Domain</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">Using the Windows command prompt, perform a ping test, and verify in the output that the domain is in fact navigating to the correct hosting IP. The command to ping is <br><b>C:\>ping mydomain.tld</b><br>
      More info can be found<a target="_blank" class="orange-link" href="https://www.godaddy.com/help/how-do-i-ping-a-domain-name-3304"> here</a></p>
    </div>

    <li>
      <input type="checkbox" id="checkbox_03" v-model="checked_03">
      <label v-bind:class="{strike: checked_03}" for="checkbox_03">Verify Name Servers (NS)</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">Use the <router-link to="../../tools/SwatDNS" class="orange-link">DNS Tool</router-link> to verify we are in fact their nameservers. If the nameservers are not <b>domaincontrol.com</b> they are managing their DNS elsewhere.</p>
    </div>

    <li>
      <input type="checkbox" id="checkbox_04" v-model="checked_04">
      <label v-bind:class="{strike: checked_04}" for="checkbox_04">Reconcile Nameservers</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">Using the <router-link to="../../tools/SwatDNS" class="orange-link">DNS Tool</router-link> verify the nameservers match what displays in the <a target="_blank" class="orange-link" href="http://dcc.godaddy.com">DCC</a>. Otherwise simply "re-save" the nameservers in </p>
    </div>

    <li>
      <input type="checkbox" id="checkbox_06" v-model="checked_06">
      <label v-bind:class="{strike: checked_06}" for="checkbox_06">Verify Reggie status</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">Make sure domain name does not have a suspension of any kind in reggie. <a target="_blank" class="orange-link" href="https://www.godaddy.com/help/reggie-definitions-and-usage-tips-4985?"> Reggie Definitions</a>, <a target="_blank" class="orange-link" href="https://reggie.int.godaddy.com"> Reggie </a></p>
    </div>
    <li>
      <input type="checkbox" id="checkbox_07" v-model="checked_07">
      <label v-bind:class="{strike: checked_07}" for="checkbox_07">Account for Propagation 24-48 hours</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">what affects propagation <a target="_blank" class="orange-link" href="https://www.godaddy.com/help/what-factors-affect-dns-propagation-time-1746"> here</a></p>
    </div>

    <li>
      <input type="checkbox" id="checkbox_08" v-model="checked_08">
      <label v-bind:class="{strike: checked_08}" for="checkbox_08">If still having issues, ATS</label>
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
      checked_08: false,
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
