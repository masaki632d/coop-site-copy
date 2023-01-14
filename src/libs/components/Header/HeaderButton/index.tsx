import { FC } from 'react'

import { styles } from './Style'

import {
  useOpenDispatchContext,
  useOpenStateContext,
} from '@libs/components/Provider'

export const HeaderButton: FC = () => {
  const isOpen = useOpenStateContext()
  const { toggle } = useOpenDispatchContext()

  return (
    <button onClick={() => toggle()} css={[styles.button, styles.spVisible]}>
      <span className="material-icons">{isOpen ? 'close' : 'menu'}</span>
    </button>
  )
}
