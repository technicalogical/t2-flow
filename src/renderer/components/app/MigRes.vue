<!-- :::::::::: Productivity Tools Menu :::::::::: -->
<template>

  <div id="gd-menu-mig" class="dropdown is-small">
    
    <div class="dropdown-trigger">
      <button id="gmenu-mig" class="button is-small is-dark" title="Migrations & Restores" aria-haspopup="true" aria-controls="dropdown-menu" draggable="false">
        <span><img src="src\renderer\assets\icons\png\mig20.png"></span>
      </button>
    </div>
    <div class="dropdown-menu is-small" id="dropdown-menu-mig" role="menu">
      <div id="ddcontent" class="dropdown-content is-small">
        <a id="gd-menu-item" href="https://exserv.int.godaddy.com/services/migrations" target="_blank" title="Hosting Migrations" class="dropdown-item is-small" draggable="false">
          <p>migrate<b>U</b></p>
        </a>
        <a id="gd-menu-item" href="https://hs.int.godaddy.com/restore-u/#/index" target="_blank" title="Hosting Restores" class="dropdown-item is-small" draggable="false">
          <p>restore<b>U</b></p>
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
    name: 'MigRes',
  }
</script>

<style>

#gd-menu-mig {
  position: relative;
  top:270px;
  z-index: 4;
}
#gmenu-mig {
  width: 30px;
  height: 30px;
  border-radius: 0px;
}
#dropdown-menu-mig {
  top: -10px;
  left: 35px;
}
</style>