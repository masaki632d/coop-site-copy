import { FC } from 'react'

import { ServiceCard } from './ServiceCard'

import { useSelectedCategoryServices } from '@hooks/service'

export const ServiceCardList: FC = () => {
  const { services } = useSelectedCategoryServices()

  return (
    <>
      {services.map((service, index) => (
        <ServiceCard {...service} key={index} />
      ))}
    </>
  )
}
