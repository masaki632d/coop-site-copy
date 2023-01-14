import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { styles } from './Style'

import { useTopDisplayServices } from '@hooks/top/use-top-display-services'
import { BaseLayout } from '@libs/components/BaseLayout/BaseLayout'
import { Button } from '@libs/components/Button'
import { Headline } from '@libs/components/Headline'
import { typography } from '@styles/typography'

export const Service: FC = () => {
  const { services } = useTopDisplayServices()

  return (
    <section css={styles.section}>
      <BaseLayout>
        <Headline mainText="事業紹介" subText="SERVICE" />

        <ul css={styles.services}>
          {services.map(
            ({ name, code, siteCategory, copy, description, imagePath }) => (
              <li key={name}>
                <Link href={`/service#${code}`} passHref>
                  <a css={styles.service}>
                    <figure css={styles.logo}>
                      <Image
                        src={`/images/service/logo/${imagePath}`}
                        width="330"
                        height="140"
                        objectFit="cover"
                        alt={name}
                      />
                    </figure>
                    <h2 css={styles.title}>{name}</h2>
                    <p css={styles.siteCategory}>{siteCategory}</p>
                    <h3 css={typography.normal[16]}>{copy}</h3>
                    <p css={typography.normal[12]}>{description}</p>
                  </a>
                </Link>
              </li>
            )
          )}
        </ul>

        <div css={styles.link}>
          <Link href="/service" passHref>
            <Button as="anchor" label="事業一覧を見る" displayIcon={false} />
          </Link>
        </div>
      </BaseLayout>
    </section>
  )
}
