import { FC } from 'react'

import { BaseLayout } from '@libs/components/BaseLayout/BaseLayout'
import { policyStyles } from '@styles/policy'

export const Agreement: FC = () => (
  <BaseLayout>
    <article css={policyStyles.article}>
      <h1>個人関連情報の受領と利用について</h1>
      <p>ダミーテキストダミーテキスト</p>
    </article>

    {/* TODO: 振り返り */}
    {/* <button></button> */}
  </BaseLayout>
)
