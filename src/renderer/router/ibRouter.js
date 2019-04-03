// :::::::::: INBOUND ROUTER ::::::::::

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

// Begin 404 error imported routes
import ibFourFour from '../components/flow/ib/ibFourFour'
import ibFourThree from '../components/flow/ib/ibFourThree'
// End 404 error imported routes

// Begin 500 error imported routes
import ibFiveError from '../components/flow/ib/fiveerror/ibFiveError'
import ibY from '../components/flow/ib/fiveerror/ibY'
import ibYfos from '../components/flow/ib/fiveerror/ibYfos'
import ibYadm from '../components/flow/ib/fiveerror/ibYadm'
import ibN from '../components/flow/ib/fiveerror/ibN'
// End 500 error imported routes

// BEGIN 503 error imported routes
import ibFiveThree from '../components/flow/ib/fiveothreeerror/ibFiveThree'
import ibMwp from '../components/flow/ib/fiveothreeerror/ibMwp'
import ibMwpY from '../components/flow/ib/fiveothreeerror/ibMwpY'
import ibMwpN from '../components/flow/ib/fiveothreeerror/ibMwpN'
import ibPlk from '../components/flow/ib/fiveothreeerror/ibPlk'
import ibPlkY from '../components/flow/ib/fiveothreeerror/ibPlkY'
import ibPlkN from '../components/flow/ib/fiveothreeerror/ibPlkN'
import ibLin from '../components/flow/ib/fiveothreeerror/ibLin'
import ibLinC from '../components/flow/ib/fiveothreeerror/ibLinC'
import ibLinCy from '../components/flow/ib/fiveothreeerror/ibLinCy'
import ibLinCyY from '../components/flow/ib/fiveothreeerror/ibLinCyY'
import ibLinCyN from '../components/flow/ib/fiveothreeerror/ibLinCyN'
import ibLinCyNy from '../components/flow/ib/fiveothreeerror/ibLinCyNy'
import ibLinCyNn from '../components/flow/ib/fiveothreeerror/ibLinCyNn'
import ibLinCn from '../components/flow/ib/fiveothreeerror/ibLinCn'
import ibLinF from '../components/flow/ib/fiveothreeerror/ibLinF'
// END 503 error imported routes

// BEGIN WordPress imported routes
import ibWp from '../components/flow/ib/wp/ibWp'
import ibWpM from '../components/flow/ib/wp/ibWpM'
import ibWpMy from '../components/flow/ib/wp/ibWpMy'
import ibWpMn from '../components/flow/ib/wp/ibWpMn'
import ibWpS from '../components/flow/ib/wp/ibWpS'
import ibWpSn from '../components/flow/ib/wp/ibWpSn'
import ibWpSs from '../components/flow/ib/wp/ibWpSs'
import ibWpSw from '../components/flow/ib/wp/ibWpSw'
import ibWpSwY from '../components/flow/ib/wp/ibWpSwY'
import ibWpSwN from '../components/flow/ib/wp/ibWpSwN'
// END WordPress imported routes

// END INBOUND SPECIFIC ROUTES

