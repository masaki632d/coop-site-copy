import { css } from '@emotion/react'

import { mq } from '@styles/mediaQuery'
import { palette } from '@styles/palette'
import { spacing } from '@styles/spacing'
import { typography } from '@styles/typography'

export const styles = {
  section: css`
    background-color: ${palette.white};
  `,
  mission: css`
    letter-spacing: 0.15em;
    line-height: 1.98;
    max-width: 750px;
    margin: 0 auto ${spacing(6)};
    ${typography.bold[36]}
    ${mq['sm']} {
      margin-bottom: ${spacing(3)};
      ${typography.bold[20]}
    }
  `,
  text: css`
    letter-spacing: 0.1em;
    line-height: 2.4;
    max-width: 750px;
    margin: 0 auto ${spacing(4)};
    ${mq['sm']} {
      letter-spacing: 0.16em;
      line-height: 2;
      margin-bottom: ${spacing(2)};
      ${typography.normal[12]}
    }
  `,
  back: css`
    height: 322px;
    ${mq['sm']} {
      height: 122px;
    }
    ::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      background-image: url('/images/top/back.png');
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }
  `,
  sp: css`
    display: none;
    ${mq['sm']} {
      display: block;
    }
  `,
}
