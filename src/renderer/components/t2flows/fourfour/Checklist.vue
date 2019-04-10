<template>
  <div>
    <br>
  <ul class="no-style">
    <li>
      <input type="checkbox" id="checkbox" v-model="checked_01">
      <label v-bind:class="{strike: checked_01}" for="checkbox">Check <b>DNS</b></label>
    </li>
    <li>
      <input type="checkbox" id="checkbox" v-model="checked_02">
      <label v-bind:class="{strike: checked_02}" for="checkbox">Disable <b>Control Files</b></label>
    </li>
    <li>
      <input type="checkbox" id="checkbox" v-model="checked_03">
      <label v-bind:class="{strike: checked_03}" for="checkbox">Upload <b>Test Script</b></label>
    </li>
    <li>
      <input type="checkbox" id="checkbox" v-model="checked_04">
      <label v-bind:class="{strike: checked_04}" for="checkbox">Check <b>Domain</b> is Pointed to the Right <b>File Structure</b></label>
    </li>
    <li>
      <input type="checkbox" id="checkbox" v-model="checked_05">
      <label v-bind:class="{strike: checked_05}" for="checkbox">Check <b>Permissions</b></label>
    </li>
    <li>
      <input type="checkbox" id="checkbox" v-model="checked_06">
      <label v-bind:class="{strike: checked_06}" for="checkbox">For <b>WordPress</b>, Toggle/Save <b>Permalinks</b></label>
    </li>
    <li>
      <input type="checkbox" id="checkbox" v-model="checked_07">
      <label v-bind:class="{strike: checked_07}" for="checkbox">If none above works, <b>HTL</b></label>
    </li>
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
      checked_05: false,
      checked_06: false,
      checked_07: false,
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
