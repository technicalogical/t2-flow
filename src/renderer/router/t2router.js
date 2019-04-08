import T2_403 from '@/components/t2flows/fourthree/index'
import T2_500 from '@/components/t2flows/fivehundrederror/index'
import T2_slow from '@/components/t2flows/slow/index'
import T2_form from '@/components/t2flows/form/index'
import T2_mwpdomainchange from '@/components/t2flows/mwpdomainchange/index'
import T2_Migsync from '@/components/t2flows/Migsync/index'
import T2_mwpRestore from '@/components/t2flows/mwprestore/index'
import T2_mwpDbPrefix from '@/components/t2flows/dbprefix/index'
import T2_esmigration from '@/components/t2flows/esmigration/index'
import T2_esrestore from '@/components/t2flows/esrestore/index'
import T2_ssh from '@/components/t2flows/ssh/index'
import T2_server from '@/components/t2flows/server/index'
import T2_ftp from '@/components/t2flows/ftp/index'
import T2_expertservice from '@/components/t2flows/expertservice/index'
export default [


{
  path: '/t2flows/fourthree/index',
  name: 'T2_403',
  component: T2_403
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
  path: '/t2flows/form/index',
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
  path: '/t2flows/esmigration/index',
  name: 'T2_esmigration',
  component: T2_esmigration
},
{
  path: '/t2flows/esrestore/index',
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
]
