<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="note-deck">

    <!-- BEGIN KI Note input section -->
    <div id="swat-note-input" class="content is-link">
      <center><p id="preme" class="help has-text-light has-text-weight-bold">Pre Tech Chat Template</p></center>
      <div class="field-body">
        <div class="field is-expanded">
          <div class="field has-addons">
            <p class="control">
              <strong><span class="button has-text-light is-link is-small">
                Domain:
              </span></strong>
            </p>
            <p class="control is-expanded">
              <input class="input is-small" type="text" v-model="predom" placeholder="Domain Name">
            </p>
          </div>
        </div>
      </div>
      <div class="field-body">
        <div class="field is-expanded">
          <div class="field has-addons">
            <p class="control">
              <strong><span class="button is-link has-text-light is-small">
                Hosting Plan:
              </span></strong>
            </p>
            <p class="control is-expanded">
              <input class="input  is-small" type="text" v-model="phost" placeholder="Hosting Plan">
            </p>
          </div>
          <strong><span id="ssl-sans-title" class="button is-link has-text-light is-small is-fullwidth">What have you tried?</span></strong>
          <div id="note-sitch" class="control">
            <textarea id="pre-text" class="textarea is-small has-fixed-size" placeholder="Customer Situation" rows="5" cols="30" v-model="psitch" wrap="hard"></textarea>
          </div>
          <strong><span id="ssl-sans-title" class="button is-link has-text-light is-small is-fullwidth">What's your question?</span></strong>
          <div id="note-sitch" class="control">
            <textarea id="pre-text" class="textarea is-small has-fixed-size" placeholder="Customer Situation" rows="5" cols="30" v-model="pquest" wrap="hard"></textarea>
          </div>
        </div>
      </div>  
    </div>
    <!-- END KI Note input section -->
    
    <!--  BEGIN Copy paste notes section -->
    <strong><span id="note-copy-title" class="button is-link has-text-light is-small is-fullwidth">KI Call Notes</span></strong>
    <div id="prenotes" class="content is-info getme" wrap="hard">  
      <p>Domain: {{ predom }}</p>
      <p>Hosting: {{ phost }}</p> 
      <p>What I've tried: {{ psitch }}</p>
      <p>My question: {{ pquest }}</p>
    </div>
    <!-- END Copy paste notes section -->

    <div id="copy-clear" class="buttons">
      <router-link id="noteswap" to="/note/KiNote" title="Switch to Tier 1 template" class="button is-small is-dark has-text-light">
        <strong>KI</strong>
      </router-link>
      <router-link id="noteswap" to="/SwatNote" title="Switch to Tier 1 template" class="button is-small is-dark has-text-light">
        <strong>T1</strong>
      </router-link>
      <button id="copyButton"  class="button is-small is-link btn" data-clipboard-target="#prenotes" title="Click to copy your notes to clipboard">
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
      'predom',
      'phost',
      'psitch',
      'pquest'
    ]),
  },
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