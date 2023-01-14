import Link from 'next/link'
import { FC } from 'react'

import { styles } from './Style'

import { useBreadcrumbs } from '@hooks/breadcrumb'

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
