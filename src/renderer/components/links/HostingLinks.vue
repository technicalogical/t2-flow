<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck">

    <!-- BEGIN Swat Tools section -->
    <div id="tool-page" class="content is-small">

      <!-- Swat Tools opening note -->
      <div id="tool-note" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p><b>Hosting</b> Links</p>
      </div>

      <!-- BEGIN - Swat Tool Tabs -->
      <div id="tool-tabs">
        <div id="tool-tab-left">
          
        </div>
        <div id="tool-tab-right">
          <router-link to="/SwatLinks" class="button is-small is-dark">
            <span><b>Swat</b> Tools</span>
            <span class="icon is-large has-text-success">
              <i id="itcolor" class="fa fa-angle-right fa-2x"></i>
            </span>
          </router-link>
        </div>
      </div>
      <!-- END - Swat Tool Tabs -->

      <!-- BEGIN Links section -->
      <p class="buttons">
        
        <p id="link-help" class="help"><b>Restores & Migrations</b></p>
        <!-- Restore U -->
        <a href="https://hs.int.godaddy.com/restore-u/#/index" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-success">
            <i id="itcolor" class="fas fa-server"></i>
          </span>
          <span><b>Restore U</b></span>
        </a>

        <!-- Migrate U -->
        <a href="https://exserv.int.godaddy.com/services/migrations" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-success">
            <i id="itcolor" class="fas fa-server"></i>
          </span>
          <span><b>Migrate U</b></span>
        </a>

        <p id="link-help" class="help"><b>General hosting tools</b></p>
        <!-- Hosting Kb -->
        <a href="https://confluence.godaddy.com/display/C3PHS/Hosting+Support+Knowledge+Base+-+Hitchhikers+Guide+to+Hosting" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-success">
            <i id="itcolor" class="fas fa-book"></i>
          </span>
          <span>General <b>Hosting Knowledge Base</b></span>
        </a>

        <!-- General hosting expert services -->
        <a href="https://confluence.godaddy.com/display/C3PHS/Expert+Services+-+Expert+Services+Menu" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-success">
            <i id="itcolor" class="fas fa-book-open"></i>
          </span>
          <span><b>Expert Services</b> Menu</span>
        </a>

        <!-- The Cheat Sheet -->
        <a href="https://godaddy.jiveon.com/community/c3/the-cheatsheet" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-success">
            <i id="itcolor" class="fas fa-file-alt"></i>
          </span>
          <span>The <b>Cheat Sheet</b></span>
        </a>
             
        <!-- C3 hub -->
        <a href="https://godaddy.jiveon.com/community/c3/c3-hub" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-success">
            <i id="itcolor" class="fas fa-th"></i>
          </span>
          <span><b>C3</b> Hub</span>
        </a>
        
        <!-- SPLUNK> -->
        <a href="https://godaddy.splunkcloud.com/en-US/app/ahs/search" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-success">
            <i id="itcolor" class="fas fa-envelope"></i>
          </span>
          <span><b>Splunk</b></span>
        </a>

        <!-- Approved test scripts -->
        <a href="https://confluence.godaddy.com/display/C3PHS/General+-+Tools+-+Approved+Test+Scripts" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-success">
            <i id="itcolor" class="fas fa-file-archive"></i>
          </span>
          <span><b>Approved</b> Test Scripts</span>
        </a>

        <!-- Toolzilla -->
        <a href="https://toolzilla.int.godaddy.com/index.php/AccountSearch/View" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-success">
            <i id="itcolor" class="fas fa-toolbox"></i>
          </span>
          <span><b>Toolzilla</b></span>
        </a>
      
    </div>
    <!-- END Swat Tools section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>
export default {

}
</script>

<style></style>
