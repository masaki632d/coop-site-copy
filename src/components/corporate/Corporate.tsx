import { FC } from 'react'

import { Access } from '@libs/components/Access'
import { CategoryHeader } from '@libs/components/CategoryHeader'
import { CompanyOverview } from '@libs/components/CompanyOverview'
import { Officer } from '@libs/components/Officer'

export const Corporate: FC = () => (
  <>
    <CategoryHeader
      title="企業情報"
      srcPc="/images/corporate/kv.png"
      srcSp="/images/corporate/kv_sp.png"
    />
    <Officer />
    <CompanyOverview />
    <Access />
  </>
)
