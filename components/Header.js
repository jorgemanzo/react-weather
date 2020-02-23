import Link from 'next/link'

const Header = () => (
  <div className="container">
    <Link href="/">
      <div className="headerLink">
        <a>Home</a>
      </div>
    </Link>
    <Link href="/about">
      <div className="headerLink">
        <a>About</a>
      </div>
    </Link>
    <style jsx>{`
    a {
      text-decoration: none;
      text-align: center;
      font-size: 21pt;
      color: black;
    }
    .headerLink {
      align-items: center;
      margin-top: 2vw;
      margin-bottom: 2vw;
      margin-left: 10vw;
      margin-right: 10vw;
    }
    .container {
      border: 3px solid black;
      display: flex;
      justify-content: center;
    }
    `}</style>
  </div>
)

export default Header
