import { FC } from 'react'

import { Mission } from '@components/vision/Mission'
import { Philosophy } from '@components/vision/Philosophy'
import { CategoryHeader } from '@libs/components/CategoryHeader'

export const Vision: FC = () => (
  <>
    <CategoryHeader
      title="大切にしていること"
      srcPc="/images/vision/kv.png"
      srcSp="/images/vision/kv_sp.png"
    />
    <Mission />
    <Philosophy />
  </>
)
