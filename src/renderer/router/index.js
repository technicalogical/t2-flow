// :::::::::: PRIMARY ROUTER ::::::::::

import Vue from 'vue'
import Router from 'vue-router'

// BEGIN Import of Department specific routers
import t1Router from './t1Router'
import ibRouter from './ibRouter'
import prdRouter from './prdRouter'
import t2Router from './t2Router'
// END Import of Department specific routers

import '../../../node_modules/bulma/css/bulma.min.css'



import TestIndex from '@/components/TestIndex'

// BEGIN Primary imported routes
import SwatHome from '@/components/SwatHome'
import SwatNote from '@/components/SwatNote'
import KiNote from '@/components/note/KiNote'
import PreNote from '@/components/note/PreNote'
import SwatTools from '@/components/SwatTools'
import FlowIndex from '@/components/FlowIndex'
import SwatSettings from '@/components/SwatSettings'
import SwatAutoWP from '@/components/SwatAutoWP'
// END Primary imported routes

// BEGIN Flow Page routes
import SwatFlow from '@/components/SwatFlow'
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
import SwatMAIL from '@/components/tools/SwatMAIL'
import SwatCHILD from '@/components/tools/SwatCHILD'
// END Swat Tools imported routes



Vue.use(Router)

export default new Router({

  routes: [

    ...t1Router,
    ...ibRouter,
    ...prdRouter,
    ...t2Router,

    {
      path: '/TestIndex',
      name: 'TestIndex',
      component: TestIndex
    },

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
      path: '/SwatAutoWP',
      name: 'Swat Auto WP',
      component: SwatAutoWP
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
      path: '/tools/SwatMAIL',
      name: 'Flow TP',
      component: SwatMAIL
    },
    {
      path: '/tools/SwatCHILD',
      name: 'SWAT CHILD',
      component: SwatCHILD
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

  ]
})
