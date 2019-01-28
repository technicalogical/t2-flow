import Vue from 'vue'
import Router from 'vue-router'
import '../../../node_modules/bulma/css/bulma.css';

// BEGIN Primary imported routes
import SwatHome from '@/components/SwatHome'
import SwatFlow from '@/components/SwatFlow'
import SwatNote from '@/components/SwatNote'
import SwatTools from '@/components/SwatTools'
import SwatLinks from '@/components/SwatLinks'
import SwatSettings from '@/components/SwatSettings'
// END Primary imported routes

// SWAT Flow main menu routes
import FiveError from '@/components/flow/FiveError'
import FourThree from '@/components/flow/FourThree'
import FourFour from '@/components/flow/FourFour'
import FiveThree from '@/components/flow/FiveThree'
import FormError from '@/components/flow/FormError'
import CpEmail from '@/components/flow/CpEmail'
import Ftp from '@/components/flow/Ftp'
import Splunk from '@/components/flow/Splunk'
import Malware from '@/components/flow/Malware'
import FlowTwo from '@/components/FlowTwo'
import FlowThree from '@/components/FlowThree'
import FlowFour from '@/components/FlowFour'
//SWAT Flow main menu routes

// BEGIN Form Mail error imported routes
import FormY from '@/components/flow/form/FormY'
import FormYb from '@/components/flow/form/FormYb'
import FormN from '@/components/flow/form/FormN'
import FormNa from '@/components/flow/form/FormNa'
import FormNaY from '@/components/flow/form/FormNaY'
import FormNaYa from '@/components/flow/form/FormNaYa'
import FormNaYb from '@/components/flow/form/FormNaYb'
import FormNaYbY from '@/components/flow/form/FormNaYbY'
import FormNaYbN from '@/components/flow/form/FormNaYbN'
import FormNaYc from '@/components/flow/form/FormNaYc'
import FormNaN from '@/components/flow/form/FormNaN'
// END Form Mail error imported routes

// BEGIN SSL error imported routes
import SslError from '@/components/flow/SslError'
import SslY from '@/components/flow/ssl/SslY'
import SslYa from '@/components/flow/ssl/SslYa'
import SslYaA from '@/components/flow/ssl/SslYaA'
import SslYaB from '@/components/flow/ssl/SslYaB'
import SslYaBy from '@/components/flow/ssl/SslYaBy'
import SslYb from '@/components/flow/ssl/SslYb'
import SslN from '@/components/flow/ssl/SslN'
import SslNa from '@/components/flow/ssl/SslNa'
import SslNb from '@/components/flow/ssl/SslNb'
import SslNbY from '@/components/flow/ssl/SslNbY'
import SslNbN from '@/components/flow/ssl/SslNbN'
// END SSL error imported routes

// BEGIN 500 error imported routes
import Fos from '@/components/flow/fivehundrederror/Fos'
import FosYes from '@/components/flow/fivehundrederror/FosYes'
import FosNo from '@/components/flow/fivehundrederror/FosNo'
import Wpad from '@/components/flow/fivehundrederror/Wpad'
import WpadYes from '@/components/flow/fivehundrederror/WpadYes'
import WpadNo from '@/components/flow/fivehundrederror/WpadNo'
import MwpYes from '@/components/flow/fivehundrederror/MwpYes'
import MwpYesNo from '@/components/flow/fivehundrederror/MwpYesNo'
import MwpYesNoYes from '@/components/flow/fivehundrederror/MwpYesNoYes'
import MwpYesNoNo from '@/components/flow/fivehundrederror/MwpYesNoNo'
import MwpYesYes from '@/components/flow/fivehundrederror/MwpYesYes'
import MwpNo from '@/components/flow/fivehundrederror/MwpNo'
import MwpYesFinal from '@/components/flow/fivehundrederror/MwpYesFinal'
import MwpNoFinal from '@/components/flow/fivehundrederror/MwpNoFinal'
// END 500 error imported routes

// BEGIN 403 error imported routes
import IndexYes from '@/components/flow/fourothree/IndexYes'
import IndexYesYes from '@/components/flow/fourothree/IndexYesYes'
import IndexNo from '@/components/flow/fourothree/IndexNo'
import IndexYesNo from '@/components/flow/fourothree/IndexYesNo'
// END 403 error imported routes

// BEGIN 404 error imported routes
import WpYes from '@/components/flow/fourofour/WpYes'
import WpYesYes from '@/components/flow/fourofour/WpYesYes'
import WpYesNo from '@/components/flow/fourofour/WpYesNo'
import WpYesYesNo from '@/components/flow/fourofour/WpYesYesNo'
import WpYesYesFinal from '@/components/flow/fourofour/WpYesYesFinal'
import WpGeoffYes from '@/components/flow/fourofour/WpGeoffYes'
import WpGeoffNo from '@/components/flow/fourofour/WpGeoffNo'
import WpGeoffYesStop from '@/components/flow/fourofour/WpGeoffYesStop'
import WpGeoffNoStop from '@/components/flow/fourofour/WpGeoffNoStop'
// END 404 error imported routes

// BEGIN 503 error imported routes
import MwpY from '@/components/flow/fiveothree/mwp/MwpY'
import MwpYyes from '@/components/flow/fiveothree/mwp/MwpYyes'
import MwpYyesFinal from '@/components/flow/fiveothree/mwp/MwpYyesFinal'
import MwpYno from '@/components/flow/fiveothree/mwp/MwpYno'
import MwpYnoFinal from '@/components/flow/fiveothree/mwp/MwpYnoFinal'
import WinYes from '@/components/flow/fiveothree/win/WinYes'
import WinYesY from '@/components/flow/fiveothree/win/WinYesY'
import WinYesYyes from '@/components/flow/fiveothree/win/WinYesYyes'
import WinYesYno from '@/components/flow/fiveothree/win/WinYesYno'
import WinYesYnoY from '@/components/flow/fiveothree/win/WinYesYnoY'
import WinYesYnoN from '@/components/flow/fiveothree/win/WinYesYnoN'
import WinYesN from '@/components/flow/fiveothree/win/WinYesN'
import LinYes from '@/components/flow/fiveothree/linux/LinYes'
import LinYesY from '@/components/flow/fiveothree/linux/LinYesY'
import LinYesYyes from '@/components/flow/fiveothree/linux/LinYesYyes'
import LinYesYyesY from '@/components/flow/fiveothree/linux/LinYesYyesY'
import LinYesYyesN from '@/components/flow/fiveothree/linux/LinYesYyesN'
import LinYesYyesNy from '@/components/flow/fiveothree/linux/LinYesYyesNy'
import LinYesYyesNn from '@/components/flow/fiveothree/linux/LinYesYyesNn'
import LinYesYno from '@/components/flow/fiveothree/linux/LinYesYno'
import LinYesYnoD from '@/components/flow/fiveothree/linux/LinYesYnoD'
import LinYesN from '@/components/flow/fiveothree/linux/LinYesN'
// END 503 error imported routes

