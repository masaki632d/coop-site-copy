import { css } from '@emotion/react'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { HeaderButton } from '@libs/components/Header/HeaderButton'
import { HeaderMenu } from '@libs/components/Header/HeaderMenu'
import { OpenStateProvider } from '@libs/components/Provider/OpenStateProvider'
import { companyName } from '@libs/constants/common'
import { headerHeight } from '@styles/headerHeight'
import { mq } from '@styles/mediaQuery'
import { palette } from '@styles/palette'
import { spacing } from '@styles/spacing'
import { typography } from '@styles/typography'

const styles = {
  header: css`
    display: flex;
    align-items: center;
    background-color: ${palette.white};
    padding: 0 ${spacing(5)};
    position: fixed;
    top: 0;
    width: 100%;
    transition: transform 0.5s ease-in-out;
    z-index: 100;
    box-sizing: border-box;
    ${mq['lg']} {
      height: ${headerHeight.small};
      padding: 0 ${spacing(2)} 0 ${spacing(1)};
    }
    ${mq['sm']} {
      padding: 0 ${spacing(1)} 0 0;
    }
  `,
  text: css`
    ${typography.bold[12]}
    letter-spacing: 0.1em;
  `,
  logo: css`
    width: 292px;
    height: 84px;
    ${mq['lg']} {
      width: 160px;
      height: 46px;
    }
  `,
  transform: (visible: boolean) => css`
    transform: translateY(${visible ? '0' : '-120%'});
  `,
}

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
