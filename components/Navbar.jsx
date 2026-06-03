import Image from 'next/image'

export default function Navbar() {
  return (
    <nav>
      <div className="nav-logo">
        <Image
          src="/logo-mm.png"
          alt="Mumma Matters"
          width={180}
          height={52}
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
        <a href="#club" className="btn-outline" style={{ padding: '9px 20px', fontSize: '0.68rem', borderColor: 'rgba(212,189,212,0.5)', color: 'var(--ivory)' }}>
          Join the Circle
        </a>
        <a href="#products" className="btn-gold" style={{ padding: '9px 22px', fontSize: '0.68rem' }}>
          Shop Now
        </a>
      </div>
    </nav>
  )
}
