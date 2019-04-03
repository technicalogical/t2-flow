import Vue from 'vue'
import Router from 'vue-router'

// BEGIN Import of Department specific routers
import toneRouter from './toneRouter'
import ibRouter from './ibRouter'
import prdRouter from './prdRouter'
// END Import of Department specific routers

import '../../../node_modules/bulma/css/bulma.min.css'

// BEGIN Primary imported routes
import SwatHome from '@/components/SwatHome'
import SwatNote from '@/components/SwatNote'
import KiNote from '@/components/note/KiNote'
import PreNote from '@/components/note/PreNote'
import SwatTools from '@/components/SwatTools'
import FlowIndex from '@/components/FlowIndex'
import SwatSettings from '@/components/SwatSettings'
// END Primary imported routes

// BEGIN Flow Page routes
// import SwatFlow from '@/components/SwatFlow'
// import prodFlow from '@/components/prodFlow'
// import toneFlow from '@/components/toneFlow'
// import ibFlow from '@/components/ibFlow'
// import miscFlow from '@/components/miscFlow'
// END Flow Page routes

// BEGIN Swat Links imported routes
import SwatLinks from '@/components/SwatLinks'
import HostingLinks from '@/components/links/HostingLinks'
import WebsiteLinks from '@/components/links/WebsiteLinks'
// END Swat Links imported routes

// BEGIN Swat Tools imported routes
import Transfer from '@/components/flow/pfc/Transfer'
import ServerCheck from '@/components/flow/pfc/ServerCheck'
import SwatDNS from '@/components/tools/SwatDNS'
import SwatSSL from '@/components/tools/SwatSSL'
import SwatSPEED from '@/components/tools/SwatSPEED'
import SwatWPPS from '@/components/tools/SwatWPPS'
import SwatSUCURI from '@/components/tools/SwatSUCURI'
import SwatWHOIS from '@/components/tools/SwatWHOIS'
import SwatSPLUNK from '@/components/tools/SwatSPLUNK'
import FlowTP from '@/components/tools/FlowTP'
// END Swat Tools imported routes

// BEGIN Guide imported routes
import Guide from '@/components/flow/guide/Guide'
import Gw from '@/components/flow/guide/Gw'
import GwL from '@/components/flow/guide/GwL'
import GwLy from '@/components/flow/guide/GwLy'
import GwLn from '@/components/flow/guide/GwLn'
import GwS from '@/components/flow/guide/GwS'
import GwW from '@/components/flow/guide/GwW'
import Gh from '@/components/flow/guide/Gh'
import GhH from '@/components/flow/guide/GhH'
import GhW from '@/components/flow/guide/GhW'
import GhWl from '@/components/flow/guide/GhWl'
import GhWlY from '@/components/flow/guide/GhWlY'
import GhWlN from '@/components/flow/guide/GhWlN'
import GhWs from '@/components/flow/guide/GhWs'
import GhWw from '@/components/flow/guide/GhWw'
import Gwpps from '@/components/flow/guide/Gwpps'
import Grestore from '@/components/flow/guide/Grestore'
import Gmig from '@/components/flow/guide/Gmig'
import Gemail from '@/components/flow/guide/Gemail'
import GemailC from '@/components/flow/guide/GemailC'
import GemailCc from '@/components/flow/guide/GemailCc'
import GemailCn from '@/components/flow/guide/GemailCn'
import GemailO from '@/components/flow/guide/GemailO'
import GemailW from '@/components/flow/guide/GemailW'
// END Guide imported routes

Vue.use(Router)

