import { css } from '@emotion/react'

import { mq } from '@styles/mediaQuery'
import { palette } from '@styles/palette'
import { spacing } from '@styles/spacing'
import { typography } from '@styles/typography'

export const styles = {
  section: css`
    background-color: ${palette.white};
  `,
  recruit: css`
    display: flex;
    justify-content: space-between;
    margin-top: ${spacing(10)};
    ${mq['sm']} {
      flex-direction: column-reverse;
      margin-top: ${spacing(4)};
    }
  `,
  description: css`
    width: 40%;
    margin-right: ${spacing(5)};
    ${mq['sm']} {
      width: 100%;
      margin: 0;
    }
  `,
  title: css`
    margin-bottom: ${spacing(2)};
    ${typography.bold[30]}
    ${mq['sm']} {
      margin-top: ${spacing(2)};
      ${typography.bold[20]}
    }
  `,
  text: css`
    margin-bottom: ${spacing(3)};
    ${typography.normal[14]}
  `,
  link: css`
    width: 80%;
    ${mq['sm']} {
      width: 100%;
    }
  `,
  img: css`
    ${mq['sm']} {
      margin: 0 -${spacing(3)};
    }
  `,
}
