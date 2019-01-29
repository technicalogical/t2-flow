<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="flow-deck">
    
    <!-- 500 Error / WSOD Text -->
    <article id="wsod-message" class="message is-small">
      <div class="notification is-dark has-text-centered">
        <strong>Managed WordPress Migration / Sync</strong>
      </div>
    </article>
    <!-- END - 500 Error / WSOD Text -->

    
    <!-- BEGIN 500 Error flow section -->
    <div class="content has-text-centered" id="flow">
      <div class="content is-medium">
        <p>Disable all plugins and change theme to a stock option. Are you able to complete the migration now?</p>
      </div>
      <p class="buttons">
        <router-link to="/flow/mwp/MigsyncMyNy" class="button is-light">
          <span class="icon has-text-success">
            <i class="fas fa-play-circle"></i>
          </span>
          <span><strong>Yes</strong>. The migration completed.</span>
        </router-link>  
        <router-link to="/flow/mwp/MigsyncMyNn" class="button is-light">
          <span class="icon has-text-success">
            <i class="fas fa-play-circle"></i>
          </span>
          <span><strong>No</strong>. The migration did not complete.</span>
        </router-link>
      </p>

      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/mwp/MigsyncMy" class="button is-small is-info">
          <span class="icon has-text-light">
            <i class="fas fa-chevron-left"></i>
          </span>
          <span>BACK</span>
        </router-link>
      </p>
      <!-- END - Back button -->
      

      <router-view/>

    </div>
    <!-- END 500 Error flow section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>

</script>

<style></style>