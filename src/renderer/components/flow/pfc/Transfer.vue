<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="flow-deck">
    
    <!-- BEGIN - Transfer PFC Text -->
    <article id="wsod-message" class="message is-small">
      <div class="notification is-dark has-text-centered">
        <strong>TRANSFER</strong> PFC (Preflight Checklist)
      </div>
    </article>
    <!-- END - Transfer PFC Text -->

    
    <!-- BEGIN Transfer PFC Checklist section -->
    <div class="content has-text-centered" id="flow">
      <div class="content is-medium">
        <p>One or more of the following criteria must be met before transferring your call to Tier 2.</p>
      </div>
      <div class="field">
        <div class="control">
          <div class="tags has-addons">
            <span class="tag is-success"><i class="fas fa-check"></i></span>
            <span class="tag is-dark">Multiple Product Setup</span>
          </div>
        </div>
        <br>
        <div class="control">
          <div class="tags has-addons">
            <span class="tag is-success"><i class="fas fa-check"></i></span>
            <span class="tag is-dark">Not found in Playbook</span>
          </div>
        </div>
        <br>
        <div class="control">
          <div class="tags has-addons">
            <span class="tag is-success"><i class="fas fa-check"></i></span>
            <span class="tag is-dark">Repeat issue for customer</span>
          </div>
        </div>
        <br>
        <div class="control">
          <div class="tags has-addons">
            <span class="tag is-success"><i class="fas fa-check"></i></span>
            <span class="tag is-dark">Multiple account access</span>
          </div>
        </div>
        <br>
        <div class="control">
          <div class="tags has-addons">
            <span class="tag is-success"><i class="fas fa-check"></i></span>
            <span class="tag is-dark">Flow Tool advised to transfer</span>
          </div>
        </div>
        <br>
        <div class="control">
          <div class="tags has-addons">
            <span class="tag is-success"><i class="fas fa-check"></i></span>
            <span class="tag is-dark">Need to reach ATS or HTL</span>
          </div>
        </div>
      </div>
      
        <!-- BEGIN - Back button -->
        <p class="buttons">
          <router-link to="/SwatFlow" class="button is-small is-info">
            <span class="icon has-text-light">
              <i class="fas fa-chevron-left"></i>
            </span>
            <span>BACK</span>
          </router-link>
        </p>
        <!-- END - Back button -->

      <router-view/>
    </div>
    <!-- END Transfer PFC Checklist section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>

</script>

<style></style>