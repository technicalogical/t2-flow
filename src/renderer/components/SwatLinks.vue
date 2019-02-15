<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck">

    <!-- BEGIN Swat Tools section -->
    <div id="tool-page" class="content is-small">

       <!-- Swat Tools opening note -->
      <div id="tool-note" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p><b>S.W.A.T.</b> Links</p>
      </div>

      <!-- BEGIN - Swat Tool Tabs -->
      <div id="tool-tabs">
        <div id="tool-tab-left">
          <router-link to="/links/HostingLinks" class="button is-small is-dark">
            <span class="icon is-large has-text-link">
              <i id="itcolor" class="fa fa-angle-left fa-2x"></i>
            </span>
            <span><b>Hosting</b> Links</span>
          </router-link>
        </div>

        <div id="tool-tab-right">
          <router-link to="/links/WebsiteLinks" class="button is-small is-dark">
            <span><b>Website</b> Links</span>
            <span class="icon is-large has-text-link">
              <i id="itcolor" class="fa fa-angle-right fa-2x"></i>
            </span>
          </router-link>
        </div>
      </div>
      <!-- END - Swat Tool Tabs -->

      <!--Start SWAT Links section -->
      <p class="buttons">
         
        <p id="link-help" class="help">S.W.A.T. Team Links</p>
        <!-- SWAT confluence home page -->
        <a href="https://confluence.godaddy.com/pages/viewpage.action?spaceKey=HSWAT&title=SWAT+Team+Home" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-info">
            <i id="itcolor" class="fas fa-home"></i>
          </span>
          <span><b>S.W.A.T.</b> Home Page</span>
        </a>

        <!-- SWAT tier one confluence page -->
        <a href="https://confluence.godaddy.com/display/HSWAT/Swat+Tier+1+Home" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-success">
            <i id="itcolor" class="fas fa-home"></i>
          </span>
          <span><b>S.W.A.T.</b> Tier 1 Homepage</span>
        </a>

        <!-- SWAT transfer guidelines -->
        <a href="https://confluence.godaddy.com/display/HSWAT/Swat+Tier+1+Home" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-success">
            <i id="itcolor" class="fas fa-phone"></i>
          </span>
          <span><b>S.W.A.T.</b> Call Transfer Guidelines</span>
        </a>

        <!-- SWAT tier one playbook -->
        <a href="https://confluence.godaddy.com/display/HSWAT/Playbook" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-success">
            <i id="itcolor" class="fas fa-book"></i>
          </span>
          <span><b>S.W.A.T.</b> Tier 1 Playbook</span>
        </a>

        <!-- SWAT team contacts -->
        <a href="https://confluence.godaddy.com/display/HSWAT/The+Team" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-success">
            <i id="itcolor" class="fas fa-book"></i>
          </span>
          <span><b>S.W.A.T.</b> Team Contacts</span>
        </a>

        <p id="link-help" class="help">GoDaddy Refund Policy</p>  
        <!-- GoDaddy refund policy -->
        <a href="https://www.godaddy.com/agreements/showdoc?pageid=19963&prog_id=GoDaddy" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-success">
            <i id="itcolor" class="fas fa-dollar-sign"></i>
          </span>
          <span><b>GoDaddy</b> Refund Policy</span>
        </a>

        <!-- Out of policy refunds -->
        <a href="https://godaddy.jiveon.com/community/c3/c3-forms-policies-procedures/refund-toolkit" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-success">
            <i id="itcolor" class="fas fa-dollar-sign"></i>
          </span>
          <span>The <b>Refund Toolkit</b></span>
        </a>
      
    </div>
    <!-- END SWAT Links section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>
export default {

}
</script>

<style></style>