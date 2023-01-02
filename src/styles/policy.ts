import { css } from '@emotion/react'

import { mq } from '@styles/mediaQuery'
import { palette } from '@styles/palette'
import { spacing } from '@styles/spacing'
import { typography } from '@styles/typography'

export const policyStyles = {
  article: css`
    ${mq['sm']} {
      ${typography.normal[12]}
    }
    h1 {
      ${typography.bold[36]};
      text-align: center;
      margin-bottom: ${spacing(10)};
      ${mq.sm} {
        ${typography.bold[24]};
        margin-bottom: ${spacing(5)};
      }
    }
    h2 {
      ${typography.bold[30]};
      border-left: 8px solid ${palette.red};
      padding-left: ${spacing(1)};
      margin: ${spacing(5)} 0 ${spacing(3)};
      ${mq.sm} {
        ${typography.bold[20]};
        border-width: 4px;
        padding-left: ${spacing(1)};
        margin: ${spacing(5)} 0 ${spacing(2)};
      }
    }
    h3 {
      ${typography.bold[24]};
      margin: ${spacing(10)} 0 ${spacing(3)};
      ${mq.sm} {
        ${typography.bold[16]};
        margin: ${spacing(4)} 0 ${spacing(1)};
      }
    }
    h4 {
      ${typography.bold[16]};
      margin: ${spacing(3)} 0 ${spacing(1)};
      ${mq.sm} {
        ${typography.bold[12]};
        margin: ${spacing(2)} 0 0;
      }
    }
    p {
      margin-bottom: ${spacing(1)};
    }
    ol {
      margin-bottom: ${spacing(2)} 0 ${spacing(6)};
      ${mq.sm} {
        margin: 0 0 ${spacing(3)};
      }
      li {
        padding-left: 1em;
        text-indent: -1em;
        margin-bottom: ${spacing(2)};
        ol {
          margin-bottom: ${spacing(4)};
          ${mq.sm} {
            margin-bottom: ${spacing(2)};
          }
          li {
            margin-bottom: 0;
          }
        }
      }
    }
    table {
      width: 100%;
      border-top: 1px solid ${palette.silver};
      border-bottom: 1px solid ${palette.silver};
      margin: ${spacing(3)} 0 ${spacing(5)};
      text-indent: 0;
      ${mq.sm} {
        margin: ${spacing(2)} 0 ${spacing(3)};
      }
      tr {
        border-bottom: 1px dotted ${palette.silver};
      }
      th,
      td {
        padding: ${spacing(2)};
        ${mq.sm} {
          padding: ${spacing(1)};
        }
      }
      th {
        width: 270px;
        text-align: left;
        background-color: ${palette.lightGrey};
        ${mq.sm} {
          width: 80px;
        }
      }
    }
    a {
      color: ${palette.blue};
      word-break: break-all;
    }
  `,
  contact: css`
    margin-top: ${spacing(3)};
    b {
      font-weight: 600;
    }
  `,
  signature: css`
    text-align: right;
    margin-top: ${spacing(6)};
    ${mq.sm} {
      margin-top: ${spacing(4)};
    }
  `,
}
