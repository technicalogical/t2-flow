<template>
  <div>
    <br>
  <ul class="no-style">
    <li><b>Ticket Handled Wrong?</b></li>
    <li>
      <input type="checkbox" id="checkbox_01" v-model="checked_01">
      <label v-bind:class="{strike: checked_01}" for="checkbox_01">
        Update ticket correctly with all necessary information and reach out to Supervisor to contact WPPS through SLACK to have it corrected/expedited.
      </label>
    </li>
    <li><b>Issue Repair Caused Bigger Problem?</b></li>
    <li>
      <input type="checkbox" id="checkbox_02" v-model="checked_02">
      <label v-bind:class="{strike: checked_02}" for="checkbox_02">
        Note the ticket with clear information on what is broken.  Include error logs if they exist. Notify Supervisor to reach out to WPPS through SLACK to have it corrected.
      </label>
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
