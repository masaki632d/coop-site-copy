import { NextPage } from 'next'

import { SitePolicy } from '@components/sitePolicy'
import { CustomSeo } from '@libs/components/CustomSeo'
import { companyName } from '@libs/constants/common'

const SitePolicyPage: NextPage = () => (
  <>
    <CustomSeo
      title="プライバシーポリシー"
      description={`${companyName}のプライバシーポリシーを掲載しています。`}
    />
    <SitePolicy />
  </>
)

export default SitePolicyPage
