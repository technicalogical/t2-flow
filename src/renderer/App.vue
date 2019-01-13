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
          <a class="icon" title="SWAT Flow"><router-link class="far fa-file-alt" to="/SwatFlow"></router-link></a>
          <a class="icon" title="SWAT Note"><router-link class="far fa-comments" to="/SwatNote"></router-link></a>
          <a class="icon" title="SWAT Tools"><router-link class="fas fa-toolbox" to="/SwatTools"></router-link></a>
          <a class="icon" title="SWAT Links"><router-link class="fas fa-external-link-alt" to="/SwatLinks"></router-link></a>
          <a href="http://www.x.co/webcrm" target="_blank" class="icon" title="Launch CRM"><li class="fas fa-search"></li></a>
          <a href="http://www.x.co/workday" target="_blank" class="icon" title="Workday"><li class="far fa-clock"></li></a>
        </ul>  
      </nav>
      <!-- END Dropdown navigation section -->

      <!-- Button to close application -->
      <p class="buttons is-right">
        <a id="close-btn" onclick="self.close()" class="button is-small is-white" title="Close SWAT Tool">
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

        <!-- Button to link to the conlfuence page -->
        <p id="helper-two" class="buttons">
          <a class="button is-white" href="http://x.co/flowtool" target="_blank" title="Give Feedback">
            <span class="icon has-text-dark">
              <i id="helper-icon" class="far fa-comment-alt is-lg"></i>
            </span>
          </a>
        </p>

        <!-- Application footer image -->
        <div id="footer-img"></div>

        <!-- Application version note -->
        <p id="app-vers" class="is-italic"><strong>Beta</strong> ver <strong>1.4.01</strong> (<strong>Zephyr</strong>)</p>

      </footer>
    <!-- END - Application footer section -->
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields';

export default {
  name: 'App',
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
      'selected'
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
</script>

<style src="./flow-style.scss" ></style>