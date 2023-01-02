import { css } from '@emotion/react'
import { ComponentPropsWithoutRef, forwardRef, FC } from 'react'

import { mq } from '@styles/mediaQuery'
import { palette } from '@styles/palette'
import { typography } from '@styles/typography'

const styles = {
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

type BaseProps = {
  label: string
  displayIcon?: boolean
  color?: 'red' | 'black'
  size?: 'small' | 'medium'
}

type TagType = 'button' | 'anchor'
type Element<T extends TagType> = T extends 'button'
  ? HTMLButtonElement
  : HTMLAnchorElement
type TagProps<T extends TagType> = T extends 'button'
  ? ComponentPropsWithoutRef<'button'>
  : ComponentPropsWithoutRef<'a'>

type Props<T extends TagType> = BaseProps & TagProps<T> & { as?: TagType }

const Base: FC<BaseProps> = ({ label, displayIcon = true }) => {
  return (
    <>
      {label}
      {displayIcon && (
        <span css={styles.icon} className="material-icons">
          open_in_new
        </span>
      )}
    </>
  )
}

const BaseButton = forwardRef<Element<'button'>, BaseProps>((props, ref) => {
  const { color, size, label, displayIcon, ...attr } = props
  return (
    <button css={styles.button({ color, size })} ref={ref} {...attr}>
      <Base label={label} displayIcon={displayIcon} />
    </button>
  )
})
BaseButton.displayName = 'BaseButton'

const BaseAnchor = forwardRef<Element<'anchor'>, BaseProps>((props, ref) => {
  const { color, size, label, displayIcon, ...attr } = props
  return (
    <a css={styles.button({ color, size })} ref={ref} {...attr}>
      <Base label={label} displayIcon={displayIcon} />
    </a>
  )
})
BaseAnchor.displayName = 'BaseAnchor'

export const Button = <T extends TagType>(props: Props<T>) => {
  const { as = 'button', ...attr } = props
  if (as === 'anchor') {
    return <BaseAnchor {...attr} />
  }
  return <BaseButton {...attr} />
}
