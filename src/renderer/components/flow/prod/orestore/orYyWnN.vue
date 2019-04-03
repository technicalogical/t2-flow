<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="flow-deck">
    
      <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p>O<b>365</b> Restores</p>
      </div> 
      <!-- END - Flow Title banner -->

    <!-- BEGIN section -->
    <div class="content has-text-centered" id="flow">

      <div class="content is-medium">
        <p>Make sure you select the proper license in the subscription dropdown.</p>
      </div>

      <article class="message is-small has-text-left">
        <div class="message-body">
          <p><b>EE</b> = <b>Email Essentials</b></p>
          <p><b>EP</b> = <b>Email Plus</b></p>
          <p><b>B1</b> = <b>Online Essentials</b></p>
          <p><b>B2</b> = <b>Business Premium</b></p>
          <p><b>Attempt to restore the mailbox again.</b></p>
        </div>
      </article>

      <div class="content is-medium">
        <p>Are you able to select the restore button without getting an error?</p>
      </div>

      <p class="buttons">

        <router-link to="/flow/prod/orestore/orYyWnNy" class="button is-light is-small">
          <span class="icon has-text-success">
            <i id="itcolor" class="fas fa-chevron-circle-right"></i>
          </span>
          <span><b>Yes</b>. The restore was successfully submitted.</span>
        </router-link>
      
        <router-link to="/flow/prod/orestore/orYyWnNn" class="button is-light is-small">
          <span class="icon has-text-danger">
            <i id="itcolor" class="fas fa-chevron-circle-right"></i>
          </span>
          <span><b>No</b>. An error message appeared and restore failed.</span>
        </router-link>
        
      </p>
      
      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/prod/orestore/orYyWn" class="button is-small is-info">
          <span class="icon has-text-light">
            <i class="fas fa-chevron-left"></i>
          </span>
          <span>BACK</span>
        </router-link>
      </p>
      <!-- END - Back button -->

      <router-view/>

    </div>
    <!-- END flow section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>

</script>

<style></style>