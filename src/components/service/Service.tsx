import { FC } from 'react'

import { CategoryList } from '@components/service/CategoryList'
import { CategoryProvider } from '@components/service/CategoryProvider'
import { ServiceCardList } from '@components/service/ServiceCardList'
import { BaseLayout } from '@libs/components/BaseLayout'
import { CategoryHeader } from '@libs/components/CategoryHeader'
import { Headline } from '@libs/components/Headline'

export const Service: FC = () => (
  <>
    <CategoryHeader
      title="事業紹介"
      srcPc="/images/service/kv.png"
      srcSp="/images/service/kv_sp.png"
    />
    <BaseLayout>
      <section>
        <Headline mainText="事業一覧" subText="SERVICE LIST" />
        <CategoryProvider>
          <CategoryList />
          <ServiceCardList />
        </CategoryProvider>
      </section>
    </BaseLayout>
  </>
)
