import { useMemo } from 'react'

import {
  movingServices,
  financeServices,
  bridalServices,
  carServices,
  lifeServices,
  ServiceItem,
  otherServices,
} from '@libs/constants/service'

const pick = (services: ServiceItem[], targets: ServiceItem['code'][]) => {
  return services.filter(({ code }) => targets.includes(code))
}

export const useTopDisplayServices = () => {
  const services = useMemo(
    () => [
      ...pick(movingServices, ['service1']),
      ...pick(otherServices, ['service2']),
      ...pick(lifeServices, ['service3']),
      ...pick(carServices, ['service4']),
      ...pick(bridalServices, ['service5']),
      ...pick(financeServices, ['service6']),
    ],
    []
  )
  return { services }
}
