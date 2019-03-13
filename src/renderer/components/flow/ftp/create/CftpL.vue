<template>
 
  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck">
    
    <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p><b>FTP</b> (File Transfer Protocol) Support</p>
      </div> 
    <!-- END - Flow Title banner -->

    
    <!-- BEGIN - flow section -->
    <div class="content has-text-centered" id="flow">
      <div class="content is-medium">
        <p>Which <strong>Linux</strong> platform are they using?</p>
      </div>
      <p class="buttons">
          <router-link to="/flow/ftp/create/CftpLc" class="button is-light">
            <span class="icon has-text-info">
              <i class="fas fa-info"></i>
            </span>
            <span>It is <strong>cPanel</strong> Hosting</span>
          </router-link>  
          <router-link to="/flow/ftp/create/CftpLf" class="button is-light">
            <span class="icon has-text-info">
              <i class="fas fa-info"></i>
            </span>
            <span>It is <strong>4gh</strong> Hosting</span>
          </router-link>
        </p>
      
        <!-- BEGIN - Back button -->
        <p class="buttons">
          <router-link to="/flow/ftp/create/Cftp" class="button is-small is-info">
            <span class="icon has-text-light">
              <i class="fas fa-chevron-left"></i>
            </span>
            <span>BACK</span>
          </router-link>
        </p>
        <!-- END - Back button -->

      <router-view/>

    </div>
    <!-- END - flow section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>
export default {
  
}
</script>

<style></style>