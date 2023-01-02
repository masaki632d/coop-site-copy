import { FC } from 'react'

import { Top } from '@components/top'
import { getTopLayout } from '@libs/components/Layout/TopLayout'

const TopPage: WithCustomLayout<FC> = () => {
  return <Top />
}

TopPage.layout = getTopLayout()

export default TopPage
