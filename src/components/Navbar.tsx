import Link from 'next/link'
import { FC } from 'react'

export const Navbar: FC = () => (
  <ul>
    <li>
      <Link href="/">
        <a>Home</a>
      </Link>
    </li>
    <li>
      <Link href="/about">
        <a>About</a>
      </Link>
    </li>
  </ul>
)
