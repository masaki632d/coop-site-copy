import { css } from '@emotion/react'
import Image from 'next/image'
import { FC } from 'react'

import { mq } from '@styles/mediaQuery'

const responsiveStyles = {
  pc: css`
    ${mq.md} {
      display: none;
    }
  `,
  sp: css`
    display: none;
    ${mq.md} {
      display: block;
    }
  `,
}

type ResponsiveImageProps = {
  image: { pc: string; sp: string }
}

export const ResponsiveImage: FC<ResponsiveImageProps> = ({ image }) => {
  return (
    <>
      <div css={responsiveStyles.pc}>
        <Image
          src={image.pc}
          layout="fill"
          objectFit="cover"
          priority
          alt="Mock Image"
        />
      </div>
      <div css={responsiveStyles.sp}>
        <Image
          src={image.sp}
          layout="fill"
          objectFit="cover"
          priority
          alt="Mock Image"
        />
      </div>
    </>
  )
}
