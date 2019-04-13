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
      <label v-bind:class="{strike: checked_01}" for="checkbox">Error Logs</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">Enable debug mode and check error logs looking for files, plugins, or themes that might be causing issues.</b><a target="_blank" class="orange-link" href="https://www.godaddy.com/help/setup-php-error-logging-26423"> PHP error</a>, <a target="_blank" class="orange-link" href="https://www.godaddy.com/help/enable-debug-errors-in-wordpress-24013"> Wordpress Debug</a></p>
    </div>

    <li>
      <input type="checkbox" id="checkbox" v-model="checked_02">
      <label v-bind:class="{strike: checked_02}" for="checkbox">Disable Plugins/ Change theme</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">Once debug is enabled and can pin point what plugin/theme is causing it go into database and disabled plugins/themes found in the options table.<a target="_blank" class="orange-link" href="https://www.godaddy.com/help/disable-wordpress-plugins-in-the-database-26345"> here</a></p>
    </div>

    <li>
      <input type="checkbox" id="checkbox" v-model="checked_03">
      <label v-bind:class="{strike: checked_03}" for="checkbox">Speed Check Tool</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">Run site in speed check tool and check to see if optimizations are needed. <router-link to="../../tools/SwatSPEED" class="orange-link">Speed Check</router-link></p>
    </div>

    <li>
      <input type="checkbox" id="checkbox" v-model="checked_04">
      <label v-bind:class="{strike: checked_04}" for="checkbox">Resources</label>
    </li>
    <div class="box">
    <p style="font-size: 10px">If Cpanel, check resource usage to make sure they are not being maxed out. <a target="_blank" class="orange-link" href="https://www.godaddy.com/help/resource-limits-12001"> here</a></p>
    </div>
    <li>
      <input type="checkbox" id="checkbox" v-model="checked_05">
      <label v-bind:class="{strike: checked_05}" for="checkbox">Malware Files</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">Check common locations for malware such as <b>config files</b>, <b>index files</b>, <b>randon named files</b>, and <b>control files</b><a target="_blank" class="orange-link" href="https://www.godaddy.com/help/what-filename-does-my-php-initialization-file-need-to-use-8913"> here</a></p>
    </div>

    <li>
      <input type="checkbox" id="checkbox" v-model="checked_06">
      <label v-bind:class="{strike: checked_06}" for="checkbox">Top Command in SSH</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">Open shell conncetion and run top command to check active cpu usage</p>
    </div>

    <li>
      <input type="checkbox" id="checkbox" v-model="checked_07">
      <label v-bind:class="{strike: checked_07}" for="checkbox">Kill Processes</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">If mwp flush cache, if they have a firewall flush cache in firewall. Try loading in private/incognito window. Kill php processes using agent tool kit if available. Toggle php versions to see if syntax errors. <a target="_blank" class="orange-link" href="https://www.godaddy.com/help/clear-your-cache-12444"> MWP cache flush</a>, <a target="_blank" class="orange-link" href="https://www.godaddy.com/help/view-or-change-your-php-version-in-cpanel-hosting-16090"> Cpanel php version change</a>, <a target="_blank" class="orange-link" href="https://www.godaddy.com/help/clear-cache-for-your-web-application-firewall-waf-27383"> Flush cache - firewall</a></p>
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
      checked_07: false,

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
