import { FC } from 'react'

import { styles } from './Style'

import { ResponsiveImage } from '@components/top/ResponsiveImage'

export const Loading: FC = () => (
  <>
    <div css={[styles.back, styles.top]} />
    <div css={[styles.back, styles.bottom]} />
    <div css={styles.img}>
      <ResponsiveImage
        image={{
          pc: '/images/top/slide/img_pc_0.jpg',
          sp: '/images/top/slide/img_sp_0.jpg',
        }}
      />
    </div>
  </>
)