export default [

    // BEGIN PRIMARY INBOUND FLOW SECTION

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

    // Begin IB 403 Error Flow
    {
      path: '/flow/ib/ibFourThree',
      name: 'ibFourThree',
      component: ibFourThree
    },
    // End IB 403 Error Flow

    // Begin IB 404 Error Flow
    {
      path: '/flow/ib/ibFourFour',
      name: 'ibFourFour',
      component: ibFourFour
    },
    // End IB 404 Error Flow

    // Begin IB 500 Error Flow
    {
      path: '/flow/ib/fiveerror/ibFiveError',
      name: 'ib500 Error',
      component: ibFiveError
    },
    {
      path: '/flow/ib/fiveerror/ibY',
      name: 'ibY',
      component: ibY
    },
    {
      path: '/flow/ib/fiveerror/ibYadm',
      name: 'ibYadm',
      component: ibYadm
    },
    {
      path: '/flow/ib/fiveerror/ibYfos',
      name: 'ibYfos',
      component: ibYfos
    },
    {
      path: '/flow/ib/fiveerror/ibN',
      name: 'ibN',
      component: ibN
    },
    // End IB 500 Error Flow

     // Begin IB 503 Error Flow
     {
      path: '/flow/ib/fiveothreeerror/ibFiveThree',
      name: 'ib503 Error',
      component: ibFiveThree
    },
    {
      path: '/flow/ib/fiveothreeerror/ibMwp',
      name: 'ibMwp',
      component: ibMwp
    },
    {
      path: '/flow/ib/fiveothreeerror/ibMwpY',
      name: 'ibMwpY',
      component: ibMwpY
    },
    {
      path: '/flow/ib/fiveothreeerror/ibMwpN',
      name: 'ibMwpN',
      component: ibMwpN
    },
    {
      path: '/flow/ib/fiveothreeerror/ibPlk',
      name: 'ibPlk',
      component: ibPlk
    },
    {
      path: '/flow/ib/fiveothreeerror/ibPlkY',
      name: 'ibPlkY',
      component: ibPlkY
    },
    {
      path: '/flow/ib/fiveothreeerror/ibPlkN',
      name: 'ibPlkN',
      component: ibPlkN
    },
    {
      path: '/flow/ib/fiveothreeerror/ibLin',
      name: 'ibLin',
      component: ibLin
    },
    {
      path: '/flow/ib/fiveothreeerror/ibLinC',
      name: 'ibLinC',
      component: ibLinC
    },
    {
      path: '/flow/ib/fiveothreeerror/ibLinCy',
      name: 'ibLinCy',
      component: ibLinCy
    },
    {
      path: '/flow/ib/fiveothreeerror/ibLinCyY',
      name: 'ibLinCyY',
      component: ibLinCyY
    },
    {
      path: '/flow/ib/fiveothreeerror/ibLinCyN',
      name: 'ibLinCyN',
      component: ibLinCyN
    },
    {
      path: '/flow/ib/fiveothreeerror/ibLinCyNy',
      name: 'ibLinCyNy',
      component: ibLinCyNy
    },
    {
      path: '/flow/ib/fiveothreeerror/ibLinCyNn',
      name: 'ibLinCyNn',
      component: ibLinCyNn
    },
    {
      path: '/flow/ib/fiveothreeerror/ibLinCn',
      name: 'ibLinCn',
      component: ibLinCn
    },
    {
      path: '/flow/ib/fiveothreeerror/ibLinF',
      name: 'ibLinF',
      component: ibLinF
    },
    // End IB 503 Error Flow

    // Begin IB WordPress Flow
    {
      path: '/flow/ib/wp/ibWp',
      name: 'ibWp',
      component: ibWp
    },
    {
      path: '/flow/ib/wp/ibWpM',
      name: 'ibWpM',
      component: ibWpM
    },
    {
      path: '/flow/ib/wp/ibWpMy',
      name: 'ibWpMy',
      component: ibWpMy
    },
    {
      path: '/flow/ib/wp/ibWpMn',
      name: 'ibWpMn',
      component: ibWpMn
    },
    {
      path: '/flow/ib/wp/ibWpS',
      name: 'ibWpS',
      component: ibWpS
    },
    {
      path: '/flow/ib/wp/ibWpSn',
      name: 'ibWpSn',
      component: ibWpSn
    },
    {
      path: '/flow/ib/wp/ibWpSs',
      name: 'ibWpSs',
      component: ibWpSs
    },
    {
      path: '/flow/ib/wp/ibWpSw',
      name: 'ibWpSw',
      component: ibWpSw
    },
    {
      path: '/flow/ib/wp/ibWpSwY',
      name: 'ibWpSwY',
      component: ibWpSwY
    },
    {
      path: '/flow/ib/wp/ibWpSwN',
      name: 'ibWpSwN',
      component: ibWpSwN
    },
    // END - WordPress Flow

    // END PRIMARY INBOUND FLOW SECTION

  ]