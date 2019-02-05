import Vue from 'vue'
import Router from 'vue-router'
import '../../../node_modules/bulma/css/bulma.min.css'

// BEGIN Primary imported routes
import SwatHome from '@/components/SwatHome'
import SwatFlow from '@/components/SwatFlow'
import SwatNote from '@/components/SwatNote'
import KiNote from '@/components/note/KiNote'
import PreNote from '@/components/note/PreNote'
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
import Transfer from '@/components/flow/pfc/Transfer'
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

// BEGIN SSL Setup imported routes
import Ssl from '@/components/flow/ssl/howto/Ssl'
import Essl from '@/components/flow/ssl/howto/Essl'
import EsslC from '@/components/flow/ssl/howto/EsslC'
import EsslN from '@/components/flow/ssl/howto/EsslN'
import Dssl from '@/components/flow/ssl/howto/Dssl'
import DsslE from '@/components/flow/ssl/howto/DsslE'
import DsslEe from '@/components/flow/ssl/howto/DsslEe'
import DsslEeY from '@/components/flow/ssl/howto/DsslEeY'
import DsslEeN from '@/components/flow/ssl/howto/DsslEeN'
import DsslEp from '@/components/flow/ssl/howto/DsslEp'
import DsslEpY from '@/components/flow/ssl/howto/DsslEpY'
import DsslEpYy from '@/components/flow/ssl/howto/DsslEpYy'
import DsslEpYe from '@/components/flow/ssl/howto/DsslEpYe'
import DsslEpN from '@/components/flow/ssl/howto/DsslEpN'
import DsslEr from '@/components/flow/ssl/howto/DsslEr'
import DsslErA from '@/components/flow/ssl/howto/DsslErA'
import DsslErAa from '@/components/flow/ssl/howto/DsslErAa'
import DsslErAr from '@/components/flow/ssl/howto/DsslErAr'
import DsslErC from '@/components/flow/ssl/howto/DsslErC'
import DsslErR from '@/components/flow/ssl/howto/DsslErR'
import DsslErU from '@/components/flow/ssl/howto/DsslErU'
import DsslN from '@/components/flow/ssl/howto/DsslN'
import DsslNd from '@/components/flow/ssl/howto/DsslNd'
import DsslNdT from '@/components/flow/ssl/howto/DsslNdT'
import DsslNdTn from '@/components/flow/ssl/howto/DsslNdTn'
import DsslNdTy from '@/components/flow/ssl/howto/DsslNdTy'
import DsslNdY from '@/components/flow/ssl/howto/DsslNdY'
import DsslNdYy from '@/components/flow/ssl/howto/DsslNdYy'
import DsslNdYyG from '@/components/flow/ssl/howto/DsslNdYyG'
import DsslNdYyT from '@/components/flow/ssl/howto/DsslNdYyT'
import DsslNdYn from '@/components/flow/ssl/howto/DsslNdYn'
import DsslNdYnG from '@/components/flow/ssl/howto/DsslNdYnG'
import DsslNdYnT from '@/components/flow/ssl/howto/DsslNdYnT'
import DsslNw from '@/components/flow/ssl/howto/wildcard/DsslNw'
import DsslNwY from '@/components/flow/ssl/howto/wildcard/DsslNwY'
import DsslNwYy from '@/components/flow/ssl/howto/wildcard/DsslNwYy'
import DsslNwYyG from '@/components/flow/ssl/howto/wildcard/DsslNwYyG'
import DsslNwYyT from '@/components/flow/ssl/howto/wildcard/DsslNwYyT'
import DsslNwYn from '@/components/flow/ssl/howto/wildcard/DsslNwYn'
import DsslNwYnT from '@/components/flow/ssl/howto/wildcard/DsslNwYnT'
import DsslNwYnG from '@/components/flow/ssl/howto/wildcard/DsslNwYnG'
import DsslNwT from '@/components/flow/ssl/howto/wildcard/DsslNwT'
import DsslNwTn from '@/components/flow/ssl/howto/wildcard/DsslNwTn'
import DsslNwTy from '@/components/flow/ssl/howto/wildcard/DsslNwTy'
import DsslNu from '@/components/flow/ssl/howto/ucc/DsslNu'
import DsslNuT from '@/components/flow/ssl/howto/ucc/DsslNuT'
import DsslNuTn from '@/components/flow/ssl/howto/ucc/DsslNuTn'
import DsslNuTy from '@/components/flow/ssl/howto/ucc/DsslNuTy'
import DsslNuY from '@/components/flow/ssl/howto/ucc/DsslNuY'
import DsslNuYy from '@/components/flow/ssl/howto/ucc/DsslNuYy'
import DsslNuYyG from '@/components/flow/ssl/howto/ucc/DsslNuYyG'
import DsslNuYyT from '@/components/flow/ssl/howto/ucc/DsslNuYyT'
import DsslNuYn from '@/components/flow/ssl/howto/ucc/DsslNuYn'
import DsslNuYnG from '@/components/flow/ssl/howto/ucc/DsslNuYnG'
import DsslNuYnT from '@/components/flow/ssl/howto/ucc/DsslNuYnT'
// END SSL Setup imported routes

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
import SucuriBd from '@/components/flow/howto/sucuri/SucuriBd'
import SucuriBdY from '@/components/flow/howto/sucuri/SucuriBdY'
import SucuriBdN from '@/components/flow/howto/sucuri/SucuriBdN'
import SucuriBs from '@/components/flow/howto/sucuri/SucuriBs'
import SucuriBsD from '@/components/flow/howto/sucuri/SucuriBsD'
import SucuriBsDy from '@/components/flow/howto/sucuri/SucuriBsDy'
import SucuriBsDyY from '@/components/flow/howto/sucuri/SucuriBsDyY'
import SucuriBsDyN from '@/components/flow/howto/sucuri/SucuriBsDyN'
import SucuriBsDyNy from '@/components/flow/howto/sucuri/SucuriBsDyNy'
import SucuriBsDyNn from '@/components/flow/howto/sucuri/SucuriBsDyNn'
import SucuriBsDn from '@/components/flow/howto/sucuri/SucuriBsDn'
import SucuriBsT from '@/components/flow/howto/sucuri/SucuriBsT'
import SucuriBsTy from '@/components/flow/howto/sucuri/SucuriBsTy'
import SucuriBsTyD from '@/components/flow/howto/sucuri/SucuriBsTyD'
import SucuriBsTyDy from '@/components/flow/howto/sucuri/SucuriBsTyDy'
import SucuriBsTyDn from '@/components/flow/howto/sucuri/SucuriBsTyDn'
import SucuriBsTyH from '@/components/flow/howto/sucuri/SucuriBsTyH'
import SucuriBsTn from '@/components/flow/howto/sucuri/SucuriBsTn'
import SucuriBsTnY from '@/components/flow/howto/sucuri/SucuriBsTnY'
import SucuriBsTnN from '@/components/flow/howto/sucuri/SucuriBsTnN'
import SucuriBsW from '@/components/flow/howto/sucuri/SucuriBsW'
import SucuriBsWy from '@/components/flow/howto/sucuri/SucuriBsWy'
import SucuriBsWn from '@/components/flow/howto/sucuri/SucuriBsWn'
import SucuriBsWnY from '@/components/flow/howto/sucuri/SucuriBsWnY'
import SucuriBsWnN from '@/components/flow/howto/sucuri/SucuriBsWnN'
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
import WppsE from '@/components/flow/howto/wpps/WppsE'
import WppsEc from '@/components/flow/howto/wpps/WppsEc'
import WppsEcY from '@/components/flow/howto/wpps/WppsEcY'
import WppsEcN from '@/components/flow/howto/wpps/WppsEcN'
import WppsEm from '@/components/flow/howto/wpps/WppsEm'
import WppsEo from '@/components/flow/howto/wpps/WppsEo'
import WppsN from '@/components/flow/howto/wpps/WppsN'
import WppsP from '@/components/flow/howto/wpps/WppsP'
import WppsPn from '@/components/flow/howto/wpps/WppsPn'
// END WPPS imported routes

