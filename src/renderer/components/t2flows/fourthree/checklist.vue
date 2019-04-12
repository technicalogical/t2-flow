<template>
  <div>
  <ul class="no-style">
    <li>
      <input type="checkbox" id="checkbox" v-model="checked_01">
      <label v-bind:class="{strike: checked_01}" for="checkbox">Disable control files</label>
    </li>

      <div class="box">
      <p style="font-size: 10px">Some common control files are <b>php.ini</b>, <b>web.config</b>, <b>.htaccess</b>. They can be disabled by renaming or appending <b><i>.disabled</i></b> to the name. More info about ini files<a target="_blank" class="orange-link" href="https://www.godaddy.com/help/what-filename-does-my-php-initialization-file-need-to-use-8913"> here</a></p>
      </div>

    <li>
      <input type="checkbox" id="checkbox" v-model="checked_02">
      <label v-bind:class="{strike: checked_02}" for="checkbox">Check permissions</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">Permissions control what user/service can access or execute a file or folder. In a Linux/cPanel the standard settings are <b>0644</b> for files, <b>0755</b> for folders, & <b>0750</b> for the public_html folder. Windows environments only allow setting privacy to <b>visible</b> or <b>writable</b> Learn more here: <a target="_blank" class="orange-link" href="https://www.godaddy.com/help/set-permissions-16067">Linux</a> | <a target="_blank" class="orange-link" href="https://www.godaddy.com/help/set-directory-permissions-16135">Windows</a></p>

    </div>

    <li>
      <input type="checkbox" id="checkbox" v-model="checked_03">
      <label v-bind:class="{strike: checked_03}" for="checkbox">Reapply account perms if in mwp/4gh</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">This can be performed via <a href="https://toolzilla.int.godaddy.com/" target="_blank" class="orange-link"> Toolzilla</a> This can be done under the admin tab on the toolbar at the top.<a target="_blank" class="orange-link" href="https://confluence.godaddy.com/display/C3PHS/Shared+-+Orion+-+Inserting+Orion+Events"> here</a></p>
    </div>

    <li>
      <input type="checkbox" id="checkbox" v-model="checked_04">
      <label v-bind:class="{strike: checked_04}" for="checkbox">Correct file/ missing index</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">Some common index files are <b>index.php</b>, <b>index.html</b>, <b>deafault.asp</b>. Depending on the environment they have different order of precedence: <a target="_blank" class="orange-link" href="https://www.godaddy.com/help/what-file-displays-when-someone-browses-to-my-domain-name-16026"> Plesk</a>, <a target="_blank" class="orange-link" href="https://www.godaddy.com/help/what-file-displays-when-someone-browses-to-my-domain-name-16025"> Cpanel</a>, <a target="_blank" class="orange-link" href="https://www.godaddy.com/help/what-file-displays-when-someone-browses-to-my-domain-name-60"> 4gh</a></p>
	</div>

  </ul>
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
