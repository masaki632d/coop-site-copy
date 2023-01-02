import { FC } from 'react'

import { CopyRecruit } from '@components/recruit/CopyRecruit'
import { BaseLayout } from '@libs/components/BaseLayout/BaseLayout'
import { CategoryHeader } from '@libs/components/CategoryHeader'

export const Recruit: FC = () => (
  <>
    <CategoryHeader
      title="採用情報"
      srcPc="/images/recruit/kv.png"
      srcSp="/images/recruit/kv_sp.png"
    />
    <BaseLayout>
      <CopyRecruit />
    </BaseLayout>
  </>
)
