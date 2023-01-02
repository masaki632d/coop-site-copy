import { NextPage } from 'next'

import { Vision } from '@components/vision/Vision'
import { CustomSeo } from '@libs/components/CustomSeo'
import { companyName } from '@libs/constants/common'

const VisionPage: NextPage = () => (
  <>
    <CustomSeo
      title="大切にしていること"
      description={`${companyName}の経営理念、行動指針、ミッションを掲載しています。`}
    />
    <Vision />
  </>
)

export default VisionPage
