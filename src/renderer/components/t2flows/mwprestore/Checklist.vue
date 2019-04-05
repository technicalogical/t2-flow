<template>
  <div>
  <ul class="no-style">

    <li>
      <input type="checkbox" id="checkbox" v-model="checked_01">
      <label v-bind:class="{strike: checked_01}" for="checkbox">Try doing the <b>Files</b> and <b>Database</b> seperately</label>
    </li>
    <li>
      <input type="checkbox" id="checkbox" v-model="checked_02">
      <label v-bind:class="{strike: checked_02}" for="checkbox">Try a different date.</label>
    </li>
    <li>
      <input type="checkbox" id="checkbox" v-model="checked_03">
      <label v-bind:class="{strike: checked_03}" for="checkbox">Look at <b>Database</b> for dropped tables (ex. user table)</label>
    </li>
    <li>
      <input type="checkbox" id="checkbox" v-model="checked_04">
      <label v-bind:class="{strike: checked_04}" for="checkbox">Look at <b>Database</b> prefix in <b>DB</b> and <b>wp-config.php</b></label>
    </li>
    <li>
      <input type="checkbox" id="checkbox" v-model="checked_05">
      <label v-bind:class="{strike: checked_05}" for="checkbox">Look at <b>home/site url</b> in <b>DB</b></label>
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
