import { css } from '@emotion/react'

import { mq } from '@styles/mediaQuery'
import { palette } from '@styles/palette'
import { spacing } from '@styles/spacing'
import { typography } from '@styles/typography'

export const styles = {
  section: css`
    display: grid;
    gap: 94px;
    ${mq['sm']} {
      gap: 32px;
    }
  `,
  list: css`
    display: grid;
    gap: 32px;
    width: 100%;
    max-width: 900px;
    margin: auto;
    ${typography.normal[16]}
    ${mq['sm']} {
      gap: 16px;
      ${typography.normal[12]}
    }
  `,
  listItem: css`
    display: grid;
    grid-template-columns: 120px 1fr;
    gap: 80px;
    ${mq['sm']} {
      grid-template-columns: 1fr;
      gap: 0;
      padding-bottom: ${spacing(2)};
      border-bottom: 1px solid ${palette.lightGrey};
    }
  `,
  link: css`
    transition: opacity ease-in-out 0.3s;
    &:hover {
      opacity: 0.6;
    }
  `,
  button: css`
    width: 100%;
    max-width: 440px;
    margin: auto;
  `,
}
