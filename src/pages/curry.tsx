import { NextPage } from 'next'

import { ButtonGroup } from 'src/feature/curry/components/ButtonGroup'
import { Inventory } from 'src/feature/curry/components/Inventory'
import { Menu } from 'src/feature/curry/components/Menu'
import InventoryProvider from 'src/feature/curry/lib/provider'

const Curry: NextPage = () => (
  <div>
    <InventoryProvider>
      <div className="bottom-0 m-8 w-[600px] border border-solid p-5">
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

export default Curry