// BEGIN Swat Links imported routes
import HostingLinks from '@/components/links/HostingLinks'
import WebsiteLinks from '@/components/links/WebsiteLinks'
// END Swat Links imported routes

// BEGIN Swat Tools imported routes
import SwatDNS from '@/components/tools/SwatDNS'
import SwatSSL from '@/components/tools/SwatSSL'
// END Swat Tools imported routes

// BEGIN cPanel Email imported routes
import cpmR from '@/components/flow/cpemail/cpmR'
import cpmRy from '@/components/flow/cpemail/cpmRy'
import cpmRyL from '@/components/flow/cpemail/cpmRyL'
import cpmRyLn from '@/components/flow/cpemail/cpmRyLn'
import cpmRyLy from '@/components/flow/cpemail/cpmRyLy'
import cpmRyLyN from '@/components/flow/cpemail/cpmRyLyN'
import cpmRyLyY from '@/components/flow/cpemail/cpmRyLyY'
import cpmRyR from '@/components/flow/cpemail/cpmRyR'
import cpmRn from '@/components/flow/cpemail/cpmRn'
import cpmS from '@/components/flow/cpemail/cpmS'
import cpmSy from '@/components/flow/cpemail/cpmSy'
import cpmSyL from '@/components/flow/cpemail/cpmSyL'
import cpmSyR from '@/components/flow/cpemail/cpmSyR'
import cpmSyRc from '@/components/flow/cpemail/cpmSyRc'
import cpmSyRcNn from '@/components/flow/cpemail/cpmSyRcNn'
import cpmSyRcNy from '@/components/flow/cpemail/cpmSyRcNy'
import cpmSyRcNyN from '@/components/flow/cpemail/cpmSyRcNyN'
import cpmSyRcNyY from '@/components/flow/cpemail/cpmSyRcNyY'
import cpmSyRcN from '@/components/flow/cpemail/cpmSyRcN'
import cpmSyRcY from '@/components/flow/cpemail/cpmSyRcY'
import cpmSyRw from '@/components/flow/cpemail/cpmSyRw'
import cpmSyRwY from '@/components/flow/cpemail/cpmSyRwY'
import cpmSyRwYy from '@/components/flow/cpemail/cpmSyRwYy'
import cpmSyRwYn from '@/components/flow/cpemail/cpmSyRwYn'
import cpmSyRwYnY from '@/components/flow/cpemail/cpmSyRwYnY'
import cpmSyRwYnN from '@/components/flow/cpemail/cpmSyRwYnN'
import cpmSyRwN from '@/components/flow/cpemail/cpmSyRwN'
import cpmSyRwNy from '@/components/flow/cpemail/cpmSyRwNy'
import cpmSyRwNyN from '@/components/flow/cpemail/cpmSyRwNyN'
import cpmSyRwNyY from '@/components/flow/cpemail/cpmSyRwNyY'
import cpmSyRwNn from '@/components/flow/cpemail/cpmSyRwNn'
import cpmSyRwNnY from '@/components/flow/cpemail/cpmSyRwNnY'
import cpmSyRwNnN from '@/components/flow/cpemail/cpmSyRwNnN'
import cpmSn from '@/components/flow/cpemail/cpmSn'
// END cPanel Email imported routes

// BEGIN FTP Support imported routes
import Cftp from '@/components/flow/ftp/create/Cftp'
import CftpL from '@/components/flow/ftp/create/CftpL'
import CftpLc from '@/components/flow/ftp/create/CftpLc'
import CftpLf from '@/components/flow/ftp/create/CftpLf'
import CftpW from '@/components/flow/ftp/create/CftpW'
import CftpWp from '@/components/flow/ftp/create/CftpWp'
import CftpWf from '@/components/flow/ftp/create/CftpWf'
import CftpM from '@/components/flow/ftp/create/CftpM'
import Tftp from '@/components/flow/ftp/troubleshoot/Tftp'
import TftpY from '@/components/flow/ftp/troubleshoot/TftpY'
import TftpYn from '@/components/flow/ftp/troubleshoot/TftpYn'
import TftpYnY from '@/components/flow/ftp/troubleshoot/TftpYnY'
import TftpYnN from '@/components/flow/ftp/troubleshoot/TftpYnN'
import TftpYnNa from '@/components/flow/ftp/troubleshoot/TftpYnNa'
import TftpYnNb from '@/components/flow/ftp/troubleshoot/TftpYnNb'
import TftpYy from '@/components/flow/ftp/troubleshoot/TftpYy'
import TftpN from '@/components/flow/ftp/troubleshoot/TftpN'
import TftpNy from '@/components/flow/ftp/troubleshoot/TftpNy'
import TftpNn from '@/components/flow/ftp/troubleshoot/TftpNn'
import TftpNnY from '@/components/flow/ftp/troubleshoot/TftpNnY'
import TftpNnN from '@/components/flow/ftp/troubleshoot/TftpNnN'
import TftpNnNy from '@/components/flow/ftp/troubleshoot/TftpNnNy'
import TftpNnNn from '@/components/flow/ftp/troubleshoot/TftpNnNn'
import TftpNnNnN from '@/components/flow/ftp/troubleshoot/TftpNnNnN'
import TftpNnNnNa from '@/components/flow/ftp/troubleshoot/TftpNnNnNa'
import TftpNnNnNb from '@/components/flow/ftp/troubleshoot/TftpNnNnNb'
import TftpNnNnY from '@/components/flow/ftp/troubleshoot/TftpNnNnY'
// END FTP Support imported routes

// BEGIN Identifying Malware imported routes
import MalY from '@/components/flow/malware/MalY'
import MalN from '@/components/flow/malware/MalN'
import MalNy from '@/components/flow/malware/MalNy'
import MalNn from '@/components/flow/malware/MalNn'
// END Identifying Malware imported routes

