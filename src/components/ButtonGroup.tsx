import { MouseEvent, useContext } from 'react'

import { InventoryContext } from '../feature/curry/lib/provider'

export default function ButtonGroup() {
  const { dispatch } = useContext(InventoryContext)

  const onClickArrival = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch({
      type: 'arrival',
      payload: { curryRice: 3, porkCutlet: 1, cheese: 1 },
    })
  }

  const onClickOrderCurryRice = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch({ type: 'orderCurryRice' })
  }

  const onClickOrderPorkCutletCurry = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch({ type: 'orderPorkCutletCurry' })
  }

  const onClickOrderCheeseCurry = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch({ type: 'orderCheeseCurry' })
  }

  return (
    <>
      <h2 className="text-xl font-bold mb-2">操作</h2>

      <div className="mb-2">
        <button
          onClick={onClickArrival}
          className="bg-green-200 border-gray-500 border-solid border rounded"
        >
          入荷
        </button>
      </div>

      <div className="flex gap-2">
        <button
          onClick={onClickOrderCurryRice}
          className="bg-gray-200 border-gray-500 border-solid border rounded"
        >
          注文: カレーライス
        </button>
        <button
          onClick={onClickOrderPorkCutletCurry}
          className="bg-gray-200 border-gray-500 border-solid border rounded"
        >
          注文: カツカレー
        </button>
        <button
          onClick={onClickOrderCheeseCurry}
          className="bg-gray-200 border-gray-500 border-solid border rounded"
        >
          注文: チーズカレー
        </button>
      </div>
    </>
  )
}
