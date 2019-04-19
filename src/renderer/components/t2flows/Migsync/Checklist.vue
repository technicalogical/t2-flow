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
      <label v-bind:class="{strike: checked_01}" for="checkbox_01">Backup database</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">Before making any changes be sure to grab a backup of the database in phpmyadmin so you have something to go back to if necessary. <a target="_blank" class="orange-link" href="https://www.godaddy.com/help/export-mysql-databases-1487"> here</a></p>
    </div>

    <li>
      <input type="checkbox" id="checkbox_02" v-model="checked_02">
      <label v-bind:class="{strike: checked_02}" for="checkbox_02">Update prefixes on production site</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">If the prefixes in PHPMyAdmin are not the ones assigned in TZ it will fail the sync. This is because it is going to search phpmyadmin for the correct prefixes and if it cant find them its going to attempt to bring them over creating. Often doubling prefixes and timing out when attempting. Best practice is to do a find and replace on the db. Just be sure to create a backup of the db first. <a target="_blank" class="orange-link" href="https://www.godaddy.com/help/change-the-table-prefixes-27399"> here</a></p>
    </div>

    <li>
      <input type="checkbox" id="checkbox_03" v-model="checked_03">
      <label v-bind:class="{strike: checked_03}" for="checkbox_03">Repush sync</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">Once the database prefixes are matching what they are supposed to be repush the sync. If the prefixes are not what managed wordpress wants them to be it will likely have issues with sync everytime. Updating this will likely reduce errors in the future. <a target="_blank" class="orange-link" href="https://www.godaddy.com/help/push-your-staging-site-to-the-production-site-16467"> here</a></p>
    </div>

    <li>
      <input type="checkbox" id="checkbox_04" v-model="checked_04">
      <label v-bind:class="{strike: checked_04}" for="checkbox_04">Reach out to HTL</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">If you are unable to do a find and replace on the DB or it is not working you can reach out to an HTL to assist with this.  </p>
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