// BEGIN SPlunk usage imported routes
import SplunkA from '@/components/flow/splunk/SplunkA'
import SplunkAy from '@/components/flow/splunk/SplunkAy'
import SplunkAn from '@/components/flow/splunk/SplunkAn'
import SplunkC from '@/components/flow/splunk/SplunkC'
import SplunkCy from '@/components/flow/splunk/SplunkCy'
import SplunkCn from '@/components/flow/splunk/SplunkCn'
import SplunkD from '@/components/flow/splunk/SplunkD'
import SplunkDy from '@/components/flow/splunk/SplunkDy'
import SplunkDyY from '@/components/flow/splunk/SplunkDyY'
import SplunkDyN from '@/components/flow/splunk/SplunkDyN'
import SplunkDn from '@/components/flow/splunk/SplunkDn'
import SplunkDnB from '@/components/flow/splunk/SplunkDnB'
import SplunkDnC from '@/components/flow/splunk/SplunkDnC'
import SplunkDnD from '@/components/flow/splunk/SplunkDnD'
import SplunkDnS from '@/components/flow/splunk/SplunkDnS'
import SplunkP from '@/components/flow/splunk/SplunkP'
// END SPlunk usage imported routes

// BEGIN Debug mode imported routes
import Debug from '@/components/flow/howto/debugmode/Debug'
import DebugC from '@/components/flow/howto/debugmode/DebugC'
import DebugCy from '@/components/flow/howto/debugmode/DebugCy'
import DebugCn from '@/components/flow/howto/debugmode/DebugCn'
import DebugCnY from '@/components/flow/howto/debugmode/DebugCnY'
import DebugCnN from '@/components/flow/howto/debugmode/DebugCnN'
import DebugF from '@/components/flow/howto/debugmode/DebugF'
import DebugM from '@/components/flow/howto/debugmode/DebugM'
import DebugW from '@/components/flow/howto/debugmode/DebugW'
import DebugWf from '@/components/flow/howto/debugmode/DebugWf'
import DebugWfY from '@/components/flow/howto/debugmode/DebugWfY'
import DebugWfN from '@/components/flow/howto/debugmode/DebugWfN'
import DebugWp from '@/components/flow/howto/debugmode/DebugWp'
import DebugWpY from '@/components/flow/howto/debugmode/DebugWpY'
import DebugWpN from '@/components/flow/howto/debugmode/DebugWpN'
//END Debug mode imported routes

// BEGIN Server uptime imported routes
import Uptime from '@/components/flow/howto/uptime/Uptime'
import UptimeL from '@/components/flow/howto/uptime/UptimeL'
import UptimeLs from '@/components/flow/howto/uptime/UptimeLs'
import UptimeLsY from '@/components/flow/howto/uptime/UptimeLsY'
import UptimeLsYy from '@/components/flow/howto/uptime/UptimeLsYy'
import UptimeLsYn from '@/components/flow/howto/uptime/UptimeLsYn'
import UptimeLsN from '@/components/flow/howto/uptime/UptimeLsN'
import UptimeLsNy from '@/components/flow/howto/uptime/UptimeLsNy'
import UptimeLsNn from '@/components/flow/howto/uptime/UptimeLsNn'
import UptimeLsNnY from '@/components/flow/howto/uptime/UptimeLsNnY'
import UptimeLsNnN from '@/components/flow/howto/uptime/UptimeLsNnN'
import UptimeLv from '@/components/flow/howto/uptime/UptimeLv'
import UptimeLvY from '@/components/flow/howto/uptime/UptimeLvY'
import UptimeLvN from '@/components/flow/howto/uptime/UptimeLvN'
import UptimeLvNy from '@/components/flow/howto/uptime/UptimeLvNy'
import UptimeLvNn from '@/components/flow/howto/uptime/UptimeLvNn'
import UptimeLvNnY from '@/components/flow/howto/uptime/UptimeLvNnY'
import UptimeLvNnN from '@/components/flow/howto/uptime/UptimeLvNnN'
import UptimeW from '@/components/flow/howto/uptime/UptimeW'
import UptimeWs from '@/components/flow/howto/uptime/UptimeWs'
import UptimeWv from '@/components/flow/howto/uptime/UptimeWv'
import UptimeWvY from '@/components/flow/howto/uptime/UptimeWvY'
import UptimeWvN from '@/components/flow/howto/uptime/UptimeWvN'
import UptimeWvNy from '@/components/flow/howto/uptime/UptimeWvNy'
import UptimeWvNn from '@/components/flow/howto/uptime/UptimeWvNn'
import UptimeWvNnY from '@/components/flow/howto/uptime/UptimeWvNnY'
import UptimeWvNnN from '@/components/flow/howto/uptime/UptimeWvNnN'
// END Server uptime imported routes

// BEGIN Sucuri tickets imported routes
import Sucuri from '@/components/flow/howto/sucuri/Sucuri'
import SucuriB from '@/components/flow/howto/sucuri/SucuriB'
import SucuriC from '@/components/flow/howto/sucuri/SucuriC'
import SucuriCy from '@/components/flow/howto/sucuri/SucuriCy'
import SucuriCyY from '@/components/flow/howto/sucuri/SucuriCyY'
import SucuriCyN from '@/components/flow/howto/sucuri/SucuriCyN'
import SucuriCyNy from '@/components/flow/howto/sucuri/SucuriCyNy'
import SucuriCyNn from '@/components/flow/howto/sucuri/SucuriCyNn'
import SucuriCn from '@/components/flow/howto/sucuri/SucuriCn'
import SucuriF from '@/components/flow/howto/sucuri/SucuriF'
import SucuriFy from '@/components/flow/howto/sucuri/SucuriFy'
import SucuriFyY from '@/components/flow/howto/sucuri/SucuriFyY'
import SucuriFyYy from '@/components/flow/howto/sucuri/SucuriFyYy'
import SucuriFyYyY from '@/components/flow/howto/sucuri/SucuriFyYyY'
import SucuriFyYyN from '@/components/flow/howto/sucuri/SucuriFyYyN'
import SucuriFyYn from '@/components/flow/howto/sucuri/SucuriFyYn'
import SucuriFyYnY from '@/components/flow/howto/sucuri/SucuriFyYnY'
import SucuriFyYnN from '@/components/flow/howto/sucuri/SucuriFyYnN'
import SucuriFyN from '@/components/flow/howto/sucuri/SucuriFyN'
import SucuriFn from '@/components/flow/howto/sucuri/SucuriFn'
// END Sucuri tickets imported routes

