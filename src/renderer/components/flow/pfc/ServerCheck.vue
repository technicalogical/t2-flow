<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="flow-deck">
    
    <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p><b>Server</b> Checklist</p>
      </div> 
    <!-- END - Flow Title banner -->

    
    <!-- BEGIN Checklist section -->
    <div class="content has-text-centered" id="flow">
      <div class="content is-medium">
        <p>These are the things that can be checked by a Tier 1 / Inbound agent. All Items need to be checked prior to transfer to Tier 2</p>
      </div>
      <div id="pfcdeck" class="field">
        <div class="control">
          <div class="tags has-addons">
            <span class="tag is-success"><i class="fas fa-check"></i></span>
            <span class="tag is-dark">Server is active / Billing is up to date</span>
          </div>
        </div>
        <br>
        <div class="control">
          <div class="tags has-addons">
            <span class="tag is-success"><i class="fas fa-check"></i></span>
            <span class="tag is-dark">Server rebooted within last hour</span>
          </div>
        </div>
        <br>
        <div class="control">
          <div class="tags has-addons">
            <span class="tag is-success"><i class="fas fa-check"></i></span>
            <span class="tag is-dark">SSH / PuTTy is inaccessable</span>
          </div>
        </div>
        <br>
      </div>
      
        <!-- BEGIN - Back button -->
        <p class="buttons">
          <router-link to="/miscFlow" class="button is-small is-info">
            <span class="icon has-text-light">
              <i class="fas fa-chevron-left"></i>
            </span>
            <span>BACK</span>
          </router-link>
        </p>
        <!-- END - Back button -->

      <router-view/>
    </div>
    <!-- END Checklist section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>

</script>

<style></style>