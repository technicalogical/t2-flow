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
      <label v-bind:class="{strike: checked_01}" for="checkbox_01">Try doing the Files and Database seperately</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">If the restore does not bring site back try doing the database and file seperate incase one of the 2 timed out. Doing them seperately may allow them to go threw. </p>
    </div>

    <li>
      <input type="checkbox" id="checkbox_02" v-model="checked_02">
      <label v-bind:class="{strike: checked_02}" for="checkbox_02">Try a different date.</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">If the restore still does not go threw choose another date incase the backup might be corrupt on the date its restoring from.  </p>
    </div>

    <li>
      <input type="checkbox" id="checkbox_03" v-model="checked_03">
      <label v-bind:class="{strike: checked_03}" for="checkbox_03">Look at Database for dropped tables (ex. user table)</label>
    </li>

    <div class="box">
    <p style="font-size: 10px"> If the database timed out during the restore usually after post or post meta table you will see missing tables afterwards commonly missing user and usermeta not allowing admin users to sign in. If tables are missing grab database backup and import using mysql workbench.<a target="_blank" class="orange-link" href="https://mysql.int.godaddy.com/backups"> Database Backups</a>, <a target="_blank" class="orange-link" href="https://www.godaddy.com/help/connect-remotely-to-databases-4978?"> Connect remotely to database</a></p>
    </div>

    <li>
      <input type="checkbox" id="checkbox_04" v-model="checked_04">
      <label v-bind:class="{strike: checked_04}" for="checkbox_04">Look at Database prefix in DB and wp-config.php</label>
    </li>

    <div class="box">
    <p style="font-size: 10px"> Make sure the database prefix in wp-config.php file matches what is in the database. If the prefix is incorrect you can get database connection errors.<a target="_blank" class="orange-link" href="https://www.godaddy.com/help/update-wordpress-database-connection-string-26356"> connection string prefix</a></p>
    </div>

    <li>
      <input type="checkbox" id="checkbox_05" v-model="checked_05">
      <label v-bind:class="{strike: checked_05}" for="checkbox_05">Look at home/site url in DB</label>
    </li>
    <div class="box">
    <p style="font-size: 10px"> Open the database and take a look at the options table and make sure the home url and site url are what they are supposed to be. </p>
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
