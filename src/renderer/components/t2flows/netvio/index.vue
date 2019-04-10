<template>

  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck">

    <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p><b>Net</b> Vios</p>
      </div>

    <br>


    <div class="content" id="flow">


      <br>
      <ul>
        <router-link to="/t2flows/netvio/copyright/index"  class="button is-small is-dark is-fullwidth t2widebutton">
          <span class="icon is-large has-text-info">
            <i id="itcolor" class="fas fa-exclamation-circle"></i>
          </span>
          <span><b></b>Copyright/Trademark</span>
        </router-link>
        <router-link to="/t2flows/netvio/filerepo/index"  class="button is-small is-dark is-fullwidth t2widebutton">
          <span class="icon is-large has-text-info">
            <i id="itcolor" class="fas fa-exclamation-circle"></i>
          </span>
          <span><b></b>File Repo</span>
        </router-link>
        <router-link to="/t2flows/netvio/malware/index"  class="button is-small is-dark is-fullwidth t2widebutton">
          <span class="icon is-large has-text-info">
            <i id="itcolor" class="fas fa-exclamation-circle"></i>
          </span>
          <span><b></b>Malware/Phishing</span>
        </router-link>

      </ul>



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
