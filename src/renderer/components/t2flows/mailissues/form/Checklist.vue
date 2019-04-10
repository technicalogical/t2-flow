<template>
  <div>
  <ul class="no-style">
    <li>
      <input type="checkbox" id="checkbox" v-model="checked_01">
      <label v-bind:class="{strike: checked_01}" for="checkbox">Upload mail_test.php</label>
    </li>
    <li>
      <input type="checkbox" id="checkbox" v-model="checked_02">
      <label v-bind:class="{strike: checked_02}" for="checkbox">Splunk</label>
    </li>
    <li>
      <input type="checkbox" id="checkbox" v-model="checked_03">
      <label v-bind:class="{strike: checked_03}" for="checkbox">Email routing</label>
    </li>
    <li>
      <input type="checkbox" id="checkbox" v-model="checked_04">
      <label v-bind:class="{strike: checked_04}" for="checkbox">Update Mx Entry Inside Cpanel</label>
    </li>
    <li>
      <input type="checkbox" id="checkbox" v-model="checked_05">
      <label v-bind:class="{strike: checked_05}" for="checkbox">Reach out HTL if nothing hits splunk from test script</label>
    </li>
    <li>
      <input type="checkbox" id="checkbox" v-model="checked_06">
      <label v-bind:class="{strike: checked_05}" for="checkbox">Review account for unblock steps if flagged BAD-ACCT before reaching out to HTL</label>
    </li>

  </ul>



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
</style>
