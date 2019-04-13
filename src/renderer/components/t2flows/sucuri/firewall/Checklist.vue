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
      <input type="checkbox" id="checkbox" v-model="checked_01">
      <label v-bind:class="{strike: checked_01}" for="checkbox">DNS setup correctly</label>
    </li>
    <div class="box">
      <p style="font-size: 10px">Make sure <b>A</b> record points to firewall IP on zone file, also check sucuri IP points the hosting account IP. Check in wesite security product to make sure <b>hosting Ip</b> matches <b>hosting accounts IP</b> and <b>A</b> record matches <b>Firewall IP</b>  <a href="https://godaddy.com/help/change-my-hosting-ip-in-the-web-application-firewall-waf-27161" target="_blank" class="orange-link"> Change IP in WAF </a>,</p>
    </div>
    <li>
      <input type="checkbox" id="checkbox" v-model="checked_02">
      <label v-bind:class="{strike: checked_02}" for="checkbox">SSL settings are correct</label>
    </li>
    <div class="box">
      <p style="font-size: 10px">navigate to website security and backups in mya, manage, select firewall, select HTTPS/SSL from the top naviagtion bar. Follow directions on page</p>
    </div>
    <li>
      <input type="checkbox" id="checkbox" v-model="checked_03">
      <label v-bind:class="{strike: checked_03}" for="checkbox">Clear cache</label>
    </li>
    <div class="box">
      <p style="font-size: 10px">This clears any information being held by the firewall that could potentially be old. to do this follow the steps <a href="https://www.godaddy.com/help/clear-cache-for-your-web-application-firewall-waf-27383?" target="_blank" class="orange-link">HERE</a></p>
    </div>
    <li>
      <input type="checkbox" id="checkbox" v-model="checked_04">
      <label v-bind:class="{strike: checked_04}" for="checkbox">White list IP</label>
    </li>
    <div class="box">
      <p style="font-size: 10px">This makes sure that the customers computer has a clear unobstructed path to the hosting account through the firewall. to do this follow the steps <a href=" https://www.godaddy.com/help/website-security-ip-access-control-27422?" target="_blank" class="orange-link">HERE</a></p>
    </div>

    <li>
      <input type="checkbox" id="checkbox" v-model="checked_05">
      <label v-bind:class="{strike: checked_05}" for="checkbox">Is there other Security products set up under that domain? If so reach out to htl to do a sync</label>
    </li>
    <div class='box'>
      <p style="font-size: 10px">go to products page, click on website security/backups and make sure that products are not set up already for the doamin you are trying to set one up on. if so click  <a href="https://l2chat.godaddy.com/" target="_blank" class="orange-link">here</a> and talk to HTL</p>
    </div>
    <li>
      <input type="checkbox" id="checkbox" v-model="checked_06">
      <label v-bind:class="{strike: checked_06}" for="checkbox">Create ticket with Sucuri if neccessary</label>
    </li>
    <div class='box'>
      <p style="font-size: 10px">Creating tickets with Sucuri allows for someone who specializes in these products to take a look and fix the issues. This is how to create a <a href="https://www.godaddy.com/help/c3-hosting-support-general-website-security-create-new-support-ticket-32084?" target="_blank" class="orange-link">ticket</a> with Sucuri.</p>
    </div>
  </ul>
  <div v-if="checked">
    Clicked
  </div>
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
