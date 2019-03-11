<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck">
    
    <!-- BEGIN - Flow Title banner -->
      <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p><b>New</b> Checklist</p>
      </div> 
    <!-- END - Flow Title banner -->

    
    <!-- BEGIN Checklist section -->
    <div class="content has-text-centered" id="flow">
      <div class="content is-medium">
        <p>Checklist content goes here</p>
      </div>
      <div id="pfcdeck" class="field">
        <div class="control">
          <div class="tags has-addons">
            <span class="tag is-success"><i class="fas fa-check"></i></span>
            <span class="tag is-dark">step</span>
          </div>
        </div>
        <br>
        <div class="control">
          <div class="tags has-addons">
            <span class="tag is-success"><i class="fas fa-check"></i></span>
            <span class="tag is-dark">step</span>
          </div>
        </div>
        <br>
        <div class="control">
          <div class="tags has-addons">
            <span class="tag is-success"><i class="fas fa-check"></i></span>
            <span class="tag is-dark">step</span>
          </div>
        </div>
        <br>
        <div class="control">
          <div class="tags has-addons">
            <span class="tag is-success"><i class="fas fa-check"></i></span>
            <span class="tag is-dark">step</span>
          </div>
        </div>
        <br>
        <div class="control">
          <div class="tags has-addons">
            <span class="tag is-success"><i class="fas fa-check"></i></span>
            <span class="tag is-dark">setp</span>
          </div>
        </div>
        <br>
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
    <!-- END Checklist section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>

</script>

<style></style>