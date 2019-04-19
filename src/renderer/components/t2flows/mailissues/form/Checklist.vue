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
      <label v-bind:class="{strike: checked_01}" for="checkbox_01">Upload mail_test.php</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">Uploading mail test script will check to make sure that the server is able to send out mail. If the server can send out mail its going to be a configuration issue with the customers code.  <a target="_blank" class="orange-link" href="https://www.godaddy.com/help/c3-hosting-support-shared-form-mail-troubleshooting-19776"> here</a></p>
    </div>

    <li>
      <input type="checkbox" id="checkbox_02" v-model="checked_02">
      <label v-bind:class="{strike: checked_02}" for="checkbox_02">Splunk</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">Check splunk to see if the form is hitting splunk. If its not hitting splunk but mail test script is. Issue is with coding. If it is hitting splunk verify email that it is being delivered to. Its possible contact form is working but its going to wrong email, bad subject or in the junk folder.<a target="_blank" class="orange-link" href="https://confluence.godaddy.com/display/C3PHS/General+-+Splunk+-+Intro+to+Splunk"> into to splunk</a>, <a target="_blank" class="orange-link" href="https://godaddy.splunkcloud.com"> Splunk</a></p>
    </div>

    <li>
      <input type="checkbox" id="checkbox_03" v-model="checked_03">
      <label v-bind:class="{strike: checked_03}" for="checkbox_03">Email routing</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">When using cpanel email the mail router needs to be set to local. Anything other than cpanel email would be set to remote. <a target="_blank" class="orange-link" href="https://www.godaddy.com/help/change-your-email-destination-with-cpanel-shared-hosting-12380"> here</a></p>
    </div>

    <li>
      <input type="checkbox" id="checkbox_04" v-model="checked_04">
      <label v-bind:class="{strike: checked_04}" for="checkbox_04">Review account for unblock steps if flagged BAD-ACCT before reaching out to HTL</label>
    </li>

    <div class="box">
    <p style="font-size: 10px">If a customer has been flagged for a bad-accnt, you will need to be sure that they have completed the steps before reaching out to a HTL. If you reach out to an HTL and steps have not been completed you will get marked as an invalid chat. <a target="_blank" class="orange-link" href="https://confluence.godaddy.com/display/C3PHS/General+-+Splunk+-+BAD-ACCT"> here</a></p>
    </div>

    <li>
      <input type="checkbox" id="checkbox_05" v-model="checked_05">
      <label v-bind:class="{strike: checked_05}" for="checkbox_05">Reach out HTL if nothing hits splunk from test script</label>
    </li>

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
