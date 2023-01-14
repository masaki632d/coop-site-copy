import { FC, ReactNode } from 'react'

import { styles } from './Style'

type BaseLayoutProps = {
  children: ReactNode
}

export const BaseLayout: FC<BaseLayoutProps> = ({ children }) => (
  <div css={styles.wrapper}>{children}</div>
)
