import { NextPage } from 'next'

import { Privacy } from '@components/privacy'
import { CustomSeo } from '@libs/components/CustomSeo'
import { companyName } from '@libs/constants/common'

const PrivacyPage: NextPage = () => (
  <>
    <CustomSeo
      title="プライバシーポリシー"
      description={`${companyName}のプライバシーポリシーを掲載しています。`}
    />
    <Privacy />
  </>
)

export default PrivacyPage
