import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <nav className='py-8'>
        <ul className='container flex gap-10'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
