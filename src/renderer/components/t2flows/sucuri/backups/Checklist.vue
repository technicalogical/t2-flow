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
      <label v-bind:class="{strike: checked_01}" for="checkbox">Is there actually a database on the site?</label>
    </li>
    <div class='box'>
      <p style="font-size: 10px">If the site is a CMS (wordpress, joomla, drupal, etc) than the answer is yes the customer has a database. Here is how to check if there is a database in the account <a href="https://www.godaddy.com/help/view-your-database-details-for-cpanel-hosting-16021 " target="_blank" class="orange-link"> Cpanel</a>, <a href="https://www.godaddy.com/help/view-my-database-details-in-plesk-hosting-16022 " target="_blank" class="orange-link"> Plesk</a>, <a href="https://www.godaddy.com/help/viewing-your-database-details-with-shared-hosting-accounts-39?" target="_blank" class="orange-link"> 2gh/4gh</a> </p>
    </div>
    <li>
      <input type="checkbox" id="checkbox" v-model="checked_02">
      <label v-bind:class="{strike: checked_02}" for="checkbox">Is ftp/database info correct?</label>
    </li>
    <div class='box'>
      <p style="font-size: 10px">check the connection to the backups by going to sec.godaddy.com > click the manage button under backups > click on settings top right corner > look under website details</p>
    </div>
    <li>
      <input type="checkbox" id="checkbox" v-model="checked_03">
      <label v-bind:class="{strike: checked_03}" for="checkbox">Is there other Sucuri products setup on the same domain?  Reach out to htl</label>
    </li>
    <div class='box'>
      <p style="font-size: 10px">go to products page, click on website security/backups and make sure that products are not set up already for the doamin you are trying to set one up on. if so click  <a href="https://l2chat.godaddy.com/" target="_blank" class="orange-link">here</a> and talk to HTL</p>
    </div>
    <li>
      <input type="checkbox" id="checkbox" v-model="checked_04">
      <label v-bind:class="{strike: checked_04}" for="checkbox">Does the ftp user exist?</label>
    </li>
    <div class='box'>
      <p style="font-size: 10px">Checking to make sure the FTP user exists gaurantees that the credentials you are using will allow for the connection <a href="https://www.godaddy.com/help/edit-ftp-users-in-cpanel-hosting-16057? " target="_blank" class="orange-link"> Cpanel FTP users</a> <a href="https://www.godaddy.com/help/edit-ftp-users-in-plesk-hosting-16058? " target="_blank" class="orange-link"> Plesk FTP users</a> </p>
    </div>
    <li>
      <input type="checkbox" id="checkbox" v-model="checked_05">
      <label v-bind:class="{strike: checked_05}" for="checkbox">Create help ticket with Sucuri</label>
    </li>
    <div class='box'>
      <p style="font-size: 10px">Creating tickets with Sucuri allows for someone who specializes in these products to take a look and fix the issues. This is how to create a <a href="https://www.godaddy.com/help/c3-hosting-support-general-website-security-create-new-support-ticket-32084?" target="_blank" class="orange-link">ticket</a> with Sucuri.</p>
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
