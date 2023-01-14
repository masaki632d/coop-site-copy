import Image from 'next/image'
import { FC } from 'react'

import { styles } from './Style'

type ResponsiveImageProps = {
  image: { pc: string; sp: string }
}

export const ResponsiveImage: FC<ResponsiveImageProps> = ({ image }) => (
  <>
    <div css={styles.pc}>
      <Image
        src={image.pc}
        layout="fill"
        objectFit="cover"
        priority
        alt="Mock Image"
      />
    </div>
    <div css={styles.sp}>
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
