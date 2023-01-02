import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
  FC,
} from 'react'

import { Category } from './CategoryList'
type ContextType = {
  selected: Category['code']
  setSelected: Dispatch<SetStateAction<Category['code']>>
}

const Context = createContext<ContextType>({} as ContextType)
type Props = {
  children: ReactNode
}

export const CategoryProvider: FC<Props> = ({ children }) => {
  const [selected, setSelected] = useState<Category['code']>('all')
  return (
    <Context.Provider value={{ selected, setSelected }}>
      {children}
    </Context.Provider>
  )
}

export const useCategoryContext = () => useContext(Context)
