import ButtonGroup from '@components/ButtonGroup'
import Inventory from '@components/Inventory'
import Menu from '@components/Menu'
import InventoryProvider from 'src/feature/curry/lib/provider'

const Curry = () => (
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

export default Curry
