import { Global } from '@emotion/react'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'

import { getDefaultLayout } from '@libs/components/Layout/DefaultLayout'
import { companyName, siteDescription } from '@libs/constants/common'
import { global } from '@styles/globals'

type Props = AppProps & {
  Component: {
    layout?: Layout
  }
}

function MyApp({ Component, pageProps }: Props) {
  const { layout = getDefaultLayout() } = Component

  const getParams = { id: 'GTM-A1111B' }

  return (
    <>
      <DefaultSeo
        title={companyName}
        description={siteDescription}
        openGraph={{
          title: companyName,
          description: siteDescription,
          site_name: companyName,
          images: [
            {
              url: '/public/images/common/Logo.png',
              width: 671,
              height: 193,
              alt: companyName,
            },
          ],
        }}
      />
      <Global styles={global} />
      {layout(<Component {...pageProps} />)}
    </>
  )
}

export default MyApp
