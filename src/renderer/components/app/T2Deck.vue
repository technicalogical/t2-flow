<!-- :::::::::: Tier Two Deck Menu :::::::::: -->
<template>

  <div id="gd-menu-deck" class="dropdown is-small">
    <div class="dropdown-trigger">
      <button id="gmenu-deck" class="button is-small is-dark" title="T2 Deck" aria-haspopup="true" aria-controls="dropdown-menu" draggable="false">
        <span><img src="src\renderer\assets\icons\png\gld16.png"></span>
      </button>
    </div>
    <div class="dropdown-menu is-small" id="dropdown-menu-deck" role="menu">
      <div id="deck" class="dropdown-content is-small">
        <a id="gd-menu-item" href="https://toolzilla.int.godaddy.com/index.php/AccountSearch/View" target="_blank" title="ToolZilla Account Lookup" class="dropdown-item is-small has-text-grey-lighter" draggable="false">
          <p><b>Toolzilla</b></p>
        </a>
        <a id="gd-menu-item" href="https://mysql.int.godaddy.com/backups" target="_blank" title="Get DB Backup Manually" class="dropdown-item is-small has-text-grey-lighter" draggable="false">
          <p><b>DB Backups</b></p>
        </a>
        <a id="gd-menu-item" href="https://hoclinux.intranet.gdg/jbeatty/lc/srt.php" target="_blank" title="Manually lookup 4gh hosting account" class="dropdown-item is-small has-text-grey-lighter" draggable="false">
          <p><b>4gh Account look up tool</b></p>
        </a>
        <a id="gd-menu-item" href="https://htl.int.godaddy.com//wptool/index.php" target="_blank" title="Get MWP Headers" class="dropdown-item is-small has-text-grey-lighter" draggable="false">
          <p><b>MWP Header Tool</b></p>
        </a>
        <a id="gd-menu-item" href="https://vertigo.godaddy.com/vat/" target="_blank" title="Vertigo Admin Tool" class="dropdown-item is-small has-text-grey-lighter" draggable="false">
          <p><b>VAT Tool</b></p>
        </a>

        <hr class="dropdown-divider has-background-grey-dark">
        <a id="gd-menu-item" href="https://skynetphp.int.godaddy.com/public_alerts.php" target="_blank" title="Current Known Issue Servers" class="dropdown-item is-small has-text-grey-lighter" draggable="false">
          <p><b>Skynet</b></p>
        </a>
        <a id="gd-menu-item" href="https://godaddy.service-now.com/gdsp?id=event_status" target="_blank" title="View current Known Issues" class="dropdown-item is-small has-text-grey-lighter" draggable="false">
          <p><b>KI Event Viewer</b></p>
        </a>
        <a id="gd-menu-item" href="https://hoclinux.intranet.gdg/paulm/orion/mysql_dbs.php?guid=c72c250b-8276-11e6-8763-14feb5da1938" target="_blank" title="Lookup Orion DB Events" class="dropdown-item is-small has-text-grey-lighter" draggable="false">
          <p><b>4gh Orion DB Hunt</b></p>
        </a>
        <a id="gd-menu-item" href="https://admin.hostingmetropolis.com/AHS/Default.aspx" target="_blank" title="Hosting Connection Account Admin" class="dropdown-item is-small has-text-grey-lighter" draggable="false">
          <p><b>HC Admin</b></p>
        </a>
        <a id="gd-menu-item" href="https://hs.int.godaddy.com/cpTools/" target="_blank" title="cPanel Account Tools" class="dropdown-item is-small has-text-grey-lighter" draggable="false">
          <p><b>cPanel Tools</b></p>
        </a>

        <hr class="dropdown-divider has-background-grey-dark">
        <a id="gd-menu-item" href="https://monitor.email.int.godaddy.com/?all=1&erronly=1" target="_blank" title="Email cluster activity" class="dropdown-item is-small has-text-grey-lighter" draggable="false">
          <p><b>cPanel SMTP Cluster Tool</b></p>
        </a>
        <a id="gd-menu-item" href="https://godaddy.splunkcloud.com/en-US/app/ahs/search" target="_blank" title="SPLUNK Lookup" class="dropdown-item is-small has-text-grey-lighter" draggable="false">
          <p><b>SPLUNK</b></p>
        </a>
        <a id="gd-menu-item" href="https://wopr.int.secureserver.net/support.services/MigrationLauncher" target="_blank" title="Migration As A Service Tool" class="dropdown-item is-small has-text-grey-lighter" draggable="false">
          <p><b>MAAS Tool</b></p>
        </a>
        <a id="gd-menu-item" href="https://dza.int.secureserver.net/index.php" target="_blank" title="Internal DNS Zone Audit Tool" class="dropdown-item is-small has-text-grey-lighter" draggable="false">
          <p><b>DNS Zone Audit Tool</b></p>
        </a>
        
        <hr class="dropdown-divider has-background-grey-dark">
        <div id="gd-menu-bottom" title="WordPress Premium Support" class="dropdown-item is-small">
          <b><p>Press (esc) to close</p></b>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default{
    name: 'T2Deck',
  }
</script>

<style>

#gd-menu-deck {
  position: relative;
  top:270px;
  z-index: 6;
}
#gmenu-deck {
  width: 30px;
  height: 30px;
  border-radius: 0px;
}
#dropdown-menu-deck {
  top: -230px;
  left: 35px;
}

#deck { 
  background-color: hsl(0, 0%, 21%);
}

#gd-menu-bottom p {
  color: hsl(0, 0%, 71%);
  font-size: 12px;
  text-align: center;
}
</style>