<template>

  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck">

    <!-- BEGIN Swat DNS section -->
    <div id="tool-page" class="content is-small">

      <!-- Swat Tools opening note -->
      <div id="tool-note" class="notification is-dark has-text-centered is-static is-active" readonly>
        <p><b>Site Speed</b> Check</p>
      </div>

      <!--BEGIN Swat DNS section -->
      <form id="speed-deck">

        <!-- BEGIN Swat SSL input section -->
        <div id="speedtest-tool-input" class="content">

          <!-- Swat DNS Title -->
          <router-link id="ssl-title" to="/SwatTools" class="button is-small is-link">
            <span class="icon is-large has-text-light">
              <i class="fa fa-angle-left fa-2x"></i>
            </span>
            <span>Back</span>
          </router-link>

          <div class="field has-addons is-grouped">
            <div id="speed-search" class="control ">
              <div class="field has-addons">
                <p class="control is-expanded is-small has-icons-left">
                  <input id="speedinput" class="input is-small is-selected" type="text" placeholder="Domain Name" v-model="domainName">
                  <span class="icon is-small is-left">
                    <i class="fas fa-shield-alt"></i>
                  </span>
                </p>
                <p class="control">
                  <button id="speedgo" v-on:click="handleSpeedTest" class="button is-small is-dark">
                    <p><b>GO</b></p>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
      <!-- END Swat Speed input section -->
 
      <!-- BEGIN TEST Loading section -->
      <div style="padding-top: 20vh;" v-if="testStatus === 'loading'" class="has-text-centered has-text-link content">
        <i class="fas fa-cog fa-spin fa-3x"></i>
      </div>

      <!-- BEGIN TEST Readout section -->
      <div v-else-if="testStatus === 'response'" id="output-area" class="content">
         
        <!-- BEGIN Nav Toggle section -->
        <div id="result-nav" class="is-pulled-right result-navigation">
          <a v-on:click="navToScores" v-bind:class="navigationIsScores ? 'active-results-link' : 'inactive-results-link'" class="speed-nav" style="margin-right: 4px;"><small>Scores</small></a>
          <b>|</b>
          <a v-on:click="navToRequests" v-bind:class="navigationIsRequests ? 'active-results-link' : 'inactive-results-link'" class="speed-nav" style="margin-left: 4px; margin-right: 4px;"><small>Requests</small></a>
          <!-- <b>|</b> -->

          <!-- <a v-on:click="navToRecommendations" v-bind:class="navigationIsRecommendations ? 'active-results-link' : 'inactive-results-link'" class="speed-nav" style="margin-left: 4px;"><small>Recommendations</small></a> -->

        </div>
 
        <br><br>
        <!-- END Nav Toggle section -->

        <!-- <strong><span id="ssl-sans-title" class="button is-link is-small is-fullwidth has-text-light">General:</span></strong> -->
        
        <div class="speed-list-med content" v-if="navigationIsScores">
          <b>Requested URL: </b>{{ requestedUrl }}
          <br>
          <b>Final URL: </b>{{ finalUrl }}
          <br><br>

          <div title="Speed Index shows how quickly the contents of a page are visibly populated">
            <b>Page Load Time: </b>{{ loadTime }}
            <span class="is-pulled-right"><b>Speed Index Score: </b>{{ speedIndexScore }}%</span>
            <progress id="progress-t" v-bind:class="loadTimeBarColor" class="progress is-small" v-bind:value="speedIndexScore" max="100">{{ speedIndexScore }}</progress>
          </div>
          <br>

          <div title="Time To First Byte identifies the time at which your server sends a response. ">
            <!-- description: "Large network payloads cost users real money and are highly correlated with long load times. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/network-payloads).", -->
            <b>Time To First Byte: </b>{{ ttfb }}
            <span class="is-pulled-right"><b >TTFB Score: </b>{{ ttfbScore }}%</span>
            <progress id="progress-t" v-bind:class="ttfbBarColor" class="progress is-small" v-bind:value="ttfbScore" max="100">{{ ttfbScore }}</progress>
          </div>
          <br>

          <div title="Large network payloads cost users real money and are highly correlated with long load times">
            <b>Total Page Size: </b>{{ totalSize }}
            <span class="is-pulled-right"><b >Score: </b>{{ totalSizeScore }}%</span>
            <progress id="progress-t" v-bind:class="totalSizeBarColor" class="progress is-small" v-bind:value="totalSizeScore" max="100">{{ totalSizeScore }}</progress>
          </div>
          <br>

          <div title="First Meaningful Paint measures when the primary content of a page is visible. ">
            <b>First Visible: </b>{{ firstMeaningfulPaint }}
            <span class="is-pulled-right"><b >Score: </b>{{ firstMeaningfulPaintScore }}%</span>
            <progress id="progress-t" v-bind:class="firstMeaningfulPaintBarColor" class="progress is-small" v-bind:value="firstMeaningfulPaintScore" max="100">{{ firstMeaningfulPaintScore }}</progress>
          </div>
          <br>

          <div title="Time to interactive is the amount of time it takes for the page to become fully interactive">
            <b>Time To Interactive: </b>{{ interactive }}
            <span class="is-pulled-right"><b >Score: </b>{{ interactiveScore }}%</span>
            <progress id="progress-t" v-bind:class="interactiveBarColor" class="progress is-small" v-bind:value="interactiveScore" max="100">{{ interactiveScore }}</progress>
          </div>
          <br>

          <div title="Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. ">
            <!-- description: "Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/blocking-resources).", -->
            <b>Render Blocking Content: </b>{{ renderBlockingContent }}
            <span class="is-pulled-right"><b >Score: </b>{{ renderBlockingContentScore }}%</span>
            <progress id="progress-t" v-bind:class="renderBlockingContentBarColor" class="progress is-small" v-bind:value="renderBlockingContentScore" max="100">{{ renderBlockingContentScore }}</progress>
          </div>
          <br>

          <div title="Minifying JavaScript files can reduce payload sizes and script parse time.">
            <!-- description: "Minifying JavaScript files can reduce payload sizes and script parse time. [Learn more](https://developers.google.com/speed/docs/insights/MinifyResources).", -->
            <b>Unminified JavaScript </b>
            <span class="is-pulled-right"><b >Score: </b>{{ unminifiedJavascriptScore }}%</span>
            <progress id="progress-t" v-bind:class="unminifiedJavascriptBarColor" class="progress is-small" v-bind:value="unminifiedJavascriptScore" max="100">{{ unminifiedJavascriptScore }}</progress>
          </div>
          <br>

          <div title="Minifying CSS files can reduce network payload sizes.">
            <!-- description: "Minifying CSS files can reduce network payload sizes. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/minify-css).", -->
            <b>Unminified CSS </b>
            <span class="is-pulled-right"><b >Score: </b>{{ unminifiedCssScore }}%</span>
            <progress id="progress-t" v-bind:class="unminifiedCssBarColor" class="progress is-small" v-bind:value="unminifiedCssScore" max="100">{{ unminifiedCssScore }}</progress>
          </div>
          <br>

          <b>Opportunity Items: <i class="fas fa-chevron-down"></i></b>
          <div id="opps-list">
            <ul>
              <li class="spd-lst" v-for="item in renderBlockingContentList">
                <b>URL: </b>{{ item.url }}<br>
                <b>Wasted Ms: </b>{{ item.wastedMs }}
              </li>
            </ul>
          </div>
        </div>
        <!-- <strong><span style="width:124.8%; margin-left: -40px;" id="ssl-sans-title" class="button is-link is-small has-text-light">Requests:</span></strong> -->
        <div style="width: 100%;" class="speed-list-sm content" id="request-list"v-if="navigationIsRequests">

          <h5 class="title is-6"><b>Total Requests:</b> {{ totalNetworkRequests }}</h5>

          <div id="requested" class="container">
            <ul style="list-style: none;">
              <li v-for="(request, index) in networkRequests">

                <div v-if="request.statusCode.toString()[0] == '3'">
                  <!-- <div> -->
                  <div class="redirect-request">
                    <b>Resource: </b>{{ request.url }} <br>
                    <b>Status: </b>{{ request.statusCode }} <br>
                    <b>Size: </b>{{ request.transferSize }} bytes<br>
                    <b>Load Time: </b>{{ Math.trunc(request.endTime - request.startTime) }} ms<br>
                  </div>
                </div>

                <div v-else-if="request.url.includes('.css') || request.url.includes('.js') || request.url.includes('.html')">
                  <!-- <div> -->
                  <div class="code-request">
                    <b>Resource: </b>{{ request.url }} <br>
                    <b>Status: </b>{{ request.statusCode }} <br>
                    <b>Size: </b>{{ request.transferSize }} bytes<br>
                    <b>Load Time: </b>{{ Math.trunc(request.endTime - request.startTime) }} ms<br>
                  </div>
                </div>

                <div v-else-if="request.url.includes('.jpg') || request.url.includes('.gif') || request.url.includes('.jpeg') || request.url.includes('.png') || request.url.includes('.svg')">
                  <!-- <div> -->
                  <div class="img-request">
                    <b>Resource: </b>{{ request.url }} <br>
                    <b>Status: </b>{{ request.statusCode }} <br>
                    <b>Size: </b>{{ request.transferSize }} bytes<br>
                    <b>Load Time: </b>{{ Math.trunc(request.endTime - request.startTime) }} ms<br>
                  </div>
                </div>

                <div v-else>
                  <div class="other-request">
                    <b>Resource: </b>{{ request.url }} <br>
                    <b>Status: </b>{{ request.statusCode }} <br>
                    <b>Size: </b>{{ request.transferSize }} bytes<br>
                    <b>Load Time: </b>{{ Math.trunc(request.endTime - request.startTime) }} ms<br>
                  </div>
                </div>

              </li>
            </ul>
          </div>

        </div>

        <div class="" id="keys" v-if="navigationIsRequests">
          <div class="key-text"><small><b>Redirects: </b></small></div>
          <div id="redirect-key"></div>
          <div class="key-text"><small><b>Code: </b></small></div>
          <div id="code-key"></div>
          <div class="key-text"><small><b>Images: </b></small></div>
          <div id="img-key"></div>
          <div class="key-text"><small><b>Other: </b></small></div>
          <div id="other-key"></div>
        </div>

        <div class="speed-list-med content" v-if="navigationIsRecommendations">
          <h5 class="title is-5 has-text-centered">Performance Base Recommendations</h5>
          <div class="content">
            <br>
            <center><i class="fa fa-wrench fa-10x"></i></center>
            <h2 style="color: #ff7900" class="has-text-centered title is-2">Coming Coon</h2>
          </div>
        </div>
  
        </div>
        <!-- END SSL Readout section -->
 
      <!--END Swat DNS section -->
    </div>

    <!-- END Swat DNS section -->
  </div>

  <!-- END - Primary application deck -->
