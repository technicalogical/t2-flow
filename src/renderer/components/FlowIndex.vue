<template>

  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck" class="hello">

    <!-- START Opening comments for Swat FLow Chart -->
    <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <center><p>Call <b>Flow</b> Index</p></center>
    </div>
    <!-- END Opening comments for Swat Flow Chart -->


    <!-- BEGIN Section -->
    <div id="index-start" class="content">
      <div id="flow-search" class="content">
        <div class="field">
          <p class="control has-icons-left">
            <input id="flow-index-search" class="input is-small" type="text" title="Search for Call Flows using keywords here." v-on:input="filterIndex" placeholder="Search The Flow Index">
            <span class="icon is-left">
              <img src="../assets/icons/png/gld16.png"/>
            </span>
          </p>
        </div>
      </div>

      <div id="indexkey">
        <p class="buttons">
          <a v-on:click="showT2" class="icon">
            <img src="../assets/icons/png/gld16.png" title="Tier 2 flows"/>
          </a>
          <a v-on:click="showT1" class="icon">
            <img src="../assets/icons/png/blu16.png" title="Tier 1 flows"/>
          </a>
          <a v-on:click="showInbound" class="icon">
            <img src="../assets/icons/png/org16.png" title="Inbound flows"/>
          </a>
          <a v-on:click="showProd" class="icon">
            <img src="../assets/icons/png/pur16.png" title="Productivity flows"/>
          </a>
        </p>
      </div>

      <!-- Scroll reminder -->
      <div id="updown" title="scroll through Flow Index">
        <p class="buttons">
          <span class="icon ">
            <i class="fas fa-angle-up"></i>
          </span>
          <span class="icon">
          </span>
          <span class="icon">
            <i class="fas fa-angle-down"></i>
          </span>
        </p>
      </div>
      <!-- End Scroll reminder -->

      <!-- Begin FLow Index -->
      <div id="indexed" class="content">

        <ul id="flowidx" class="navList">

          <li v-if="showing === 'showingT2'">
            <div class="buttons has-addons">
              <router-link to="/t2flows/fourthree/index" class="button is-dark is-small has-addons">
                <span class="icon has-text-success" v-on:click="handleTTFourThree">
                  <img src="../assets/icons/png/gld16.png"/>
                </span>
                <span v-on:click="handleTTFourThree"><p><b>403</b> Error</p></span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Website error file forbidden to access (Tier 2)
              </span>
            </div>
          </li>

          <li v-if="showing === 'showingT1'">
            <div class="buttons has-addons">
              <router-link to="/flow/FourThree" class="button is-dark is-small has-addons">
                <span class="icon has-text-success" v-on:click="handleFourThree">
                  <img src="../assets/icons/png/blu16.png"/>
                </span>
                <span v-on:click="handleFourThree"><p><b>403</b> Error</p></span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Website error file forbidden to access
              </span>
            </div>
          </li>

          <li v-if="showing === 'showingInbound'">
            <div class="buttons has-addons">
              <router-link to="/flow/ib/ibFourThree" class="button is-dark is-small has-addons">
                <span class="icon has-text-success" v-on:click="handleIbFourThree">
                  <img src="../assets/icons/png/org16.png"/>
                </span>
                <span v-on:click="handleIbFourThree"><p><b>403</b> Error</p></span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Website error file forbidden to access (Inbound)
              </span>
            </div>
          </li>

          <li v-if="showing === 'showingT1'">
            <div class="buttons has-addons">
              <router-link to="/flow/FourFour" class="button is-dark is-small">
                <span class="icon has-text-success" v-on:click="handleFourFour">
                  <img src="../assets/icons/png/blu16.png"/>
                </span>
                <span v-on:click="handleFourFour"><b>404</b> Site Error</span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Website error file not found
              </span>
            </div>
          </li>

          <li v-if="showing === 'showingInbound'">
            <div class="buttons has-addons">
              <router-link to="/flow/ib/ibFourFour" class="button is-dark is-small">
                <span class="icon has-text-success" v-on:click="handleIbFourFour">
                  <img src="../assets/icons/png/org16.png"/>
                </span>
                <span v-on:click="handleIbFourFour"><b>404</b> Site Error</span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Website error file not found (Inbound)
              </span>
            </div>
          </li>

          <li v-if="showing === 'showingT1'">
            <div class="buttons has-addons">
              <router-link to="/flow/FiveError" class="button is-dark is-small">
                <span class="icon has-text-success" v-on:click="handleFiveError">
                  <img src="../assets/icons/png/blu16.png"/>
                </span>
                <span v-on:click="handleFiveError"><b>500</b> Error</span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                W.S.O.D. (White Screen of Death)
              </span>
            </div>
          </li>
          <li v-if="showing === 'showingT2'">
            <div class="buttons has-addons">
              <router-link to="/t2flows/fivehundrederror/index" class="button is-dark is-small has-addons">
                <span class="icon has-text-success" v-on:click="handleTTFiveHundred">
                  <img src="../assets/icons/png/gld16.png"/>
                </span>
                <span v-on:click="handleTTFiveHundred"><p><b>500</b> Error</p></span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                W.S.O.D. (White Screen of Death)
              </span>
            </div>
          </li>
          <li v-if="showing === 'showingInbound'">
            <div class="buttons has-addons">
              <router-link to="/flow/ib/fiveerror/ibFiveError" class="button is-dark is-small">
                <span class="icon has-text-success" v-on:click="handleIbFiveError">
                  <img src="../assets/icons/png/org16.png"/>
                </span>
                <span v-on:click="handleIbFiveError"><b>500</b> Error</span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                W.S.O.D. (White Screen of Death) (Inbound)
              </span>
            </div>
          </li>

          <li v-if="showing === 'showingT1'">
            <div class="buttons has-addons">
              <router-link to="/flow/FiveThree" class="button is-dark is-small">
                <span class="icon has-text-success"  v-on:click="handleFiveThree">
                  <img src="../assets/icons/png/blu16.png"/>
                </span>
                <span  v-on:click="handleFiveThree"><b>503</b> Error</span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Service unavailable, can not handle request(s)
              </span>
            </div>
          </li>
          <li v-if="showing === 'showingT2'">
            <div class="buttons has-addons">
              <router-link to="/t2flows/slow/index" class="button is-dark is-small has-addons">
                <span class="icon has-text-success" v-on:click="handleTTSlowFiveThree">
                  <img src="../assets/icons/png/gld16.png"/>
                </span>
                <span v-on:click="handleTTSlowFiveThree"><p><b>503/Slow </b> Sites</p></span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Slow site/ 503 errors
              </span>
            </div>
          </li>
          <li v-if="showing === 'showingInbound'">
            <div class="buttons has-addons">
              <router-link to="/flow/ib/fiveothreeerror/ibFiveThree" class="button is-dark is-small">
                <span class="icon has-text-success" v-on:click="handleIbFiveThree">
                  <img src="../assets/icons/png/org16.png"/>
                </span>
                <span v-on:click="handleIbFiveThree"><b>503</b> Error</span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Service unavailable, can not handle request (IB)
              </span>
            </div>
          </li>

          <li v-if="showing === 'showingProd'">
            <div class="buttons has-addons">
              <router-link to="/flow/prod/owa/nowa" class="button is-dark is-small">
                <span class="icon has-text-success" v-on:click="handleLoginOwa">
                  <img src="../assets/icons/png/pur16.png"/>
                </span>
                <span v-on:click="handleLoginOwa"><p>Cannot Log Into <b>OWA</b></p></span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Address OWA Login Issues
              </span>
            </div>
          </li>

          <li v-if="showing === 'showingProd'">
            <div class="buttons has-addons">
              <router-link to="/flow/prod/orestore/or" class="button is-dark is-small">
                <span class="icon has-text-success" v-on:click="handleCompAct">
                  <img src="../assets/icons/png/pur16.png"/>
                </span>
                <span v-on:click="handleCompAct"><p><b>Compromised</b> Accounts</p></span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Compromised email accounts
              </span>
            </div>
          </li>
          <li v-if="showing === 'showingT2'">
            <div class="buttons has-addons">
              <router-link to="/t2flows/esrestore/index" class="button is-dark is-small has-addons">
                <span class="icon has-text-success" v-on:click="handleTTesrestore">
                  <img src="../assets/icons/png/gld16.png"/>
                </span>
                <span v-on:click="handleTTesrestore"><p><b>ES</b> Restores</p></span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Expert service restore &amp; cleanup
              </span>
            </div>
          </li>
          <li v-if="showing === 'showingT1'">
            <div class="buttons has-addons">
              <router-link to="/flow/CpEmail" class="button is-dark is-small">
                <span class="icon has-text-success" v-on:click="handleCpanelEmail">
                  <img src="../assets/icons/png/blu16.png"/>
                </span>
                <span v-on:click="handleCpanelEmail"><b>cPanel</b> Email issues</span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                cPanel specific email troubleshooting
              </span>
            </div>
          </li>

          <li v-if="showing === 'showingT1'">
            <div class="buttons has-addons">
              <router-link to="/flow/cron/CronTest" class="button is-dark is-small" draggable="false">
                <span class="icon has-text-success" v-on:click="handleCronTest">
                  <img src="../assets/icons/png/blu16.png" draggable="false"/>
                </span>
                <span v-on:click="handleCronTest"><b>Cron Job</b> Test</span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                How to test cron jobs
              </span>
            </div>
          </li>

          <li v-if="showing === 'showingInbound'">
            <div class="buttons has-addons">
              <router-link to="/flow/dns/Dcheck" class="button is-dark is-small">
                <span class="icon has-text-success" v-on:click="handleIbDnsChk">
                  <img src="../assets/icons/png/org16.png"/>
                </span>
                <span v-on:click="handleIbDnsChk"><p><b>DNS</b> Check</p></span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Checking global DNS to match server
              </span>
            </div>
          </li>

          <li v-if="showing === 'showingProd'">
            <div class="buttons has-addons">
              <router-link to="/flow/prod/du/du" class="button is-dark is-small">
                <span class="icon has-text-success" v-on:click="handleDmnUnblk">
                  <img src="../assets/icons/png/pur16.png"/>
                </span>
                <span v-on:click="handleDmnUnblk"><p>Domain <b>Unblocking</b></p></span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Release domain for email use
              </span>
            </div>
          </li>

          <li v-if="showing === 'showingT1'">
            <div class="buttons has-addons">
              <router-link to="/flow/howto/debugmode/Debug" class="button is-dark is-small">
                <span class="icon has-text-success" v-on:click="handleDebugMode">
                  <img src="../assets/icons/png/blu16.png"/>
                </span>
                <span v-on:click="handleDebugMode">Enable <b>Debug Mode</b></span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Turn on WordPress Debug Mode
              </span>
            </div>
          </li>

          <li v-if="showing === 'showingT2'">
            <div class="buttons has-addons">
              <router-link to="/t2flows/form/index" class="button is-dark is-small has-addons">
                <span class="icon has-text-success" v-on:click="handleTTFormMail">
                  <img src="../assets/icons/png/gld16.png"/>
                </span>
                <span v-on:click="handleTTFormMail"><p><b>Form Mail</b> Error</p></span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Form mail errors...
              </span>
            </div>
          </li>
          <li v-if="showing === 'showingT2'">
            <div class="buttons has-addons">
              <router-link to="/t2flows/mwpdomainchange/index" class="button is-dark is-small has-addons">
                <span class="icon has-text-success" v-on:click="handleTTMwpDomain">
                  <img src="../assets/icons/png/gld16.png"/>
                </span>
                <span v-on:click="handleTTMwpDomain"><p><b>MWP Domain Change</b> Error</p></span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Domain Change Stuck/Error
              </span>
            </div>
          </li>
          <li v-if="showing === 'showingT2'">
            <div class="buttons has-addons">
              <router-link to="/t2flows/mwprestore/index" class="button is-dark is-small has-addons">
                <span class="icon has-text-success" v-on:click="handleTTMwpRestore">
                  <img src="../assets/icons/png/gld16.png"/>
                </span>
                <span v-on:click="handleTTMwpRestore"><p><b>MWP Restore</b> Error</p></span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
               MWP Restore Errors
              </span>
            </div>
          </li>
          <li v-if="showing === 'showingT1'">
            <div class="buttons has-addons">
              <router-link to="/flow/FormError" class="button is-dark is-small">
                <span class="icon has-text-success" v-on:click="handleFormMail">
                  <img src="../assets/icons/png/blu16.png"/>
                </span>
                <span v-on:click="handleFormMail"><b>Form Mail</b> Issues</span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Website form submission error
              </span>
            </div>
          </li>

          <li v-if="showing === 'showingT1'">
            <div class="buttons has-addons">
              <router-link to="/flow/Ftp" class="button is-dark is-small">
                <span class="icon has-text-success" v-on:click="handleFtpSprt">
                  <img src="../assets/icons/png/blu16.png"/>
                </span>
                <span v-on:click="handleFtpSprt"><b>FTP</b> Support</span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                FTP connecting &amp; Troubleshooting
              </span>
            </div>
          </li>

          <li v-if="showing === 'showingT1'">
            <div class="buttons has-addons">
              <a href="https://www.godaddy.com/help/godaddy-email-marketing" target="_blank" class="button is-dark is-small">
                <span class="icon has-text-success" v-on:click="handleMscGem">
                  <img src="../assets/icons/png/blu16.png"/>
                </span>
                <span v-on:click="handleMscGem"><b>GEM</b></span>
              </a>
              <span id="idinfo" class="button is-static is-small is-expanded">
                GoDaddy Email Marketing HELP article
              </span>
            </div>
          </li>

          <li v-if="showing === 'showingT1'">
            <div class="buttons has-addons">
              <a href="https://www.godaddy.com/help/gocentral" target="_blank" class="button is-dark is-small">
                <span class="icon has-text-success" v-on:click="handleGc">
                  <img src="../assets/icons/png/blu16.png"/>
                </span>
                <span v-on:click="handleGc"><b>Go</b>Central</span>
              </a>
              <span id="idinfo" class="button is-static is-small is-expanded">
                GoCentral GoDaddy HELP artilce
              </span>
            </div>
          </li>

          <li v-if="showing === 'showingInbound'">
            <div class="buttons has-addons">
              <router-link to="/flow/mig/Mig" class="button is-dark is-small">
                <span class="icon has-text-success" v-on:click="handleIbHstMig">
                  <img src="../assets/icons/png/org16.png"/>
                </span>
                <span v-on:click="handleIbHstMig"><p><b>Hosting</b> Migrations</p></span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Selling / addressing hosting migrations
              </span>
            </div>
          </li>

          <li v-if="showing === 'showingInbound'">
            <div class="buttons has-addons">
              <router-link to="/flow/restore/Rst" class="button is-dark is-small">
                <span class="icon has-text-success" v-on:click="handleIbHstRst">
                  <img src="../assets/icons/png/org16.png"/>
                </span>
                <span v-on:click="handleIbHstRst"><p><b>Hosting</b> Restores</p></span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Selling / addressing hosting restores
              </span>
            </div>
          </li>

          <li v-if="showing === 'showingT1'">
            <div class="buttons has-addons">
              <router-link to="/flow/Malware" class="button is-dark is-small">
                <span class="icon has-text-success" v-on:click="handleIdMalware">
                  <img src="../assets/icons/png/blu16.png"/>
                </span>
                <span v-on:click="handleIdMalware">Identifying <b>Malware</b></span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Guided Malware Identification
              </span>
            </div>
          </li>

          <li v-if="showing === 'showingProd'">
            <div class="buttons has-addons">
              <router-link to="/flow/prod/mtt/mtt" class="button is-dark is-small">
                <span class="icon has-text-success" v-on:click="handleMigTfr">
                  <img src="../assets/icons/png/pur16.png"/>
                </span>
                <span v-on:click="handleMigTfr"><p>Mig Team <b>Transfer</b></p></span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Email Migration Transfer PFC
              </span>
            </div>
          </li>

          <li v-if="showing === 'showingT1'">
            <div class="buttons has-addons">
              <router-link to="/flow/mwp/Migsync" class="button is-dark is-small">
                <span class="icon has-text-success" v-on:click="handleMigSync">
                  <img src="../assets/icons/png/blu16.png"/>
                </span>
                <span v-on:click="handleMigSync"><b>MWP</b> Migration/Sync</span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                "One-Click" Migrations &amp; Sync
              </span>
            </div>
          </li>
          <li v-if="showing === 'showingT2'">
            <div class="buttons has-addons">
              <router-link to="/t2flows/Migsync/index" class="button is-dark is-small has-addons">
                <span class="icon has-text-success" v-on:click="handleTTMigSync">
                  <img src="../assets/icons/png/gld16.png"/>
                </span>
                <span v-on:click="handleTTMigSync"><p><b>MWP</b> Migration/Sync</p></span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                "One-Click" Migrations &amp; Sync
              </span>
            </div>
          </li>
          <li v-if="showing === 'showingT2'">
            <div class="buttons has-addons">
              <router-link to="/t2flows/esmigration/index" class="button is-dark is-small has-addons">
                <span class="icon has-text-success" v-on:click="handleTTesmigration">
                  <img src="../assets/icons/png/gld16.png"/>
                </span>
                <span v-on:click="handleTTesmigration"><p><b>ES</b> Migrations</p></span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Expert Service migration &amp; cleanup
              </span>
            </div>
          </li>
          <li v-if="showing === 'showingT1'">
            <div class="buttons has-addons">
              <router-link to="/flow/howto/netvio/Netvio" class="button is-dark is-small">
                <span class="icon has-text-success" v-on:click="handleNetVio">
                  <img src="../assets/icons/png/blu16.png"/>
                </span>
                <span v-on:click="handleNetVio"><b>Net Vio</b></span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Proper procedure for Network violations
              </span>
            </div>
          </li>

          <li v-if="showing === 'showingProd'">
            <div class="buttons has-addons">
              <router-link to="/flow/prod/nre/nre" class="button is-dark is-small">
                <span class="icon has-text-success" v-on:click="handleNrEmail">
                  <img src="../assets/icons/png/pur16.png"/>
                </span>
                <span v-on:click="handleNrEmail">Not Receiving <b>Email</b></span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Address receving Email Issues
              </span>
            </div>
          </li>

          <li v-if="showing === 'showingT1'">
            <div class="buttons has-addons">
              <a href="https://www.godaddy.com/help/office-365-from-godaddy" target="_blank" class="button is-dark is-small">
                <span class="icon has-text-success" v-on:click="handleOfc">
                  <img src="../assets/icons/png/blu16.png"/>
                </span>
                <span v-on:click="handleOfc"><b>O365</b></span>
              </a>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Office 365 GoDaddy HELP article
              </span>
            </div>
          </li>

          <li v-if="showing === 'showingProd'">
            <div class="buttons has-addons">
              <router-link to="/flow/prod/cya/cya" class="button is-dark is-small">
                <span class="icon has-text-success" v-on:click="handleOfcMig">
                  <img src="../assets/icons/png/pur16.png"/>
                </span>
                <span v-on:click="handleOfcMig"><p>O<b>365</b> Migrations</p></span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Successfully migrate email to O365
              </span>
            </div>
          </li>

          <li v-if="showing === 'showingProd'">
            <div class="buttons has-addons">
              <router-link to="/flow/prod/orestore/or" class="button is-dark is-small">
                <span class="icon has-text-success" v-on:click="handleOfcRst">
                  <img src="../assets/icons/png/pur16.png"/>
                </span>
                <span v-on:click="handleOfcRst"><p>O<b>365</b> Restores</p></span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Restore O365 email accounts
              </span>
            </div>
          </li>

          <li v-if="showing === 'showingProd'">
            <div class="buttons has-addons">
              <router-link to="/flow/prod/odi/odi" class="button is-dark is-small">
                <span class="icon has-text-success" v-on:click="handleOdSync">
                  <img src="../assets/icons/png/pur16.png"/>
                </span>
                <span v-on:click="handleOdSync"><p><b>OneDrive</b> Sync Issues</p></span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Address OneDrive Sync Issues
              </span>
            </div>
          </li>

          <li v-if="showing === 'showingProd'">
            <div class="buttons has-addons">
              <router-link to="/flow/prod/ows/ows" class="button is-dark is-small">
                <span class="icon has-text-success" v-on:click="handleOtlStp">
                  <img src="../assets/icons/png/pur16.png"/>
                </span>
                <span v-on:click="handleOtlStp"><p><b>Outlook</b> Wont Setup</p></span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Address Setup issues with Outlook
              </span>
            </div>
          </li>

          <li v-if="showing === 'showingT1'">
            <div class="buttons has-addons">
               <a href="https://www.godaddy.com/help/search-engine-visibility" target="_blank" class="button is-dark is-small">
              <span class="icon has-text-success" v-on:click="handleSeoSev">
                <img src="../assets/icons/png/blu16.png"/>
              </span>
              <span v-on:click="handleSeoSev"><b>SEO</b> &amp; <b>SEV</b></span>
              </a>
              <span id="idinfo" class="button is-static is-small is-expanded">
                SEO &amp; SEV GoDaddy HELP article
              </span>
            </div>
          </li>

          <li v-if="showing === 'showingT1'">
            <div class="buttons has-addons">
              <router-link to="/flow/pfc/ServerCheck" class="button is-dark is-small">
                <span class="icon has-text-success" v-on:click="handleSrvChk">
                  <img src="../assets/icons/png/blu16.png"/>
                </span>
                <span v-on:click="handleSrvChk"><b>Server</b> Checklist</span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Checks to complete prior to transfer
              </span>
            </div>
          </li>

          <li v-if="showing === 'showingT1'">
            <div class="buttons has-addons">
              <router-link to="/flow/howto/uptime/Uptime" class="button is-dark is-small">
                <span class="icon has-text-success" v-on:click="handleSrvIsu">
                  <img src="../assets/icons/png/blu16.png"/>
                </span>
                <span v-on:click="handleSrvIsu"><b>Server</b> Issues</span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Checking SSH and PuTTy access to hosting
              </span>
            </div>
          </li>

          <li v-if="showing === 'showingT1'">
            <div class="buttons has-addons">
              <router-link to="/flow/slow/Slow" class="button is-dark is-small">
                <span class="icon has-text-success" v-on:click="handleSlowSite">
                  <img src="../assets/icons/png/blu16.png"/>
                </span>
                <span v-on:click="handleSlowSite"><b>Slow</b> Sites</span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Slow Website: Things to check.
              </span>
            </div>
          </li>

          <li v-if="showing === 'showingT1'">
            <div class="buttons has-addons">
              <router-link to="/flow/Splunk" class="button is-dark is-small">
                <span class="icon has-text-success" v-on:click="handleSplkUsg">
                  <img src="../assets/icons/png/blu16.png"/>
                </span>
                <span v-on:click="handleSplkUsg"><b>SPLUNK</b> Usage</span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Guided SPLUNK troubleshooting
              </span>
            </div>
          </li>

          <li v-if="showing === 'showingT1'">
            <div class="buttons has-addons">
              <router-link to="/flow/SslError" class="button is-dark is-small">
                <span class="icon has-text-success" v-on:click="handleSslErr">
                  <img src="../assets/icons/png/blu16.png"/>
                </span>
                <span v-on:click="handleSslErr"><b>SSL</b> Errors</span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Guided SSL error troubleshooting
              </span>
            </div>
          </li>

          <li v-if="showing === 'showingT1'">
            <div class="buttons has-addons">
              <router-link to="/flow/ssl/howto/Ssl" class="button is-dark is-small">
                <span class="icon has-text-success" v-on:click="handleSslSetup">
                  <img src="../assets/icons/png/blu16.png"/>
                </span>
                <span v-on:click="handleSslSetup"><b>SSL</b> Setup</span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Guided "After The Sale" product setup
              </span>
            </div>
          </li>

          <li v-if="showing === 'showingT1'">
            <div class="buttons has-addons">
              <router-link to="/flow/howto/sucuri/Sucuri" class="button is-dark is-small">
                <span class="icon has-text-success" v-on:click="handleScrSpt">
                  <img src="../assets/icons/png/blu16.png"/>
                </span>
                <span v-on:click="handleScrSpt"><b>Sucuri</b> support tickets</span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Checking &amp; Setting up Sucuri Tickets
              </span>
            </div>
          </li>

          <li v-if="showing === 'showingT1'">
            <div class="buttons has-addons">
              <router-link to="/flow/pfc/Transfer" class="button is-dark is-small" title="Transfer Preflight Checklist">
                <span class="icon has-text-success" v-on:click="handleTrfPfc">
                  <img src="../assets/icons/png/blu16.png"/>
                </span>
                <span v-on:click="handleTrfPfc"><b>Transfer</b> PFC</span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                The Official Transfer Preflight Checklist
              </span>
            </div>
          </li>

          <li v-if="showing === 'showingProd'">
            <div class="buttons has-addons">
              <router-link to="/flow/prod/uio/uio" class="button is-dark is-small">
                <span class="icon has-text-success" v-on:click="handleInsOfc">
                  <img src="../assets/icons/png/pur16.png"/>
                </span>
                <span v-on:click="handleInsOfc"><p>Unable To Install <b>Office</b></p></span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Address install issues with Office
              </span>
            </div>
          </li>

          <li v-if="showing === 'showingT1'">
            <div class="buttons has-addons">
              <router-link to="/flow/howto/uptime/Uptime" class="button is-dark is-small">
                <span class="icon has-text-success" v-on:click="handleVpsUptime">
                  <img src="../assets/icons/png/blu16.png"/>
                </span>
                <span v-on:click="handleVpsUptime"><b>VPS</b> Uptime check</span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Check PuTTy and RDP connectivity
              </span>
            </div>
          </li>

          <li v-if="showing === 'showingInbound'">
            <div class="buttons has-addons">
              <router-link to="/flow/howto/wpps/Wpps" class="button is-dark is-small">
                <span class="icon has-text-success" v-on:click="handleIbWpSpt">
                  <img src="../assets/icons/png/org16.png"/>
                </span>
                <span v-on:click="handleIbWpSpt"><b>WordPress</b> Support</span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Basic WordPress troubleshooting
              </span>
            </div>
          </li>

          <li v-if="showing === 'showingProd'">
            <div class="buttons has-addons">
              <a href="https://www.godaddy.com/help/workspace-email-1000008" target="_blank" class="button is-dark is-small" draggable="false">
                <span class="icon has-text-success" v-on:click="handleWsEmail">
                  <img src="../assets/icons/png/pur16.png" draggable="false"/>
                </span>
                <span v-on:click="handleWsEmail"><b>Workspace</b> Email</span>
              </a>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Workspace Email HELP article
              </span>
            </div>
          </li>

          <li v-if="showing === 'showingT1'">
            <div class="buttons has-addons">
              <router-link to="/flow/howto/wpps/Wpps" class="button is-dark is-small">
                <span class="icon has-text-success" v-on:click="handleWpps">
                  <img src="../assets/icons/png/blu16.png"/>
                </span>
                <span v-on:click="handleWpps"><b>WPPS</b></span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                (WordPress Premium Support) selling / supporting
              </span>
            </div>
          </li>

          <li v-if="showing === 'showingT1'">
            <div class="buttons has-addons">
              <a href="https://www.godaddy.com/help/website-builder-7" target="_blank" class="button is-dark is-small">
                <span class="icon has-text-success" v-on:click="handleWsb">
                  <img src="../assets/icons/png/blu16.png"/>
                </span>
                <span v-on:click="handleWsb">WSB <b>v7</b></span>
              </a>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Website Builder v7 GoDaddy HELP article
              </span>
            </div>
          </li>

          <li v-if="showing === 'showingProd'">
            <div class="buttons has-addons">
              <router-link to="/flow/prod/wac/wac" class="button is-dark is-small">
                <span class="icon has-text-success" v-on:click="handleWseAct">
                  <img src="../assets/icons/png/pur16.png"/>
                </span>
                <span v-on:click="handleWseAct"><b>WSE</b> Account Change</span>
              </router-link>
              <span id="idinfo" class="button is-static is-small is-expanded">
                Move Workspace to other Account
              </span>
            </div>
          </li>

        </ul>
      </div>
      <!-- End Flow Index -->

    </div>
    <!-- End Section -->

    <router-view/>

  </div>
  <!-- END - Primary application deck -->

