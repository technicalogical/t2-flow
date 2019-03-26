<template>

  <div class="has-text-centered" id="queue-data">
    <div id="gd-menu-tri" class="dropdown">
      <div class="dropdown-trigger">
        <a id="gmenu-tri" class="button" aria-haspopup="true" aria-controls="dropdown-menu" draggable="false">
            <i class="mdi mdi-dots-vertical" aria-hidden="true"></i>
        </a>
      </div>
      <div class="dropdown-menu is-small" id="dropdown-menu-tri" role="menu">
        <div class="dropdown-content">

          <!-- <option v-for="queue in queues" v-bind:value="queue.code"> -->
            <a v-model="queueSelected" v-for="queue in queues" v-bind:value="queue.code" href="#" id="gd-menu-item" class="dropdown-item is-small" draggable="false">
              <option v-on:click="changeQueSelected(queue.code)">
                <p>{{ queue.name }}</p>
              </option>
            </a>
          <!-- </option> -->

        </div>
      </div>
    </div>
    <p id="theque"><b> {{lblTimeNow}} |<span v-bind:class="{ 'has-text-danger': inQueue}"> QNOW: </span></b> <span v-bind:class="{ 'has-text-danger': inQueue}">{{ qspan }}</span> <span id="quetext">|</span> <b>LWT: </b> {{ wtspan }}</p>

  </div>


</template>

<script>
import axios from 'axios';
export default{
  name: 'Queue',
  data: function(){
    return {
      queues: [
        {id: 0, name: 'Hosting T2', code: '21401'},
        {id: 1, name: 'Productivity', code: '9558'},
        {id: 2, name: 'inbound', code: '5007'},
        {id: 3, name: 'Hosting', code: '5034'},

      ],
      queueSelected: '21401',
      responseData: [],
      time: '',
      lblTimeNow: '',
      qspan: '',
      wtspan: '',
      inQueue: false,
    }
  },
  methods: {
    changeQueSelected: function (queueCode) {
      console.log("clicked a new queue for: " + queueCode);
      this.queueSelected = queueCode;
      this.refreshQueueData();
    },
    refreshQueueData: function () {
      axios.get('http://reporting.int.godaddy.com/Wallboard/pkistats.aspx?skilltargetid=' + this.queueSelected)
      .then(response => {
        this.responseData = response.data.split("\n");
        this.searchForTime();
        this.searchForQnow();
        this.searchForLwt();
        // console.log("=========================");
        // console.log('http://reporting.int.godaddy.com/Wallboard/pkistats.aspx?skilltargetid=' + this.queueSelected);
      })
    },
    searchForTime: function () {
      for (var i = 0; i < this.responseData.length; i++) {
        if (this.responseData[i].includes('lblTimeNow')) {
          let _lblTimeNow = this.responseData[i].replace('<td class="reportClock">&nbsp;<span id="lblTimeNow">', "");
          _lblTimeNow = _lblTimeNow.replace('</span></td>', "");
          _lblTimeNow = _lblTimeNow.replace(/ /gi, '');
          this.lblTimeNow = _lblTimeNow
          // console.log(this.lblTimeNow);
        }
      }
    },
    searchForQnow: function (){
      for (var i = 0; i < this.responseData.length; i++) {
        if (this.responseData[i].includes('qspan')) {
          let _qspan = this.responseData[i].replace('QNOW&nbsp;<span id="qspan" class="reportDetail" style="font-size:90px;"><span id="lblQNow" style="font-size:120px;">', "");
          _qspan = _qspan.replace('QNOW&nbsp;<span id="qspan" class="redReportDetail" style="font-size:90px;"><span id="lblQNow" style="font-size:120px;">', "");
          _qspan = _qspan.replace('</span></span>&nbsp;&nbsp;&nbsp;', "");
          _qspan = _qspan.replace(/ /gi, '');
          this.qspan = _qspan;
          parseInt(this.qspan) > 0 ? this.inQueue = true : this.inQueue = false;
          // console.log(this.qspan);
        }
      }
    },
    searchForLwt: function (){
      for (var i = 0; i < this.responseData.length; i++) {
        if (this.responseData[i].includes('wtspan')) {
          let _wtspan = this.responseData[i].replace('LWT&nbsp;<span id="wtspan" class="reportDetail" style="font-size:90px;"><span id="lblLWT" style="font-size:120px;">', "");
          _wtspan = _wtspan.replace('LWT&nbsp;<span id="wtspan" class="redReportDetail" style="font-size:90px;"><span id="lblLWT" style="font-size:120px;">', "")
          _wtspan = _wtspan.replace('</span>&nbsp;</span>', "");
          _wtspan = _wtspan.replace(/ /gi, '');
          this.wtspan = _wtspan
        }
      }
    },
  },
  created: function(){
    this.refreshQueueData();
    setInterval(function () {
      this.refreshQueueData();
    }.bind(this), 5000)
  },
}
</script>

<style>
#queue-data{
  position: absolute;
  bottom: 0px;
  padding: 0px;
  margin: 0px;
  left: 43%;
  margin-left: -100px;
  width:260px;
  height: 20px;
  border: 0px;
  font-family: Courier, monospace;
  font-weight: bold;
  font-size: 11px;
  text-align: center;
  letter-spacing: .2em
}


#gd-menu-tri {
  position: relative;
  float: left;
  top:0px;
  z-index: 2;
}
#gmenu-tri {
  top:1px;
  width: 20px;
  height: 20px;
  border: none;
  outline:none;
  margin-top: 0px;
  margin-left: 3px;
  padding-top: 0px;
  background-color: hsl(0, 0%, 98%);
}
#gmenu-tri:focus {
  border: 0px;
  outline: none;
}

#gmenu-tri:active {
  border: 0px;
  outline: none;
}

</style>
