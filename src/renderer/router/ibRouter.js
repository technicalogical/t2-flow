
// BEGIN INBOUND SPECIFIC ROUTES

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