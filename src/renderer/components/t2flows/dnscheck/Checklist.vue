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
      <input type="checkbox" id="checkbox" v-model="checked_01">
      <label v-bind:class="{strike: checked_01}" for="checkbox">Ping Domain / Check DNS with tool</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">Ping site with command prompt or run site in dns tool <router-link to="../../tools/SwatDNS" class="orange-link">DNS Tool</router-link></p>
    </div>

    <li>
      <input type="checkbox" id="checkbox" v-model="checked_02">
      <label v-bind:class="{strike: checked_02}" for="checkbox">Check if the Domain is in Account</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">Go to domain control center and see if domain is there <a target="_blank" class="orange-link" href="dcc.godaddy.com"> here</a></p>
    </div>

    <li>
      <input type="checkbox" id="checkbox" v-model="checked_03">
      <label v-bind:class="{strike: checked_03}" for="checkbox">Verify Name Servers (NS)</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">Use DNS Tool <router-link to="../../tools/SwatDNS" class="orange-link">DNS Tool</router-link></p>
    </div>

    <li>
      <input type="checkbox" id="checkbox" v-model="checked_04">
      <label v-bind:class="{strike: checked_04}" for="checkbox">If NS dont match, resave NS to force update</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">Go to Domain control center and resave nameservers <a target="_blank" class="orange-link" href="dcc.godaddy.com"> here</a></p>
    </div>

    <li>
      <input type="checkbox" id="checkbox" v-model="checked_05">
      <label v-bind:class="{strike: checked_05}" for="checkbox">If NS are 3rd party, verify they match and then refer to domain provider</label>
    </li>
    <li>
      <input type="checkbox" id="checkbox" v-model="checked_06">
      <label v-bind:class="{strike: checked_06}" for="checkbox">Verify Reggie status</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">Make sure domain name does not have a suspension of any kind in reggie. <a target="_blank" class="orange-link" href="https://www.godaddy.com/help/reggie-definitions-and-usage-tips-4985?"> Reggie Definitions</a>, <a target="_blank" class="orange-link" href="https://reggie.int.godaddy.com"> Reggie </a></p>
    </div>
    <li>
      <input type="checkbox" id="checkbox" v-model="checked_07">
      <label v-bind:class="{strike: checked_07}" for="checkbox">Account for Propagation 24-48 hours</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">what affects propagation <a target="_blank" class="orange-link" href="https://www.godaddy.com/help/what-factors-affect-dns-propagation-time-1746"> here</a></p>
    </div>

    <li>
      <input type="checkbox" id="checkbox" v-model="checked_08">
      <label v-bind:class="{strike: checked_08}" for="checkbox">If still having issues, ATS</label>
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
