import Link from 'next/link'

export const Header = () => {
  return (
    <header className="flex justify-between items-center w-full h-16 lg:h-24 lg:px-20 bg-white px-4">
      <a href="">
        {/* <img src="" alt="" /> */}
        ポートフォリオ
      </a>

      <nav className="hidden items-center gap-6 text-base font-bold lg:flex">
        <Link href="/">
          <a>About</a>
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

export default Header
