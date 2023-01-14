import { FC } from 'react'

import { ResponsiveImage } from '../ResponsiveImage'

import { styles } from './Style'

const slideImages = [
  {
    pc: '/images/top/slide/img_pc_1.jpg',
    sp: '/images/top/slide/img_sp_1.jpg',
  },
  {
    pc: '/images/top/slide/img_pc_2.jpg',
    sp: '/images/top/slide/img_sp_2.jpg',
  },
  {
    pc: '/images/top/slide/img_pc_3.jpg',
    sp: '/images/top/slide/img_sp_3.jpg',
  },
  {
    pc: '/images/top/slide/img_pc_4.jpg',
    sp: '/images/top/slide/img_sp_4.jpg',
  },
  {
    pc: '/images/top/slide/img_pc_1.jpg',
    sp: '/images/top/slide/img_sp_1.jpg',
  },
]

export const MainVisual: FC = () => (
  <div css={styles.root}>
    <div css={[styles.mask, styles.maskTop]}>
      <div css={styles.slide}>
        {slideImages.map((image, index) => (
          <div css={[styles.imgWrap, styles.animationTop]} key={index}>
            <ResponsiveImage image={image} />
          </div>
        ))}
      </div>
    </div>
    <div css={[styles.mask, styles.maskMiddle]}>
      <div css={styles.slide}>
        {slideImages.map((image, index) => (
          <div css={[styles.imgWrap, styles.animationMiddle]} key={index}>
            <ResponsiveImage image={image} />
          </div>
        ))}
      </div>
    </div>
    <div css={[styles.mask, styles.maskBottom]}>
      <div css={styles.slide}>
        {slideImages.map((image, index) => (
          <div css={[styles.imgWrap, styles.animationBottom]} key={index}>
            <ResponsiveImage image={image} />
          </div>
        ))}
      </div>
    </div>
    <div css={styles.scroll}>
      Scroll
      <span className="material-icons" css={styles.icon}>
        keyboard_arrow_down
      </span>
    </div>
  </div>
)
