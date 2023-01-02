import { NextPage } from 'next'

import { Service } from '@components/service'
import { CustomSeo } from '@libs/components/CustomSeo'
import { companyName } from '@libs/constants/common'

const ServicePage: NextPage = () => (
  <>
    <CustomSeo
      title="事業紹介"
      description={`${companyName}の事業一覧を掲載しています。`}
    />
    <Service />
  </>
)

export default ServicePage