// BEGIN MWP migration / sync imported routes
import Migsync from '@/components/flow/mwp/Migsync'
import MigsyncM from '@/components/flow/mwp/MigsyncM'
import MigsyncMy from '@/components/flow/mwp/MigsyncMy'
import MigsyncMyY from '@/components/flow/mwp/MigsyncMyY'
import MigsyncMyYy from '@/components/flow/mwp/MigsyncMyYy'
import MigsyncMyYyY from '@/components/flow/mwp/MigsyncMyYyY'
import MigsyncMyYyN from '@/components/flow/mwp/MigsyncMyYyN'
import MigsyncMyYn from '@/components/flow/mwp/MigsyncMyYn'
import MigsyncMyYnY from '@/components/flow/mwp/MigsyncMyYnY'
import MigsyncMyYnN from '@/components/flow/mwp/MigsyncMyYnN'
import MigsyncMyN from '@/components/flow/mwp/MigsyncMyN'
import MigsyncMyNy from '@/components/flow/mwp/MigsyncMyNy'
import MigsyncMyNn from '@/components/flow/mwp/MigsyncMyNn'
import MigsyncMn from '@/components/flow/mwp/MigsyncMn'
import MigsyncS from '@/components/flow/mwp/MigsyncS'
// END MWP migration / sync imported routes

