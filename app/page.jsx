import Link from "next/link"

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Next.js 13</h1>
      <ul>
        <li>
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/about/team'>Team</Link>
        </li>
      </ul>
    </div>
  )
}

export default HomePage