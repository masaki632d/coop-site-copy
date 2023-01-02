import { css } from '@emotion/react'
import Link from 'next/link'
import { FC } from 'react'

import { useBreadcrumbs } from '@hooks/breadcrumb'
import { mq } from '@styles/mediaQuery'
import { palette } from '@styles/palette'
import { spacing } from '@styles/spacing'
import { typography } from '@styles/typography'

const styles = {
  list: css`
    max-width: 1200px;
    margin: auto;
    display: flex;
    ${mq['sm']} {
      padding: ${spacing(1)} ${spacing(3)};
    }
  `,
  listLink: css`
    ${typography.normal[14]}
    :first-child {
      margin-right: ${spacing(1)};
    }
    :not(:first-child) {
      margin-left: ${spacing(1)};
    }
    &:hover {
      color: ${palette.grey};
    }
  `,
}

export const Breadcrumb: FC = () => {
  const breadcrumbs = useBreadcrumbs()
  return (
    <ul css={styles.list}>
      {breadcrumbs.map((breadcrumb, index) => {
        const isLast = index === breadcrumbs.length - 1
        return (
          <>
            <li key={index} css={styles.listLink}>
              <Link href={breadcrumb.href}>
                <a>{breadcrumb.title}</a>
              </Link>
            </li>
            {isLast ? null : (
              <span className="material-icons">navigate_next</span>
            )}
          </>
        )
      })}
    </ul>
  )
}
