import Image from 'next/image'
import { FC } from 'react'

import { styles } from './Style'

type CategoryHeaderProps = {
  title: string
  srcPc: string
  srcSp: string
}

export const CategoryHeader: FC<CategoryHeaderProps> = ({
  title,
  srcPc,
  srcSp,
}) => (
  <header css={styles.header}>
    <div css={styles.pc}>
      <Image src={srcPc} layout="fill" objectFit="cover" alt="" priority />
    </div>
    <div css={styles.sp}>
      <Image src={srcSp} layout="fill" objectFit="cover" alt="" priority />
    </div>
    <h1 css={styles.h1}>{title}</h1>
  </header>
)
