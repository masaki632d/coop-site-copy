import { css } from '@emotion/react'

import { mq } from '@styles/mediaQuery'
import { spacing } from '@styles/spacing'
import { typography } from '@styles/typography'

export const styles = {
  president: css`
    display: flex;
    margin: ${spacing(10)} 0;
    ${mq['sm']} {
      flex-direction: column;
      margin: ${spacing(4)} 0 ${spacing(6)};
    }
  `,
  presidentDetail: css`
    margin-left: ${spacing(7)};
    ${mq['sm']} {
      margin: ${spacing(3)} 0 0;
    }
  `,
  presidentPosition: css`
    ${typography.normal[16]}
    ${mq['sm']} {
      ${typography.normal[12]}
    }
  `,
  presidentName: css`
    ${typography.normal[36]}
    margin-bottom: ${spacing(3)};
    ${mq['sm']} {
      ${typography.normal[24]}
      margin-bottom: ${spacing(2)};
    }
  `,
  biography: css`
    ${mq['sm']} {
      ${typography.normal[12]}
    }
    tr {
      display: flex;
      &:not(:last-of-type) {
        margin-bottom: ${spacing(1)};
      }
    }
    th {
      width: 116px;
      text-align: left;
      flex-shrink: 0;
      ${mq['sm']} {
        width: 80px;
      }
    }
    td {
      white-space: pre-wrap;
    }
  `,
  officers: css`
    display: flex;
    flex-wrap: wrap;
    li {
      margin-right: ${spacing(10)};
      ${mq['sm']} {
        margin: 0 ${spacing(2)} ${spacing(2)} 0;
      }
    }
  `,
  position: css`
    ${typography.normal[14]}
    ${mq['sm']} {
      ${typography.normal[12]}
    }
  `,
  name: css`
    ${typography.normal[24]}
    ${mq['sm']} {
      ${typography.normal[20]}
    }
  `,
}
