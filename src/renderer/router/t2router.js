import T2_403 from '@/components/t2flows/fourthree/index'
import T2_404 from '@/components/t2flows/fourfour/index'
import T2_500 from '@/components/t2flows/fivehundrederror/index'
import T2_slow from '@/components/t2flows/slow/index'
import T2_form from '@/components/t2flows/mailissues/form/index'
import T2_mwpdomainchange from '@/components/t2flows/mwpdomainchange/index'
import T2_Migsync from '@/components/t2flows/Migsync/index'
import T2_mwpRestore from '@/components/t2flows/mwprestore/index'
import T2_mwpDbPrefix from '@/components/t2flows/dbprefix/index'
import T2_esmigration from '@/components/t2flows/expertservice/esmigration/index'
import T2_esrestore from '@/components/t2flows/expertservice/esrestore/index'
import T2_ssh from '@/components/t2flows/ssh/index'
import T2_server from '@/components/t2flows/server/index'
import T2_ftp from '@/components/t2flows/ftp/index'
import T2_expertservice from '@/components/t2flows/expertservice/index'
import T2_malware from '@/components/t2flows/netvio/malware/index'
import T2_filerepo from '@/components/t2flows/netvio/filerepo/index'
import T2_copyright from '@/components/t2flows/netvio/copyright/index'
import T2_netvio from '@/components/t2flows/netvio/index'
import T2_sslerrors from '@/components/t2flows/sslerrors/index'
import T2_Cronjob from '@/components/t2flows/cronjob/index'
import T2_Wpps from '@/components/t2flows/wpps/index'
import T2_Dns from '@/components/t2flows/dnscheck/index'
import T2_sucuri from '@/components/t2flows/sucuri/index'
import T2_backups from '@/components/t2flows/sucuri/backups/index'
import T2_firewall from '@/components/t2flows/sucuri/firewall/index'
import T2_mailissues from '@/components/t2flows/mailissues/index'


export default [
{
  path: '/t2flows/fourthree/index',
  name: 'T2_403',
  component: T2_403
},
{
  path: '/t2flows/fourfour/index',
  name: 'T2_404',
  component: T2_404
},
{
  path: '/t2flows/fivehundrederror/index',
  name: 'T2_500',
  component: T2_500
},
{
  path: '/t2flows/slow/index',
  name: 'T2_slow',
  component: T2_slow
},
{
  path: '/t2flows/cronjob/index',
  name: 'T2_Cronjob',
  component: T2_Cronjob
},
{
  path: '/t2flows/mailissues/form/index',
  name: 'T2_form',
  component: T2_form
},
{
  path: '/t2flows/mwpdomainchange/index',
  name: 'T2_mwpdomainchange',
  component: T2_mwpdomainchange
},
{
  path: '/t2flows/Migsync/index',
  name: 'T2_Migsync',
  component: T2_Migsync
},
{
  path: '/t2flows/mwprestore/index',
  name: 'T2_mwpRestore',
  component: T2_mwpRestore
},
{
  path: '/t2flows/dbprefix/index',
  name: 'T2_mwpDbPrefix',
  component: T2_mwpDbPrefix
},
{
  path: '/t2flows/expertservice/esmigration/index',
  name: 'T2_esmigration',
  component: T2_esmigration
},
{
  path: '/t2flows/expertservice/esrestore/index',
  name: 'T2_esrestore',
  component: T2_esrestore
},
{
path: '/t2flows/ssh/index',
name: 'T2_ssh',
component: T2_ssh
},
{
path: '/t2flows/server/index',
name: 'T2_server',
component: T2_server
},
{
path: '/t2flows/ftp/index',
name: 'T2_ftp',
component: T2_ftp
},
{
path: '/t2flows/expertservice/index',
name: 'T2_expertservice',
component: T2_expertservice
},
{
  path: '/t2flows/netvio/copyright/index',
  name: 'T2_copyright',
  component: T2_copyright
},
{
  path: '/t2flows/netvio/malware/index',
  name: 'T2_malware',
  component: T2_malware
},

{
  path: '/t2flows/netvio/filerepo/index',
  name: 'T2_filerepo',
  component: T2_filerepo
},
{
path: '/t2flows/netvio/index',
name: 'T2_netvio',
component: T2_netvio
},
{
path: '/t2flows/sslerrors/index',
name: 'T2_sslerrors',
component: T2_sslerrors
},
{
  path: '/t2flows/wpps/index',
  name: 'T2_Wpps',
  component: T2_Wpps
},
{
  path: '/t2flows/dnscheck/index',
  name: 'T2_Dns',
  component: T2_Dns
},
{
  path: '/t2flows/sucuri/index',
  name: 'T2_sucuri',
  component: T2_sucuri
},
{
  path: '/t2flows/sucuri/firewall/index',
  name: 'T2_firewall',
  component: T2_firewall
},
{
  path: '/t2flows/sucuri/backups/index',
  name: 'T2_backups',
  component: T2_backups
},
{
  path: '/t2flows/mailissues/index',
  name: 'T2_mailissues',
  component: T2_mailissues
},
]
