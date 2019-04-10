<template>
  <div>
  <ul class="no-style">
    <li>
      <input type="checkbox" id="checkbox" v-model="checked_01">
      <label v-bind:class="{strike: checked_01}" for="checkbox">Check DNS and MX records</label>
    </li>
    <li>
      <input type="checkbox" id="checkbox" v-model="checked_02">
      <label v-bind:class="{strike: checked_02}" for="checkbox">Check mail routing make sure it is set to local</label>
    </li>
    <li>
      <input type="checkbox" id="checkbox" v-model="checked_03">
      <label v-bind:class="{strike: checked_03}" for="checkbox">Upload Mail Script and test</label>
    </li>
    <li>
      <input type="checkbox" id="checkbox" v-model="checked_04">
      <label v-bind:class="{strike: checked_04}" for="checkbox">Check Splunk</label>
    </li>
    <li>
      <input type="checkbox" id="checkbox" v-model="checked_05">
      <label v-bind:class="{strike: checked_05}" for="checkbox">Check Webmail</label>
    </li>
    <li>
      <input type="checkbox" id="checkbox" v-model="checked_06">
      <label v-bind:class="{strike: checked_06}" for="checkbox">Check for malware</label>
    </li>
    <li>
      <input type="checkbox" id="checkbox" v-model="checked_07">
      <label v-bind:class="{strike: checked_07}" for="checkbox">Check KI</label>
    </li>
    <li>
      <input type="checkbox" id="checkbox" v-model="checked_08">
      <label v-bind:class="{strike: checked_08}" for="checkbox">Reach out to HTL if none of the above works</label>
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
      checked_07: false,
      checked_08: false,
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
