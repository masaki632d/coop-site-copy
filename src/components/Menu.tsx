import { useContext } from 'react'

import { InventoryContext } from '../feature/curry/lib/provider'

export default function Menu() {
  const { state } = useContext(InventoryContext)

  return (
    <>
      <h2 className="text-xl font-bold mb-2">メニュー表</h2>
      <ul className="mb-6">
        <li>
          カレーライス: {state.soldOutCurryRice && <strong>売り切れ</strong>}
        </li>
        <li>
          カツカレー: <strong>売り切れ</strong>
          カツカレー
          {state.soldOutPorkCutletCurry && <strong>売り切れ</strong>}
        </li>
        <li>
          チーズカレー: <strong>売り切れ</strong>
          チーズカレー: {state.soldOutCheeseCurry && <strong>売り切れ</strong>}
        </li>
      </ul>
    </>
  )
}
