<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck">
    
    <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p><b>HOW TO:</b> Net Vio</p>
      </div> 
    <!-- END - Flow Title banner -->

    <!-- BEGIN Net Vio flow section -->
    <div class="content has-text-centered" id="flow">
      <div class="content is-medium">
        <p>What type of Net Vio is the customer dealing with?</p>
      </div>
      <p class="buttons">
        <router-link to="/flow/howto/netvio/NetvioR" class="button is-light">
          <span class="icon has-text-success">
            <i class="fas fa-check-circle"></i>
          </span>
          <span><b>File Repo</b> Network violation.</span>
        </router-link>  
        <router-link to="/flow/howto/netvio/NetvioM" class="button is-light">
          <span class="icon has-text-success">
            <i class="fas fa-check-circle"></i>
          </span>
          <span><b>Malware/Phishing</b> Network violation.</span>
        </router-link>
        <router-link to="/flow/howto/netvio/NetvioC" class="button is-light">
          <span class="icon has-text-success">
            <i class="fas fa-check-circle"></i>
          </span>
          <span><b>Copy write</b> Network violation.</span>
        </router-link>
        <!-- <router-link to="/flow/howto/netvio/NetvioD" class="button is-light">
          <span class="icon has-text-success">
            <i class="fas fa-check-circle"></i>
          </span>
          <span><b>Database limit</b> Network violation.</span>
        </router-link> -->
      </p>
      
      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/toneFlow" class="button is-small is-info">
          <span class="icon has-text-light">
            <i class="fas fa-chevron-left"></i>
          </span>
          <span>BACK</span>
        </router-link>
      </p>
      <!-- END - Back button -->

      <router-view/>
    </div>
    <!-- END Net Vio flow section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>

</script>

<style></style>