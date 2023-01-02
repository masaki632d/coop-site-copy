import { FC } from 'react'

import { Loading } from '@components/top/Loading'
import { MainVisual } from '@components/top/MainVisual'
import { Message } from '@components/top/Message'
import { Mission } from '@components/top/Mission'
import { Recruit } from '@components/top/Recruit'
import { Service } from '@components/top/Service'

export const Top: FC = () => {
  return (
    <>
      <MainVisual />
      <Message />
      <Mission />
      <Service />
      <Recruit />
      <Loading />
    </>
  )
}
