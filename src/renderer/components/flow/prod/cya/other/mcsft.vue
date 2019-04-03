<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="flow-deck">
    
    <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p>Choose Your Adventure: <b>3rd Party Microsoft</b></p>
      </div> 
    <!-- END - Flow Title banner -->

    
    <!-- BEGIN Transfer PFC Checklist section -->
    <div class="content has-text-centered" id="flow">
      <div class="content">
        <p>Customer will need to remove domain from <b>Microsoft.</b></p>
        <p><a href="https://docs.microsoft.com/en-us/office365/admin/get-help-with-domains/remove-a-domain?view=o365-worldwide" target="_blank" >https://docs.microsoft.com/en-us/office365/admin/get-help-with-domains/remove-a-domain?view=o365-worldwide</a></p>
      </div>
      <article class="message is-info is-small">
        <div class="message-body has-text-left">
          <p>Once removed, purchase licenses and migrations.</p>
          <p>Then have customer setup mailboxes on desired domain with permanent passwords.</p>
          <p>And lastly add all 365 DNS records.</p>
          <p>Once complete, go to <b>x.co/migratepro</b> and use the <b>“Office 365 to Office 365”</b> migration scenario.</p>
        </div>
      </article>
      <a href="http://x.co/migratepro" target="_blank" id="ibcolor" title="Launch Migrate Pro" class="button is-small is-info">
        <span class="icon is-medium">
          <i class="far fa-envelope-open"></i>
        </span>
        <span><b>Migrate Pro</b></span>
      </a>
      <br>
      <br>
        <!-- BEGIN - Back button -->
        <p class="buttons">
          <router-link to="/flow/prod/cya/cyaO" class="button is-small is-info">
            <span class="icon has-text-light">
              <i class="fas fa-chevron-left"></i>
            </span>
            <span>BACK</span>
          </router-link>
        </p>
        <!-- END - Back button -->

      <router-view/>
    </div>
    <!-- END Transfer PFC Checklist section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>

</script>

<style></style>