import { createContext, ReactNode, useContext, FC } from 'react'
import { useToggle } from 'react-use'

type DispatchContextType = {
  toggle: (nextValue?: boolean) => void
  open: () => void
  close: () => void
}

const StateContext = createContext(false)
const DispatchContext = createContext<DispatchContextType>({
  toggle: () => null,
  open: () => null,
  close: () => null,
})

type Props = {
  children: ReactNode
}

export const OpenStateProvider: FC<Props> = ({ children }) => {
  const [isOpen, toggle] = useToggle(false)
  const open = () => toggle(true)
  const close = () => toggle(false)

  return (
    <StateContext.Provider value={isOpen}>
      <DispatchContext.Provider value={{ toggle, open, close }}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

export const useOpenStateContext = () => useContext(StateContext)
export const useOpenDispatchContext = () => useContext(DispatchContext)
