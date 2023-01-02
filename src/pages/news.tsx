import { NextPage } from 'next'

import { Recruit } from '@components/recruit'
import { CustomSeo } from '@libs/components/CustomSeo'
import { companyName } from '@libs/constants/common'

const RecruitPage: NextPage = () => (
  <>
    <CustomSeo
      title="採用情報"
      description={`${companyName}の新卒採用、中途採用情報を掲載しています。`}
    />
    <Recruit />
  </>
)

export default RecruitPage
