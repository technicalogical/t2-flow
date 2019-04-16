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
      <label v-bind:class="{strike: checked_01}" for="checkbox">DNS</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">Check DNS to make sure its pointed to the MWP, the last event for the domain change does a post check and if DNS is not pointed correct will get hung up.<router-link to="../../tools/SwatDNS" class="orange-link">DNS Tool</router-link></p>
    </div>

    <li>
      <input type="checkbox" id="checkbox" v-model="checked_02">
      <label v-bind:class="{strike: checked_02}" for="checkbox">SSL errors</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">if the site is having any ssl errors it will break the domain change. Disable ssl plugins and rename .htaccess file.<router-link to="../../tools/SwatSSL" class="orange-link">SSL Check</router-link></p>
    </div>

    <li>
      <input type="checkbox" id="checkbox" v-model="checked_03">
      <label v-bind:class="{strike: checked_03}" for="checkbox">500 errors on site</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">if the site is 500/W.S.O.D. it will fail the http status event and get hung up. If you have access to sftp enable debug and troubleshoot 500 error. If you dont have access to sftp reach out to htl. <router-link to="/t2flows/fivehundrederror" class="orange-link">SSL Check</router-link></p>
    </div>

    <li>
      <input type="checkbox" id="checkbox" v-model="checked_04">
      <label v-bind:class="{strike: checked_04}" for="checkbox">Resubmit Acct</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">Resubmit account and wait until account gets set active. Whebn the <b>wp-content/install.php</b> file is gone, recheck the site</p>
    </div>

    <li>
      <input type="checkbox" id="checkbox" v-model="checked_05">
      <label v-bind:class="{strike: checked_05}" for="checkbox">Reach out to HTL</label>
    </li>
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
      checked_06: false,
    }
  }
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
