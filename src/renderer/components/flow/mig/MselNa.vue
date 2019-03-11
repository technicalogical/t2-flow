<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="flow-deck">
    
    <!-- START Opening comments for Swat Flow Chart -->
    <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <center><p>General <b>Migration</b> Support</p></center>
    </div>
    <!-- END Opening comments for Swat Flow Chart -->

    <!-- BEGIN Error flow section -->
    <div class="content" id="flow">
      <div id="serious" class="content has-text-danger">
        <p><b>ATTENTION:</b> If a customer has a <b>.zip, .tar.gz, .tgz</b>, or another form of a backup of their site, we can put the content together as a "migration". The work is performed "<b>AS-IS</b>" since we are unable to obtain the content from the live site.</p>
      </div>
      <article class="message is-info is-small">
        <div class="message-body is-small">
          <p><b>Before you can begin:</b></p> 
          <p>You must inform your customer this is only a "<b>best effort</b>" service when performing a migration "<b>as-is</b>".</p>
        </div>
      </article>
      <article class="message is-danger is-small">
        <div class="message-body is-small">
          <p><b>NO REFUNDS</b> will be issued for "<b>AS-IS</b>" migrations once work has begun.</p>
        </div>
      </article>
      <div id="mig-button" class="control">
        <router-link to="/flow/mig/MselNaG" class="tags has-addons">
          <span class="tag is-dark"><p><b>Continue</b> to submission</p></span>
          <span class="tag is-success"><i class="fas fa-chevron-circle-right"></i></span>
        </router-link>
      </div>
      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/mig/MselN" class="button is-small is-info">
          <span class="icon has-text-light">
            <i class="fas fa-chevron-left"></i>
          </span>
          <span>BACK</span>
        </router-link>
      </p>
      <!-- END - Back button -->
      

      <router-view/>

    </div>
    <!-- END Error flow section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>
export default {
  
}
</script>

<style></style>