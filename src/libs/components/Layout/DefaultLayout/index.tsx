import { styles } from './Style'

import { Breadcrumb } from '@libs/components/Breadcrumb'
import { Footer } from '@libs/components/Footer'
import { Header } from '@libs/components/Header'

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