</template>

<script>
import JQuery from 'jquery'
import axios from 'axios'
let $ = JQuery

export default {
  name: 'App',

  data(){
    return{
      showing: 'showingT2',
    }
  },

  methods:{

    showT2: function(){ this.showing = 'showingT2';},
    showT1: function(){ this.showing = 'showingT1';},
    showInbound: function(){ this.showing = 'showingInbound';},
    showProd: function(){ this.showing = 'showingProd';},

    handleTTFourThree: function(){

      let data = {flowname: 't2-403-error', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleFourThree: function(){

      let data = {flowname: '403-error', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleTTFormMail: function(){

      let data = {flowname: 't2-form-mail', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleFourFour: function(){

      let data = {flowname: '404-error', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleFiveError: function(){

      let data = {flowname: '500-error', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleTTFiveHundred: function(){

      let data = {flowname: 't2-500-error', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleFiveThree: function(){

      let data = {flowname: '503-error', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleTTSlowFiveThree: function(){

      let data = {flowname: 't2-503-slow-error', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleCpanelEmail: function(){

      let data = {flowname: 'cpanel-email-error', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleCronTest: function(){

      let data = {flowname: 'cron-job-test', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleDebugMode: function(){

      let data = {flowname: 'enable-debug-mode', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleFormMail: function(){

      let data = {flowname: 'form-mail-error', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleFtpSprt: function(){

      let data = {flowname: 'ftp-support', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleIdMalware: function(){

      let data = {flowname: 'identify-malware', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleTTMwpRestore: function(){

      let data = {flowname: 't2-mwp-restore', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleTTMwpDomain: function(){

      let data = {flowname: 't2-mwp-domain', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleTTMigSync: function(){

      let data = {flowname: 't2-mwp-migsync', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleMigSync: function(){

      let data = {flowname: 'mwp-migration-sync', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleNetVio: function(){

      let data = {flowname: 'network-violation', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleSrvIsu: function(){

      let data = {flowname: 'server-issue', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleSlowSite: function(){

      let data = {flowname: 'slow-site-issue', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleSplkUsg: function(){

      let data = {flowname: 'splunk-usage', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleSslErr: function(){

      let data = {flowname: 'ssl-error', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleSslSetup: function(){

      let data = {flowname: 'ssl-setup', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleScrSpt: function(){

      let data = {flowname: 'sucuri-support-ticket', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleVpsUptime: function(){

      let data = {flowname: 'vps-uptime-check', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleWpps: function(){

      let data = {flowname: 'hst-wpps', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleLoginOwa: function(){

      let data = {flowname: 'prd-cannot-login-owa', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleCompAct: function(){

      let data = {flowname: 'prd-comped-account', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleDmnUnblk: function(){

      let data = {flowname: 'prd-domain-unblocking', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleMigTfr: function(){

      let data = {flowname: 'prd-migration-transfers', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleNrEmail: function(){

      let data = {flowname: 'prd-not-receiving-email', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleOfcMig: function(){

      let data = {flowname: 'prd-0365-migrations', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleOfcRst: function(){

      let data = {flowname: 'prd-0365-restores', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleOdSync: function(){

      let data = {flowname: 'prd-onedrive-sync', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleOtlStp: function(){

      let data = {flowname: 'prd-outlook-wont-setup', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleInsOfc: function(){

      let data = {flowname: 'prd-unableto-install-office', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleWseAct: function(){

      let data = {flowname: 'prd-wse-account-change', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleIbFourThree: function(){

      let data = {flowname: 'ib-403-error', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleIbFourFour: function(){

      let data = {flowname: 'ib-404-error', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleIbFiveError: function(){

      let data = {flowname: 'ib-500-error', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleIbFiveThree: function(){

      let data = {flowname: 'ib-503-error', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleIbDnsChk: function(){

      let data = {flowname: 'ib-dns-check', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleIbHstMig: function(){

      let data = {flowname: 'ib-hosting-migration', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleIbHstRst: function(){

      let data = {flowname: 'ib-hosting-restore', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleIbWpSpt: function(){

      let data = {flowname: 'ib-wordpress-support', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleMscCpDns: function(){

      let data = {flowname: 'msc-cpanel-dns', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleMscGem: function(){

      let data = {flowname: 'msc-gem', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleGc: function(){

      let data = {flowname: 'msc-go-central', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleOfc: function(){

      let data = {flowname: 'msc-office-365', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleSeoSev: function(){

      let data = {flowname: 'msc-seo-sev', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleSrvChk: function(){

      let data = {flowname: 'msc-server-checklist', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleTrfPfc: function(){

      let data = {flowname: 'msc-transfer-pfc', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleWsb: function(){

      let data = {flowname: 'msc-website-builder-v7', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleWsEmail: function(){

      let data = {flowname: 'msc-workspace-email', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },

    handleTTesmigration: function(){

      let data = {flowname: 't2-esmigration', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },
    handleTTesrestore: function(){

      let data = {flowname: 't2-esrestore', toolname: "t2-tool"};

      axios.post('https://test.testmyssl.xyz/api/swat-flow/newuse', data)

        .then(response => { console.log('response: ' + response.data); })

        .catch(error => { console.log("Axios Post Application Error"); })

    },


// Index key word filtering

    filterIndex: function () {
      $("#flow-index-search").on("keyup", function () {
        var searchText = $(this).val();
          searchText = searchText.toLowerCase();
          searchText = searchText.replace(/\s+/g, '');
            $('.navList > li').each(function(){
              var currentLiText = $(this).text(),
              showCurrentLi = ((currentLiText.toLowerCase()).replace(/\s+/g, '')).indexOf(searchText) !== -1;
            $(this).toggle(showCurrentLi);
        });
      });
    }
  }
}
// jQuery insertion for $ dependancy
</script>

<style></style>
