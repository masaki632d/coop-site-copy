import { css } from '@emotion/react'
import { FC } from 'react'

import { BaseLayout } from '@libs/components/BaseLayout'
import { Headline } from '@libs/components/Headline/Headline'
import { companyName } from '@libs/constants/common'
import { mq } from '@styles/mediaQuery'
import { spacing } from '@styles/spacing'
import { typography } from '@styles/typography'

const styles = {
  access: css`
    display: flex;
    margin-top: ${spacing(10)};
    ${mq['sm']} {
      flex-direction: column;
      margin-top: ${spacing(4)};
    }
  `,
  mapWrapper: css`
    width: 50%;
    height: 320px;
    margin-right: ${spacing(6)};
    position: relative;
    overflow: hidden;
    ${mq['sm']} {
      width: 100%;
      height: 240px;
      margin-right: 0;
      margin-bottom: ${spacing(1)};
    }
  `,
  map: css`
    width: 100%;
    // 以下地図左上のポップを消すための記述
    height: 700px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    ${mq['sm']} {
      height: 550px;
    }
  `,
  name: css`
    ${typography.normal[30]}
    margin-bottom: ${spacing(2)};
    ${mq['sm']} {
      ${typography.normal[20]}
      margin-bottom: ${spacing(1)};
    }
  `,
  text: css`
    margin-bottom: ${spacing(2)};
    ${mq['sm']} {
      ${typography.normal[14]}
      margin-bottom: ${spacing(1)};
    }
  `,
}

export const Access: FC = () => (
  <BaseLayout>
    <section>
      <Headline mainText="アクセス" subText="ACCESS" />
      <div css={styles.access}>
        <div css={styles.mapWrapper}>
          {/* <iframe css={styles.map} src="" title="本社" /> */}
        </div>
        <div>
          <h3 css={styles.name}>本社</h3>
          <p css={styles.text}>
            〒000-0000
            <br />
            ダミーテキスト
          </p>
          <p css={styles.text}>
            最寄駅
            <br />
            ダミーテキスト
            <br />
            ダミーテキスト
          </p>
        </div>
      </div>

      <div css={styles.access}>
        <div css={styles.mapWrapper}>
          {/* <iframe css={styles.map} src="" title="大阪オフィス" /> */}
        </div>
        <div>
          <h3 css={styles.name}>
            {companyName}
            <br />
            大阪オフィス
          </h3>
          <p css={styles.text}>
            〒000-0000
            <br />
            ダミーテキスト
          </p>
          <p css={styles.text}>
            最寄駅
            <br />
            ダミーテキスト
            <br />
            ダミーテキスト
          </p>
        </div>
      </div>

      <div css={styles.access}>
        <div css={styles.mapWrapper}>
          {/* <iframe css={styles.map} src="" title="沖縄支店" /> */}
        </div>
        <div>
          <h3 css={styles.name}>
            {companyName}
            <br />
            沖縄支店
          </h3>
          <p css={styles.text}>
            〒000-0000
            <br />
            ダミーテキスト
          </p>
          <p css={styles.text}>
            最寄駅
            <br />
            ダミーテキスト
          </p>
        </div>
      </div>
    </section>
  </BaseLayout>
)