</template>

<script>
 
import axios from 'axios';
 
export default {
  name: 'App',
  data() {
    return {
      testStatus: '',
      navigationIsScores: true,
      navigationIsRequests: false,
      navigationIsRecommendations: false,
      domainName: '',
      requestedUrl: '',
      finalUrl: '',
      loadTime: '',
      speedIndexScore: '',
      ttfb: '',
      ttfbScore: '',
      totalSize: '',
      totalSizeScore: '',
      firstMeaningfulPaint: '',
      firstMeaningfulPaintScore:'',
      interactive: '',
      interactiveScore: '',
      renderBlockingContent: '',
      renderBlockingContentScore: '',
      renderBlockingContentList: [],
      unminifiedJavascript: '',
      unminifiedJavascriptScore: '',
      unminifiedCssScore: '',
      networkRequests: [],
      k:'AIzaSyA1jEQpwUfd_1HT6m0UAM32MeqCEohtiDQ'
      // curl https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://developers.google.com&key=AIzaSyA1jEQpwUfd_1HT6m0UAM32MeqCEohtiDQ
    }
  },
  computed: {
    totalNetworkRequests: function () {
      return this.networkRequests.length;
    },
    computedLoadTime: function () {
      let s = this.loadTime;
      s = s.replace('s', '')
      .replace('ms', '');
      s = Number(s);
      return s;
    },
    sizeScore: function () {
      let c = this.totalSize;
    },
    requestColor(){
      if (this.request) return 'img-request';
    },
    // NAVIAGATION
    // SCORE BARS
    unminifiedJavascriptBarColor: function () {
      if (this.unminifiedJavascriptScore <= 50) {
        return 'is-danger';
      }else if (this.unminifiedJavascriptScore > 50 && this.unminifiedJavascriptScore <= 80) {
        return 'is-warning';
      }else {
        return 'is-success';
      }
    },
    unminifiedCssBarColor: function () {
      if (this.unminifiedCssScore <= 50) {
        return 'is-danger';
      }else if (this.unminifiedCssScore > 50 && this.unminifiedCssScore <= 80) {
        return 'is-warning';
      }else {
        return 'is-success';
      }
    },
    loadTimeBarColor: function () {
      if (this.speedIndexScore <= 50) {
        return 'is-danger';
      }else if (this.speedIndexScore > 50 && this.speedIndexScore <= 80) {
        return 'is-warning';
      }else {
        return 'is-success';
      }
    },
    ttfbBarColor: function () {
      if (this.ttfbScore <= 50) {
        return 'is-danger';
      }else if (this.ttfbScore > 50 && this.ttfbScore <= 80) {
        return 'is-warning';
      }else {
        return 'is-success';
      }
    },
    totalSizeBarColor: function () {
      if (this.totalSizeScore <= 50) {
        return 'is-danger';
      }else if (this.totalSizeScore > 50 && this.totalSizeScore <= 80) {
        return 'is-warning';
      }else {
        return 'is-success';
      }
    },
    firstMeaningfulPaintBarColor: function () {
      if (this.firstMeaningfulPaintScore <= 50) {
        return 'is-danger';
      }else if (this.firstMeaningfulPaintScore > 50 && this.firstMeaningfulPaintScore <= 80) {
        return 'is-warning';
      }else {
        return 'is-success';
      }
    },
    interactiveBarColor: function () {
      if (this.interactiveScore <= 50) {
        return 'is-danger';
      }else if (this.interactiveScore > 50 && this.interactiveScore <= 80) {
        return 'is-warning';
      }else {
        return 'is-success';
      }
    },
    renderBlockingContentBarColor: function () {
      if (this.renderBlockingContentScore <= 50) {
        return 'is-danger';
      }else if (this.renderBlockingContentScore > 50 && this.renderBlockingContentScore <= 80) {
        return 'is-warning';
      }else {
        return 'is-success';
      }
    },
  },
  methods: {
    cleanScore: function (dirtyScore) {
      let score = dirtyScore
      if (score == 1) {
        return 100;
      }
      let n = score.toString();
      n = n.substring(n.indexOf(".") + 1);
      n = Number(n);
      return n;
    },
    navToScores: function () {
      this.navigationIsScores = true;
      this.navigationIsRecommendations = false;
      this.navigationIsRequests = false;
    },
    navToRequests: function () {
      this.navigationIsScores = false;
      this.navigationIsRecommendations = false;
      this.navigationIsRequests = true;
    },
    navToRecommendations: function () {
      this.navigationIsScores = false;
      this.navigationIsRecommendations = true;
      this.navigationIsRequests = false;
    },
    cleanUrl: function (dirtyURL){
      var a = dirtyURL.toLowerCase();
      if (a.startsWith("http") ) {
        a = a.split('/')[2];
        a = a
        .replace('https', '')
        .replace('http', '')
        .replace('www.', '')
        .replace('://', '')
        .replace(/\/$/, '')
        return a;
      } else if(a.startsWith("www.")){
        a = a
        .replace('https', '')
        .replace('http', '')
        .replace('www.', '')
        .replace('://', '')
        .replace(/\/$/, '')
        return a;
      } else {
        return a;
      }
    },
    handleSpeedTest: function (e) {
      var cleanedUrl = this.cleanUrl(this.domainName);
      let endpoint = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=http://' + cleanedUrl + '&key=AIzaSyA1jEQpwUfd_1HT6m0UAM32MeqCEohtiDQ';
      e.preventDefault();
      this.testStatus = 'loading';
      // alert(cleanedUrl);
      // cleanedUrl = clean
      axios.get(endpoint)
      .then(response => {
        this.requestedUrl =  response.data.lighthouseResult.requestedUrl ;
        this.finalUrl = response.data.lighthouseResult.finalUrl;
        this.loadTime = response.data.lighthouseResult.audits["speed-index"].displayValue;
        this.speedIndexScore = this.cleanScore(response.data.lighthouseResult.audits["speed-index"].score);
        this.ttfb = response.data.lighthouseResult.audits["time-to-first-byte"].displayValue;
        this.ttfbScore = this.cleanScore(response.data.lighthouseResult.audits["time-to-first-byte"].score);
        this.totalSize = response.data.lighthouseResult.audits["total-byte-weight"].displayValue;
        this.totalSizeScore = this.cleanScore(response.data.lighthouseResult.audits["total-byte-weight"].score);
        this.firstMeaningfulPaint = response.data.lighthouseResult.audits["first-meaningful-paint"].displayValue;
        this.firstMeaningfulPaintScore = this.cleanScore(response.data.lighthouseResult.audits["first-meaningful-paint"].score);
        this.interactive = response.data.lighthouseResult.audits.interactive.displayValue;
        this.interactiveScore = this.cleanScore(response.data.lighthouseResult.audits.interactive.score);
        this.renderBlockingContent = response.data.lighthouseResult.audits["render-blocking-resources"].displayValue;
        this.renderBlockingContentScore = this.cleanScore(response.data.lighthouseResult.audits["render-blocking-resources"].score);
        this.renderBlockingContentList = response.data.lighthouseResult.audits["render-blocking-resources"].details.items;
        this.unminifiedJavascriptScore = this.cleanScore( response.data.lighthouseResult.audits["unminified-javascript"].score);
        this.unminifiedCssScore = this.cleanScore(response.data.lighthouseResult.audits["unminified-css"].score);
        this.networkRequests = response.data.lighthouseResult.audits["network-requests"].details.items;
        this.testStatus = 'response';
      })
      .catch(error => {
        console.log("AXIOS ERROR: " + error);
      })
    }
  },
}
</script>
 
