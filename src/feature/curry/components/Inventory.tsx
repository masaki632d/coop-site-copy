import { FC, useContext } from 'react'

import { InventoryContext } from '../lib/provider'

export const Inventory: FC = () => {
  const { state } = useContext(InventoryContext)

  return (
    <>
      <h2 className="mb-2 text-xl font-bold">各種在庫</h2>
      <ul className="mb-6">
        <li>カレールー: {state.curryRice}個</li>
        <li>とんかつ: {state.porkCutlet}個</li>
        <li>チーズ: {state.cheese}個</li>
      </ul>
    </>
  )
}
