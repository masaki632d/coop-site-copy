import { css, keyframes } from '@emotion/react'
import { FC } from 'react'

import { ResponsiveImage } from './ResponsiveImage'

import { mq } from '@styles/mediaQuery'
import { palette } from '@styles/palette'
import { typography } from '@styles/typography'

const animation = keyframes`
  0% {
    transform: translateX(0%);
  }
  21% {
    transform: translateX(0%);
  }
  29% {
    transform: translateX(-100%);
  }
  43% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(-200%);
  }
  64% {
    transform: translateX(-200%);
  }
  71% {
    transform: translateX(-300%);
  }
  86% {
    transform: translateX(-300%);
  }
  93% {
    transform: translateX(-400%);
  }
  100% {
    transform: translateX(-400%);
  }
`

const styles = {
  root: css`
    height: 100vh;
    background-color: ${palette.white};
    position: relative;
    overflow: hidden;
  `,
  mask: css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  `,
  maskTop: css`
    clip-path: polygon(0 0, 100% 0, 100% 21%, 0 41%);
  `,
  maskMiddle: css`
    clip-path: polygon(0 40%, 100% 20%, 100% 61%, 0 81%);
  `,
  maskBottom: css`
    clip-path: polygon(0 80%, 100% 60%, 100% 100%, 0 100%);
  `,
  slide: css`
    display: flex;
  `,
  imgWrap: css`
    width: 100vw;
    height: 100vh;
    flex-shrink: 0;
    position: relative;
    // transformで画像がたまに消える対策
    filter: blur(0);
    // FireFoxの白飛び対策
    outline: 1px solid transparent;
  `,

  animationTop: css`
    animation: ${animation} 16s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite
      0.1s both;
  `,
  animationMiddle: css`
    animation: ${animation} 16s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite
      0.2s both;
  `,
  animationBottom: css`
    animation: ${animation} 16s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite
      0.3s both;
  `,
  scroll: css`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    color: ${palette.white};
    text-align: center;
    text-shadow: 0px 1px 2px rgba(51, 51, 51, 0.4);
    letter-spacing: 0.05em;
    ${typography.normal[16]}
    ${mq['sm']} {
      bottom: -10px;
      ${typography.normal[14]}
    }
  `,
  icon: css`
    font-size: 42px;
    display: block;
    transform: translateY(-14px);
  `,
}

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

export const MainVisual: FC = () => {
  return (
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
}
