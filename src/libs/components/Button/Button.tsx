import { ComponentPropsWithoutRef, forwardRef, FC } from 'react'

import { styles } from './Style'

export type BaseProps = {
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

const Base: FC<BaseProps> = ({ label, displayIcon = true }) => (
  <>
    {label}
    {displayIcon && (
      <span css={styles.icon} className="material-icons">
        open_in_new
      </span>
    )}
  </>
)

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
