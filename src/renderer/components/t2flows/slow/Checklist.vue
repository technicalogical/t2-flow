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
    <p style="font-size: 10px">If working with Wordpress <a target="_blank" class="orange-link" href="https://www.godaddy.com/help/enable-debug-errors-in-wordpress-24013">Enable debug</a> mode and check error logs looking for files, plugins, or themes that might be causing issues.</b> One can also <a target="_blank" class="orange-link" href="https://www.godaddy.com/help/setup-php-error-logging-26423">enable PHP custom error</a> logging.</p>
    </div>
    <li>
      <input type="checkbox" id="checkbox" v-model="checked_02">
      <label v-bind:class="{strike: checked_02}" for="checkbox">Disable Plugins/ Change theme</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">If working with WordPress, plugins or themes may be causing site slowness or 503 errors and can be can be <a target="_blank" class="orange-link" href="https://www.godaddy.com/help/disable-wordpress-plugins-in-the-database-26345">disabled in the database</a>. The browser <a target="_blank" class="orange-link" href="https://developers.google.com/web/tools/chrome-devtools/network/">dev tools</a> Network Tab is also an invaluable tool when troubleshooting slow sites. Look for the status code in each response, if you see a 500 level code, find what file is causing it, and start troubleshooting there.</p>
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
    <p style="font-size: 10px">If the website is hosted in Cpanel, check resource usage in <a target="_blank" class="orange-link" href="https://www.godaddy.com/help/check-your-accounts-resource-usage-19126">CPU and Concurrent Conection Usage</a>. Standard Shared hosting resource limits can be found <a target="_blank" class="orange-link" href="https://www.godaddy.com/help/resource-limits-12001"> here</a>.
    <br>You can select a time range to display a <span style="cursor: pointer;" class="orange-link" v-on:click="showGraph">graph</span>, which can help pinpoint the start of an issue</p>
    </div>
    <div v-if="graphShow" id="graph">
      <center><img style="width:70%;" src="./metrics.png"></center>
    </div>


    <li>
      <input type="checkbox" id="checkbox" v-model="checked_05">
      <label v-bind:class="{strike: checked_05}" for="checkbox">Malware Files</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">While malware may be difficult to discover, there are tools like <a target="_blank" class="orange-link" href="https://sitecheck.sucuri.net/">Sucuri's Sitecheck</a> which can detect common front end infections. On the server some common hacks can be found in the .htaccess file. Here is a common <a target="_blank" class="orange-link" href="https://blog.sucuri.net/2011/05/understanding-htaccess-attacks-part-1.html">redirect hack</a> When in doubt recommend a cleanup service, and consider the possibility cross site contamination.</p>
    </div>

    <li>
      <input type="checkbox" id="checkbox" v-model="checked_06">
      <label v-bind:class="{strike: checked_06}" for="checkbox">Top Command in SSH</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">Using an SSH connection, one can run the <b>top -c</b> command which will show all processes running in your cPanel acct. Most customers will likely only run PHP & MySQL processes. If you notice a process from a service like Python or Perl, it may be an indication of malware, especially if the CX is unaware of them.
    If the output shows more than 10 php processes, like in the <span style="cursor: pointer;" class="orange-link" v-on:click="showSSL">example</span> it could indicate memory issues. If running multiple sites, the command <b>lsof</b> will indicate which files are currently open and running those processes</p>
    <div style="margin-top: -7px;padding: 3px;" class="notification is-danger"><p style="font-size: 10px">Using SSH is very powerful & potentially dangerous, it's important to limit it's use in a CX account</p></div>
    </div>
    <div v-if="sslShow" id="graph">
      <center><img style="width:90%;" src="./ssh.png"></center>
    </div>


    <li>
      <input type="checkbox" id="checkbox" v-model="checked_07">
      <label v-bind:class="{strike: checked_07}" for="checkbox">Kill Processes</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">Currently, killing PHP processes can be done in the Agent toolkit. Individual Processes can also be killed in the command line. However, do not perform this from the command line for a customer.</a></p>
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
      graphShow: false,
      sslShow: false,
    }
  },
  methods:{
    showGraph: function(){
      this.graphShow = !this.graphShow;
    },
    showSSL: function(){
      this.sslShow = !this.sslShow;
    },
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
