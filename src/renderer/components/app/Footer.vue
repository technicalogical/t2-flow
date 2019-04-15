<!-- :::::::::: Productivity Tools Menu :::::::::: -->
<template>

  <footer>

    <!-- GoDaddy.com Front of site menu -->
    <div id="gd-menu" class="dropdown is-small is-up">
      <div class="dropdown-trigger">
        <button id="gmenu" class="button is-small is-dark" title="GoDaddy.com Product Links" aria-haspopup="true" aria-controls="dropdown-menu" draggable="false">
          <span><p><b>G</b></p></span>
        </button>
      </div>
      <div class="dropdown-menu is-small" id="dropdown-menu" role="menu">
        <div class="dropdown-content is-small">
          <a id="gd-menu-item" href="https://www.godaddy.com/email/professional-business-email" target="_blank" title="WordPress Premium Support" class="dropdown-item is-small" draggable="false">
            O365 professional Business Email
          </a>
          <a id="gd-menu-item" href="https://www.godaddy.com/websites/website-builder/plans-and-pricing" target="_blank" title="WordPress Premium Support" class="dropdown-item is-small" draggable="false">
            GoCentral Website Builder
          </a>
          <a id="gd-menu-item" href="https://www.godaddy.com/smartline/" target="_blank" title="WordPress Premium Support" class="dropdown-item is-small" draggable="false">
            Smartline
          </a>
            <hr class="dropdown-divider">
          <a id="gd-menu-item" href="https://www.godaddy.com/wordpress/premium-support" target="_blank" title="WordPress Premium Support" class="dropdown-item is-small" draggable="false">
            WordPress Premium Support
          </a>
          <a id="gd-menu-item" href="https://www.godaddy.com/web-security/website-security" target="_blank" title="Website Security" class="dropdown-item is-small" draggable="false">
            Website Security
          </a>
          <a id="gd-menu-item" href="https://www.godaddy.com/web-security/website-backup" target="_blank" title="Website Backups" class="dropdown-item is-small" draggable="false">
            Website Backups
          </a>
          <a id="gd-menu-item" href="https://www.godaddy.com/web-security/ssl-certificate" target="_blank" title="SSL Standard" class="dropdown-item is-small" draggable="false">
            SSL
          </a>
          <hr class="dropdown-divider">
          <div id="gd-menu-item" title="WordPress Premium Support" class="dropdown-item is-small">
            <strong><p>Press (esc) to close</p></strong>
          </div>
        </div>
      </div>
    </div>

    <!-- Button to link to feedback loop -->
    <p class="buttons">
      <a id="helper-two" class="button is-white is-medium" href="https://forms.office.com/Pages/ResponsePage.aspx?id=K2Lx1aMUpkWwaQA_jcSFH83ifk09gUJEjA4J6LWpTc5URU9WMkNHOFgyMEg4RUY3R1A0QlA3UjhEMC4u" target="_blank" title="Give Feedback" draggable="false">
        <span class="icon is-medium">
          <i class="mdi mdi-comment-outline is-medium"></i>
        </span>
      </a>
    </p>

    <!-- Application footer image -->
    <div id="footer-img">
      <img src="src\renderer\assets\images\flowtool-gld-xs.png">
    </div>

    <!-- Application version note -->
    <div id="app-vers">
      <div class="tags has-addons">
        <span class="tag is-dark">Dev version 1.0.0</span>
        <span id="itcolor" class="tag verse is-black has-text-weight-bold">(Yoda)</span>
      </div>
    </div>

  </footer>

</template>

<script>
  export default{
    name: 'Footer',
  }
</script>

<style>

/* BEGIN | App footer CSS */
footer {
  position: absolute;
  left: -1px;
  margin: 0px;
  padding: 0px;
  border: 0px;
  bottom: -1px;
  height: 70px;
  width: 100%;
  text-align: center;
}

#gd-menu {
  position: absolute;
  bottom: 0px;
  left: 0px;
  z-index: 3;
}

#gd-menu-alt {
  position: relative;
  float: left;
  top:330px;
  z-index: 4;
}

#gd-menu-tri {
  position: relative;
  float: left;
  top:0px;
  z-index: 2;
}

#gd-menu-fi {
  position: relative;
  left: -30px;
  top:300px;
  z-index: 5;
}

#gmenu {
  width: 30px;
  height: 30px;
  border-radius: 0px;
}

#gmenu-alt {
  width: 30px;
  height: 30px;
  border-radius: 0px;
}

#gmenu-tri {
  top:1px;
  width: 20px;
  height: 20px;
  border: none;
  outline:none;
  margin-top: 0px;
  margin-left: 3px;
  padding-top: 0px;
  background-color: hsl(0, 0%, 98%);
}

#gmenu-tri:focus {
  border: 0px;
  outline: none;
}

#gmenu-tri:active {
  border: 0px;
  outline: none;
}

#gmenu-fi {
  width: 30px;
  height: 30px;
  border-radius: 0px;
}

#dropdown-menu {
  left: 35px;
}

#dropdown-menu-alt {
  top: -10px;
  left: 35px;
}

#dropdown-menu-tri {
  top: 20px;
  left: 15px;
}

#dropdown-menu-fi {
  top: -10px;
  left: 35px;
}

.dropdown-content {
  width: 205px;
}

#ddcontent {
  width: 135px;
}

.dropdown-divider {
  padding: 0px;
  margin: 0px;
}

.dropdown-item {
  padding: 0px;
  margin: 0px;
}

#gd-menu-item {
  font-size: 11px;
}

#gd-menu-item:hover {
  background-color: hsl(45, 100%, 40%);
  color: hsl(0, 0%, 96%);
}

#gd-u-item {
  font-size: 11px;
}

#gd-u-item:hover {
  background-color: hsl(45, 100%, 40%);
  color: hsl(0, 0%, 96%);
}

#footer-img {
  position: absolute;
  padding: 0px;
  left: 0;
  right: 0;
  margin: auto;
  height: 20px;
  width: 133px; 
  top: 15px;
  border: 0px;
}

#footer-img img {
  position: absolute;
  top: 0px;
  left: 0px;
  padding: 0px;
  margin: 0px;
  border: 0px;
}

#app-vers {
  position: absolute;
  padding: 0px;
  left: 0;
  right: 0;
  margin: auto;
  width: 196px;
  bottom: 8px;
  height: 20px;;
  border: 0px;
  letter-spacing: .03em;
}

#app-vers span {
  height: 18px;
  font-style: italic;
  letter-spacing: .1em;
} 

#helper-one {
  position: absolute;
  top: 1px;
  left: 2px;
  margin: 0px;
  padding: 0px;

}

#helper-icon:hover {
  color: hsl(45, 100%, 40%);
}

#helper-two {
  position: absolute;
  height: 30px;
  width: 30px;
  bottom: 0px;
  right: 0px;
  margin: 0px;
  padding: 0px;
  background: hsl(0, 0%, 98%);
  border: 0px;
  border-right: 1px solid hsl(0, 0%, 86%);
  border-bottom: 1px solid hsl(0, 0%, 86%);
  border-radius: 3px 0px 0px 0px;
}

#helper-two:hover {
  color: hsl(0, 0%, 96%);
  background: hsl(45, 100%, 40%);
  border-right: 1px solid hsl(45, 100%, 40%);
  border-bottom: 1px solid hsl(45, 100%, 40%);
}

/* END | App footer CSS */
</style>