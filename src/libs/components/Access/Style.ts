import { css } from '@emotion/react'

import { mq } from '@styles/mediaQuery'
import { spacing } from '@styles/spacing'
import { typography } from '@styles/typography'

export const styles = {
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
