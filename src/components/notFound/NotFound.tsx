import { css } from '@emotion/react'
import Link from 'next/link'
import { FC } from 'react'

import { BaseLayout } from '@libs/components/BaseLayout'
import { Button } from '@libs/components/Button'
import { mq } from '@styles/mediaQuery'
import { spacing } from '@styles/spacing'
import { typography } from '@styles/typography'

const styles = {
  h1: css`
    text-align: center;
    ${typography.bold[36]}
    ${mq['sm']} {
      ${typography.bold[20]}
    }
  `,
  text: css`
    text-align: center;
    margin-top: ${spacing(5)};
    ${typography.normal[16]}
    ${mq['sm']} {
      ${typography.normal[12]}
    }
  `,
  button: css`
    max-width: 600px;
    margin: ${spacing(6)} auto 0;
  `,
  sp: css`
    display: none;
    ${mq['sm']} {
      display: block;
    }
  `,
}

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
