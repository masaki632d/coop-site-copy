import { NextPage } from 'next'

import { Corporate } from '@components/corporate'
import { CustomSeo } from '@libs/components/CustomSeo'
import { companyName } from '@libs/constants/common'

const CorporatePage: NextPage = () => (
  <>
    <CustomSeo
      title="企業情報"
      description={`${companyName}の会社概要、代表挨拶を掲載しています。`}
    />
    <Corporate />
  </>
)

export default CorporatePage
