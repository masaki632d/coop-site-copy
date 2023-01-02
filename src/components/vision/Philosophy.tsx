import { css } from '@emotion/react'
import { FC } from 'react'

import { BaseLayout } from '@libs/components/BaseLayout'
import { Headline } from '@libs/components/Headline/Headline'
import { mq } from '@styles/mediaQuery'
import { spacing } from '@styles/spacing'
import { typography } from '@styles/typography'

const styles = {
  philosophy: css`
    text-align: center;
    margin-top: ${spacing(10)};
    ${mq['sm']} {
      margin-top: ${spacing(5)};
    }
  `,
  philosophyBg: css`
    background-color: rgba(239, 239, 239, 0.4);
  `,
  philosophyText: css`
    ${typography.normal[36]}
    letter-spacing: 0.3rem;
    ${mq['sm']} {
      ${typography.normal[20]}
      line-height: 1.5em;
      :not(:last-of-type) {
        margin-bottom: ${spacing(4)};
      }
    }
  `,
  people: css`
    text-align: center;
    ${mq['sm']} {
      flex-direction: column;
    }
  `,
  peopleTitle: css`
    ${typography.bold[24]}
  `,
  peopleText: css`
    margin: ${spacing(5)} 0 ${spacing(5)};
    ${mq['sm']} {
      ${typography.normal[12]}
    }
  `,
  spVisible: css`
    display: none;
    ${mq['lg']} {
      display: block;
    }
  `,
  iframe: css`
    width: 560px;
    height: 420px;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.2) 0 5px 40px;
    ${mq['sm']} {
      width: 100%;
      height: 248px;
    }
  `,
}

export const Philosophy: FC = () => {
  return (
    <>
      <section css={styles.philosophyBg}>
        <BaseLayout>
          <Headline mainText="経営理念" subText="PHILOSOPHY" />
          <div css={styles.philosophy}>
            <p css={styles.philosophyText}>
              経営理念
              <br css={styles.spVisible} />
              テキスト
            </p>
          </div>
        </BaseLayout>
      </section>

      <BaseLayout>
        <section css={styles.people}>
          <h3 css={styles.peopleTitle}>“People”</h3>
          <p css={styles.peopleText}>
            テキストテキスト
            <br />
            テキストテキスト
          </p>
        </section>
      </BaseLayout>
    </>
  )
}
