import { css } from '@emotion/react'

import { elevation } from '@styles/elevation'
import { mq } from '@styles/mediaQuery'
import { palette } from '@styles/palette'
import { spacing } from '@styles/spacing'
import { typography } from '@styles/typography'

export const styles = {
  service: css`
    display: flex;
    margin-bottom: ${spacing(10)};
    ${mq['sm']} {
      box-shadow: ${elevation[2]};
      flex-direction: column;
      padding: ${spacing(2)};
      margin-bottom: ${spacing(4)};
    }
  `,
  img: css`
    max-width: 480px;
    width: 50%;
    box-shadow: ${elevation[2]};
    background-color: ${palette.white};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-right: ${spacing(4)};
    ${mq['sm']} {
      width: 100%;
      height: 118px;
      box-shadow: none;
      margin-right: 0;
      margin-bottom: ${spacing(1)};
    }
  `,
  body: css`
    width: 100%;
  `,
  title: css`
    ${typography.normal[30]}
    ${mq['sm']} {
      ${typography.normal[20]}
      font-weight: bold;
    }
  `,
  siteCategory: css`
    margin-bottom: ${spacing(3)};
    color: ${palette.red};
    ${mq['sm']} {
      margin-bottom: ${spacing(1)};
      ${typography.normal[14]}
    }
  `,
  copy: css`
    ${typography.normal[20]}
    ${mq['sm']} {
      ${typography.normal[16]}
    }
  `,
  description: css`
    ${typography.normal[14]}
    margin-bottom: ${spacing(3)};
    ${mq['sm']} {
      ${typography.normal[12]}
      margin-bottom: ${spacing(2)};
    }
  `,
  links: css`
    display: flex;
    width: 80%;
    ${mq['sm']} {
      flex-direction: column;
      width: 100%;
    }
    > a:not(:last-of-type) {
      margin-right: ${spacing(2)};
      ${mq['sm']} {
        margin-right: 0;
        margin-bottom: ${spacing(1)};
      }
    }
    > a:only-of-type {
      width: 50%;
      ${mq['sm']} {
        width: 100%;
      }
    }
  `,
}
