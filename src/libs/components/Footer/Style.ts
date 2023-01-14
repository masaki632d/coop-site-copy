import { css } from '@emotion/react'

import { mq } from '@styles/mediaQuery'
import { palette } from '@styles/palette'
import { spacing } from '@styles/spacing'
import { typography } from '@styles/typography'

export const styles = {
  footer: css`
    background-color: ${palette.lightGrey};
  `,
  footerInner: css`
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    margin: auto;
    padding: ${spacing(9)} ${spacing(3)};
    ${typography.normal[14]};
    ${mq['lg']} {
      ${typography.normal[12]};
    }
    ${mq['sm']} {
      flex-flow: column-reverse;
      padding: ${spacing(3)};
    }
  `,
  companyName: css`
    margin-bottom: ${spacing(4)};
    ${mq['sm']} {
      margin-bottom: ${spacing(2)};
    }
  `,
  jpx: css`
    display: flex;
  `,
  jpxLogo: css`
    margin-right: ${spacing(2)};
    flex-shrink: 0;
    ${mq['sm']} {
      margin-right: ${spacing(1)};
    }
  `,
  listWrap: css`
    display: flex;
    ${mq['lg']} {
      ${typography.normal[12]};
    }
    ${mq['sm']} {
      margin-bottom: ${spacing(2)};
    }
  `,
  linkList: css`
    margin-left: ${spacing(10)};
    ${mq['sm']} {
      margin-left: 0;
      margin-right: ${spacing(4)};
    }
    li {
      margin-bottom: ${spacing(2)};
    }
  `,
  link: css`
    position: relative;
    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 0;
      height: 1px;
      background-color: ${palette.black};
      transition: all 0.3s ease-in-out;
      ${mq['lg']} {
        bottom: -4px;
      }
    }
    &:hover::after {
      width: 100%;
    }
  `,
  copyright: css`
    ${typography.normal[12]};
    background-color: ${palette.red};
    color: ${palette.white};
    text-align: center;
    padding: ${spacing(1)} 0;
  `,
  linkIcon: css`
    vertical-align: middle;
    ${typography.normal[16]}
  `,
}
