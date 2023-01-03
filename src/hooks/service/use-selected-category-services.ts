import { useCategoryContext } from '@components/service/CategoryProvider'
import {
  movingServices,
  financeServices,
  bridalServices,
  carServices,
  lifeServices,
  otherServices,
} from '@libs/constants/service'

export const servicesList = {
  all: [
    ...movingServices,
    ...otherServices,
    ...lifeServices,
    ...carServices,
    ...bridalServices,
    ...financeServices,
  ],
  moving: movingServices,
  finance: financeServices,
  bridal: bridalServices,
  car: carServices,
  life: lifeServices,
  other: otherServices,
}

export const useSelectedCategoryServices = () => {
  const { selected: category } = useCategoryContext()

  return { services: servicesList[category] }
}
