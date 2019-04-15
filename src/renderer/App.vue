<!-- :::::::::: Primary Application Vue :::::::::: -->
<template>
  <div id="app">

    <!-- BEGIN - Stylesheet Support -->   
    <link rel="stylesheet" type="text/css" 
        href="../../node_modules/@fortawesome/fontawesome-free/css/all.min.css" >
    <link rel="stylesheet" type="text/css" 
        href="../../node_modules/@mdi/font/css/materialdesignicons.min.css" >
    
    <!-- BEGIN - Application Menu Vue -->
    <div id="app-top-links">

      <!-- Menu toggle --> 
      <a id="deck-icon" title="Launch Menu" class="button is-medium ">
        <span class="icon">
          <i class="mdi mdi-apps"></i>
        </span>
      </a>

      
      <!-- BEGIN Phone Queue Display -->
      <Queue></Queue>

      <div id="leftside">

        <!-- BEGIN - Primary Navigation Vue -->
        <Nav></Nav>
        
        <!-- BEGIN - Migration & Restore Tool options -->
        <MigRes></MigRes>
        
        <!-- BEGIN - Prod Tool options -->
        <Prodtools></Prodtools>
        

        <!-- BEGIN - Tier Two Deck -->
        <T2Deck></T2Deck>

      </div>

      <!-- Button to close application -->
      <p class="buttons is-right">
        <a id="close-btn" onclick="self.close()" class="button is-medium is-white" title="Close Flow Tool">
          <span class="icon is-medium">
            <i class="mdi mdi-close"></i>
          </span> 
        </a>
      </p>

    </div>
    <!-- END - Application Menu Vue -->

    <!-- Vue Insertion Point -->
    <div id="prime-app-deck">
      
      <router-view/> <!-- BEGIN - Vue router insertion point -->
      
    </div>
    
  
    <!-- BEGIN - Application Footer Vue -->
    <Footer></Footer>  
    
  </div>
</template>

<script>

import { mapFields } from 'vuex-map-fields';
import axios from 'axios';
import Queue from './components/app/Queue.vue';
import Nav from './components/app/Nav.vue';
import MigRes from './components/app/MigRes.vue';
import Prodtools from './components/app/Prodtools.vue';
import T2Deck from './components/app/T2Deck.vue';
import Footer from './components/app/Footer.vue';

export default {
  name: 'App',
    components: {
      Queue,
      Nav,
      MigRes,
      Prodtools,
      T2Deck,
      Footer,
  },
    methods: {
      handleThemeChange: function () {
        this.darkTheme= !this.darkTheme;
      },
      refreshQueueData: function () {
        axios.get('http://reporting.int.godaddy.com/Wallboard/pkistats.aspx?skilltargetid=9558')
          .then(response => {
            this.responseData = response.data.split("\n");
            this.searchForTime();
            this.searchForQnow();
            this.searchForLwt();
            //console.log("=========================");
          })
      },
      searchForTime: function () {
        for (var i = 0; i < this.responseData.length; i++) {
          if (this.responseData[i].includes('lblTimeNow')) {
            let _lblTimeNow = this.responseData[i].replace('<td class="reportClock">&nbsp;<span id="lblTimeNow">', "");
            _lblTimeNow = _lblTimeNow.replace('</span></td>', "");
            _lblTimeNow = _lblTimeNow.replace(/ /gi, '');
            this.lblTimeNow = _lblTimeNow
            //console.log(this.lblTimeNow);
          }
        }
      },
      searchForQnow: function (){
        for (var i = 0; i < this.responseData.length; i++) {
          if (this.responseData[i].includes('qspan')) {
            let _qspan = this.responseData[i].replace('QNOW&nbsp;<span id="qspan" class="reportDetail" style="font-size:90px;"><span id="lblQNow" style="font-size:120px;">', "");
            _qspan = _qspan.replace('</span></span>&nbsp;&nbsp;&nbsp;', "");
            _qspan = _qspan.replace(/ /gi, '');
            this.qspan = _qspan;
            parseInt(this.qspan) > 0 ? this.inQueue = true : this.inQueue = false;
            //console.log(this.qspan);
          }
        }
      },
      searchForLwt: function (){
        for (var i = 0; i < this.responseData.length; i++) {
          if (this.responseData[i].includes('wtspan')) {
            let _wtspan = this.responseData[i].replace('LWT&nbsp;<span id="wtspan" class="reportDetail" style="font-size:90px;"><span id="lblLWT" style="font-size:120px;">', "");
            _wtspan = _wtspan.replace('</span>&nbsp;</span>', "");
            _wtspan = _wtspan.replace(/ /gi, '');
            this.wtspan = _wtspan
            //console.log(this.wtspan);
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
    computed: {
      // The `mapFields` function takes an array of
      // field names and generates corresponding
      // computed properties with getter and setter
      // functions for accessing the Vuex store.
      ...mapFields([
        'name',
        'issue',
        'sitch',
        'domain',
        'method',
        'selected',
        'inc',
        'kidomain',
        'cusnum',
        'guid',
        'sos'
    ]),
  },
};


// Javascript for time piece
//var myVar = setInterval(function() {
//  myTimer();
//}, 1000);

//function myTimer() {
//  var d = new Date();
//  document.getElementById("clock").innerHTML = d.toLocaleTimeString();
//}

// jQuery insertion for $ dependancy
import JQuery from 'jquery'
let $ = JQuery

// jQuery for Deck menu functionality
//$(document).ready(function(){
// $("#deck-icon").click(function(){
//    $("#prime").slideToggle("fast");
//  });
//});

// Test
document.addEventListener('DOMContentLoaded', function () {

  // Dropdowns
  var $dropdowns = getAll('.dropdown:not(.is-hoverable)');

  if ($dropdowns.length > 0) {
    $dropdowns.forEach(function ($el) {
      $el.addEventListener('click', function (event) {
        event.stopPropagation();
        $el.classList.toggle('is-active');
      });
    });

    document.addEventListener('click', function (event) {
      closeDropdowns();
    });
  }

  function closeDropdowns() {
    $dropdowns.forEach(function ($el) {
      $el.classList.remove('is-active');
    });
  }

  // Close dropdowns if ESC pressed
  document.addEventListener('keydown', function (event) {
    var e = event || window.event;
    if (e.keyCode === 27) {
      closeDropdowns();
    }
  });

  // Functions

  function getAll(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
  }
});
</script>

<style src="./flow-style.scss" ></style>
<style src="./t2styles.scss"></style>
<style>

/* BEGIN | Left navigation space */
#leftside {
  position: absolute;
  background-color: hsl(0, 0%, 14%);
  top:30px;
  width: 30px;
  border: 0px;
  border-top: 0px;
  border-left: 0px;
  height: 670px;
}

</style>
