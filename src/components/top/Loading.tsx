import { css, keyframes } from '@emotion/react'
import { FC } from 'react'

import { ResponsiveImage } from '@components/top/ResponsiveImage'
import { palette } from '@styles/palette'

const top = keyframes`
  0% {
    top: 0;
  }
  100% {
    top: -100%;
  }
`

const bottom = keyframes`
  0% {
    bottom: 0;
  }
  100% {
    bottom: -100%;
  }
`

const fadeInImg = keyframes`
  0% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    visibility: hidden;
  }
`

const styles = {
  back: css`
    position: fixed;
    left: 0;
    width: 100%;
    height: 50%;
    background-color: ${palette.white};
    z-index: 100;
  `,
  top: css`
    top: 0;
    animation: ${top} 0.5s ease-in 3s both;
  `,
  bottom: css`
    bottom: 0;
    animation: ${bottom} 0.5s ease-in 3s both;
  `,
  img: css`
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    animation: ${fadeInImg} ease-in 3s forwards;
    opacity: 0;
  `,
}

export const Loading: FC = () => {
  return (
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
}
