import { FC } from 'react'

import { styles } from './Style'

type HeadlineProps = {
  mainText: string
  subText: string
}

export const Headline: FC<HeadlineProps> = ({ mainText, subText }) => (
  <div css={styles.headline}>
    <h2 css={styles.main}>{mainText}</h2>
    <p css={styles.sub}>{subText}</p>
  </div>
)
