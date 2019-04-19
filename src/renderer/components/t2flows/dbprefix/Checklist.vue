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
      <label v-bind:class="{strike: checked_01}" for="checkbox_01">Update prefix in wp-config</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">If the database prefixes in PHPMyAdmin are not matching what is in the config file and the prefixes in the database are the correct ones assigned updated the wp-config file to correct prefix. <a target="_blank" class="orange-link" href="https://www.godaddy.com/help/update-wordpress-database-connection-string-26356"> here</a></p>
    </div>

    <li>
      <input type="checkbox" id="checkbox_02" v-model="checked_02">
      <label v-bind:class="{strike: checked_02}" for="checkbox_02">Run Search and Replace</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">If the prefixes in PHPMyAdmin are not the ones assigned in TZ it will fail the sync. This is because it is going to search phpmyadmin for the correct prefixes and if it cant find them its going to attempt to bring them over creating. Often doubling prefixes and timing out when attempting. Best practice is to do a find and replace on the db. Just be sure to create a backup of the db first. <a target="_blank" class="orange-link" href="https://www.godaddy.com/help/change-the-table-prefixes-27399"> here</a></p>
    </div>

    <li>
      <input type="checkbox" id="checkbox_03" v-model="checked_03">
      <label v-bind:class="{strike: checked_03}" for="checkbox_03">HTL can update that</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">If you are unable to do a find and replace on the DB or it is not working you can reach out to an HTL to assist with this.  </p>
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
