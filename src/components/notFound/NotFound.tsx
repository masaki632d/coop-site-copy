import Link from 'next/link'
import { FC } from 'react'

import { styles } from './Style'

import { BaseLayout } from '@libs/components/BaseLayout'
import { Button } from '@libs/components/Button'

export const NotFound: FC = () => (
  <BaseLayout>
    <h1 css={styles.h1}>
      お探しのページは
      <br css={styles.sp} />
      見つかりませんでした。
    </h1>
    <p css={styles.text}>
      あなたがアクセスしたページは削除されたか
      <br />
      URLが変更されているため表示することができません。
    </p>
    <div css={styles.button}>
      <Link href="/" passHref>
        <Button as="anchor" label="TOPに戻る" displayIcon={false} />
      </Link>
    </div>
  </BaseLayout>
)
