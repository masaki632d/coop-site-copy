import { css } from '@emotion/react'

import { BaseProps } from './Button'

import { mq } from '@styles/mediaQuery'
import { palette } from '@styles/palette'
import { typography } from '@styles/typography'

export const styles = {
  button: ({ size, color }: Pick<BaseProps, 'color' | 'size'>) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    text-align: center;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    color: ${palette.white};
    height: ${size === 'small' ? '46px' : '56px'};
    ${color === 'black' ? blackStyle : redStyle};
    ${typography.normal[size === 'small' ? 16 : 20]}
    ${mq['sm']} {
      height: 46px;
      ${typography.normal[size === 'small' ? 14 : 16]}
    }
  `,
  icon: css`
    position: absolute;
    right: 5%;
    top: 50%;
    transform: translateY(-50%);
    ${typography.normal[20]}
  `,
}

const redStyle = css`
  background-color: ${palette.red};
  border: 2px solid ${palette.red};
  &:hover {
    background-color: ${palette.white};
    color: ${palette.red};
  }
`

const blackStyle = css`
  background-color: ${palette.black};
  border: 2px solid ${palette.black};
  &:hover {
    background-color: ${palette.white};
    color: ${palette.black};
  }
`
