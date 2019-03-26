<template>
  <div id="app">

    <!-- BEGIN - Stylesheet support -->
    <link rel="stylesheet" type="text/css"
        href="../../node_modules/@fortawesome/fontawesome-free/css/all.min.css" >
    <link rel="stylesheet" type="text/css"
        href="../../node_modules/@mdi/font/css/materialdesignicons.min.css" >
    <!-- END - Stylesheet support -->

    <!-- BEGIN - Application top links section -->


    <!-- Button to close the app -->
    <div id="app-top-links">

      <!-- Menu toggle -->
      <a id="deck-icon" title="Launch Menu" class="button is-medium" draggable="false">
        <span class="icon">
          <i class="mdi mdi-apps"></i>
        </span>
      </a>

      <!-- BEGIN Dropdown navigation section -->
      <nav id="prime">
        <ul>
          <router-link id="n-button" to="/" title="Home" class="button is-dark" draggable="false">
            <span class="icon is-small">
              <i class="mdi mdi-home"></i>
            </span>
          </router-link>
          <router-link id="n-button" to="/SwatFlow" title="SWAT Flow" class="button is-dark" draggable="false">
            <span class="icon is-small">
              <i class="mdi mdi-alpha-f mdi-24px"></i>
            </span>
          </router-link>
          <router-link id="n-button" to="/SwatNote" title="SWAT Note" class="button is-dark" draggable="false">
            <span class="icon is-small">
              <i class="mdi mdi-note-text"></i>
            </span>
          </router-link>
          <router-link id="n-button" to="/SwatTools" title="SWAT Tools" class="button is-dark" draggable="false">
            <span class="icon is-small">
              <i class="mdi mdi-toolbox"></i>
            </span>
          </router-link>
          <router-link id="n-button" to="/SwatLinks" title="SWAT Links" class="button is-dark" draggable="false">
            <span class="icon is-small">
              <i class="mdi mdi-link-variant"></i>
            </span>
          </router-link>
          <a id="n-button" href="http://www.x.co/l2chat" target="_blank" title="ATS Chat" class="button is-dark" draggable="false">
            <span class="icon is-small">
              <i class="mdi mdi-headset"></i>
            </span>
          </a>
          <a id="n-button" href="http://www.x.co/webcrm" target="_blank" title="Launch CRM" class="button is-dark" draggable="false">
            <span class="icon is-small">
              <i class="mdi mdi-magnify"></i>
            </span>
          </a>
          <a id="n-button" href="http://www.x.co/workday" target="_blank" title="Workday" class="button is-dark" draggable="false">
            <span class="icon is-small">
              <img src="../renderer/assets/icons/png/workday.png">
            </span>
          </a>
          <a id="n-button" href="http://owa.godaddy.com" target="_blank" title="Check your email" class="button is-dark" draggable="false">
            <span class="icon is-small">
              <img src="../renderer/assets/icons/png/o365.png">
            </span>
          </a>
        </ul>
      </nav>

      <!-- BEGIN - Prod Tool options -->
      <div id="gd-menu-alt" class="dropdown is-small">
        <div class="dropdown-trigger">
          <button id="gmenu" class="button is-small is-dark" title="PROD Tools" aria-haspopup="true" aria-controls="dropdown-menu">
            <span><p><b>P</b></p></span>
          </button>
        </div>
        <div class="dropdown-menu is-small" id="dropdown-menu-alt" role="menu">
          <div id="ddcontent" class="dropdown-content is-small">
            <a id="gd-menu-item" href="https://sso.godaddy.com/tools/loginlock/" target="_blank" title="Central Auth Tools" class="dropdown-item is-small" draggable="false">
              <p><b>Central Auth</b></p>
            </a>
            <a id="gd-menu-item" href="http://x.co/maastool" target="_blank" title="Migration As A Service Tool" class="dropdown-item is-small" draggable="false">
              <p><b>MaaS Tool</b></p>
            </a>
            <a id="gd-menu-item" href="http://x.co/migratepro" target="_blank" title="Request an Office 365 manual migration" class="dropdown-item is-small" draggable="false">
              <p><b>Migrate Pro</b></p>
            </a>
            <a id="gd-menu-item" href="https://godaddy.splunkcloud.com/en-US/app/ahs/search" target="_blank" title="SPLUNK Email Tool" class="dropdown-item is-small" draggable="false">
              <p><b>SPLUNK</b></p>
            </a>
            <a id="gd-menu-item" href="https://wopr.int.secureserver.net/support.services/Support" target="_blank" title="Email Account Lookup" class="dropdown-item is-small" draggable="false">
              <p><b>WOPR</b></p>
            </a>
            <a id="gd-menu-item" href="https://emailmanager.int.godaddy.com/user_info.php?infolevel=20&showAllAddresses=0&page_action=user_info&email_address=?infolevel=20&showAllAddresses=0&page_action=user_info&email_address=" target="_blank" title="Workspace Email Status Checker" class="dropdown-item is-small" draggable="false">
              <p><b>WS Tool</b></p>
            </a>
            <hr class="dropdown-divider">
            <a id="gd-menu-item" href="https://cheatsheet.godaddy.com/advanced-email-security" target="_blank" title="Advanced Email Security" class="dropdown-item is-small" draggable="false">
              <p><b>AES</b></p>
            </a>
            <a id="gd-menu-item" href="https://diagnostics.office.com/#/?env=Maven" target="_blank" title="Microsoft Support and Recovery Assistant" class="dropdown-item is-small" draggable="false">
              <p><b>SARA Tool</b></p>
            </a>
            <a id="gd-menu-item" href="https://cheatsheet.godaddy.com/advanced-email-security" target="_blank" title="GoDaddy O365 HELP" class="dropdown-item is-small" draggable="false">
              <p><b>O365 HELP</b></p>
            </a>
            <a id="gd-menu-item" href="https://www.godaddy.com/help/change-the-shopper-id-for-emails-pending-delete-8326" target="_blank" title="GoDaddy Workspace Email HELP" class="dropdown-item is-small" draggable="false">
              <p><b>WSE HELP</b></p>
            </a>
            <hr class="dropdown-divider">
            <div id="gd-menu-item" title="WordPress Premium Support" class="dropdown-item is-small">
              <strong><p>Press (esc) to close</p></strong>
            </div>
          </div>
        </div>
      </div>
      <!-- END - Prod Tool options -->
      <!-- END Dropdown navigation section -->

      <!-- Button to close application -->
      <p class="buttons is-right">
        <a id="close-btn" onclick="self.close()" class="button is-medium is-white" title="Close Flow Tool" draggable="false">
          <span class="icon is-medium">
            <i class="mdi mdi-close"></i>
          </span>
        </a>
      </p>

      <div class="has-text-centered" id="queue-data">
        <div id="gd-menu-tri" class="dropdown">
          <div class="dropdown-trigger">
            <a id="gmenu-tri" class="button" aria-haspopup="true" aria-controls="dropdown-menu" draggable="false">
                <i class="mdi mdi-dots-vertical" aria-hidden="true"></i>
            </a>
          </div>
          <div class="dropdown-menu is-small" id="dropdown-menu-tri" role="menu">
            <div class="dropdown-content">
              <a href="#" id="gd-menu-item" class="dropdown-item is-small" draggable="false">
                <p>Tier 1</p>
              </a>
              <a href="#" id="gd-menu-item" class="dropdown-item is-small" draggable="false">
                <p>Inbound</p>
              </a>
              <a href="#" id="gd-menu-item" class="dropdown-item is-small" draggable="false">
                <p>Productivity</p>
              </a>
            </div>
          </div>
        </div>
        <p id="theque"><b> {{lblTimeNow}} |<span v-bind:class="{ 'has-text-danger': inQueue}"> QNOW: </span></b> <span v-bind:class="{ 'has-text-danger': inQueue}">{{ qspan }}</span> <span id="quetext">|</span> <b>LWT: </b> {{ wtspan }}</p>
      </div>
    </div>
    <!-- END - Application top links section -->

    <!-- BEGIN Swat Flow Tool application deck -->
    <div id="prime-app-deck">

      <!-- BEGIN - Vue router insertion point -->
      <router-view/>
      <!-- END - Vue router insertion point -->

    </div>
    <!-- END Swat Flow Tool application deck -->

    <!-- BEGIN - Application footer section -->
      <footer>

        <!-- GoDaddy.com Front of site menu -->
        <div id="gd-menu" class="dropdown is-small is-up">
          <div class="dropdown-trigger">
            <button id="gmenu" class="button is-small is-dark" title="GoDaddy.com Product Links" aria-haspopup="true" aria-controls="dropdown-menu">
              <span><p><b>G</b></p></span>
            </button>
          </div>
          <div class="dropdown-menu is-small" id="dropdown-menu" role="menu">
            <div class="dropdown-content is-small">
              <a id="gd-menu-item" href="https://www.godaddy.com/email/professional-business-email" target="_blank" title="WordPress Premium Support" class="dropdown-item is-small" draggable="false">
                O365 professional Business Email
              </a>
              <a id="gd-menu-item" href="https://www.godaddy.com/websites/website-builder/plans-and-pricing" target="_blank" title="WordPress Premium Support" class="dropdown-item is-small" draggable="false">
                GoCentral Website Builder
              </a>
              <a id="gd-menu-item" href="https://www.godaddy.com/smartline/" target="_blank" title="WordPress Premium Support" class="dropdown-item is-small" draggable="false">
                Smartline
              </a>
               <hr class="dropdown-divider">
              <a id="gd-menu-item" href="https://www.godaddy.com/wordpress/premium-support" target="_blank" title="WordPress Premium Support" class="dropdown-item is-small" draggable="false">
                WordPress Premium Support
              </a>
              <a id="gd-menu-item" href="https://www.godaddy.com/web-security/website-security" target="_blank" title="Website Security" class="dropdown-item is-small" draggable="false">
                Website Security
              </a>
              <a id="gd-menu-item" href="https://www.godaddy.com/web-security/website-backup" target="_blank" title="Website Backups" class="dropdown-item is-small" draggable="false">
                Website Backups
              </a>
              <a id="gd-menu-item" href="https://www.godaddy.com/web-security/ssl-certificate" target="_blank" title="SSL Standard" class="dropdown-item is-small" draggable="false">
                SSL
              </a>
              <hr class="dropdown-divider">
              <div id="gd-menu-item" title="WordPress Premium Support" class="dropdown-item is-small">
                <strong><p>Press (esc) to close</p></strong>
              </div>
            </div>
          </div>
        </div>

        <!-- Feedback loop to Microsoft form -->
        <p class="buttons">
          <a id="helper-two" class="button is-white is-medium" href="https://forms.office.com/Pages/ResponsePage.aspx?id=K2Lx1aMUpkWwaQA_jcSFH83ifk09gUJEjA4J6LWpTc5UOUZIWTYxT0hZQUVVVExSS1JIUE02SVhWNC4u" target="_blank" title="Give Feedback">
            <span class="icon">
              <i class="mdi mdi-comment-outline is-medium"></i>
            </span>
          </a>
        </p>

        <!-- Application footer image -->
        <div id="footer-img">
          <img src="../renderer/assets/images/flowtool-gld-xs.png">
        </div>

        <!-- Application version note -->
        <div id="app-vers">
          <div class="tags has-addons">
            <span class="tag is-dark">Beta version 1.7.13</span>
            <span id="ibcolor" class="tag verse has-text-light"><b>(</b>Peralta<b>)</b></span>
          </div>
        </div>

      </footer>
    <!-- END - Application footer section -->
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields';
import axios from 'axios';
export default {
  name: 'App',
  data: function(){
    return {
      darkTheme: false,
      responseData: [],
      time: '',
      lblTimeNow: '',
      qspan: '',
      wtspan: '',
      inQueue: false,
    }
  },
  methods: {
    handleThemeChange: function () {
      this.darkTheme= !this.darkTheme;
    },
    refreshQueueData: function () {
      axios.get('http://reporting.int.godaddy.com/Wallboard/pkistats.aspx?skilltargetid=5007')
        .then(response => {
          this.responseData = response.data.split("\n");
          this.searchForTime();
          this.searchForQnow();
          this.searchForLwt();
          console.log("=========================");
        })
    },
    searchForTime: function () {
      for (var i = 0; i < this.responseData.length; i++) {
        if (this.responseData[i].includes('lblTimeNow')) {
          let _lblTimeNow = this.responseData[i].replace('<td class="reportClock">&nbsp;<span id="lblTimeNow">', "");
          _lblTimeNow = _lblTimeNow.replace('</span></td>', "");
          _lblTimeNow = _lblTimeNow.replace(/ /gi, '');
          this.lblTimeNow = _lblTimeNow
          console.log(this.lblTimeNow);
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
          console.log(this.qspan);
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
          console.log(this.wtspan);
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
<style>
#queue-data{
  position: absolute;
  top: 12px;
  padding: 0px;
  margin: 0px;
  left: 45%;
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

#theque {
  line-height: 1.4em
}

#quetext {
  font-family: Courier, monospace;
  font-weight: bold;
  font-size: 13px;
  text-align: center;
  letter-spacing: .2em
}

</style>
