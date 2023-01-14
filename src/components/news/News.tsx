import { FC } from 'react'

import { styles } from './Style'

import { BaseLayout } from '@libs/components/BaseLayout'
import { Button } from '@libs/components/Button'
import { CategoryHeader } from '@libs/components/CategoryHeader'
import { Headline } from '@libs/components/Headline'
import { corporateNews } from '@libs/constants/news'

export const News: FC = () => (
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
