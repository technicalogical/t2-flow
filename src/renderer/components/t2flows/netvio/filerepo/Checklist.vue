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
      <input type="checkbox" id="checkbox_01" v-model="checked_01">
      <label v-bind:class="{strike: checked_01}" for="checkbox_01">Have they removed the files?</label>
    </li>
    <div class="box">
    <p style="font-size: 10px">Check ticket to find out what files are in question. Open <a href="https://toolzilla.int.godaddy.com/" target="_blank" class="orange-link"> Toolzilla</a>, click <b>Iris</b> tab at top right. Look for <b>Net Vio</b> ticket on account, view and read ticket. <b>Ask</b> customer if they have completed the steps outlined in ticket. Confirm by checking yourself.</p>
    </div>
    <li>
      <input type="checkbox" id="checkbox_02" v-model="checked_02">
      <label v-bind:class="{strike: checked_02}" for="checkbox_02">Is ftp/ssh accessable?</label>
    </li>
    <div class="box">
    <p style="font-size: 10px">With most net vio's ftp or ssh access remains available so fixes can be made. Check <a href="https://godaddy.com/help/what-is-ftp-19304?" target="_blank" class="orange-link"> <b>FTP</b></a> access. <a href="https://toolzilla.int.godaddy.com/" target="_blank" class="orange-link"> Toolzilla</a> wil provide you the access information so you can test.</p>
    </div>
    <li>
      <input type="checkbox" id="checkbox_03" v-model="checked_03">
      <label v-bind:class="{strike: checked_03}" for="checkbox_03">Reach out to htl if files are removed or they don't have ftp/ssh access</label>
    </li>
    <div class='box'>
      <p style="font-size: 10px"> Open up <a href="https://l2chat.godaddy.com/" target="_blank" class="orange-link"> <b>HTL Chat</b></a> to confirm steps completed and reinstate. <b>Or</b> to get FTP/SSH access.</p>
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
