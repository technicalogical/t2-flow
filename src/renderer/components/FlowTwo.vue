<template>

  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck" class="hello">

    <!-- START Opening comments for Swat FLow Chart -->
    <div id="flow-start-message" class="content is-small">
      <div class="notification is-dark">
        <center><strong>S.W.A.T.</strong> "<strong>How To</strong>" Flows</center>
      </div>
    </div>
    <!-- END Opening comments for Swat Flow Chart -->

    <!-- BEGIN - Primary application deck -->
    <div class="content" id="flow">
      <div class="content" id="flow-deck-two">
        <p class="buttons">
          <router-link to="/flow/howto/debugmode/Debug" class="button is-dark is-small">
            <span class="icon has-text-success">
              <i class="fas fa-play-circle"></i>
            </span>
            <span>Enable <strong>Debug</strong> mode</span>
          </router-link>
          <router-link to="/flow/howto/sucuri/Sucuri" class="button is-dark is-small">
            <span class="icon has-text-success">
              <i class="fas fa-play-circle"></i>
            </span>
            <span><strong>Sucuri</strong> support tickets</span>
          </router-link>
          <router-link to="/flow/howto/wpps/Wpps" class="button is-dark is-small">
            <span class="icon has-text-success">
              <i class="fas fa-play-circle"></i>
            </span>
            <span><strong>WPPS</strong></span>
          </router-link>
          <router-link to="/flow/howto/netvio/Netvio" class="button is-dark is-small">
            <span class="icon has-text-success">
              <i class="fas fa-play-circle"></i>
            </span>
            <span><strong>Net Vio</strong></span>
          </router-link>
          <!-- <router-link to="/flow/ssl/howto/Ssl" class="button is-dark is-small">
            <span class="icon has-text-success">
              <i class="fas fa-play-circle"></i>
            </span>
            <span><strong>SSL</strong> Setup</span>
          </router-link> -->
        </p>
      </div> 
    </div>
    <!-- END - Primary application deck -->

    <!-- BEGIN - Flow page toggles -->
    <div id="flow-toggle" >
      <div class="go-left">
        <p class="buttons">
          <router-link to="/SwatFlow" class="button is-small is-dark">
            <span id="go-hover" class="icon is-large">
              <i class="fas fa-chevron-left"></i>
            </span>
          </router-link>
        </p>
      </div>
      <div class="go-right">
        <p class="buttons">
          <router-link to="/FlowThree" class="button is-small is-dark">
            <span id="go-hover" class="icon is-large">
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
          <li><router-link to="/SwatFlow"></router-link></li>
          <li><router-link to="/FlowTwo" class="active"></router-link></li>
          <li><router-link to="/FlowThree"></router-link></li>
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