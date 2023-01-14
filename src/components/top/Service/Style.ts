import { css } from '@emotion/react'

import { elevation } from '@styles/elevation'
import { mq } from '@styles/mediaQuery'
import { palette } from '@styles/palette'
import { spacing } from '@styles/spacing'
import { typography } from '@styles/typography'

export const styles = {
  section: css`
    background-color: ${palette.lightGrey};
  `,
  services: css`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: ${spacing(10)} auto ${spacing(4)};
    ${mq.sm} {
      flex-direction: column;
      margin: ${spacing(4)} auto ${spacing(3)};
    }
    li {
      width: calc(33% - 16px);
      margin-bottom: ${spacing(3)};
      ${mq.sm} {
        width: 100%;
      }
    }
  `,
  service: css`
    display: block;
    height: 100%;
    box-shadow: ${elevation[2]};
    background-color: ${palette.white};
    padding: ${spacing(3)};
    box-sizing: border-box;
    transition: transform 0.2s ease-in-out;
    ${mq.sm} {
      padding: ${spacing(2)};
    }
    :hover {
      transform: translateY(-4px);
    }
  `,
  logo: css`
    height: 118px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${spacing(1)};
  `,
  title: css`
    ${typography.normal[20]}
    font-weight: bold;
  `,
  siteCategory: css`
    margin-bottom: ${spacing(1)};
    color: ${palette.red};
    ${typography.normal[14]}
  `,
  link: css`
    max-width: 440px;
    margin: auto;
  `,
}
