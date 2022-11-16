import { FC, MouseEvent, useContext } from 'react'

// TODO: ↑ここも順番 も 設定追加でソートできそう
import { InventoryContext } from '../lib/provider'

export const ButtonGroup: FC = () => {
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
      <h2 className="mb-2 text-xl font-bold">操作</h2>

      <div className="mb-2">
        <button
          onClick={onClickArrival}
          className="rounded border border-solid border-gray-500 bg-green-200"
        >
          入荷
        </button>
      </div>

      <div className="flex gap-2">
        <button
          onClick={onClickOrderCurryRice}
          className="rounded border border-solid border-gray-500 bg-gray-200"
        >
          注文: カレーライス
        </button>
        <button
          onClick={onClickOrderPorkCutletCurry}
          className="rounded border border-solid border-gray-500 bg-gray-200"
        >
          注文: カツカレー
        </button>
        <button
          onClick={onClickOrderCheeseCurry}
          className="rounded border border-solid border-gray-500 bg-gray-200"
        >
          注文: チーズカレー
        </button>
      </div>
    </>
  )
}