// BEGIN WPPS imported routes
import Wpps from '@/components/flow/howto/wpps/Wpps'
// END WPPS imported routes

Vue.use(Router)

export default new Router({
  routes: [

    //END Primary Menu Routes
    {
      path: '/',
      name: 'SwatHome',
      component: SwatHome
    },
    {
      path: '/SwatFlow',
      name: 'SwatFlow',
      component: SwatFlow
    },
    {
      path: '/SwatNote',
      name: 'Swat Note',
      component: SwatNote
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
      path: '/SwatSettings',
      name: 'Swat Settings',
      component: SwatSettings
    },
    //END Primary Menu Routes

    //BEGIN SWAT Flow pages
    {
      path: '/FlowTwo',
      name: 'Flow Two',
      component: FlowTwo
    },
    {
      path: '/FlowThree',
      name: 'Flow Three',
      component: FlowThree
    },
    {
      path: '/FlowFour',
      name: 'Flow Four',
      component: FlowFour
    },
    //END SWAT Flow pages

    
    //END - cPanel Email Flow


    // BEGIN - 500 Error Flow
    {
      path: '/flow/FiveError',
      name: 'FiveError',
      component: FiveError,
    },
    {
      path: '/flow/fivehundrederror/Fos',
      name: 'Fos',
      component: Fos
    },
    {
      path: '/flow/fivehundrederror/FosYes',
      name: 'FosYes',
      component: FosYes
    },
    {
      path: '/flow/fivehundrederror/FosNo',
      name: 'FosNo',
      component: FosNo
    },
    {
      path: '/flow/fivehundrederror/Wpad',
      name: 'Wpad',
      component: Wpad
    },
    {
      path: '/flow/fivehundrederror/WpadYes',
      name: 'WpadYes',
      component: WpadYes
    },
    {
      path: '/flow/fivehundrederror/WpadNo',
      name: 'WpadNo',
      component: WpadNo
    },
    {
      path: '/flow/fivehundrederror/MwpYes',
      name: 'MwpYes',
      component: MwpYes
    },
    {
      path: '/flow/fivehundrederror/MwpYesNo',
      name: 'MwpYesNo',
      component: MwpYesNo
    },
    {
      path: '/flow/fivehundrederror/MwpYesNoYes',
      name: 'MwpYesNoYes',
      component: MwpYesNoYes
    },
    {
      path: '/flow/fivehundrederror/MwpYesNoNo',
      name: 'MwpYesNoNo',
      component: MwpYesNoNo
    },
    {
      path: '/flow/fivehundrederror/MwpYesYes',
      name: 'MwpYesYes',
      component: MwpYesYes
    },
    {
      path: '/flow/fivehundrederror/MwpNo',
      name: 'MwpNo',
      component: MwpNo
    },
    {
      path: '/flow/fivehundrederror/MwpYesFinal',
      name: 'MwpYesFinal',
      component: MwpYesFinal
    },
    {
      path: '/flow/fivehundrederror/MwpNoFinal',
      name: 'MwpNoFinal',
      component: MwpNoFinal
    },
    // END - 500 Error Flow

    // BEGIN - 403 Error Flow
    {
      path: '/flow/FourThree',
      name: 'FourThree',
      component: FourThree,
    },
    {
      path: '/flow/fourothree/IndexYes',
      name: 'IndexYes',
      component: IndexYes
    },
    {
      path: '/flow/fourothree/IndexYesYes',
      name: 'IndexYesYes',
      component: IndexYesYes
    },
    {
      path: '/flow/fourothree/IndexYesNo',
      name: 'IndexYesNo',
      component: IndexYesNo
    },
    {
      path: '/flow/fourothree/IndexNo',
      name: 'IndexNo',
      component: IndexNo
    },
    // END - 403 Error Flow

    // BEGIN - 404 Error Flow
    {
      path: '/flow/FourFour',
      name: 'FourFour',
      component: FourFour,
    },
    {
      path: '/flow/fourofour/WpYes',
      name: 'WpYes',
      component: WpYes,
    },
    {
      path: '/flow/fourofour/WpYesYes',
      name: 'WpYesYes',
      component: WpYesYes,
    },
    {
      path: '/flow/fourofour/WpYesNo',
      name: 'WpYesNo',
      component: WpYesNo,
    },
    {
      path: '/flow/fourofour/WpYesYesNo',
      name: 'WpYesYesNo',
      component: WpYesYesNo,
    },
    {
      path: '/flow/fourofour/WpYesYesFinal',
      name: 'WpYesYesFinal',
      component: WpYesYesFinal,
    },
    {
      path: '/flow/fourofour/WpGeoffYes',
      name: 'WpGeoffYes',
      component: WpGeoffYes,
    },
    {
      path: '/flow/fourofour/WpGeoffNo',
      name: 'WpGeoffNo',
      component: WpGeoffNo,
    },
    {
      path: '/flow/fourofour/WpGeoffYesStop',
      name: 'WpGeoffYesStop',
      component: WpGeoffYesStop,
    },
    {
      path: '/flow/fourofour/WpGeoffNoStop',
      name: 'WpGeoffNoStop',
      component: WpGeoffNoStop,
    },
    // END - 404 Error Flow

    // BEGIN - 503 Error Flow
    {
      path: '/flow/FiveThree',
      name: 'FiveThree',
      component: FiveThree,
    },
    {
      path: '/flow/fiveothree/mwp/MwpY',
      name: 'MwpY',
      component: MwpY,
    },
    {
      path: '/flow/fiveothree/mwp/MwpYyes',
      name: 'MwpYyes',
      component: MwpYyes,
    },
    {
      path: '/flow/fiveothree/mwp/MwpYyesFinal',
      name: 'MwpYyesFinal',
      component: MwpYyesFinal,
    },
    {
      path: '/flow/fiveothree/mwp/MwpYno',
      name: 'MwpYno',
      component: MwpYno,
    },
    {
      path: '/flow/fiveothree/mwp/MwpYnoFinal',
      name: 'MwpYnoFinal',
      component: MwpYnoFinal,
    },
    {
      path: '/flow/fiveothree/win/WinYes',
      name: 'WinYes',
      component: WinYes,
    },
    {
      path: '/flow/fiveothree/win/WinYesY',
      name: 'WinYesY',
      component: WinYesY,
    },
    {
      path: '/flow/fiveothree/win/WinYesYyes',
      name: 'WinYesYyes',
      component: WinYesYyes,
    },
    {
      path: '/flow/fiveothree/win/WinYesYno',
      name: 'WinYesYno',
      component: WinYesYno,
    },
    {
      path: '/flow/fiveothree/win/WinYesYnoY',
      name: 'WinYesYnoY',
      component: WinYesYnoY,
    },
    {
      path: '/flow/fiveothree/win/WinYesYnoN',
      name: 'WinYesYnoN',
      component: WinYesYnoN,
    },
    {
      path: '/flow/fiveothree/win/WinYesN',
      name: 'WinYesN',
      component: WinYesN,
    },
    {
      path: '/flow/fiveothree/linux/LinYes',
      name: 'LinYes',
      component: LinYes,
    },
    {
      path: '/flow/fiveothree/linux/LinYesY',
      name: 'LinYesY',
      component: LinYesY,
    },
    {
      path: '/flow/fiveothree/linux/LinYesYyes',
      name: 'LinYesYyes',
      component: LinYesYyes,
    },
    {
      path: '/flow/fiveothree/linux/LinYesYyesY',
      name: 'LinYesYyesY',
      component: LinYesYyesY,
    },
    {
      path: '/flow/fiveothree/linux/LinYesYyesN',
      name: 'LinYesYyesN',
      component: LinYesYyesN,
    },
    {
      path: '/flow/fiveothree/linux/LinYesYyesNy',
      name: 'LinYesYyesNy',
      component: LinYesYyesNy,
    },
    {
      path: '/flow/fiveothree/linux/LinYesYyesNn',
      name: 'LinYesYyesNn',
      component: LinYesYyesNn,
    },
    {
      path: '/flow/fiveothree/linux/LinYesYno',
      name: 'LinYesYno',
      component: LinYesYno,
    },
    {
      path: '/flow/fiveothree/linux/LinYesYnoD',
      name: 'LinYesYnoD',
      component: LinYesYnoD,
    },
    {
      path: '/flow/fiveothree/linux/LinYesN',
      name: 'LinYesN',
      component: LinYesN,
    },
    // END - 503 Error Flow

    // BEGIN - Form Mail Error Flow
    {
      path: '/flow/FormError',
      name: 'FormError',
      component: FormError,
    },
    {
      path: '/flow/form/FormY',
      name: 'FormY',
      component: FormY,
    },
    {
      path: '/flow/form/FormYb',
      name: 'FormYb',
      component: FormYb,
    },
    {
      path: '/flow/form/FormN',
      name: 'FormN',
      component: FormN,
    },
    {
      path: '/flow/form/FormNa',
      name: 'FormNa',
      component: FormNa,
    },
    {
      path: '/flow/form/FormNaY',
      name: 'FormNaY',
      component: FormNaY,
    },
    {
      path: '/flow/form/FormNaYa',
      name: 'FormNaYa',
      component: FormNaYa,
    },
    {
      path: '/flow/form/FormNaYb',
      name: 'FormNaYb',
      component: FormNaYb,
    },
    {
      path: '/flow/form/FormNaYbY',
      name: 'FormNaYbY',
      component: FormNaYbY,
    },
    {
      path: '/flow/form/FormNaYbN',
      name: 'FormNaYbN',
      component: FormNaYbN,
    },
    {
      path: '/flow/form/FormNaYc',
      name: 'FormNaYc',
      component: FormNaYc,
    },
    {
      path: '/flow/form/FormNaN',
      name: 'FormNaN',
      component: FormNaN,
    },
    // END - Form Mail Error Flow


    //BEGIN - SSL Error Flow
    {
      path: '/flow/SslError',
      name: 'SslError',
      component: SslError,
    },
    {
      path: '/flow/ssl/SslY',
      name: 'SslY',
      component: SslY,
    },
    {
      path: '/flow/ssl/SslYa',
      name: 'SslYa',
      component: SslYa,
    },
    {
      path: '/flow/ssl/SslYaA',
      name: 'SslYaA',
      component: SslYaA,
    },
    {
      path: '/flow/ssl/SslYaB',
      name: 'SslYaB',
      component: SslYaB,
    },
    {
      path: '/flow/ssl/SslYaBy',
      name: 'SslYaBy',
      component: SslYaBy,
    },
    {
      path: '/flow/ssl/SslYb',
      name: 'SslYb',
      component: SslYb,
    },
    {
      path: '/flow/ssl/SslN',
      name: 'SslN',
      component: SslN,
    },
    {
      path: '/flow/ssl/SslNa',
      name: 'SslNa',
      component: SslNa,
    },
    {
      path: '/flow/ssl/SslNb',
      name: 'SslNb',
      component: SslNb,
    },
    {
      path: '/flow/ssl/SslNbY',
      name: 'SslNbY',
      component: SslNbY,
    },
    {
      path: '/flow/ssl/SslNbN',
      name: 'SslNbN',
      component: SslNbN,
    },
    //END - SSL Error Flow

    //BEGIN - cPanel Email Flow
    {
      path: '/flow/CpEmail',
      name: 'CpEmail',
      component: CpEmail,
    },
    {
      path: '/flow/cpemail/cpmR',
      name: 'cpmR',
      component: cpmR,
    },
    {
      path: '/flow/cpemail/cpmRy',
      name: 'cpmRy',
      component: cpmRy,
    },
    {
      path: '/flow/cpemail/cpmRyL',
      name: 'cpmRyL',
      component: cpmRyL,
    },
    {
      path: '/flow/cpemail/cpmRyLn',
      name: 'cpmRyLn',
      component: cpmRyLn,
    },
    {
      path: '/flow/cpemail/cpmRyLy',
      name: 'cpmRyLy',
      component: cpmRyLy,
    },
    {
      path: '/flow/cpemail/cpmRyLyN',
      name: 'cpmRyLyN',
      component: cpmRyLyN,
    },
    {
      path: '/flow/cpemail/cpmRyLyY',
      name: 'cpmRyLyY',
      component: cpmRyLyY,
    },
    {
      path: '/flow/cpemail/cpmRyR',
      name: 'cpmRyR',
      component: cpmRyR,
    },
    {
      path: '/flow/cpemail/cpmRn',
      name: 'cpmRn',
      component: cpmRn,
    },
    {
      path: '/flow/cpemail/cpmS',
      name: 'cpmS',
      component: cpmS,
    },
    {
      path: '/flow/cpemail/cpmSy',
      name: 'cpmSy',
      component: cpmSy,
    },
    {
      path: '/flow/cpemail/cpmSyL',
      name: 'cpmSyL',
      component: cpmSyL,
    },
    {
      path: '/flow/cpemail/cpmSyR',
      name: 'cpmSyR',
      component: cpmSyR,
    },
    {
      path: '/flow/cpemail/cpmSyRc',
      name: 'cpmSyRc',
      component: cpmSyRc,
    },
    {
      path: '/flow/cpemail/cpmSyRcN',
      name: 'cpmSyRcN',
      component: cpmSyRcN,
    },
    {
      path: '/flow/cpemail/cpmSyRcNn',
      name: 'cpmSyRcNn',
      component: cpmSyRcNn,
    },
    {
      path: '/flow/cpemail/cpmSyRcNy',
      name: 'cpmSyRcNy',
      component: cpmSyRcNy,
    },
    {
      path: '/flow/cpemail/cpmSyRcNyY',
      name: 'cpmSyRcNyY',
      component: cpmSyRcNyY,
    },
    {
      path: '/flow/cpemail/cpmSyRcNyN',
      name: 'cpmSyRcNyN',
      component: cpmSyRcNyN,
    },
    {
      path: '/flow/cpemail/cpmSyRcY',
      name: 'cpmSyRcY',
      component: cpmSyRcY,
    },
    {
      path: '/flow/cpemail/cpmSyRw',
      name: 'cpmSyRw',
      component: cpmSyRw,
    },
    {
      path: '/flow/cpemail/cpmSyRwY',
      name: 'cpmSyRwY',
      component: cpmSyRwY,
    },
    {
      path: '/flow/cpemail/cpmSyRwYy',
      name: 'cpmSyRwYy',
      component: cpmSyRwYy,
    },
    {
      path: '/flow/cpemail/cpmSyRwYn',
      name: 'cpmSyRwYn',
      component: cpmSyRwYn,
    },
    {
      path: '/flow/cpemail/cpmSyRwYnY',
      name: 'cpmSyRwYnY',
      component: cpmSyRwYnY,
    },
    {
      path: '/flow/cpemail/cpmSyRwYnN',
      name: 'cpmSyRwYnN',
      component: cpmSyRwYnN,
    },
    {
      path: '/flow/cpemail/cpmSyRwN',
      name: 'cpmSyRwN',
      component: cpmSyRwN,
    },
    {
      path: '/flow/cpemail/cpmSyRwNn',
      name: 'cpmSyRwNn',
      component: cpmSyRwNn,
    },
    {
      path: '/flow/cpemail/cpmSyRwNnY',
      name: 'cpmSyRwNnY',
      component: cpmSyRwNnY,
    },
    {
      path: '/flow/cpemail/cpmSyRwNnN',
      name: 'cpmSyRwNnN',
      component: cpmSyRwNnN,
    },
    {
      path: '/flow/cpemail/cpmSyRwNy',
      name: 'cpmSyRwNy',
      component: cpmSyRwNy,
    },
    {
      path: '/flow/cpemail/cpmSyRwNyN',
      name: 'cpmSyRwNyN',
      component: cpmSyRwNyN,
    },
    {
      path: '/flow/cpemail/cpmSyRwNyY',
      name: 'cpmSyRwNyY',
      component: cpmSyRwNyY,
    },
    {
      path: '/flow/cpemail/cpmSyRwNn',
      name: 'cpmSyRwNn',
      component: cpmSyRwNn,
    },
    {
      path: '/flow/cpemail/cpmSn',
      name: 'cpmSn',
      component: cpmSn,
    },
    //END - cPanel Email Issue Flow

    //BEGIN - FTP Support Flow
    {
      path: '/flow/Ftp',
      name: 'Ftp',
      component: Ftp,
    },
    {
      path: '/flow/ftp/create/Cftp',
      name: 'Cftp',
      component: Cftp,
    },
    {
      path: '/flow/ftp/create/CftpL',
      name: 'CftpL',
      component: CftpL,
    },
    {
      path: '/flow/ftp/create/CftpLc',
      name: 'CftpLc',
      component: CftpLc,
    },
    {
      path: '/flow/ftp/create/CftpLf',
      name: 'CftpLf',
      component: CftpLf,
    },
    {
      path: '/flow/ftp/create/CftpW',
      name: 'CftpW',
      component: CftpW,
    },
    {
      path: '/flow/ftp/create/CftpWp',
      name: 'CftpWp',
      component: CftpWp,
    },
    {
      path: '/flow/ftp/create/CftpWf',
      name: 'CftpWf',
      component: CftpWf,
    },
    {
      path: '/flow/ftp/create/CftpM',
      name: 'CftpM',
      component: CftpM,
    },
    {
      path: '/flow/ftp/troubleshoot/Tftp',
      name: 'Tftp',
      component: Tftp,
    },
    {
      path: '/flow/ftp/troubleshoot/TftpY',
      name: 'TftpY',
      component: TftpY,
    },
    {
      path: '/flow/ftp/troubleshoot/TftpYy',
      name: 'TftpYy',
      component: TftpYy,
    },
    {
      path: '/flow/ftp/troubleshoot/TftpYn',
      name: 'TftpYn',
      component: TftpYn,
    },
    {
      path: '/flow/ftp/troubleshoot/TftpYnY',
      name: 'TftpYnY',
      component: TftpYnY,
    },
    {
      path: '/flow/ftp/troubleshoot/TftpYnN',
      name: 'TftpYnN',
      component: TftpYnN,
    },
    {
      path: '/flow/ftp/troubleshoot/TftpYnNa',
      name: 'TftpYnNa',
      component: TftpYnNa,
    },
    {
      path: '/flow/ftp/troubleshoot/TftpYnNb',
      name: 'TftpYnNb',
      component: TftpYnNb,
    },
    {
      path: '/flow/ftp/troubleshoot/TftpN',
      name: 'TftpN',
      component: TftpN,
    },
    {
      path: '/flow/ftp/troubleshoot/TftpNy',
      name: 'TftpNy',
      component: TftpNy,
    },
    {
      path: '/flow/ftp/troubleshoot/TftpNn',
      name: 'TftpNn',
      component: TftpNn,
    },
    {
      path: '/flow/ftp/troubleshoot/TftpNnY',
      name: 'TftpNnY',
      component: TftpNnY,
    },
    {
      path: '/flow/ftp/troubleshoot/TftpNnN',
      name: 'TftpNnN',
      component: TftpNnN,
    },
    {
      path: '/flow/ftp/troubleshoot/TftpNnNy',
      name: 'TftpNnNy',
      component: TftpNnNy,
    },
    {
      path: '/flow/ftp/troubleshoot/TftpNnNn',
      name: 'TftpNnNn',
      component: TftpNnNn,
    },
    {
      path: '/flow/ftp/troubleshoot/TftpNnNnY',
      name: 'TftpNnNnY',
      component: TftpNnNnY,
    },
    {
      path: '/flow/ftp/troubleshoot/TftpNnNnN',
      name: 'TftpNnNnN',
      component: TftpNnNnN,
    },
    {
      path: '/flow/ftp/troubleshoot/TftpNnNnNa',
      name: 'TftpNnNnNa',
      component: TftpNnNnNa,
    },
    {
      path: '/flow/ftp/troubleshoot/TftpNnNnNb',
      name: 'TftpNnNnNb',
      component: TftpNnNnNb,
    },
    //END - FTP Support Flow

    //BEGIN - Malware Support Flow
    {
      path: '/flow/Malware',
      name: 'Malware',
      component: Malware,
    },
    {
      path: '/flow/malware/MalY',
      name: 'MalY',
      component: MalY,
    },
    {
      path: '/flow/malware/MalN',
      name: 'MalN',
      component: MalN,
    },
    {
      path: '/flow/malware/MalNy',
      name: 'MalNy',
      component: MalNy,
    },
    {
      path: '/flow/malware/MalNn',
      name: 'MalNn',
      component: MalNn,
    },
    //END - Malware Support Flow

    //BEGIN - Splunk Flow
    {
      path: '/flow/Splunk',
      name: 'Splunk',
      component: Splunk,
    },
    {
      path: '/flow/splunk/SplunkC',
      name: 'SplunkC',
      component: SplunkC,
    },
    {
      path: '/flow/splunk/SplunkCy',
      name: 'SplunkCy',
      component: SplunkCy,
    },
    {
      path: '/flow/splunk/SplunkCn',
      name: 'SplunkCn',
      component: SplunkCn,
    },
    {
      path: '/flow/splunk/SplunkA',
      name: 'SplunkA',
      component: SplunkA,
    },
    {
      path: '/flow/splunk/SplunkAy',
      name: 'SplunkAy',
      component: SplunkAy,
    },
    {
      path: '/flow/splunk/SplunkAn',
      name: 'SplunkAn',
      component: SplunkAn,
    },
    {
      path: '/flow/splunk/SplunkD',
      name: 'SplunkD',
      component: SplunkD,
    },
    {
      path: '/flow/splunk/SplunkDy',
      name: 'SplunkDy',
      component: SplunkDy,
    },
    {
      path: '/flow/splunk/SplunkDyY',
      name: 'SplunkDyY',
      component: SplunkDyY,
    },
    {
      path: '/flow/splunk/SplunkDyN',
      name: 'SplunkDyN',
      component: SplunkDyN,
    },
    {
      path: '/flow/splunk/SplunkDn',
      name: 'SplunkDn',
      component: SplunkDn,
    },
    {
      path: '/flow/splunk/SplunkDnB',
      name: 'SplunkDnB',
      component: SplunkDnB,
    },
    {
      path: '/flow/splunk/SplunkDnC',
      name: 'SplunkDnC',
      component: SplunkDnC,
    },
    {
      path: '/flow/splunk/SplunkDnD',
      name: 'SplunkDnD',
      component: SplunkDnD,
    },
    {
      path: '/flow/splunk/SplunkDnS',
      name: 'SplunkDnS',
      component: SplunkDnS,
    },
    {
      path: '/flow/splunk/SplunkP',
      name: 'SplunkP',
      component: SplunkP,
    },
    //END - Splunk Flow

    // BEGIN - Debug mode Flow
    {
      path: '/flow/howto/debugmode/Debug',
      name: 'Debug',
      component: Debug,
    },
    {
      path: '/flow/howto/debugmode/DebugC',
      name: 'DebugC',
      component: DebugC,
    },
    {
      path: '/flow/howto/debugmode/DebugCy',
      name: 'DebugCy',
      component: DebugCy,
    },
    {
      path: '/flow/howto/debugmode/DebugCn',
      name: 'DebugCn',
      component: DebugCn,
    },
    {
      path: '/flow/howto/debugmode/DebugCnY',
      name: 'DebugCnY',
      component: DebugCnY,
    },
    {
      path: '/flow/howto/debugmode/DebugCnN',
      name: 'DebugCnN',
      component: DebugCnN,
    },
    {
      path: '/flow/howto/debugmode/DebugF',
      name: 'DebugF',
      component: DebugF,
    },
    {
      path: '/flow/howto/debugmode/DebugM',
      name: 'DebugM',
      component: DebugM,
    },
    {
      path: '/flow/howto/debugmode/DebugW',
      name: 'DebugW',
      component: DebugW,
    },
    {
      path: '/flow/howto/debugmode/DebugWf',
      name: 'DebugWf',
      component: DebugWf,
    },
    {
      path: '/flow/howto/debugmode/DebugWfY',
      name: 'DebugWfY',
      component: DebugWfY,
    },
    {
      path: '/flow/howto/debugmode/DebugWfN',
      name: 'DebugWfN',
      component: DebugWfN,
    },
    {
      path: '/flow/howto/debugmode/DebugWp',
      name: 'DebugWp',
      component: DebugWp,
    },
    {
      path: '/flow/howto/debugmode/DebugWpY',
      name: 'DebugWpY',
      component: DebugWpY,
    },
    {
      path: '/flow/howto/debugmode/DebugWpN',
      name: 'DebugWpN',
      component: DebugWpN,
    },
    // END - Debug mode Flow

    // BEGIN - Server Uptime Flow
    {
      path: '/flow/howto/uptime/Uptime',
      name: 'Uptime',
      component: Uptime,
    },
    {
      path: '/flow/howto/uptime/UptimeL',
      name: 'UptimeL',
      component: UptimeL,
    },
    {
      path: '/flow/howto/uptime/UptimeLs',
      name: 'UptimeLs',
      component: UptimeLs,
    },
    {
      path: '/flow/howto/uptime/UptimeLsY',
      name: 'UptimeLsY',
      component: UptimeLsY,
    },
    {
      path: '/flow/howto/uptime/UptimeLsYy',
      name: 'UptimeLsYy',
      component: UptimeLsYy,
    },
    {
      path: '/flow/howto/uptime/UptimeLsYn',
      name: 'UptimeLsYn',
      component: UptimeLsYn,
    },
    {
      path: '/flow/howto/uptime/UptimeLsN',
      name: 'UptimeLsN',
      component: UptimeLsN,
    },
    {
      path: '/flow/howto/uptime/UptimeLsNy',
      name: 'UptimeLsNy',
      component: UptimeLsNy,
    },
    {
      path: '/flow/howto/uptime/UptimeLsNn',
      name: 'UptimeLsNn',
      component: UptimeLsNn,
    },
    {
      path: '/flow/howto/uptime/UptimeLsNnY',
      name: 'UptimeLsNnY',
      component: UptimeLsNnY,
    },
    {
      path: '/flow/howto/uptime/UptimeLsNnN',
      name: 'UptimeLsNnN',
      component: UptimeLsNnN,
    },
    {
      path: '/flow/howto/uptime/UptimeLv',
      name: 'UptimeLv',
      component: UptimeLv,
    },
    {
      path: '/flow/howto/uptime/UptimeLvY',
      name: 'UptimeLvY',
      component: UptimeLvY,
    },
    {
      path: '/flow/howto/uptime/UptimeLvN',
      name: 'UptimeLvN',
      component: UptimeLvN,
    },
    {
      path: '/flow/howto/uptime/UptimeLvNy',
      name: 'UptimeLvNy',
      component: UptimeLvNy,
    },
    {
      path: '/flow/howto/uptime/UptimeLvNn',
      name: 'UptimeLvNn',
      component: UptimeLvNn,
    },
    {
      path: '/flow/howto/uptime/UptimeLvNnY',
      name: 'UptimeLvNnY',
      component: UptimeLvNnY,
    },
    {
      path: '/flow/howto/uptime/UptimeLvNnN',
      name: 'UptimeLvNnN',
      component: UptimeLvNnN,
    },
    {
      path: '/flow/howto/uptime/UptimeW',
      name: 'UptimeW',
      component: UptimeW,
    },
    {
      path: '/flow/howto/uptime/UptimeWs',
      name: 'UptimeWs',
      component: UptimeWs,
    },
    {
      path: '/flow/howto/uptime/UptimeWv',
      name: 'UptimeWv',
      component: UptimeWv,
    },
    {
      path: '/flow/howto/uptime/UptimeWvY',
      name: 'UptimeWvY',
      component: UptimeWvY,
    },
    {
      path: '/flow/howto/uptime/UptimeWvN',
      name: 'UptimeWvN',
      component: UptimeWvN,
    },
    {
      path: '/flow/howto/uptime/UptimeWvNy',
      name: 'UptimeWvNy',
      component: UptimeWvNy,
    },
    {
      path: '/flow/howto/uptime/UptimeWvNn',
      name: 'UptimeWvNn',
      component: UptimeWvNn,
    },
    {
      path: '/flow/howto/uptime/UptimeWvNnY',
      name: 'UptimeWvNnY',
      component: UptimeWvNnY,
    },
    {
      path: '/flow/howto/uptime/UptimeWvNnN',
      name: 'UptimeWvNnN',
      component: UptimeWvNnN,
    },
    // END - Server Uptime Flow

    // BEGIN- Sucuri ticket Flow
    {
      path: '/flow/howto/sucuri/Sucuri',
      name: 'Sucuri',
      component: Sucuri,
    },
    {
      path: '/flow/howto/sucuri/SucuriB',
      name: 'SucuriB',
      component: SucuriB,
    },
    {
      path: '/flow/howto/sucuri/SucuriC',
      name: 'SucuriC',
      component: SucuriC,
    },
    {
      path: '/flow/howto/sucuri/SucuriCy',
      name: 'SucuriCy',
      component: SucuriCy,
    },
    {
      path: '/flow/howto/sucuri/SucuriCyY',
      name: 'SucuriCyY',
      component: SucuriCyY,
    },
    {
      path: '/flow/howto/sucuri/SucuriCyN',
      name: 'SucuriCyN',
      component: SucuriCyN,
    },
    {
      path: '/flow/howto/sucuri/SucuriCyNy',
      name: 'SucuriCyNy',
      component: SucuriCyNy,
    },
    {
      path: '/flow/howto/sucuri/SucuriCyNn',
      name: 'SucuriCyNn',
      component: SucuriCyNn,
    },
    {
      path: '/flow/howto/sucuri/SucuriCn',
      name: 'SucuriCn',
      component: SucuriCn,
    },
    {
      path: '/flow/howto/sucuri/SucuriF',
      name: 'SucuriF',
      component: SucuriF,
    },
    {
      path: '/flow/howto/sucuri/SucuriFy',
      name: 'SucuriFy',
      component: SucuriFy,
    },
    {
      path: '/flow/howto/sucuri/SucuriFyY',
      name: 'SucuriFyY',
      component: SucuriFyY,
    },
    {
      path: '/flow/howto/sucuri/SucuriFyYy',
      name: 'SucuriFyYy',
      component: SucuriFyYy,
    },
    {
      path: '/flow/howto/sucuri/SucuriFyYyY',
      name: 'SucuriFyYyY',
      component: SucuriFyYyY,
    },
    {
      path: '/flow/howto/sucuri/SucuriFyYyN',
      name: 'SucuriFyYyN',
      component: SucuriFyYyN,
    },
    {
      path: '/flow/howto/sucuri/SucuriFyYn',
      name: 'SucuriFyYn',
      component: SucuriFyYn,
    },
    {
      path: '/flow/howto/sucuri/SucuriFyYnY',
      name: 'SucuriFyYnY',
      component: SucuriFyYnY,
    },
    {
      path: '/flow/howto/sucuri/SucuriFyYnN',
      name: 'SucuriFyYnN',
      component: SucuriFyYnN,
    },
    {
      path: '/flow/howto/sucuri/SucuriFyN',
      name: 'SucuriFyN',
      component: SucuriFyN,
    },
    {
      path: '/flow/howto/sucuri/SucuriFn',
      name: 'SucuriFn',
      component: SucuriFn,
    },
    // END - Sucuri ticket Flow

    // BEGIN - WPPS Flow
    {
      path: '/flow/howto/wpps/Wpps',
      name: 'Wpps',
      component: Wpps,
    },
    // END - WPPS Flow
  ]
})
