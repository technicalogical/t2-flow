<!-- :::::::::: Productivity Tools Menu :::::::::: -->
<template>

  <div id="gd-menu-prod" class="dropdown is-small">

    <div class="dropdown-trigger">
      <button id="gmenu-prod" class="button is-small is-dark" title="PROD Tools" aria-haspopup="true" aria-controls="dropdown-menu" draggable="false">
        <span><p><b>P</b></p></span>
      </button>
    </div>
    <div class="dropdown-menu is-small" id="dropdown-menu-prod" role="menu">
      <div id="ddcontent" class="dropdown-content is-small">
        <a id="gd-menu-item" href="https://sso.godaddy.com/tools/loginlock/" target="_blank" title="Central Auth Tools" class="dropdown-item is-small" draggable="false">
          <p><b>Central Auth</b></p>
        </a>
        <a id="gd-menu-item" href="http://x.co/maastool" target="_blank" title="Migration As A Service Tool" class="dropdown-item is-small" draggable="false">
          <p><b>MaaS Tool</b></p>
        </a>
        <a id="gd-menu-item" href="http://x.co/migratepro" target="_blank" title="Request an Office 365 manual migration" class="dropdown-item is-small" draggable="false">
          <p><b>Migrate Pro</b></p>
        </a>
        <a id="gd-menu-item" href="https://godaddy.splunkcloud.com/en-US/app/ahs/search" target="_blank" title="SPLUNK Email Tool" class="dropdown-item is-small" draggable="false">
          <p><b>SPLUNK</b></p>
        </a>
        <a id="gd-menu-item" href="https://wopr.int.secureserver.net/support.services/Support" target="_blank" title="Email Account Lookup" class="dropdown-item is-small" draggable="false">
          <p><b>WOPR</b></p>
        </a>
        <a id="gd-menu-item" href="https://emailmanager.int.godaddy.com/user_info.php?infolevel=20&showAllAddresses=0&page_action=user_info&email_address=?infolevel=20&showAllAddresses=0&page_action=user_info&email_address=" target="_blank" title="Workspace Email Status Checker" class="dropdown-item is-small" draggable="false">
          <p><b>WS Tool</b></p>
        </a>
        <hr class="dropdown-divider">
        <a id="gd-menu-item" href="https://cheatsheet.godaddy.com/advanced-email-security" target="_blank" title="Advanced Email Security" class="dropdown-item is-small" draggable="false">
          <p><b>AES</b></p>
        </a>
        <a id="gd-menu-item" href="https://diagnostics.office.com/#/?env=Maven" target="_blank" title="Microsoft Support and Recovery Assistant" class="dropdown-item is-small" draggable="false">
          <p><b>SARA Tool</b></p>
        </a>
        <a id="gd-menu-item" href="https://www.godaddy.com/help/office-365-from-godaddy-1000005?" target="_blank" title="GoDaddy O365 HELP" class="dropdown-item is-small" draggable="false">
          <p><b>O365 HELP</b></p>
        </a>
        <a id="gd-menu-item" href="https://www.godaddy.com/help/change-the-shopper-id-for-emails-pending-delete-8326" target="_blank" title="GoDaddy Workspace Email HELP" class="dropdown-item is-small" draggable="false">
          <p><b>WSE HELP</b></p>
        </a>
        <hr class="dropdown-divider">
        <div id="gd-menu-item" title="WordPress Premium Support" class="dropdown-item is-small">
          <strong><p>Press (esc) to close</p></strong>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default{
    name: 'Prodtools',
  }
</script>

<style>

#gd-menu-prod {
  position: relative;
  top:270px;
  z-index: 4;
}
#gmenu-prod {
  width: 30px;
  height: 30px;
  border-radius: 0px;
}
#dropdown-menu-prod {
  top: -10px;
  left: 35px;
}
</style>