<style>

.redirect-request{
  padding: 8px 12px;
  border-left-style: solid;
  border-left-color: #65de8f;
  border-left-width: 5px;
  border-radius: 0px 3px 3px 0px;
  margin-bottom: 0px;
  background-color: hsl(0, 0%, 94%);
}

.img-request{
  padding: 8px 12px;
  border-left-style: solid;
  border-left-color: #ff738f;
  border-left-width: 5px;
  border-radius: 0px 3px 3px 0px;
  margin-bottom: 0px;
  background-color: hsl(0, 0%, 94%);
}

.code-request{
  padding: 8px 12px;
  border-left-style: solid;
  border-left-color: #62b9f3;
  border-left-width: 5px;
  border-radius: 0px 3px 3px 0px;
  margin-bottom: 0px;
  background-color: hsl(0, 0%, 94%);
}

.other-request{
  padding: 8px 12px;
  border-left-style: solid;
  border-left-color: #ffe789;
  border-left-width: 5px;
  border-radius: 0px 3px 3px 0px;
  margin-bottom: 0px;
  background-color: hsl(0, 0%, 94%);
}

#keys{
  width: 300px;
  margin: 0px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  border: 0px;
}

#redirect-key{
  width:18px;
  height:18px;
  background: #65de8f;
  border: 1px solid hsl(0, 0%, 58%); 
  border-radius: 3px;
  margin-left: 4px;
  margin-right: 12px;
}

