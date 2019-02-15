<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="note-deck">

    <!-- BEGIN KI Note input section -->
    <div id="swat-note-input" class="content">
      <center><p id="kime" class="help has-text-light"><b>KI TEMPLATE FOR ESCALATION</b></p></center>
      <div class="field-body">
        <div class="field is-expanded">
          <div class="field has-addons">
            <p class="control">
              <span class="button has-text-light is-link is-small">
                <b>INC ID:</b>
              </span>
            </p>
            <p class="control is-expanded">
              <input class="input is-small" type="text" v-model="inc" placeholder="INCXXXXX">
            </p>
          </div>
        </div>
      </div>
      <div class="field-body">
        <div class="field is-expanded">
          <div class="field has-addons">
            <p class="control">
              <span class="button is-link has-text-light is-small">
                <b>Domain:</b>
              </span>
            </p>
            <p class="control is-expanded">
              <input class="input  is-small" type="text" v-model="kidomain" placeholder="Domain Name">
            </p>
          </div>
          <div class="field has-addons">
            <p class="control">
              <span class="button is-link has-text-light is-small">
                <b>Customer Number:</b>
              </span>
            </p>
            <p class="control is-expanded">
              <input class="input  is-small" type="text" v-model="cusnum" placeholder="...">
            </p>
          </div>
          <div class="field has-addons">
            <p class="control">
              <span class="button is-link has-text-light is-small">
                <b>Hosting GUID:</b>
              </span>
            </p>
            <p class="control is-expanded">
              <input class="input  is-small" type="text" v-model="guid" placeholder="...">
            </p>
          </div>
        </div>
      </div> 

      <!-- BEGIN KI link section -->
      <div id="kilink" class="content">
        <a href="https://godaddy.service-now.com/gdsp?id=event_status" target="_blank" title="Check current known issues" class="button is-small is-success">
          <span class="icon is-large">
            <i class="fas fa-exclamation-triangle"></i>
          </span>
          <span>Check current KIs </span>
        </a>
      </div>
      <!-- END KI link section -->
    </div>
    <!-- END KI Note input section -->
    
    <!--  BEGIN Copy paste notes section -->
    <span id="note-copy-title" class="button is-link has-text-light is-small is-fullwidth"><b>KI Call Notes</b></span>
    <div id="kinotes" class="content is-info getme" wrap="hard">  
      <p>#KI</p>
      <p>Incident ID: {{ inc }}</p>
      <p>Domain: {{ kidomain }}</p>
      <p>Customer Number: {{ cusnum }}</p> 
      <p>Hosting GUID: {{ guid }}</p>
    </div>
    <!-- END Copy paste notes section -->

    <div id="copy-clear" class="buttons">
      <router-link id="noteswap" to="/SwatNote" title="Switch to Tier 1 template" class="button is-small is-dark has-text-light">
        <b>T1</b>
      </router-link>
      <router-link id="noteswap" to="/note/PreNote" title="Switch to Pre Tech Chat Template" class="button is-small is-dark has-text-light">
        <b>Pr</b>
      </router-link>
      <button id="copyButton"  class="button is-small is-link btn" data-clipboard-target="#kinotes" title="Click to copy your notes to clipboard">
        <span class="icon is-medium has-text-light">
          <i class="fas fa-copy"></i>
        </span>
        <span>Copy Your Notes</span>
      </button>
    </div>

  </div>
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
      'inc',
      'kidomain',
      'cusnum',
      'guid'
    ]),
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