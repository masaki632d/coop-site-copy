import { NextPage } from 'next'

import { Agreement } from '@components/agreement'
import { CustomSeo } from '@libs/components/CustomSeo'
import { companyName } from '@libs/constants/common'

const AgreementPage: NextPage = () => (
  <>
    <CustomSeo
      title="個人関連情報の受領と利用について"
      description={`${companyName}の個人関連情報の受領と利用について掲載しています。`}
    />
    <Agreement />
  </>
)

export default AgreementPage
