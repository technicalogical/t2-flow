<template>
  
  <!-- BEGIN - Primary application deck -->
  <form id="note-deck">

    <!-- BEGIN Swat Note input section -->
    <div id="swat-note-input" class="content">

      <center><p id="warnme" class="help has-text-light"><b>THIS PAGE DOES NOT STORE CUSTOMER DATA</b></p></center>

      <span id="ssl-sans-title" class="button is-dark has-text-light is-small is-fullwidth"><b>Customer Issue:</b></span>
      <div id="note-sitch" class="control">
        <textarea id="sitch-text" class="textarea is-small has-fixed-size" placeholder="Customer Issue..." rows="5" cols="30" v-model="issue" wrap="hard"></textarea>
      </div>

      <span id="ssl-sans-title" class="button is-dark has-text-light is-small is-fullwidth"><b>Resolution:</b></span>
      <div id="note-sitch" class="control">
        <textarea id="sitch-text" class="textarea is-small has-fixed-size" placeholder="Resolution..." rows="5" cols="30" v-model="sitch" wrap="hard"></textarea>
      </div>

      <span id="ssl-sans-title" class="button is-dark has-text-light is-small is-fullwidth"><b>Anything done out of SOS:</b></span>
      <div id="note-sitch" class="control">
        <textarea id="sitch-text" class="textarea is-small has-fixed-size" placeholder="N/A" rows="5" cols="30" v-model="sos" wrap="hard"></textarea>
      </div>
      
    </div>
    <!-- END Swat Note input section -->
    
    <!--  BEGIN Copy paste notes section -->
    <span id="note-copy-title" class="button is-dark has-text-light is-small is-fullwidth"><b>CRM Call Notes</b></span>
    <div id="callnotes" class="content is-info getme" wrap="hard">  
      <p>#SWAT T2</p>
      <p>Customer Issue: {{ issue }}</p>
      <p>Resolution: {{ sitch }}</p> 
      <p>Anything done out of SOS: {{ sos }}</p> 
    </div>
    <!-- END Copy paste notes section -->

    <div id="copy-clear" class="buttons">
      <router-link id="noteswap" to="/note/KiNote" title="Switch to Tier 1 template" class="button is-small is-dark has-text-light">
        <b>KI</b>
      </router-link>
      <button id="copyButton"  class="button is-small is-link btn" data-clipboard-target="#callnotes" title="Click to copy your notes to clipboard">
        <span class="icon is-medium has-text-light">
          <i class="fas fa-copy"></i>
        </span>
        <span>Copy Your Notes</span>
      </button>
      <button id="copyButton"  class="button is-small is-danger btn" @click="clearForm" title="Click to clear notes">
        <span class="icon is-medium has-text-light">
          <i class="fas fa-eraser"></i>
        </span>
        <span>Clear Notes</span>
      </button>
    </div>

  </form>
  <!-- END - Primary application deck -->
    
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
      'issue',
      'sitch',
      'sos',
    ]),
  },
  methods: {
    clearForm: function(e) {
      this.issue = "";
      this.sitch = "";
      this.sos = "";
      e.preventDefault();
    }
  }
};

// Copy to clipboard function for notes
var clipboard = require('clipboard');

var clipboard = new clipboard('.btn');
    clipboard.on('success', function(e) {
        console.log(e);
    });
    clipboard.on('error', function(e) {
        console.log(e);
    });
// End to clipboard function for notes
</script>

<style></style>