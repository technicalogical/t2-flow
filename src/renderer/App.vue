<template>
  <div id="app">

    <!-- BEGIN - Font Awesome & Google Font support option -->   
    <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
    <!-- END - Font Awesome & Google Font support option -->

    <!-- BEGIN - Application top links section -->
    <div id="time">
      <p id="clock"></p>
    </div>
    
    <!-- Button to close the app -->
    <div id="app-top-links">

      <!-- Button to link to CRM --> 
      <a id="deck-icon" title="Launch Menu" class="button is-white is-small">
        <span class="icon is-small">
          <i class="fas fa-th fa-lg"></i>
        </span>
      </a>

      <!-- BEGIN Dropdown navigation section -->
      <nav id="prime">
        <ul>
          <a class="icon" title="Home"><router-link class="fas fa-h-square" to="/"></router-link></a>
          <router-link class="icon" title="SWAT Flow" to="/SwatFlow"><img src="../renderer/assets/icons/png/fgo-blk.png"></router-link>
          <a class="icon" title="SWAT Note"><router-link class="fas fa-sticky-note" to="/SwatNote"></router-link></a>
          <a class="icon" title="SWAT Tools"><router-link class="fas fa-toolbox" to="/SwatTools"></router-link></a>
          <a class="icon" title="SWAT Links"><router-link class="fas fa-link" to="/SwatLinks"></router-link></a>
          <a href="http://www.x.co/webcrm" target="_blank" class="icon" title="Launch CRM"><li class="fas fa-search"></li></a>
          <a href="http://www.x.co/workday" target="_blank" class="icon" title="Workday"><li><img src="../renderer/assets/icons/png/workday.png"></li></a>
        </ul>  
      </nav>
      <!-- END Dropdown navigation section -->

      <!-- Button to close application -->
      <p class="buttons is-right">
        <a id="close-btn" onclick="self.close()" class="button is-small is-white" title="Close Flow Tool">
          <span class="icon">
            <i class="fas fa-times fa-lg"></i>
          </span> 
        </a>
      </p>    
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
            <button class="button is-small is-dark" title="GoDaddy.com Product Links" aria-haspopup="true" aria-controls="dropdown-menu">
              <span><img src="../renderer/assets/icons/png/godaddy.png"></span>
              <span class="icon has-text-light">
                <i class="fas fa-angle-up" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div class="dropdown-menu is-small" id="dropdown-menu" role="menu">
            <div class="dropdown-content is-small">
              <a id="gd-menu-item" href="https://www.godaddy.com/wordpress/premium-support" target="_blank" title="WordPress Premium Support" class="dropdown-item is-small">
                WordPress Premium Support
              </a>
              <a id="gd-menu-item" href="https://www.godaddy.com/web-security/website-security" target="_blank" title="Website Security" class="dropdown-item is-small">
                Website Security
              </a>
              <a id="gd-menu-item" href="https://www.godaddy.com/web-security/website-backup" target="_blank" title="Website Backups" class="dropdown-item is-small">
                Website Backups
              </a>
              <a id="gd-menu-item" href="https://www.godaddy.com/web-security/ssl-certificate" target="_blank" title="SSL Standard" class="dropdown-item is-small">
                SSL
              </a>
              <hr class="dropdown-divider">
              <div id="gd-menu-item" title="WordPress Premium Support" class="dropdown-item is-small">
                <strong><p>Press (esc) to close</p></strong>
              </div>
            </div>
          </div>
        </div>

        <!-- Button to link to the conlfuence page -->
        <p id="helper-two" class="buttons">
          <a class="button is-white" href="http://x.co/flowtool" target="_blank" title="Give Feedback">
            <span class="icon has-text-dark">
              <i id="helper-icon" class="far fa-comment-alt is-lg"></i>
            </span>
          </a>
        </p>

        <!-- Application footer image -->
        <div id="footer-img">
          <img src="../renderer/assets/images/flowtool-blu-xs.png">
        </div>

        <!-- Application version note -->
        <div id="app-vers">
          <div class="tags has-addons">
            <span class="tag is-dark">Beta version 1.5.9</span>
            <span class="tag verse is-link">(Zephyr)</span>
          </div>
        </div>

      </footer>
    <!-- END - Application footer section -->
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields';

export default {
  name: 'App',
  data: function(){
    return {
      darkTheme: false,
    }
  },
  methods: {
    handleThemeChange: function () {
      this.darkTheme= !this.darkTheme;
    }
  },
  computed: {
    // The `mapFields` function takes an array of
    // field names and generates corresponding
    // computed properties with getter and setter
    // functions for accessing the Vuex store.
    ...mapFields([
      'name',
      'sitch',
	    'domain',
      'method',
      'selected',
      'inc',
      'kidomain',
      'cusnum',
      'guid'
    ]),
  },
};


// Javascript for time piece
var myVar = setInterval(function() {
  myTimer();
}, 1000);

function myTimer() {
  var d = new Date();
  document.getElementById("clock").innerHTML = d.toLocaleTimeString();
}

// jQuery insertion for $ dependancy
import JQuery from 'jquery'
let $ = JQuery

// jQuery for Deck menu functionality
$(document).ready(function(){
 $("#deck-icon").click(function(){
    $("#prime").slideToggle("fast");
  });
});

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