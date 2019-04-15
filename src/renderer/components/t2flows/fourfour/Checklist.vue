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
      <label v-bind:class="{strike: checked_01}" for="checkbox">Check DNS</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">Make sure the domain is pointed to the correct server. Check the DNS <router-link to="../../tools/SwatDNS" class="orange-link">here</router-link> and verify the IP address to the hosting server using <a target="_blank" class="orange-link" href="https://toolzilla.int.godaddy.com/">Toolzilla</a></p>
    </div>

    <li>
      <input type="checkbox" id="checkbox" v-model="checked_02">
      <label v-bind:class="{strike: checked_02}" for="checkbox">Disable Control Files</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">Some common control files are <b>php.ini</b>, <b>web.config</b>, <b>.htaccess</b>. They can be disabled by renaming or appending <b><i>.disabled</i></b> to the name. More info about ini files<a target="_blank" class="orange-link" href="https://confluence.godaddy.com/display/C3PHS/General+-+Tools+-+Approved+Test+Scripts"> here</a></p>
    </div>

    <li>
      <input type="checkbox" id="checkbox" v-model="checked_03">
      <label v-bind:class="{strike: checked_03}" for="checkbox">Upload Test Script</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">Upload any test script after disabling control files and try pathing to test script in browser <i>http://exampledomain.tld/<b>script-name.ext</b></i>. Find approved test scripts <a target="_blank" class="orange-link" href="https://www.godaddy.com/help/what-filename-does-my-php-initialization-file-need-to-use-8913">here</a></p>
    <div style="margin-top: -7px;padding: 3px;" class="notification is-danger"><p style="font-size: 10px">It is important to remember that all scripts must be removed from a customer's account after testing has been completed!</p></div>
    </div>

    <li>
      <input type="checkbox" id="checkbox" v-model="checked_04">
      <label v-bind:class="{strike: checked_04}" for="checkbox">Verify Domain is pointed to the correct document root</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">If working on an addon domain, verify the document root does in fact have the files we expect to load. Use <a target="_blank" class="orange-link" href="https://www.godaddy.com/help/add-addon-domains-to-host-multiple-websites-8877?"> this article</a> as a reference.</p>
    </div>

    <li>
      <input type="checkbox" id="checkbox" v-model="checked_05">
      <label v-bind:class="{strike: checked_05}" for="checkbox">Check Permissions</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">Permissions control what user/service can access or execute a file or folder. In a Linux/cPanel the standard settings are <b>0644</b> for files, <b>0755</b> for folders, & <b>0750</b> for the public_html folder. Windows environments only allow setting privacy to <b>visible</b> or <b>writable</b> Learn more here: <a target="_blank" class="orange-link" href="https://www.godaddy.com/help/set-permissions-16067">Linux</a> | <a target="_blank" class="orange-link" href="https://www.godaddy.com/help/set-directory-permissions-16135">Windows</a></p>

    </div>
    <li>
      <input type="checkbox" id="checkbox" v-model="checked_06">
      <label v-bind:class="{strike: checked_06}" for="checkbox">Resave permalinks</label>
    </li>
    <div class="box">
    <p style="font-size: 10px">If test scripts load and the website is built with a common CMS it will most likely use permalinks and will need to be resaved.<a target="_blank" class="orange-link" href="https://www.godaddy.com/help/reset-permalinks-in-wordpress-26351"> Reset permalinks in wordpress</a></p>
    </div>
    <li>
      <input type="checkbox" id="checkbox" v-model="checked_07">
      <label v-bind:class="{strike: checked_07}" for="checkbox">If none above works, HTL</label>
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
  margin-left: -6px !important;
  -webkit-box-shadow: -0.6px 1px 5px -2px rgba(0,0,0,0.75);
  -moz-box-shadow: -0.6px 1px 5px -2px rgba(0,0,0,0.75);
  box-shadow: -0.6px 1px 5px -2px rgba(0,0,0,0.75);
}

.orange-link{
  color: #ff7900 !important;
}


</style>
