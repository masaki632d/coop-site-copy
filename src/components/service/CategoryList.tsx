import { css } from '@emotion/react'
import { FC } from 'react'

import { useCategoryContext } from './CategoryProvider'

import { mq } from '@styles/mediaQuery'
import { palette } from '@styles/palette'
import { spacing } from '@styles/spacing'
import { typography } from '@styles/typography'

const styles = {
  buttonWrap: css`
    display: flex;
    margin: ${spacing(10)} 0;
    ${mq['lg']} {
      flex-wrap: wrap;
    }
    ${mq['sm']} {
      margin: ${spacing(4)} 0;
    }
    li {
      width: 100%;
      :not(:last-of-type) {
        margin-right: ${spacing(2)};
      }
      ${mq['lg']} {
        width: calc(33% - 4px);
        margin-bottom: ${spacing(1)};
        :nth-of-type(3n) {
          margin-right: 0;
        }
        :not(:nth-of-type(3n)) {
          margin-right: ${spacing(1)};
        }
      }
      ${mq['sm']} {
        width: calc(50% - 4px);
        :nth-of-type(2n) {
          margin-right: 0;
        }
        :not(:nth-of-type(2n)) {
          margin-right: ${spacing(1)};
        }
      }
    }
  `,
  button: css`
    background-color: ${palette.lightGrey};
    color: ${palette.black};
    height: 48px;
    width: 100%;
    border: none;
    cursor: pointer;
    ${typography.normal[16]}
    ${mq['sm']} {
      height: 32px;
      ${typography.normal[12]}
    }
  `,
  selected: css`
    background-color: ${palette.red};
    color: ${palette.white};
  `,
}

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
