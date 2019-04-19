<template>
  <div id="swat-deck" class="hello">

    <!-- START Opening comments for Swat FLow Chart -->
    <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <center><p><b>Test</b> Index</p></center>
    </div>

  </div>
</template>

<script>
'use strict';
import aData from "@/assets/test.json"
const fs = require('fs');
// import fs from "fs";
// const json = require("./datastructure.json")
// import data from './datastructure.json'
// const json = req
export default{
data(){
  return{

  }
},
methods: {

},
created(){
  console.log("The component is loaded");

  // let rawdata = fs.readFileSync(datastructure.json);
  fs.readFile('./src/renderer/assets/datastructure.json', (err, data) => {
      if (err) throw err;
      let info = JSON.parse(data);
      console.log(info);
  });
}
}
</script>

<style>

</style>