export default new Router({
  routes: [

    ...toneRouter, //TIer 1 router
    ...ibRouter, // Inbound router
    ...prdRouter, // Productivity router

    //BEGIN Primary Menu Routes
    {
      path: '/',
      name: 'SwatHome',
      component: SwatHome
    },
    {
      path: '/SwatNote',
      name: 'Swat Note',
      component: SwatNote
    },
    {
      path: '/note/PreNote',
      name: 'Pre Note',
      component: PreNote
    },
    {
      path: '/note/KiNote',
      name: 'KI Note',
      component: KiNote
    },
    {
      path: '/SwatTools',
      name: 'Swat Tools',
      component: SwatTools
    },
    {
      path: '/tools/SwatDNS',
      name: 'SWAT DNS',
      component: SwatDNS
    },
    {
      path: '/tools/SwatSSL',
      name: 'SWAT SSL',
      component: SwatSSL
    },
    {
      path: '/tools/SwatSPEED',
      name: 'SWAT SPEED',
      component: SwatSPEED
    },
    {
      path: '/tools/SwatWPPS',
      name: 'SWAT WPPS',
      component: SwatWPPS
    },
    {
      path: '/tools/SwatSUCURI',
      name: 'SWAT SUCURI',
      component: SwatSUCURI
    },
    {
      path: '/tools/SwatWHOIS',
      name: 'SWAT WHOIS',
      component: SwatWHOIS
    },
    {
      path: '/tools/SwatSPLUNK',
      name: 'SWAT SPLUNK',
      component: SwatSPLUNK
    },
    {
      path: '/tools/FlowTP',
      name: 'Flow TP',
      component: FlowTP
    },
    {
      path: '/SwatLinks',
      name: 'Swat Links',
      component: SwatLinks
    },
    {
      path: '/links/HostingLinks',
      name: 'Hosting Links',
      component: HostingLinks
    },
    {
      path: '/links/WebsiteLinks',
      name: 'Website Links',
      component: WebsiteLinks
    },
    {
      path: '/FlowIndex',
      name: 'Flow Index',
      component: FlowIndex
    },
    {
      path: '/SwatSettings',
      name: 'Swat Settings',
      component: SwatSettings
    },
    // END SWAT Primary Pages


    //BEGIN SWAT Flow pages
    {
      path: '/SwatFlow',
      name: 'SwatFlow',
      component: SwatFlow
    },
    {
      path: '/prodFlow',
      name: 'Prod Flow',
      component: prodFlow
    },
    {
      path: '/toneFlow',
      name: 'Tier One',
      component: toneFlow
    },
    {
      path: '/ibFlow',
      name: 'Inbound Flow',
      component: ibFlow
    },
    {
      path: '/miscFlow',
      name: 'Misc FLow',
      component: miscFlow
    },
    //END SWAT Flow pages

    // BEGIN - Checklists
    {
      path: '/flow/pfc/Transfer',
      name: 'Transfer',
      component: Transfer,
    },
    {
      path: '/flow/pfc/ServerCheck',
      name: 'ServerCheck',
      component: ServerCheck,
    },
    // END - Checklists

    // BEGIN - Guide Flow
    {
      path: '/flow/guide/Guide',
      name: 'Guide',
      component: Guide
    },
    {
      path: '/flow/guide/Gw',
      name: 'Gw',
      component: Gw
    },
    {
      path: '/flow/guide/GwL',
      name: 'GwL',
      component: GwL
    },
    {
      path: '/flow/guide/GwLy',
      name: 'GwLy',
      component: GwLy
    },
    {
      path: '/flow/guide/GwLn',
      name: 'GwLn',
      component: GwLn
    },
    {
      path: '/flow/guide/GwS',
      name: 'GwS',
      component: GwS
    },
    {
      path: '/flow/guide/GwW',
      name: 'GwW',
      component: GwW
    },
    {
      path: '/flow/guide/Gh',
      name: 'Gh',
      component: Gh
    },
    {
      path: '/flow/guide/GhH',
      name: 'GhH',
      component: GhH
    },
    {
      path: '/flow/guide/GhW',
      name: 'GhW',
      component: GhW
    },
    {
      path: '/flow/guide/GhWl',
      name: 'GhWl',
      component: GhWl
    },
    {
      path: '/flow/guide/GhWlY',
      name: 'GhWlY',
      component: GhWlY
    },
    {
      path: '/flow/guide/GhWlN',
      name: 'GhWlN',
      component: GhWlN
    },
    {
      path: '/flow/guide/GhWs',
      name: 'GhWs',
      component: GhWs
    },
    {
      path: '/flow/guide/GhWw',
      name: 'GhWw',
      component: GhWw
    },
    {
      path: '/flow/guide/Gwpps',
      name: 'Gwpps',
      component: Gwpps
    },
    {
      path: '/flow/guide/Grestore',
      name: 'Grestore',
      component: Grestore
    },
    {
      path: '/flow/guide/Gmig',
      name: 'Gmig',
      component: Gmig
    },
    {
      path: '/flow/guide/Gemail',
      name: 'Gemail',
      component: Gemail
    },
    {
      path: '/flow/guide/GemailC',
      name: 'GemailC',
      component: GemailC
    },
    {
      path: '/flow/guide/GemailCc',
      name: 'GemailCc',
      component: GemailCc
    },
    {
      path: '/flow/guide/GemailCn',
      name: 'GemailCn',
      component: GemailCn
    },
    {
      path: '/flow/guide/GemailO',
      name: 'GemailO',
      component: GemailO
    },
    {
      path: '/flow/guide/GemailW',
      name: 'GemailW',
      component: GemailW
    },
    // END - Guide Flow

  ]
})
