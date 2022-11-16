import { FC, useContext } from 'react'

import { InventoryContext } from '../lib/provider'

export const Menu: FC = () => {
  const { state } = useContext(InventoryContext)

  return (
    <>
      <h2 className="mb-2 text-xl font-bold">メニュー表</h2>
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
