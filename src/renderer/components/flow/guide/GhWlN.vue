<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="flow-deck">
    
    <!-- START Opening comments for Swat Flow Chart -->
    <div id="flow-start-message" class="notification is-dark has-text-centered is-static is-active" readonly>
        <center><p><b>Flow</b> Guide</p></center>
    </div>
    <!-- END Opening comments for Swat Flow Chart -->

    <!-- BEGIN Error flow section -->
    <div class="content has-text-centered" id="flow">
      <div class="content is-medium">
        <p>If the website is displaying a white screen treat it as a <b>500 error</b>.</p> 
        <p>Otherwise these are the recommended flows for this issue. </p>
      </div>
      <p class="buttons">
        <router-link to="/flow/FiveThree" class="button is-dark is-small">
          <span class="icon has-text-success">
            <img src="../../../assets/icons/png/blu16.png"/>
          </span>
          <span><b>503</b> Error</span>
        </router-link>
        <router-link to="/flow/FiveError" class="button is-dark is-small">
          <span class="icon has-text-success">
            <img src="../../../assets/icons/png/blu16.png"/>
          </span>
          <span><b>500</b> Error</span>
        </router-link>  
        <router-link to="/flow/FourThree" class="button is-dark is-small">
          <span class="icon has-text-success">
            <img src="../../../assets/icons/png/blu16.png"/>
          </span>
          <span><b>403</b> Error</span>
        </router-link>
        <router-link to="/flow/FourFour" class="button is-dark is-small">
          <span class="icon has-text-success">
            <img src="../../../assets/icons/png/blu16.png"/>
          </span>
          <span><b>400</b> Error</span>
        </router-link>
      </p>
      <article class="message is-info is-small">
        <div class="message-body is-small">
          <p>Transfer to hosting if the website error does not match with any of the corresponding flows.</p>
        </div>
      </article>
      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/guide/GhWl" class="button is-small is-info">
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