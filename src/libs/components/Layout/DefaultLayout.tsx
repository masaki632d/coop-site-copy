import { css } from '@emotion/react'

import { Breadcrumb } from '@libs/components/Breadcrumb'
import { Footer } from '@libs/components/Footer'
import { Header } from '@libs/components/Header'
import { headerHeight } from '@styles/headerHeight'
import { mq } from '@styles/mediaQuery'

const styles = {
  headerSpace: css`
    height: ${headerHeight.default};
    ${mq.lg} {
      height: ${headerHeight.small};
    }
  `,
}

export const getDefaultLayout =
  (): Layout =>
  // eslint-disable-next-line react/display-name
  (page) => {
    return (
      <>
        <Header visible />
        <div css={styles.headerSpace} />
        {page}
        <Breadcrumb />
        <Footer />
      </>
    )
  }
