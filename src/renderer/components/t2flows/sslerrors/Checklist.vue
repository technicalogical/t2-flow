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
      <label v-bind:class="{strike: checked_01}" for="checkbox_01">Is SSL installed?</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">Use ssl tool to make sure that the ssl is installed on the server. If the ssl is installed and they don't have a managed ssl they will need to update their code to use https. <router-link to="../../tools/SwatSSL" class="orange-link">SSL Tool</router-link></p>
    </div>

    <li>
      <input type="checkbox" id="checkbox_02" v-model="checked_02">
      <label v-bind:class="{strike: checked_02}" for="checkbox_02">Does the browser see the correct serial number?</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">Using the ssl tool you can see what serial number the browser is seeing installed on the server. If the serial number is not matching what is issued in the account you will need to rekey the certificate. <router-link to="../../tools/SwatSSL" class="orange-link">SSL Tool</router-link></p>
    </div>

    <li>
      <input type="checkbox" id="checkbox_03" v-model="checked_03">
      <label v-bind:class="{strike: checked_03}" for="checkbox_03">Is the site going to www not covered under a SAN?</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">If the site is going being forced to www and the domain is a SAN on the SSL they will need to do one of two things. Either update the code to force everything to non www or vise versa, or add the www/non-www version of the site as an additional SAN. You can verify what is installed on the server using the SSL tool. <router-link to="../../tools/SwatSSL" class="orange-link">SSL Tool</router-link></p>
    </div>

    <li>
      <input type="checkbox" id="checkbox_04" v-model="checked_04">
      <label v-bind:class="{strike: checked_04}" for="checkbox_04">is the addon domain ssl installed on Cpanel</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">If you verified the ssl covers the SAN in question but the site is not showing an ssl installed. You may need to install ssl on addon domain in cpanel. <router-link to="../../tools/SwatSSL" class="orange-link">SSL Tool</router-link>, <a target="_blank" class="orange-link" href="https://www.godaddy.com/help/manually-install-an-ssl-certificate-on-my-cpanel-hosting-12027">Install SSL manually.</a></p>
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
