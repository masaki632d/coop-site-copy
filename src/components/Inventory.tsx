import { useContext } from 'react'

import { InventoryContext } from '../lib/provider'

export default function Inventory() {
  const { state } = useContext(InventoryContext)

  return (
    <>
      <h2 className="text-xl font-bold mb-2">各種在庫</h2>
      <ul className="mb-6">
        <li>カレールー: {state.curryRice}個</li>
        <li>とんかつ: {state.porkCutlet}個</li>
        <li>チーズ: {state.cheese}個</li>
      </ul>
    </>
  )
}
