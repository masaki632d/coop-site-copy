import { NextSeo } from 'next-seo'
import { FC } from 'react'

import { companyName } from '@libs/constants/common'

type CustomSeoProps = {
  title: string
  description: string
}

export const CustomSeo: FC<CustomSeoProps> = ({ title, description }) => (
  <NextSeo
    title={`${title} | ${companyName}`}
    description={description}
    openGraph={{
      title: title,
      description: description,
      site_name: companyName,
      images: [
        {
          url: '/public//images/common/Logo.png',
          width: 671,
          height: 193,
          alt: companyName,
        },
      ],
    }}
  />
)
