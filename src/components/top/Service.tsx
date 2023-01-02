import { css } from '@emotion/react'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { useTopDisplayServices } from '@hooks/top/useTopDisplayServices'
import { BaseLayout } from '@libs/components/BaseLayout/BaseLayout'
import { Button } from '@libs/components/Button'
import { Headline } from '@libs/components/Headline'
import { elevation } from '@styles/elevation'
import { mq } from '@styles/mediaQuery'
import { palette } from '@styles/palette'
import { spacing } from '@styles/spacing'
import { typography } from '@styles/typography'

const styles = {
  section: css`
    background-color: ${palette.lightGrey};
  `,
  services: css`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: ${spacing(10)} auto ${spacing(4)};
    ${mq.sm} {
      flex-direction: column;
      margin: ${spacing(4)} auto ${spacing(3)};
    }
    li {
      width: calc(33% - 16px);
      margin-bottom: ${spacing(3)};
      ${mq.sm} {
        width: 100%;
      }
    }
  `,
  service: css`
    display: block;
    height: 100%;
    box-shadow: ${elevation[2]};
    background-color: ${palette.white};
    padding: ${spacing(3)};
    box-sizing: border-box;
    transition: transform 0.2s ease-in-out;
    ${mq.sm} {
      padding: ${spacing(2)};
    }
    :hover {
      transform: translateY(-4px);
    }
  `,
  logo: css`
    height: 118px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${spacing(1)};
  `,
  title: css`
    ${typography.normal[20]}
    font-weight: bold;
  `,
  siteCategory: css`
    margin-bottom: ${spacing(1)};
    color: ${palette.red};
    ${typography.normal[14]}
  `,
  link: css`
    max-width: 440px;
    margin: auto;
  `,
}

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
