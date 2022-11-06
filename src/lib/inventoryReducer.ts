import { useReducer } from 'react'

// State
type State = {
  curryRice: number // カレーライスの在庫数
  porkCutlet: number // とんかつの在庫数
  cheese: number // チーズの在庫数
  soldOutCurryRice: boolean // カレーライスの売り切れ状態
  soldOutPorkCutletCurry: boolean // カツカレーの売り切れ状態
  soldOutCheeseCurry: boolean // チーズカレーの売り切れ状態
}

// Action
type Action =
  | {
      type: 'arrival' // 入荷
      payload: {
        curryRice: number // 入荷するカレーライスの数
        porkCutlet: number // 入荷するとんかつの数
        cheese: number // 入荷するチーズの数
      }
    }
  | {
      type: 'orderCurryRice' // カレーライスの注文
    }
  | {
      type: 'orderPorkCutletCurry' // カツカレーの注文
    }
  | {
      type: 'orderCheeseCurry' // チーズカレーの注文
    }

// reducer
const reducer = (state: State, action: Action): State => {
  const next: State = { ...state }

  switch (action.type) {
    case 'arrival':
      next.curryRice += action.payload.curryRice
      next.porkCutlet += action.payload.porkCutlet
      next.cheese += action.payload.cheese

      break
    case 'orderCurryRice':
      if (!state.soldOutCurryRice) next.curryRice -= 1

      break
    case 'orderPorkCutletCurry':
      if (!state.soldOutPorkCutletCurry) {
        next.curryRice -= 1
        next.porkCutlet -= 1
      }

      break
    case 'orderCheeseCurry':
      if (!state.soldOutCheeseCurry) {
        next.curryRice -= 1
        next.cheese -= 1
      }

      break
  }

  next.soldOutCurryRice = next.curryRice === 0
  next.soldOutPorkCutletCurry = next.soldOutCurryRice || next.porkCutlet === 0
  next.soldOutCheeseCurry = next.soldOutCurryRice || next.cheese === 0

  return next
}

// useReducer を内包したカスタムフック
export default function useInventoryReducer() {
  const [state, dispatch] = useReducer(reducer, {
    curryRice: 0,
    porkCutlet: 0,
    cheese: 0,
    soldOutCurryRice: true,
    soldOutPorkCutletCurry: true,
    soldOutCheeseCurry: true,
  })

  return { state, dispatch }
}

export const defaultInventory: ReturnType<typeof useInventoryReducer> = {
  state: {
    curryRice: 0,
    porkCutlet: 0,
    cheese: 0,
    soldOutCurryRice: true,
    soldOutPorkCutletCurry: true,
    soldOutCheeseCurry: true,
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  dispatch: () => {},
}
