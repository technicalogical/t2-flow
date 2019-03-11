<template>

  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck" class="hello">

    <!-- START Opening comments for Swat FLow Chart -->
    <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <center><p><b>Find</b> Call Flows</p></center>
    </div>
    <!-- END Opening comments for Swat Flow Chart -->

    <!-- BEGIN - Primary application deck -->
    <div class="content" id="flow">

      <div class="content">
        <p class="buttons">
          <router-link to="/flow/pfc/Transfer" class="button is-dark is-small" title="Transfer Preflight Checklist">
            <span class="icon has-text-success">
              <i id="itcolor" class="fas fa-play-circle"></i>
            </span>
            <span><b>Flow</b> Guide</span>
          </router-link>
          <router-link to="/FlowIndex" class="button is-dark is-small" title="Transfer Preflight Checklist">
            <span class="icon has-text-success">
              <i id="itcolor" class="fas fa-play-circle"></i>
            </span>
            <span><b>Flow</b> Index</span>
          </router-link>
        </p>
      </div>

      <div id="flow-break"></div>

      <!-- <div class="content" id="flow-deck-two">
        <p class="buttons">
 
        </p>
      </div> 

      <div id="flow-break"></div> -->

      <div id="flowinfo" class="content">
        <center><h1>Navigating Call Flows</h1></center>
        <p><b>One:</b> Agents can use the <b>Flow Guide</b> at the top of this page to help narrow down which call flows they should use.</p>
        <p><b>Two:</b> Agents can tab through the organized sections of flows using the left and right page toggles.</p>
        <p><b>Three:</b> Agents can also use the <b>Flow Index</b> to keyword search or scroll through the full list of available call flows.</p>
      </div>

    </div>
    <!-- END - Primary application deck -->

    <!-- BEGIN - Flow page toggles -->
    <div id="flow-toggle" >
      <div class="go-left">
        <p class="buttons">
          <router-link to="/FlowFour" class="button is-small is-dark">
            <span id="go-hover" class="icon is-large">
              <i class="fas fa-chevron-left"></i>
            </span>
          </router-link>
        </p>
      </div>
      <div class="go-right">
        <p class="buttons">
          <router-link to="/FlowTwo" class="button is-small is-dark">
            <span id="go-hover" class="icon is-small">
              <i class="fas fa-chevron-right"></i>
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
          <li><router-link to="/SwatFlow" class="active"></router-link></li>
          <li><router-link to="/FlowTwo"></router-link></li>
          <li><router-link to="/FlowThree"></router-link></li>
          <li><router-link to="/FlowFour"></router-link></li>
        </ul>
      </div>
    <!-- END - Flow gaination -->

  </div>
  <!-- END - Primary application deck -->
  
</template>

<script>
export default {
  
}
</script>

<style></style>