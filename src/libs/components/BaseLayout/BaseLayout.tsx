import { css } from '@emotion/react'
import { FC, ReactNode } from 'react'

import { mq } from '@styles/mediaQuery'
import { spacing } from '@styles/spacing'

const styles = {
  wrapper: css`
    max-width: 1200px;
    margin: auto;
    padding: ${spacing(10)} 0 ${spacing(15)};
    ${mq.lg} {
      padding-left: ${spacing(3)};
      padding-right: ${spacing(3)};
    }
    ${mq.sm} {
      padding: ${spacing(5)} ${spacing(3)} ${spacing(7)};
    }
  `,
}

type BaseLayoutProps = {
  children: ReactNode
}

export const BaseLayout: FC<BaseLayoutProps> = ({ children }) => (
  <div css={styles.wrapper}>{children}</div>
)
