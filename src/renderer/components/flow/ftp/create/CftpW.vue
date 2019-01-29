<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="flow-deck">
    
    <!-- BEGIN - SSL Website Errors Text -->
    <article id="wsod-message" class="message is-small">
      <div class="notification is-dark has-text-centered">
        <strong>FTP</strong> (File Transfer Protocol) Support
      </div>
    </article>
    <!-- END - SSL Website Errors Text -->

    
    <!-- BEGIN SSL Error flow section -->
    <div class="content has-text-centered" id="flow">
      <div class="content is-medium">
        <p>Which <strong>Windows</strong> platform are they using?
</p>
      </div>
      <p class="buttons">
          <router-link to="/flow/ftp/create/CftpWp" class="button is-light">
            <span class="icon has-text-info">
              <i class="fas fa-info"></i>
            </span>
            <span>It is <strong>Plesk</strong> Hosting</span>
          </router-link>  
          <router-link to="/flow/ftp/create/CftpWf" class="button is-light">
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
    <!-- END SSL Error flow section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>
export default {
  
}
</script>

<style></style>