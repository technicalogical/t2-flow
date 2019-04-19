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
      <label v-bind:class="{strike: checked_01}" for="checkbox_01">Check for Malware</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">While malware may be difficult to discover, there are tools like <a target="_blank" class="orange-link" href="https://sitecheck.sucuri.net/">Sucuri's Sitecheck</a> which can detect common front end infections. On the server some common hacks can be found in the .htaccess file. Here is a common <a target="_blank" class="orange-link" href="https://blog.sucuri.net/2011/05/understanding-htaccess-attacks-part-1.html">redirect hack</a> When in doubt recommend a cleanup service, and consider the possibility cross site contamination.</p>
    </div>

    <li>
      <input type="checkbox" id="checkbox_02" v-model="checked_02">
      <label v-bind:class="{strike: checked_02}" for="checkbox_02">Disable Control Files</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">Some common control files are <b>php.ini</b>, <b>web.config</b>, <b>.htaccess</b>. They can be disabled by renaming or appending <b><i>.disabled</i></b> to the name. More info about ini files<a target="_blank" class="orange-link" href="https://www.godaddy.com/help/what-filename-does-my-php-initialization-file-need-to-use-8913"> here</a></p>
    </div>

    <li>
      <input type="checkbox" id="checkbox_03" v-model="checked_03">
      <label v-bind:class="{strike: checked_03}" for="checkbox_03">Enable Debug Mode</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">If working with Wordpress <a target="_blank" class="orange-link" href="https://www.godaddy.com/help/enable-debug-errors-in-wordpress-24013">Enable debug</a> mode and check error logs looking for files, plugins, or themes that might be causing issues.</b> One can also <a target="_blank" class="orange-link" href="https://www.godaddy.com/help/setup-php-error-logging-26423">enable PHP custom error</a> logging.</p>
    </div>

    <li>
      <input type="checkbox" id="checkbox_04" v-model="checked_04">
      <label v-bind:class="{strike: checked_04}" for="checkbox_04">Disable Plugin/Themes</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">If debugging a WordPress site and debugging points to an error generating from plugin/theme, it can be <a target="_blank" class="orange-link" href="https://www.godaddy.com/help/disable-wordpress-plugins-in-the-database-26345">disabled in the database</a></p>
    </div>

    <li>
      <input type="checkbox" id="checkbox_05" v-model="checked_05">
      <label v-bind:class="{strike: checked_05}" for="checkbox_05">Clear Cache / Kill Processes / Toggle PHP</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">If MWP hosting, be sure to <a target="_blank" class="orange-link" href="https://www.godaddy.com/help/clear-your-cache-12444">flush cache</a>, if they have a firewall <a target="_blank" class="orange-link" href="https://www.godaddy.com/help/clear-cache-for-your-web-application-firewall-waf-27383">flush firewall/CDN cache</a>. Try loading in private/incognito window. Kill php processes using agent tool kit if available. <a target="_blank" class="orange-link" href="https://www.godaddy.com/help/view-or-change-your-php-version-in-cpanel-hosting-16090">Toggle php version</a> to see if syntax errors appear or change.</p>
    </div>

    <li>
      <input type="checkbox" id="checkbox_06" v-model="checked_06">
      <label v-bind:class="{strike: checked_06}" for="checkbox_06">Resubmit / Sandbox and Resubmit</label>

      <div class="box">
      <p style="font-size: 10px">Rename wp-admin, wp-includes, mu-plugins and resubmit account in <a target="_blank" class="orange-link" href="https://toolzilla.int.godaddy.com/">Toolzilla</a> to rebuild core files.</p>
      </div>


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
