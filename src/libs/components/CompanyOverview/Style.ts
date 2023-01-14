import { css } from '@emotion/react'

import { mq } from '@styles/mediaQuery'
import { palette } from '@styles/palette'
import { spacing } from '@styles/spacing'
import { typography } from '@styles/typography'

export const styles = {
  wrap: css`
    background-color: rgba(239, 239, 239, 0.4);
  `,
  overview: css`
    display: flex;
    margin-top: ${spacing(10)};
    align-items: flex-start;
    ${mq['sm']} {
      flex-direction: column;
      margin-top: ${spacing(4)};
      ${typography.normal[12]}
    }
  `,
  table: css`
    width: 50%;
    border-bottom: 1px solid ${palette.grey};
    ${mq['sm']} {
      width: 100%;
    }
    &:first-of-type {
      margin-right: ${spacing(10)};
      ${mq['sm']} {
        margin-right: 0;
        border-bottom: none;
      }
    }
    tr {
      border-top: 1px solid ${palette.grey};
    }
    th,
    td {
      padding: ${spacing(3)} ${spacing(2)};
      box-sizing: border-box;
      ${mq['sm']} {
        padding: ${spacing(2)} ${spacing(1)};
      }
    }
    th {
      width: 164px;
      text-align: left;
      flex-shrink: 0;
      ${mq['sm']} {
        width: 100px;
      }
    }
    td {
      white-space: pre-wrap;
    }
  `,
  linkIcon: css`
    vertical-align: -3px;
    ${typography.normal[16]}
  `,
}
