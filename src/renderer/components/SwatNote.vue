<template>
  
  <!-- BEGIN - Primary application deck -->
  <form id="note-deck">

    <!-- BEGIN Swat Note input section -->
    <div id="swat-note-input" class="content">
      <center><p class="help is-danger has-text-weight-bold">THIS PAGE DOES NOT STORE CUSTOMER DATA</p></center>
      <div class="field-body">
        <div class="field is-expanded">
          <div class="field has-addons">
            <p class="control">
              <a class="button is-static  is-small">
                Customer Name:
              </a>
            </p>
            <p id="ssl-fix" class="control is-expanded">
              <input class="input  is-small" type="text" v-model="name" placeholder="Customer Name">
            </p>
          </div>
        </div>
      </div>
       <span id="ssl-sans-title" class="button is-static is-small is-fullwidth">Customer Situation:</span>
      <div id="note-sitch" class="control">
        <textarea id="ssl-sans" class="textarea is-small has-fixed-size" placeholder="Customer Situation" rows="5" cols="30" v-model="sitch" wrap="hard"></textarea>
      </div>
      <div class="field-body">
        <div class="field is-expanded">
          <div class="field has-addons">
            <p class="control">
              <a class="button is-static  is-small">
                Domain(s):
              </a> 
            </p>
            <p id="ssl-fix" class="control is-expanded">
              <input class="input  is-small" type="text" v-model="domain" placeholder="Domain Name">
            </p>
          </div>
          <p id="notehelp" class="help is-small is-info">Seperate domains using commas (,)</p>
        </div>
      </div>
    </div>
    <!-- END Swat Note input section -->
    
    <!--  BEGIN Copy paste notes section -->
    <div id="call-notes" class="content is-info" wrap="hard">  
      <p>#SWAT1</p>
      <p>Customer name: {{ name }} </p>
      <p>Situation: {{ sitch }} </p>
      <p>Domain(s): {{ domain }} </p>
    </div>
    <!-- END Copy paste notes section -->

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
      'name',
      'sitch',
	    'domain',
    ]),
  },
}
</script>

<style></style>