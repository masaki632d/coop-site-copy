import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { styles } from './Style'

import { BaseLayout } from '@libs/components/BaseLayout'
import { Button } from '@libs/components/Button'
import { Headline } from '@libs/components/Headline'
import { companyName } from '@libs/constants/common'

export const Recruit: FC = () => (
  <section css={styles.section}>
    <BaseLayout>
      <Headline mainText="採用情報" subText="RECRUIT" />
      <div css={styles.recruit}>
        <div css={styles.description}>
          <h3 css={styles.title}>
            新しいことに挑戦する
            <br />
            素敵な仲間を募集しています
          </h3>
          <p css={styles.text}>
            {companyName}では、新卒・中途問わず
            <br />
            様々な職種の人材を募集しております。まずは募集要項をご確認ください。
          </p>
          <div css={styles.link}>
            <Link href="/recruit" passHref>
              <Button
                as="anchor"
                label="募集要項を見る"
                size="small"
                displayIcon={false}
              />
            </Link>
          </div>
        </div>
        <figure css={styles.img}>
          <Image
            src="/images/top/img_top_recruit.png"
            width={629}
            height={282}
            objectFit="cover"
            alt="社員の画像"
          />
        </figure>
      </div>
    </BaseLayout>
  </section>
)
