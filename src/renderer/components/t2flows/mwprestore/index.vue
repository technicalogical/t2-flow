<template>

  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck">

    <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p><b>MWP Restore</b> Issue</p>
      </div>
    <!-- END - Flow Title banner -->

    <div class="content has-text-centered is-medium">
      <p v-if="navTo === 'checklist'" style="margin-top: 10px;">Checklist</p>
      <p v-else-if="navTo === 'articles'" style="margin-top: 10px;">Articles</p>
    </div>
    <div id="navigationMenu" style="margin-right: 20px;" class="is-pulled-right result-navigation">
      <a v-on:click="navToChecklist" v-bind:class="navigationIsChecklist ? 'active-results-link' : 'inactive-results-link'" class="speed-nav" style="margin-right: 4px;"><small>Check Lists</small></a>
      <b>|</b>
      <a v-on:click="navToArticles" v-bind:class="navigationIsArticles ? 'active-results-link' : 'inactive-results-link'" class="speed-nav" style="margin-left: 4px; margin-right: 4px;"><small>Articles</small></a>
    </div>

    <!-- Spacing for Format-->
    <br>

    <!-- BEGIN MWP Restore flow section -->
    <div class="content" id="flow">
      <div v-if="navigationIsChecklist">
        <Checklist></Checklist>
      </div>
      <div v-if="navigationIsArticles">
        <Articles></Articles>
      </div>
        <!-- Spacing for Format-->
        <br>
        <!-- BEGIN - Back button -->
        <p class="buttons">
          <router-link to="/FLowIndex" class="button is-small is-info">
            <span class="icon has-text-light">
              <i class="fas fa-chevron-left"></i>
            </span>
            <span>BACK</span>
          </router-link>
        </p>
        <!-- END - Back button -->

      <!-- <router-view/> -->
    </div>
    <!-- END 403 Error flow section -->

  </div>
  <!-- END - Primary application deck -->

</template>

<script>
import Checklist from './Checklist.vue';
import Articles from './Articles.vue';
// import checklist from './components/t2flows/fourthree/checklist'
export default {
  components: {
    Checklist,
    Articles,
  },
  data(){
    return{
      navigationIsChecklist: true,
      navigationIsArticles: false,
      navTo: 'checklist',
    }
  },
  methods: {
    navToChecklist: function(){
      console.log("Nav to Checklist");
      this.navTo = 'checklist';
      this.navigationIsChecklist = true;
      this.navigationIsArticles = false;
    },
    navToArticles: function(){
      console.log("Nav to Articles");
      this.navTo = 'articles';
      this.navigationIsChecklist = false;
      this.navigationIsArticles = true;
    },
  }
}
</script>

<style>
  .list-item{
    padding: 4px;
  }
</style>