#code-key{
  width:18px;
  height:18px;
  background: #62b9f3;
  border: 1px solid hsl(0, 0%, 58%); 
  border-radius: 3px;
  margin-left: 4px;
  margin-right: 12px;
}

#img-key{
  width:18px;
  height:18px;
  background: #ff738f;
  border: 1px solid hsl(0, 0%, 58%); 
  border-radius: 3px;
  margin-left: 4px;
  margin-right: 12px;
}

#other-key{
  width:18px;
  height:18px;
  background: #ffe789;
  border: 1px solid hsl(0, 0%, 58%); 
  border-radius: 3px;
  margin-left: 4px;
  margin-right: 12px;
}
 
#request-list{
  width: 100%;
  height: 360px;
  margin:0px;
  margin-left: auto;
  margin-right: auto;
  padding: 5px;
}

#request-list ul {
  margin-left: auto;
  margin-right: auto;
}

#requested li {
  border: 0px;
  padding: 5px;
  margin: 0px;
  font-size: 11px;
  word-wrap: break-word;
}
 
.help-link{
  color: #ff7900 !important;
}
 
.speed-nav{
  display:inline;
  cursor: pointer !important;
  font-size: 1.28em;
}
 
.active-results-link{
  color: #ff7900 !important;
  border-bottom-style: solid;
  border-bottom-width: 2px;
}

