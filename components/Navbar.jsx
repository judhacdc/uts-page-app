import Link from 'next/link';


function Navbar() {
  return (
    <nav className="navbar">
    <div className="container">
        <Link legacyBehavior href="/"><a className="logo">UTS page</a></Link>
        <ul className="nav-links">
            <li><Link legacyBehavior href="/"><a className="nav-item active">Home</a></Link></li>
            <li><Link legacyBehavior href="/users"><a className="nav-item">Users</a></Link></li>
            <li><Link legacyBehavior href="/product"><a className="nav-item">Product</a></Link></li>
            <li><Link legacyBehavior href="/payments"><a className="nav-item">Payment</a></Link></li>
            <li><Link legacyBehavior href="/admin"><a className="nav-item">Admin</a></Link></li>
        </ul>
    </div>
</nav>
  );
}

export default Navbar;