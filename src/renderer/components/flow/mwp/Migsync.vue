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
        <p>Is this a Managed WordPress migration, or sync issue?</p>
      </div>
      <p class="buttons">
        <router-link to="/flow/mwp/MigsyncS" class="button is-light">
          <span class="icon has-text-success">
            <i class="fas fa-play-circle"></i>
          </span>
          <span>It is a <strong>Sync</strong> issue.</span>
        </router-link>  
        <router-link to="/flow/mwp/MigsyncM" class="button is-light">
          <span class="icon has-text-success">
            <i class="fas fa-play-circle"></i>
          </span>
          <span>It is a <strong>Migration</strong> issue.</span>
        </router-link>
      </p>

      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/FlowThree" class="button is-small is-info">
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