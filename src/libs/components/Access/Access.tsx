import { FC } from 'react'

import { styles } from './Style'

import { BaseLayout } from '@libs/components/BaseLayout'
import { Headline } from '@libs/components/Headline/Headline'
import { companyName } from '@libs/constants/common'

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
