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
      <label v-bind:class="{strike: checked_01}" for="checkbox">Upload and <b>Follow Steps</b> for Test Script <b>cron_test.php</b></label>
    </li>
    <div class="box">
    <p style="font-size: 10px">If cpanel follow follow confluence article on creating cron job to test. If 4gh download cron_test.php and upload to host and create cron to run that file. <a target="_blank" class="orange-link" href="https://confluence.godaddy.com/display/C3PHS/cPanel+-+Cron+Job+Troubleshooting"> Cpanel Cron</a>, <a target="_blank" class="orange-link" href="https://confluence.godaddy.com/display/C3PHS/General+-+Tools+-+Approved+Test+Scripts"> approved test scripts</a></p>
    </div>
    <li>
      <input type="checkbox" id="checkbox" v-model="checked_02">
      <label v-bind:class="{strike: checked_02}" for="checkbox">If it doesnt work, <b>HTL</b></label>
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