// BEGIN Net Vio imported routes
import Netvio from '@/components/flow/howto/netvio/Netvio'
import NetvioC from '@/components/flow/howto/netvio/NetvioC'
import NetvioCy from '@/components/flow/howto/netvio/NetvioCy'
import NetvioCn from '@/components/flow/howto/netvio/NetvioCn'
import NetvioD from '@/components/flow/howto/netvio/NetvioD'
import NetvioM from '@/components/flow/howto/netvio/NetvioM'
import NetvioMm from '@/components/flow/howto/netvio/NetvioMm'
import NetvioMmY from '@/components/flow/howto/netvio/NetvioMmY'
import NetvioMmN from '@/components/flow/howto/netvio/NetvioMmN'
import NetvioMp from '@/components/flow/howto/netvio/NetvioMp'
import NetvioMpY from '@/components/flow/howto/netvio/NetvioMpY'
import NetvioMpN from '@/components/flow/howto/netvio/NetvioMpN'
import NetvioR from '@/components/flow/howto/netvio/NetvioR'
import NetvioRy from '@/components/flow/howto/netvio/NetvioRy'
import NetvioRn from '@/components/flow/howto/netvio/NetvioRn'
import NetvioRnY from '@/components/flow/howto/netvio/NetvioRnY'
import NetvioRnYy from '@/components/flow/howto/netvio/NetvioRnYy'
import NetvioRnYyY from '@/components/flow/howto/netvio/NetvioRnYyY'
import NetvioRnYyN from '@/components/flow/howto/netvio/NetvioRnYyN'
import NetvioRnYyNy from '@/components/flow/howto/netvio/NetvioRnYyNy'
import NetvioRnYyNn from '@/components/flow/howto/netvio/NetvioRnYyNn'
import NetvioRnYn from '@/components/flow/howto/netvio/NetvioRnYn'
import NetvioRnYnY from '@/components/flow/howto/netvio/NetvioRnYnY'
import NetvioRnYnYy from '@/components/flow/howto/netvio/NetvioRnYnYy'
import NetvioRnYnYn from '@/components/flow/howto/netvio/NetvioRnYnYn'
import NetvioRnYnN from '@/components/flow/howto/netvio/NetvioRnYnN'
import NetvioRnN from '@/components/flow/howto/netvio/NetvioRnN'
// END Net Vio imported routes

