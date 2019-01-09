<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck">

    <!-- BEGIN Swat DNS section -->
    <div id="tool-page" class="content is-small">

      <!-- Swat Tools opening note -->
      <div id="tool-note" class="notification is-dark">
        This will become Swat DNS...
      </div>

      <!--BEGIN Swat DNS section -->
      <div id="dns-tool" class="content">
        <div class="control">
          <p id="dns-help" class="help is-dark"><strong>Check Website DNS</strong></p>
          <input class="input is-hovered is-small" type="text" placeholder="www.domain.com">
        </div>
        <div id="dns-output" class="control">
          <input class="input is-hovered is-small" type="text" value="192.168.1.189" readonly>
        </div>
        <button id="dns-reset" class="button is-small is-danger">Clear</button>
        <button id="dns-reset" class="button is-small is-dark">Check</button>
      </div>
      <!--END Swat DNS section -->
      
    </div>
    <!-- END Swat DNS section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>
export default {

}
</script>

<style src="../flow-style.scss"></style>