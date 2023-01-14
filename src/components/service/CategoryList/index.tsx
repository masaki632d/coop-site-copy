import { FC } from 'react'

import { useCategoryContext } from '../CategoryProvider'

import { styles } from './Style'

export type Category = {
  code: 'all' | 'moving' | 'finance' | 'bridal' | 'car' | 'life' | 'other'
  name:
    | 'すべて'
    | 'カテゴリ1'
    | 'カテゴリ2'
    | 'カテゴリ3'
    | 'カテゴリ4'
    | 'カテゴリ5'
    | 'その他'
}

const categories: Category[] = [
  { name: 'すべて', code: 'all' },
  { name: 'カテゴリ1', code: 'moving' },
  { name: 'カテゴリ2', code: 'finance' },
  { name: 'カテゴリ3', code: 'bridal' },
  { name: 'カテゴリ4', code: 'car' },
  { name: 'カテゴリ5', code: 'life' },
  { name: 'その他', code: 'other' },
]

export const CategoryList: FC = () => {
  const { selected, setSelected } = useCategoryContext()

  return (
    <ul css={styles.buttonWrap}>
      {categories.map(({ name, code }) => (
        <li key={code}>
          <button
            css={[styles.button, selected === code && styles.selected]}
            onClick={() => setSelected(code)}
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  )
}
