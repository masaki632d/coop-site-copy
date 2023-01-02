import { FC } from 'react'

import { BaseLayout } from '@libs/components/BaseLayout'
import { companyName } from '@libs/constants/common'
import { policyStyles } from '@styles/policy'

export const SitePolicy: FC = () => (
  <BaseLayout>
    <article css={policyStyles.article}>
      <h1>サイトポリシー</h1>
      <p>
        このウェブサイトは{companyName}（以下、当社）が運営しています。
        <br />
        当社ウェブサイトに関してご利用するお客様にお願いしたいことを以下に掲載いたしました。皆様のご協力をお願いいたします。
      </p>
      <section>
        <h2>著作権について</h2>
        <p>
          ダミーテキストダミーテキスト
          <br />
          ダミーテキストダミーテキスト
        </p>
      </section>
      <section>
        <h2>免責事項</h2>
        <p>ダミーテキストダミーテキスト</p>
      </section>
      <section>
        <h2>当社ウェブサイトへのリンクについて</h2>
        <p>ダミーテキストダミーテキスト</p>
      </section>
    </article>
  </BaseLayout>
)
