import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import vercelImage from '@public_images/vercel.svg'

export const Header: FC = () => {
  return (
    <header className="flex justify-between items-center w-full h-16 lg:h-24 lg:px-20 bg-white px-4">
      <Link href="/">
        <a>
          <Image src={vercelImage} width={283} height={64} alt="ロゴ画像" />
        </a>
      </Link>

      <nav className="hidden items-center gap-6 text-base font-bold lg:flex">
        <Link href="/about/">
          <a>About</a>
        </Link>
        <Link href="/curry/">
          <a>Curry</a>
        </Link>
        <Link href="/">
          <a>Work</a>
        </Link>
        <Link href="/">
          <a>Skill</a>
        </Link>
        <Link href="/">
          <a>Contact</a>
        </Link>
      </nav>
    </header>
  )
}
