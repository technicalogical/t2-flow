<template>

  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck" class="hello">

    <!-- START Opening comments for Swat FLow Chart -->
    <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <center><p><b>InBound</b> Call Flows</p></center>
    </div>
    <!-- END Opening comments for Swat Flow Chart -->

    <!-- BEGIN - Primary application deck -->
    <div class="content" id="flow">
      <div class="content" id="flow-deck-two">
        <p class="buttons">
          <router-link to="/flow/dns/Dcheck" class="button is-dark is-small" v-on:click="handleDcheck">
            <span class="icon has-text-success">
              <img src="../assets/icons/png/org16.png"/>
            </span>
            <span><p><b>DNS</b> Check</p></span>
          </router-link>
          <router-link to="/flow/mig/Mig" class="button is-dark is-small" v-on:click="handleMig">
            <span class="icon has-text-success">
              <img src="../assets/icons/png/org16.png"/>
            </span>
            <span><p><b>Migrations</b></p></span>
          </router-link>
          <router-link to="/flow/restore/Rst" class="button is-dark is-small" v-on:click="handleRst">
            <span class="icon has-text-success">
              <img src="../assets/icons/png/org16.png"/>
            </span>
            <span><p><b>Restores</b></p></span>
          </router-link>           
        </p>
      </div> 
    </div>
    <!-- END - Primary application deck -->

    <!-- BEGIN - Flow page toggles -->
    <div id="flow-toggle" >
      <div class="go-left">
        <p class="buttons">
          <router-link to="/FlowTwo" id="smashb" class="button is-small is-dark">
            <span id="go-hover" class="icon is-large">
              <i class="mdi mdi-chevron-left mdi-18px"></i>
            </span>
          </router-link>
        </p>
      </div>
      <div class="go-right">
        <p class="buttons">
          <router-link to="/FlowFour" id="smashb" class="button is-small is-dark">
            <span id="go-hover" class="icon is-large">
              <i class="mdi mdi-chevron-right mdi-18px"></i>
            </span>
          </router-link>
        </p>
      </div>    
    </div>
    <!-- END - Flow page toggles -->

    

    
    <router-view/>
     <!-- BEGIN Flow pagination -->
      <div id="flow-pagi" class="pagidot pagination-wrapper">
        <ul class="pagination">
          <li><router-link to="/SwatFlow"></router-link></li>
          <li><router-link to="/FlowTwo"></router-link></li>
          <li><router-link to="/FlowThree" class="active"></router-link></li>
          <li><router-link to="/FlowFour"></router-link></li>
        </ul>
      </div>
    <!-- END - Flow pagination -->
  </div>
  <!-- END - Primary application deck -->
  
</template>

<script>
export default {
  
}
</script>

<style></style>