.inactive-results-link{
  color: #888 !important;
}

.speed-list-med{
  position: relative;
  border-style: none !important;
  margin: 0px;
  padding: 0px;
  margin-left: auto;
  margin-right: auto;
  height: 58vh;
  border: 1px solid hsl(0, 0%, 80%);
  border-radius: 0px 0px 4px 4px;
  overflow: scroll;
  overflow-y: scroll;
  -webkit-app-region: no-drag;
  width: 100%;
  font-size: 11px;
}

#opps-list {
  border: 0px;
  border-radius: 3px;
  margin-top: 5px;
  padding: 4px;
  padding-right: 15px;
  background-color: hsl(0, 0%, 96%);
}

#opps-list li {
  border-bottom: 1px solid hsl(0, 0%, 29%);
  margin-bottom: 10px;
  list-style-type: none;
}
.spd-lst b {
  color: hsl(348, 100%, 61%);
}

.speed-list-sm{
  border-style: none !important;
  margin: 0px;
  padding: 0px;
  margin-left: -40px;
  margin-right: -40px;
  height: 48vh;
  border: 1px solid hsl(0, 0%, 80%);
  border-radius: 0px 0px 4px 4px;
  overflow: scroll;
  -webkit-app-region: no-drag;
}
 
.loading-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120px;
  height: 120px;
  margin:-60px 0 0 -60px;
  -webkit-animation:spin 4s linear infinite;
  -moz-animation:spin 4s linear infinite;
  animation:spin 4s linear infinite;
}

#progress-t {
  height: 8px;
}
 
@-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
 
@-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
 
@keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
 
</style>