// BEGIN Paid Migration imported routes
import Mig from '@/components/flow/migration/Mig'
import MigY from '@/components/flow/migration/MigY'
import MigYy from '@/components/flow/migration/MigYy'
import MigYn from '@/components/flow/migration/MigYn'
import MigN from '@/components/flow/migration/MigN'
import MigNy from '@/components/flow/migration/MigNy'
import MigNyY from '@/components/flow/migration/MigNyY'
import MigNyYy from '@/components/flow/migration/MigNyYy'
import MigNyYyY from '@/components/flow/migration/MigNyYyY'
import MigNyYyN from '@/components/flow/migration/MigNyYyN'
import MigNyYyNy from '@/components/flow/migration/MigNyYyNy'
import MigNyYyNyY from '@/components/flow/migration/MigNyYyNyY'
import MigNyYyNyYy from '@/components/flow/migration/MigNyYyNyYy'
import MigNyYyNyYyY from '@/components/flow/migration/MigNyYyNyYyY'
import MigNyYyNyYyYy from '@/components/flow/migration/MigNyYyNyYyYy'
import MigNyYyNyYyYn from '@/components/flow/migration/MigNyYyNyYyYn'
import MigNyYyNyYyYnY from '@/components/flow/migration/MigNyYyNyYyYnY'
import MigNyYyNyYyYnN from '@/components/flow/migration/MigNyYyNyYyYnN'
import MigNyYyNyYyN from '@/components/flow/migration/MigNyYyNyYyN'
import MigNyYyNyYyNn from '@/components/flow/migration/MigNyYyNyYyNn'
import MigNyYyNyYyNnY from '@/components/flow/migration/MigNyYyNyYyNnY'
import MigNyYyNyYyNnN from '@/components/flow/migration/MigNyYyNyYyNnN'
import MigNyYyNyYyNy from '@/components/flow/migration/MigNyYyNyYyNy'
import MigNyYyNyYyNyY from '@/components/flow/migration/MigNyYyNyYyNyY'
import MigNyYyNyYyNyYy from '@/components/flow/migration/MigNyYyNyYyNyYy'
import MigNyYyNyYyNyYn from '@/components/flow/migration/MigNyYyNyYyNyYn'
import MigNyYyNyYyNyYnY from '@/components/flow/migration/MigNyYyNyYyNyYnY'
import MigNyYyNyYyNyYnN from '@/components/flow/migration/MigNyYyNyYyNyYnN'
import MigNyYyNyYyNyN from '@/components/flow/migration/MigNyYyNyYyNyN'
import MigNyYyNyYn from '@/components/flow/migration/MigNyYyNyYn'
import MigNyYyNyN from '@/components/flow/migration/MigNyYyNyN'
import MigNyYyNn from '@/components/flow/migration/MigNyYyNn'
import MigNyYn from '@/components/flow/migration/MigNyYn'
import MigNyN from '@/components/flow/migration/MigNyN'
import MigNn from '@/components/flow/migration/MigNn'
// END Paid Migration imported routes

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

    //BEGIN - SSL Setup flow
    {
      path: '/flow/ssl/howto/Ssl',
      name: 'Ssl',
      component: Ssl,
    },
    {
      path: '/flow/ssl/howto/Essl',
      name: 'Essl',
      component: Essl,
    },
    {
      path: '/flow/ssl/howto/EsslC',
      name: 'EsslC',
      component: EsslC,
    },
    {
      path: '/flow/ssl/howto/EsslN',
      name: 'EsslN',
      component: EsslN,
    },
    {
      path: '/flow/ssl/howto/Dssl',
      name: 'Dssl',
      component: Dssl,
    },
    {
      path: '/flow/ssl/howto/DsslE',
      name: 'DsslE',
      component: DsslE,
    },
    {
      path: '/flow/ssl/howto/DsslEe',
      name: 'DsslEe',
      component: DsslEe,
    },
    {
      path: '/flow/ssl/howto/DsslEeY',
      name: 'DsslEeY',
      component: DsslEeY,
    },
    {
      path: '/flow/ssl/howto/DsslEeN',
      name: 'DsslEeN',
      component: DsslEeN,
    },
    {
      path: '/flow/ssl/howto/DsslEp',
      name: 'DsslEp',
      component: DsslEp,
    },
    {
      path: '/flow/ssl/howto/DsslEpN',
      name: 'DsslEpN',
      component: DsslEpN,
    },
    {
      path: '/flow/ssl/howto/DsslEpY',
      name: 'DsslEpY',
      component: DsslEpY,
    },
    {
      path: '/flow/ssl/howto/DsslEpYy',
      name: 'DsslEpYy',
      component: DsslEpYy,
    },
    {
      path: '/flow/ssl/howto/DsslEpYe',
      name: 'DsslEpYe',
      component: DsslEpYe,
    },
    {
      path: '/flow/ssl/howto/DsslEr',
      name: 'DsslEr',
      component: DsslEr,
    },
    {
      path: '/flow/ssl/howto/DsslErA',
      name: 'DsslErA',
      component: DsslErA,
    },
    {
      path: '/flow/ssl/howto/DsslErAa',
      name: 'DsslErAa',
      component: DsslErAa,
    },
    {
      path: '/flow/ssl/howto/DsslErAr',
      name: 'DsslErAr',
      component: DsslErAr,
    },
    {
      path: '/flow/ssl/howto/DsslErC',
      name: 'DsslErC',
      component: DsslErC,
    },
    {
      path: '/flow/ssl/howto/DsslErR',
      name: 'DsslErR',
      component: DsslErR,
    },
    {
      path: '/flow/ssl/howto/DsslErU',
      name: 'DsslErU',
      component: DsslErU,
    },
    {
      path: '/flow/ssl/howto/DsslN',
      name: 'DsslN',
      component: DsslN,
    },
    {
      path: '/flow/ssl/howto/DsslNd',
      name: 'DsslNd',
      component: DsslNd,
    },
    {
      path: '/flow/ssl/howto/DsslNdT',
      name: 'DsslNdT',
      component: DsslNdT,
    },
    {
      path: '/flow/ssl/howto/DsslNdTn',
      name: 'DsslNdTn',
      component: DsslNdTn,
    },
    {
      path: '/flow/ssl/howto/DsslNdTy',
      name: 'DsslNdTy',
      component: DsslNdTy,
    },
    {
      path: '/flow/ssl/howto/DsslNdY',
      name: 'DsslNdY',
      component: DsslNdY,
    },
    {
      path: '/flow/ssl/howto/DsslNdYyG',
      name: 'DsslNdYyG',
      component: DsslNdYyG,
    },
    {
      path: '/flow/ssl/howto/DsslNdYyT',
      name: 'DsslNdYyT',
      component: DsslNdYyT,
    },
    {
      path: '/flow/ssl/howto/DsslNdYy',
      name: 'DsslNdYy',
      component: DsslNdYy,
    },
    {
      path: '/flow/ssl/howto/DsslNdYn',
      name: 'DsslNdYn',
      component: DsslNdYn,
    },
    {
      path: '/flow/ssl/howto/DsslNdYnG',
      name: 'DsslNdYnG',
      component: DsslNdYnG,
    },
    {
      path: '/flow/ssl/howto/DsslNdYnT',
      name: 'DsslNdYnT',
      component: DsslNdYnT,
    },
    {
      path: '/flow/ssl/howto/wildcard/DsslNw',
      name: 'DsslNw',
      component: DsslNw,
    },
    {
      path: '/flow/ssl/howto/wildcard/DsslNwT',
      name: 'DsslNwT',
      component: DsslNwT,
    },
    {
      path: '/flow/ssl/howto/wildcard/DsslNwTn',
      name: 'DsslNwTn',
      component: DsslNwTn,
    },
    {
      path: '/flow/ssl/howto/wildcard/DsslNwTy',
      name: 'DsslNwTy',
      component: DsslNwTy,
    },
    {
      path: '/flow/ssl/howto/wildcard/DsslNwY',
      name: 'DsslNwY',
      component: DsslNwY,
    },
    {
      path: '/flow/ssl/howto/wildcard/DsslNwYy',
      name: 'DsslNwYy',
      component: DsslNwYy,
    },
    {
      path: '/flow/ssl/howto/wildcard/DsslNwYyG',
      name: 'DsslNwYyG',
      component: DsslNwYyG,
    },
    {
      path: '/flow/ssl/howto/wildcard/DsslNwYyT',
      name: 'DsslNwYyT',
      component: DsslNwYyT,
    },
    {
      path: '/flow/ssl/howto/wildcard/DsslNwYn',
      name: 'DsslNwYn',
      component: DsslNwYn,
    },
    {
      path: '/flow/ssl/howto/wildcard/DsslNwYnT',
      name: 'DsslNwYnT',
      component: DsslNwYnT,
    },
    {
      path: '/flow/ssl/howto/wildcard/DsslNwYnG',
      name: 'DsslNwYnG',
      component: DsslNwYnG,
    },
    {
      path: '/flow/ssl/howto/ucc/DsslNu',
      name: 'DsslNu',
      component: DsslNu,
    },
    {
      path: '/flow/ssl/howto/ucc/DsslNuT',
      name: 'DsslNuT',
      component: DsslNuT,
    },
    {
      path: '/flow/ssl/howto/ucc/DsslNuTn',
      name: 'DsslNuTn',
      component: DsslNuTn,
    },
    {
      path: '/flow/ssl/howto/ucc/DsslNuTy',
      name: 'DsslNuTy',
      component: DsslNuTy,
    },
    {
      path: '/flow/ssl/howto/ucc/DsslNuY',
      name: 'DsslNuY',
      component: DsslNuY,
    },
    {
      path: '/flow/ssl/howto/ucc/DsslNuYy',
      name: 'DsslNuYy',
      component: DsslNuYy,
    },
    {
      path: '/flow/ssl/howto/ucc/DsslNuYyG',
      name: 'DsslNuYyG',
      component: DsslNuYyG,
    },
    {
      path: '/flow/ssl/howto/ucc/DsslNuYyT',
      name: 'DsslNuYyT',
      component: DsslNuYyT,
    },
    {
      path: '/flow/ssl/howto/ucc/DsslNuYn',
      name: 'DsslNuYn',
      component: DsslNuYn,
    },
    {
      path: '/flow/ssl/howto/ucc/DsslNuYnG',
      name: 'DsslNuYnG',
      component: DsslNuYnG,
    },
    {
      path: '/flow/ssl/howto/ucc/DsslNuYnT',
      name: 'DsslNuYnT',
      component: DsslNuYnT,
    },
    //END - SSL Setup flow

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
      path: '/flow/howto/sucuri/SucuriBd',
      name: 'SucuriBd',
      component: SucuriBd,
    },
    {
      path: '/flow/howto/sucuri/SucuriBdY',
      name: 'SucuriBdY',
      component: SucuriBdY,
    },
    {
      path: '/flow/howto/sucuri/SucuriBdN',
      name: 'SucuriBdN',
      component: SucuriBdN,
    },
    {
      path: '/flow/howto/sucuri/SucuriBs',
      name: 'SucuriBs',
      component: SucuriBs,
    },
    {
      path: '/flow/howto/sucuri/SucuriBsD',
      name: 'SucuriBsD',
      component: SucuriBsD,
    },
    {
      path: '/flow/howto/sucuri/SucuriBsDy',
      name: 'SucuriBsDy',
      component: SucuriBsDy,
    },
    {
      path: '/flow/howto/sucuri/SucuriBsDyY',
      name: 'SucuriBsDyY',
      component: SucuriBsDyY,
    },
    {
      path: '/flow/howto/sucuri/SucuriBsDyN',
      name: 'SucuriBsDyN',
      component: SucuriBsDyN,
    },
    {
      path: '/flow/howto/sucuri/SucuriBsDyNy',
      name: 'SucuriBsDyNy',
      component: SucuriBsDyNy,
    },
    {
      path: '/flow/howto/sucuri/SucuriBsDyNn',
      name: 'SucuriBsDyNn',
      component: SucuriBsDyNn,
    },
    {
      path: '/flow/howto/sucuri/SucuriBsDn',
      name: 'SucuriBsDn',
      component: SucuriBsDn,
    },
    {
      path: '/flow/howto/sucuri/SucuriBsT',
      name: 'SucuriBsT',
      component: SucuriBsT,
    },
    {
      path: '/flow/howto/sucuri/SucuriBsTy',
      name: 'SucuriBsTy',
      component: SucuriBsTy,
    },
    {
      path: '/flow/howto/sucuri/SucuriBsTyD',
      name: 'SucuriBsTyD',
      component: SucuriBsTyD,
    },
    {
      path: '/flow/howto/sucuri/SucuriBsTyDy',
      name: 'SucuriBsTyDy',
      component: SucuriBsTyDy,
    },
    {
      path: '/flow/howto/sucuri/SucuriBsTyDn',
      name: 'SucuriBsTyDn',
      component: SucuriBsTyDn,
    },
    {
      path: '/flow/howto/sucuri/SucuriBsTyH',
      name: 'SucuriBsTyH',
      component: SucuriBsTyH,
    },
    {
      path: '/flow/howto/sucuri/SucuriBsTn',
      name: 'SucuriBsTn',
      component: SucuriBsTn,
    },
    {
      path: '/flow/howto/sucuri/SucuriBsTnY',
      name: 'SucuriBsTnY',
      component: SucuriBsTnY,
    },
    {
      path: '/flow/howto/sucuri/SucuriBsTnN',
      name: 'SucuriBsTnN',
      component: SucuriBsTnN,
    },
    {
      path: '/flow/howto/sucuri/SucuriBsW',
      name: 'SucuriBsW',
      component: SucuriBsW,
    },
    {
      path: '/flow/howto/sucuri/SucuriBsWn',
      name: 'SucuriBsWn',
      component: SucuriBsWn,
    },
    {
      path: '/flow/howto/sucuri/SucuriBsWnY',
      name: 'SucuriBsWnY',
      component: SucuriBsWnY,
    },
    {
      path: '/flow/howto/sucuri/SucuriBsWnN',
      name: 'SucuriBsWnN',
      component: SucuriBsWnN,
    },
    {
      path: '/flow/howto/sucuri/SucuriBsWy',
      name: 'SucuriBsWy',
      component: SucuriBsWy,
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
    {
      path: '/flow/howto/wpps/WppsE',
      name: 'WppsE',
      component: WppsE,
    },
    {
      path: '/flow/howto/wpps/WppsEc',
      name: 'WppsEc',
      component: WppsEc,
    },
    {
      path: '/flow/howto/wpps/WppsEcY',
      name: 'WppsEcY',
      component: WppsEcY,
    },
    {
      path: '/flow/howto/wpps/WppsEcN',
      name: 'WppsEcN',
      component: WppsEcN,
    },
    {
      path: '/flow/howto/wpps/WppsEm',
      name: 'WppsEm',
      component: WppsEm,
    },
    {
      path: '/flow/howto/wpps/WppsEo',
      name: 'WppsEo',
      component: WppsEo,
    },
    {
      path: '/flow/howto/wpps/WppsN',
      name: 'WppsN',
      component: WppsN,
    },
    {
      path: '/flow/howto/wpps/WppsP',
      name: 'WppsP',
      component: WppsP,
    },
    {
      path: '/flow/howto/wpps/WppsPn',
      name: 'WppsPn',
      component: WppsPn,
    },
    // END - WPPS Flow

    // BEGIN - MWP migration/sync flow
    {
      path: '/flow/mwp/Migsync',
      name: 'Migsync',
      component: Migsync,
    },
    {
      path: '/flow/mwp/MigsyncM',
      name: 'MigsyncM',
      component: MigsyncM,
    },
    {
      path: '/flow/mwp/MigsyncMy',
      name: 'MigsyncMy',
      component: MigsyncMy,
    },
    {
      path: '/flow/mwp/MigsyncMyY',
      name: 'MigsyncMyY',
      component: MigsyncMyY,
    },
    {
      path: '/flow/mwp/MigsyncMyYy',
      name: 'MigsyncMyYy',
      component: MigsyncMyYy,
    },
    {
      path: '/flow/mwp/MigsyncMyYyY',
      name: 'MigsyncMyYyY',
      component: MigsyncMyYyY,
    },
    {
      path: '/flow/mwp/MigsyncMyYyN',
      name: 'MigsyncMyYyN',
      component: MigsyncMyYyN,
    },
    {
      path: '/flow/mwp/MigsyncMyYn',
      name: 'MigsyncMyYn',
      component: MigsyncMyYn,
    },
    {
      path: '/flow/mwp/MigsyncMyYnY',
      name: 'MigsyncMyYnY',
      component: MigsyncMyYnY,
    },
    {
      path: '/flow/mwp/MigsyncMyYnN',
      name: 'MigsyncMyYnN',
      component: MigsyncMyYnN,
    },
    {
      path: '/flow/mwp/MigsyncMyN',
      name: 'MigsyncMyN',
      component: MigsyncMyN,
    },
    {
      path: '/flow/mwp/MigsyncMyNy',
      name: 'MigsyncMyNy',
      component: MigsyncMyNy,
    },
    {
      path: '/flow/mwp/MigsyncMyNn',
      name: 'MigsyncMyNn',
      component: MigsyncMyNn,
    },
    {
      path: '/flow/mwp/MigsyncMn',
      name: 'MigsyncMn',
      component: MigsyncMn,
    },
    {
      path: '/flow/mwp/MigsyncS',
      name: 'MigsyncS',
      component: MigsyncS,
    },
    // END - MWP migration/sync flow

    // BEGIN - Transfer PFC Checklist
    {
      path: '/flow/pfc/Transfer',
      name: 'Transfer',
      component: Transfer,
    },
    // END - Transfer PFC Checklist

    // BEGIN - Net Vio flow
    {
      path: '/flow/howto/netvio/Netvio',
      name: 'Netvio',
      component: Netvio,
    },
    {
      path: '/flow/howto/netvio/NetvioC',
      name: 'NetvioC',
      component: NetvioC,
    },
    {
      path: '/flow/howto/netvio/NetvioCy',
      name: 'NetvioCy',
      component: NetvioCy,
    },
    {
      path: '/flow/howto/netvio/NetvioCn',
      name: 'NetvioCn',
      component: NetvioCn,
    },
    {
      path: '/flow/howto/netvio/NetvioD',
      name: 'NetvioD',
      component: NetvioD,
    },
    {
      path: '/flow/howto/netvio/NetvioM',
      name: 'NetvioM',
      component: NetvioM,
    },
    {
      path: '/flow/howto/netvio/NetvioMm',
      name: 'NetvioMm',
      component: NetvioMm,
    },
    {
      path: '/flow/howto/netvio/NetvioMmY',
      name: 'NetvioMmY',
      component: NetvioMmY,
    },
    {
      path: '/flow/howto/netvio/NetvioMmN',
      name: 'NetvioMmN',
      component: NetvioMmN,
    },
    {
      path: '/flow/howto/netvio/NetvioMp',
      name: 'NetvioMp',
      component: NetvioMp,
    },
    {
      path: '/flow/howto/netvio/NetvioMpY',
      name: 'NetvioMpY',
      component: NetvioMpY,
    },
    {
      path: '/flow/howto/netvio/NetvioMpN',
      name: 'NetvioMpN',
      component: NetvioMpN,
    },
    {
      path: '/flow/howto/netvio/NetvioR',
      name: 'NetvioR',
      component: NetvioR,
    },
    {
      path: '/flow/howto/netvio/NetvioRy',
      name: 'NetvioRy',
      component: NetvioRy,
    },
    {
      path: '/flow/howto/netvio/NetvioRn',
      name: 'NetvioRn',
      component: NetvioRn,
    },
    {
      path: '/flow/howto/netvio/NetvioRnY',
      name: 'NetvioRnY',
      component: NetvioRnY,
    },
    {
      path: '/flow/howto/netvio/NetvioRnYy',
      name: 'NetvioRnYy',
      component: NetvioRnYy,
    },
    {
      path: '/flow/howto/netvio/NetvioRnYyY',
      name: 'NetvioRnYyY',
      component: NetvioRnYyY,
    },
    {
      path: '/flow/howto/netvio/NetvioRnYyN',
      name: 'NetvioRnYyN',
      component: NetvioRnYyN,
    },
    {
      path: '/flow/howto/netvio/NetvioRnYyNy',
      name: 'NetvioRnYyNy',
      component: NetvioRnYyNy,
    },
    {
      path: '/flow/howto/netvio/NetvioRnYyNn',
      name: 'NetvioRnYyNn',
      component: NetvioRnYyNn,
    },
    {
      path: '/flow/howto/netvio/NetvioRnYn',
      name: 'NetvioRnYn',
      component: NetvioRnYn,
    },
    {
      path: '/flow/howto/netvio/NetvioRnYnY',
      name: 'NetvioRnYnY',
      component: NetvioRnYnY,
    },
    {
      path: '/flow/howto/netvio/NetvioRnYnYy',
      name: 'NetvioRnYnYy',
      component: NetvioRnYnYy,
    },
    {
      path: '/flow/howto/netvio/NetvioRnYnYn',
      name: 'NetvioRnYnYn',
      component: NetvioRnYnYn,
    },
    {
      path: '/flow/howto/netvio/NetvioRnYnN',
      name: 'NetvioRnYnN',
      component: NetvioRnYnN,
    },
    {
      path: '/flow/howto/netvio/NetvioRnN',
      name: 'NetvioRnN',
      component: NetvioRnN,
    },
    // END - Net Vio flow

    // BEGIN - Paid Migration flow
    {
      path: '/flow/migration/Mig',
      name: 'Mig',
      component: Mig,
    },
    {
      path: '/flow/migration/MigY',
      name: 'MigY',
      component: MigY,
    },
    {
      path: '/flow/migration/MigYy',
      name: 'MigYy',
      component: MigYy,
    },
    {
      path: '/flow/migration/MigYn',
      name: 'MigYn',
      component: MigYn,
    },
    {
      path: '/flow/migration/MigN',
      name: 'MigN',
      component: MigN,
    },
    {
      path: '/flow/migration/MigNy',
      name: 'MigNy',
      component: MigNy,
    },
    {
      path: '/flow/migration/MigNyY',
      name: 'MigNyY',
      component: MigNyY,
    },
    {
      path: '/flow/migration/MigNyYy',
      name: 'MigNyYy',
      component: MigNyYy,
    },
    {
      path: '/flow/migration/MigNyYyY',
      name: 'MigNyYyY',
      component: MigNyYyY,
    },
    {
      path: '/flow/migration/MigNyYyN',
      name: 'MigNyYyN',
      component: MigNyYyN,
    },
    {
      path: '/flow/migration/MigNyYyNy',
      name: 'MigNyYyNy',
      component: MigNyYyNy,
    },
    {
      path: '/flow/migration/MigNyYyNyY',
      name: 'MigNyYyNyY',
      component: MigNyYyNyY,
    },
    {
      path: '/flow/migration/MigNyYyNyYy',
      name: 'MigNyYyNyYy',
      component: MigNyYyNyYy,
    },
    {
      path: '/flow/migration/MigNyYyNyYyY',
      name: 'MigNyYyNyYyY',
      component: MigNyYyNyYyY,
    },
    {
      path: '/flow/migration/MigNyYyNyYyYy',
      name: 'MigNyYyNyYyYy',
      component: MigNyYyNyYyYy,
    },
    {
      path: '/flow/migration/MigNyYyNyYyYn',
      name: 'MigNyYyNyYyYn',
      component: MigNyYyNyYyYn,
    },
    {
      path: '/flow/migration/MigNyYyNyYyYnY',
      name: 'MigNyYyNyYyYnY',
      component: MigNyYyNyYyYnY,
    },
    {
      path: '/flow/migration/MigNyYyNyYyYnN',
      name: 'MigNyYyNyYyYnN',
      component: MigNyYyNyYyYnN,
    },
    {
      path: '/flow/migration/MigNyYyNyYyN',
      name: 'MigNyYyNyYyN',
      component: MigNyYyNyYyN,
    },
    {
      path: '/flow/migration/MigNyYyNyYyNy',
      name: 'MigNyYyNyYyNy',
      component: MigNyYyNyYyNy,
    },
    {
      path: '/flow/migration/MigNyYyNyYyNyY',
      name: 'MigNyYyNyYyNyY',
      component: MigNyYyNyYyNyY,
    },
    {
      path: '/flow/migration/MigNyYyNyYyNyYy',
      name: 'MigNyYyNyYyNyYy',
      component: MigNyYyNyYyNyYy,
    },
    {
      path: '/flow/migration/MigNyYyNyYyNyYn',
      name: 'MigNyYyNyYyNyYn',
      component: MigNyYyNyYyNyYn,
    },
    {
      path: '/flow/migration/MigNyYyNyYyNyYnY',
      name: 'MigNyYyNyYyNyYnY',
      component: MigNyYyNyYyNyYnY,
    },
    {
      path: '/flow/migration/MigNyYyNyYyNyYnN',
      name: 'MigNyYyNyYyNyYnN',
      component: MigNyYyNyYyNyYnN,
    },
    {
      path: '/flow/migration/MigNyYyNyYyNyN',
      name: 'MigNyYyNyYyNyN',
      component: MigNyYyNyYyNyN,
    },
    {
      path: '/flow/migration/MigNyYyNyYyNn',
      name: 'MigNyYyNyYyNn',
      component: MigNyYyNyYyNn,
    },
    {
      path: '/flow/migration/MigNyYyNyYyNnY',
      name: 'MigNyYyNyYyNnY',
      component: MigNyYyNyYyNnY,
    },
    {
      path: '/flow/migration/MigNyYyNyYyNnN',
      name: 'MigNyYyNyYyNnN',
      component: MigNyYyNyYyNnN,
    },
    {
      path: '/flow/migration/MigNyYyNyYn',
      name: 'MigNyYyNyYn',
      component: MigNyYyNyYn,
    },
    {
      path: '/flow/migration/MigNyYyNyN',
      name: 'MigNyYyNyN',
      component: MigNyYyNyN,
    },
    {
      path: '/flow/migration/MigNyYyNn',
      name: 'MigNyYyNn',
      component: MigNyYyNn,
    },

    {
      path: '/flow/migration/MigNyYn',
      name: 'MigNyYn',
      component: MigNyYn,
    },
    {
      path: '/flow/migration/MigNyN',
      name: 'MigNyN',
      component: MigNyN,
    },
    {
      path: '/flow/migration/MigNn',
      name: 'MigNn',
      component: MigNn,
    },
    // END - Paid Migration flow
  ]
})
