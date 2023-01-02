import { css } from '@emotion/react'
import { FC } from 'react'

import { BaseLayout } from '@libs/components/BaseLayout'
import { Button } from '@libs/components/Button'
import { CategoryHeader } from '@libs/components/CategoryHeader'
import { Headline } from '@libs/components/Headline'
import { corporateNews } from '@libs/constants/news'
import { mq } from '@styles/mediaQuery'
import { palette } from '@styles/palette'
import { spacing } from '@styles/spacing'
import { typography } from '@styles/typography'

const styles = {
  section: css`
    display: grid;
    gap: 94px;
    ${mq['sm']} {
      gap: 32px;
    }
  `,
  list: css`
    display: grid;
    gap: 32px;
    width: 100%;
    max-width: 900px;
    margin: auto;
    ${typography.normal[16]}
    ${mq['sm']} {
      gap: 16px;
      ${typography.normal[12]}
    }
  `,
  listItem: css`
    display: grid;
    grid-template-columns: 120px 1fr;
    gap: 80px;
    ${mq['sm']} {
      grid-template-columns: 1fr;
      gap: 0;
      padding-bottom: ${spacing(2)};
      border-bottom: 1px solid ${palette.lightGrey};
    }
  `,
  link: css`
    transition: opacity ease-in-out 0.3s;
    &:hover {
      opacity: 0.6;
    }
  `,
  button: css`
    width: 100%;
    max-width: 440px;
    margin: auto;
  `,
}

export const News: FC = () => {
  return (
    <>
      <CategoryHeader
        title="ニュース"
        srcPc="/images/news/kv.png"
        srcSp="/images/news/kv_sp.png"
      />
      <BaseLayout>
        <section css={styles.section}>
          <Headline mainText="コーポレートニュース" subText="CORPORATE NEWS" />
          <dl css={styles.list}>
            {corporateNews.map((news) => (
              <div css={styles.listItem} key={news.title}>
                <dt>{news.date}</dt>
                <dd>
                  <a
                    href={news.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    css={styles.link}
                  >
                    {news.title}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
          <div css={styles.button}>
            <Button
              label="ニュースを見る"
              as="anchor"
              href="https://www.yahoo.co.jp/"
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        </section>
      </BaseLayout>
    </>
  )
}
