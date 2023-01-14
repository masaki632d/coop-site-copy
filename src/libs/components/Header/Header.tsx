import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { styles } from './Style'

import { HeaderButton } from '@libs/components/Header/HeaderButton'
import { HeaderMenu } from '@libs/components/Header/HeaderMenu'
import { OpenStateProvider } from '@libs/components/Provider/OpenStateProvider'
import { companyName } from '@libs/constants/common'

type HeaderProps = {
  visible: boolean | undefined
}

export const Header: FC<HeaderProps> = ({ visible }) => {
  if (typeof visible === 'undefined') return null

  return (
    <header css={[styles.header, styles.transform(visible)]}>
      <Link href="/" passHref>
        <a css={styles.logo}>
          <Image
            src="/images/common/Logo.png"
            alt={companyName}
            width={671}
            height={193}
          />
        </a>
      </Link>

      <OpenStateProvider>
        <p css={styles.text}>{companyName}</p>
        <HeaderButton />
        <HeaderMenu />
      </OpenStateProvider>
    </header>
  )
}
