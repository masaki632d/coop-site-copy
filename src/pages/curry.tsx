import { NextPage } from 'next'

import { ButtonGroup } from 'src/feature/curry/components/ButtonGroup'
import { Inventory } from 'src/feature/curry/components/Inventory'
import { Menu } from 'src/feature/curry/components/Menu'
import InventoryProvider from 'src/feature/curry/lib/provider'

export const Curry: NextPage = () => (
  <div>
    <InventoryProvider>
      <div className="p-5 m-8 border-solid border w-[600px] bottom-0">
        <h1 className="text-3xl font-bold">カレー屋_在庫管理システム</h1>
        <div className="m-8">
          <Inventory />
          <Menu />
          <ButtonGroup />
        </div>
      </div>
    </InventoryProvider>
  </div>
)
