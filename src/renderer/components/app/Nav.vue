<!-- :::::::::: Primary Navigation Menu :::::::::: -->
<template>

  <nav id="prime">

    <ul>
      <router-link id="n-button" to="/" title="Home" class="button is-dark" draggable="false">
        <span class="icon is-small">
          <i class="mdi mdi-home"></i>
        </span>
      </router-link>

      <router-link id="n-button" to="/FlowIndex" title="SWAT Flow" class="button is-dark" draggable="false">
        <span class="icon is-small">
          <i class="mdi mdi-alpha-f mdi-24px"></i>
        </span>
      </router-link>

      <router-link id="n-button" to="/SwatNote" title="SWAT Note" class="button is-dark" draggable="false">
        <span class="icon is-small">
          <i class="mdi mdi-note-text"></i>
        </span>
      </router-link>

      <router-link id="n-button" to="/SwatTools" title="SWAT Tools" class="button is-dark" draggable="false">
        <span class="icon is-small">
          <i class="mdi mdi-toolbox"></i>
        </span>
      </router-link>

      <router-link id="n-button" to="/SwatLinks" title="SWAT Links" class="button is-dark" draggable="false">
        <span class="icon is-small">
          <i class="mdi mdi-link-variant"></i>
        </span>
      </router-link>

      <a id="n-button" href="http://www.x.co/l2chat" target="_blank" title="ATS Chat" class="button is-dark" draggable="false">
        <span class="icon is-small">
          <i class="mdi mdi-headset"></i>
        </span>
      </a>

      <a id="n-button" href="http://www.x.co/webcrm" target="_blank" title="CRM" class="button is-dark" draggable="false">
        <span class="icon is-small">
          <i class="mdi mdi-magnify"></i>
        </span>
      </a>

      <a id="n-button" href="http://www.x.co/workday" target="_blank" title="Workday" class="button is-dark" draggable="false">
        <span class="icon is-small">
          <img src="../../assets/icons/png/workday.png" draggable="false">
        </span>
      </a>

      <a id="n-button" href="http://owa.godaddy.com" target="_blank" title="Check your email" class="button is-dark" draggable="false">
        <span class="icon is-small">
          <img src="../../assets/icons/png/o365.png" draggable="false">
        </span>
      </a>
    </ul>

  </nav>

</template>

<script>
  export default{
    name: 'Nav',
  }
</script>

<style>

nav {
  position: absolute;
  background: none;
  top: 0px;
  margin: 0px;
  width: 30px;
  height: 270px ;
  padding: 0px;
  border: 0px;
  border-top: 0px;
  border-left: 0px;
  z-index: 3;
}

nav ul {
  text-decoration: none;
}

#n-button {
  margin: 0px;
  padding: 0px;
  height: 30px;
  width: 30px;
  border: 1px solid hsl(0, 0%, 21%);
  border-radius: 0px;
}

#n-button-alt {
  margin: 0px;
  padding: 0px;
  height: 30px;
  width: 30px;
  border: 0px;
  border-radius: 0px;
}

nav a {
  display: block;
  float: left;
}

#delta {
  position: absolute;
  height: 20px;
  top: 8px;
  left: 45px;
  margin: 0px;
  display: box;
  width: 70px;
  padding: 0px;
  border: 0px;
  z-index: 3;
}

#delta a {
  margin: 0px;
  margin-right: 5px;
  padding: 0px;
  text-decoration: inherit;
  color: #262626;
}

#delta a:hover {
  color: hsl(45, 100%, 40%);
}
</style>
