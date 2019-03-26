<template>
  <div id="app">

    <!-- BEGIN - Stylesheet support -->
    <link rel="stylesheet" type="text/css"
    href="../../node_modules/@fortawesome/fontawesome-free/css/all.min.css" >
    <link rel="stylesheet" type="text/css"
    href="../../node_modules/@mdi/font/css/materialdesignicons.min.css" >
    <link rel="stylesheet" href="../../node_modules/animate.css/animate.min.css">
    <!-- END - Stylesheet support -->

    <!-- BEGIN - Application top links section -->

    <!-- Button to close the app -->
    <div id="app-top-links">

      <!-- Menu toggle -->
      <a id="deck-icon" title="Launch Menu" class="button is-medium">
        <span class="icon">
          <i class="mdi mdi-apps"></i>
        </span>
      </a>

      <!-- BEGIN Dropdown navigation section -->
      <nav id="prime">
        <ul>
          <router-link id="n-button" to="/" title="Home" class="button is-dark">
            <span class="icon is-small">
              <i class="mdi mdi-home"></i>
            </span>
          </router-link>
          <router-link id="n-button" to="/SwatFlow" title="SWAT Flow" class="button is-dark">
            <span class="icon is-small">
              <i class="mdi mdi-alpha-f mdi-24px"></i>
            </span>
          </router-link>
          <router-link id="n-button" to="/SwatNote" title="SWAT Note" class="button is-dark">
            <span class="icon is-small">
              <i class="mdi mdi-note-text"></i>
            </span>
          </router-link>
          <router-link id="n-button" to="/SwatTools" title="SWAT Tools" class="button is-dark">
            <span class="icon is-small">
              <i class="mdi mdi-toolbox"></i>
            </span>
          </router-link>
          <router-link id="n-button" to="/SwatLinks" title="SWAT Links" class="button is-dark">
            <span class="icon is-small">
              <i class="mdi mdi-link-variant"></i>
            </span>
          </router-link>
          <a id="n-button" href="http://www.x.co/l2chat" target="_blank" title="HTL Chat" class="button is-dark">
            <span class="icon is-small">
              <i class="mdi mdi-headset"></i>
            </span>
          </a>
          <!-- BEGIN - restoreU & migrateU options -->
          <a id="n-button" href="https://hs.int.godaddy.com/restore-u/#/index" target="_blank" title="restoreU" class="button is-dark">
            <span class="icon is-small">
              <i class="mdi mdi-server"></i>
            </span>
          </a>
          <!-- END - restoreU & migrateU options -->
          <a id="n-button" href="http://www.x.co/webcrm" target="_blank" title="Launch CRM" class="button is-dark">
            <span class="icon is-small">
              <i class="mdi mdi-magnify"></i>
            </span>
          </a>
          <a id="n-button" href="http://www.x.co/workday" target="_blank" title="Workday" class="button is-dark">
            <span class="icon is-small">
              <img src="../renderer/assets/icons/png/workday.png">
            </span>
          </a>
          <a id="n-button" href="http://owa.godaddy.com" target="_blank" title="Check your email" class="button is-dark">
            <span class="icon is-small">
              <img src="../renderer/assets/icons/png/o365.png">
            </span>
          </a>
        </ul>
      </nav>
      <!-- END Dropdown navigation section -->

      <!-- Button to close application -->
      <p class="buttons is-right">
        <a id="close-btn" onclick="self.close()" class="button is-medium is-white" title="Close Flow Tool">
          <span class="icon is-medium">
            <i class="mdi mdi-close"></i>
          </span>
        </a>
      </p>

    <Queue></Queue>

</div>
<!-- END - Application top links section -->

<!-- BEGIN Swat Flow Tool application deck -->
<div id="prime-app-deck">

  <br>

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
        <a id="gd-menu-item" href="https://www.godaddy.com/email/professional-business-email" target="_blank" title="WordPress Premium Support" class="dropdown-item is-small">
          O365 professional Business Email
        </a>
        <a id="gd-menu-item" href="https://www.godaddy.com/websites/website-builder/plans-and-pricing" target="_blank" title="WordPress Premium Support" class="dropdown-item is-small">
          GoCentral Website Builder
        </a>
        <a id="gd-menu-item" href="https://www.godaddy.com/smartline/" target="_blank" title="WordPress Premium Support" class="dropdown-item is-small">
          Smartline
        </a>
        <hr class="dropdown-divider">
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

  <!-- Button to link to feedback loop -->
  <p class="buttons">
    <a id="helper-two" class="button is-white is-medium" href="https://forms.office.com/Pages/ResponsePage.aspx?id=K2Lx1aMUpkWwaQA_jcSFH83ifk09gUJEjA4J6LWpTc5URU9WMkNHOFgyMEg4RUY3R1A0QlA3UjhEMC4u" target="_blank" title="Give Feedback">
      <span class="icon is-medium">
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
      <span class="tag is-dark">Beta version 1.0.1</span>
      <span id="ibcolor" class="tag verse is-info">(Ollie)</span>
    </div>
  </div>

</footer>
<!-- END - Application footer section -->
</div>
</template>

<script>
import { mapFields } from 'vuex-map-fields';
import axios from 'axios';
import Queue from './components/Queue.vue';
export default {
  name: 'App',
  components: {
  Queue
},
  data: function(){
    return {
      darkTheme: false,
    }
  },
  methods: {
    handleThemeChange: function () {
      this.darkTheme= !this.darkTheme;
    },
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
<style>


</style>
