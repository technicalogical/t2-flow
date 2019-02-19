<template>
 
  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck">
    
    <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p><b>FTP</b> (File Transfer Protocol) Support</p>
      </div> 
    <!-- END - Flow Title banner -->

    
    <!-- BEGIN SSL Error flow section -->
    <div class="content has-text-centered" id="flow">
      <div class="content is-medium">
        <p>What hosting platform are they using?</p>
      </div>
      <p class="buttons">
          <router-link to="/flow/ftp/create/CftpL" class="button is-light">
            <span class="icon has-text-dark">
              <i class="fab fa-linux"></i>
            </span>
            <span>It is <strong>Linux</strong> Hosting</span>
          </router-link>  
          <router-link to="/flow/ftp/create/CftpW" class="button is-light">
            <span class="icon has-text-info">
              <i class="fab fa-windows"></i>
            </span>
            <span>It is <strong>Windows</strong> Hosting</span>
          </router-link>
          <router-link to="/flow/ftp/create/CftpM" class="button is-light">
            <span class="icon has-text-link">
              <i class="fab fa-wordpress-simple"></i>
            </span>
            <span>It is <strong>Managed WordPress</strong> Hosting</span>
          </router-link>
        </p>
      
        <!-- BEGIN - Back button -->
        <p class="buttons">
          <router-link to="/flow/Ftp" class="button is-small is-info">
            <span class="icon has-text-light">
              <i class="fas fa-chevron-left"></i>
            </span>
            <span>BACK</span>
          </router-link>
        </p>
        <!-- END - Back button -->

      <router-view/>
    </div>
    <!-- END SSL Error flow section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>
export default {
  
}
</script>

<style></style>