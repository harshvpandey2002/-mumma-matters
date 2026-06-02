import Image from 'next/image'

export default function Navbar() {
  return (
    <nav>
      <div className="nav-logo">
        <Image
          src="/logo.jpeg"
          alt="Mumma Matters"
          width={120}
          height={48}
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>

      <ul className="nav-links">
        <li><a href="#products">Our Formulas</a></li>
        <li><a href="#why">Why MM</a></li>
        <li><a href="#club">Club Mumma</a></li>
        <li><a href="#gynaec">For Doctors</a></li>
        <li><a href="#blogs">Expert Reads</a></li>
      </ul>

      <div className="nav-cta">
        <a href="#club" className="btn-outline" style={{ padding: '9px 20px', fontSize: '0.68rem' }}>
          Join the Circle
        </a>
        <a href="#products" className="btn-primary" style={{ padding: '9px 22px', fontSize: '0.68rem' }}>
          Shop Now
        </a>
      </div>
    </nav>
  )
}
