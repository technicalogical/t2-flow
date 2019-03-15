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

      <div id="sflow-content" class="content">
        <p class="buttons">
          <router-link to="/FlowIndex" id="sflow" class="button is-dark is-small" title="Transfer Preflight Checklist">
            <span class="icon has-text-success">
              <img src="../assets/icons/png/gld16.png"/>
            </span>
            <span><b>Flow</b> Index</span>
          </router-link>
        </p>
      </div>

      <div id="flow-break"></div>

      <div id="flowinfo" class="content">
        <center><h1>Navigating Call Flows</h1></center>
        <!--<p><b>One:</b> Agents can use the <b>Flow Guide</b> at the top of this page to help narrow down which call flows they should use.</p>-->
        <p><b>One:</b> Agents can tab through the organized sections of the tier 2 flows and checklists using the left and right page toggles.</p>
        <p><b>Two:</b> Agents can use the <b>Flow Index</b> to keyword search or scroll through the full selection of available call flows and checklists.</p>
      </div>

      <div class="tags is-centered has-addons">
        <span id="cta" class="tag"><span class="mdi mdi-arrow-left mdi-18px"></span></span>
        <span id="cta" class="tag has-text-centered is-white">Move through the pages of flows using<br> the left and right tabs.</span>
        <span id="cta" class="tag"><span class="mdi mdi-arrow-right mdi-18px"></span></span>
      </div>

    </div>
    <!-- END - Primary application deck -->

    <!-- BEGIN - Flow page toggles -->
    <div id="flow-toggle" >
      <div class="go-left">
        <p class="buttons">
          <router-link to="/FlowThree" id="smashb" class="button is-small is-dark">
            <span id="go-hover" class="icon">
              <i class="mdi mdi-chevron-left mdi-18px"></i>
            </span>
          </router-link>
        </p>
      </div>
      <div class="go-right">
        <p class="buttons">
          <router-link to="/FlowTwo" id="smashb" class="button is-small is-dark">
            <span id="go-hover" class="icon is-small">
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
          <li><router-link to="/SwatFlow" class="active"></router-link></li>
          <li><router-link to="/FlowTwo"></router-link></li>
          <li><router-link to="/FlowThree"></router-link></li>
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