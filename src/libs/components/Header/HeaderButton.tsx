import { css } from '@emotion/react'
import { FC } from 'react'

import {
  useOpenDispatchContext,
  useOpenStateContext,
} from '@libs/components/Provider'
import { mq } from '@styles/mediaQuery'
import { palette } from '@styles/palette'

const styles = {
  button: css`
    color: ${palette.black};
    background: none;
    border: none;
    cursor: pointer;
    margin-left: auto;
  `,
  spVisible: css`
    display: none;
    ${mq['lg']} {
      display: block;
    }
  `,
}
export const HeaderButton: FC = () => {
  const isOpen = useOpenStateContext()
  const { toggle } = useOpenDispatchContext()

  return (
    <button onClick={() => toggle()} css={[styles.button, styles.spVisible]}>
      <span className="material-icons">{isOpen ? 'close' : 'menu'}</span>
    </button>
  )
}
