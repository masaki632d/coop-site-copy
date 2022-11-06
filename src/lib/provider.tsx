import { createContext } from 'react'

import useInventoryReducer, { defaultInventory } from './inventoryReducer'

type Props = {
  children: JSX.Element
}

export const InventoryContext = createContext(defaultInventory)

export default function InventoryProvider(props: Props) {
  return (
    <InventoryContext.Provider value={useInventoryReducer()}>
      {props.children}
    </InventoryContext.Provider>
  )
}
