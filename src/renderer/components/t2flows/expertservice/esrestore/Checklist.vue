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
      <label v-bind:class="{strike: checked_01}" for="checkbox_01">Was correct content restored</label>
    </li>
    <div class='box'>
      <p style="font-size: 10px">Have customer confirm the restored content is correct by going to the website in a browser. <b>Verify</b> you are seeing same content on the website in a browser. </p>
    </div>
    <li>
      <input type="checkbox" id="checkbox_02" v-model="checked_02">
      <label v-bind:class="{strike: checked_02}" for="checkbox_02">Restored to correct folder</label>
    </li>
    <div class='box'>
      <p style="font-size: 10px">Confirm the content is in the correct folder for where the domain is routed to (root of domain or addon domain)</p>
    </div>
    <li>
      <input type="checkbox" id="checkbox_03" v-model="checked_03">
      <label v-bind:class="{strike: checked_03}" for="checkbox_03">Database connection strings updated</label>
    </li>
    <div class='box'>
      <p style="font-size: 10px">Make sure database connection string matches user name and password for db user. Also make sure host name is correct. <a href="https://godaddy.com/help/update-wordpress-database-connection-string-26356" target="_blank" class="orange-link"> WP Connection string</a>, <b>sites/default/settings.php</b> for <b>Drupal</b>, and <b>configuration.php</b> for <b>Joomla</b></p>
    </div>
    <li>
      <input type="checkbox" id="checkbox_04" v-model="checked_04">
      <label v-bind:class="{strike: checked_04}" for="checkbox_04">Toggle PHP version to see if it helps(do not change if lower than 5.4 on 4gh)</label>
    </li>
    <div class='box'>
      <p style="font-size: 10px"><b>Managed Wordpress</b> manage into the product from MYA, select settings, change PHP version on the right side. <b>Or</b> follow the steps in the respective link <a href="https://.godaddy.com/help/view-or-change-your-php-version-in-cpanel-hosting-16090?" target="_blank" class="orange-link"> Cpanel</a>,<a href="https://godaddy.com/help/change-my-php-version-20309" target="_blank" class="orange-link">Plesk</a>, <a href="https://godaddy.com/help/view-or-change-your-php-version-in-web-and-classic-hosting-3937" target="_blank" class="orange-link">4gh/2gh</a> </p>
    </div>
    <li>
      <input type="checkbox" id="checkbox_05" v-model="checked_05">
      <label v-bind:class="{strike: checked_05}" for="checkbox_05">Debug and repair if simple</label>
    </li>
    <div class='box'>
      <p style="font-size: 10px">If the site is down, check the site and home url in the database. enable <a href="https://godaddy.com/help/enable-debug-errors-in-wordpress-24013?" target="_blank" class="orange-link">debug</a> mode in wordpress and check the error_log if it is a cPanel account. Check the upload path in the database in cPanel (must be an absolute path if coming from 4GH or MWP)</p>
    </div>
    <li>
      <input type="checkbox" id="checkbox_06" v-model="checked_06">
      <label v-bind:class="{strike: checked_06}" for="checkbox_06">Reopen ticket if in timeframe</label>
    </li>
    <div class='box'>
      <p style="font-size: 10px">Navigate to <a href="https://toolzilla.int.godaddy.com/" target="_blank" class="orange-link"> Toolzilla</a>, Click and view Iris in the top right, find ticket you are working with, view ticket by clicking on ticket number, select admin icon in top right, change the status drop down on the left side to <b>open</b>, click save on the top right. Then click Add a comment and leave a comment as to why you have opened the ticket and save. </p>
    </div>
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
