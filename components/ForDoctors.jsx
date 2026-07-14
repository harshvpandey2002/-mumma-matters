'use client'

import { useState } from 'react'
import { submitDoctorEnquiry } from '../lib/api'

const CREDENTIALS = [
  {
    icon: '🔬',
    title: 'Formulated with clinical advisors',
    body: 'Every ingredient and dosage in every Mumma Matters formula has been reviewed by a panel of OB-GYNs, lactation consultants and nutrition scientists.',
  },
  {
    icon: '📋',
    title: 'Clinical dossier on request',
    body: 'We will send you a complete clinical reference file — ingredient sourcing, dosage rationale, clinical citations, and FSSAI compliance documentation.',
  },
  {
    icon: '🏥',
    title: 'Hospital discharge kit partnerships',
    body: 'Interested in including Mumma Matters in your postpartum discharge pack? We would love to discuss a clinical supply partnership.',
  },
]

export default function ForDoctors() {
  const [form, setForm]     = useState({ name: '', spec: '', city: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errMsg, setErrMsg] = useState('')

  function handleChange(e) {
    setForm({ ...form, [e.target.id]: e.target.value })
    setErrMsg('')
  }

  async function handleSubmit(e) {
    e.preventDefault()

    // basic required field check
    if (!form.name || !form.spec || !form.city || !form.email) {
      setErrMsg('Please fill in all required fields.')
      return
    }
    if (!form.email.includes('@')) {
      setErrMsg('Please enter a valid email address.')
      return
    }

    setStatus('loading')
    setErrMsg('')

    try {
      await submitDoctorEnquiry({
        fullName:      form.name,
        specialisation: form.spec,
        cityHospital:  form.city,
        email:         form.email,
        clinicalInput: form.message,
      })
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setErrMsg(err.message || 'Something went wrong. Please try again.')
    }
  }

  return (
    <section className="gynaec" id="gynaec" aria-labelledby="gynaec-heading">
      <div className="container">
        <div className="gynaec-grid">

          <div className="gynaec-left">
            <span className="sec-label">For Gynaecologists &amp; Doctors</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '1.2rem 0' }}>
              <div className="doc-divider" style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '1.2rem 0' }}></div>
            </div>
            <h2 id="gynaec-heading">
              Built with doctors,<br />not just around them.
            </h2>
            <p>
              Mumma Matters is not a product looking for medical endorsement. It is a formulation
              built in partnership with clinicians — and we are actively looking for more voices at
              the table.
            </p>
            <p>
              If your patients are asking you about postpartum supplements and you don&rsquo;t have a
              science-backed answer to give them, we&rsquo;d like to change that.
            </p>

            <div className="gynaec-credentials">
              {CREDENTIALS.map((cred) => (
                <div key={cred.title} className="cred-item">
                  <div className="cred-icon">{cred.icon}</div>
                  <div className="cred-text">
                    <h5>{cred.title}</h5>
                    <p>{cred.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="gynaec-form-card">
              <h3>Share Your Clinical Input</h3>
              <p>We are building Mumma Matters with doctors, not just around them. Your input directly shapes the formulation.</p>

              {status === 'success' ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '12px' }}>💜</div>
                  <h4 style={{ color: 'var(--ivory)', fontFamily: 'var(--serif)', marginBottom: '8px' }}>Thank you, Doctor.</h4>
                  <p style={{ color: 'rgba(212,189,212,0.7)', fontSize: '0.88rem' }}>We&rsquo;ll send you the complete clinical dossier within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-field">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" placeholder="Dr. [Your Name]" value={form.name} onChange={handleChange} disabled={status === 'loading'} />
                  </div>
                  <div className="form-field">
                    <label htmlFor="spec">Specialisation</label>
                    <select id="spec" value={form.spec} onChange={handleChange} disabled={status === 'loading'}>
                      <option value="">Select specialisation</option>
                      <option>Obstetrician / Gynaecologist</option>
                      <option>Lactation Consultant (IBCLC)</option>
                      <option>Paediatrician</option>
                      <option>Nutritionist / Dietitian</option>
                      <option>Ayurvedic Practitioner</option>
                      <option>General Physician</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="form-field">
                    <label htmlFor="city">City / Hospital</label>
                    <input type="text" id="city" placeholder="City and hospital name" value={form.city} onChange={handleChange} disabled={status === 'loading'} />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" placeholder="your@email.com" value={form.email} onChange={handleChange} disabled={status === 'loading'} />
                  </div>
                  <div className="form-field">
                    <label htmlFor="message">Your Clinical Input or Question</label>
                    <textarea id="message" placeholder="Share your thoughts on the formulation..." value={form.message} onChange={handleChange} disabled={status === 'loading'} />
                  </div>

                  {errMsg && (
                    <p style={{ fontSize: '0.8rem', color: '#f08080', fontFamily: 'var(--sans)', marginBottom: '12px' }}>
                      {errMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="form-submit"
                    disabled={status === 'loading'}
                    style={{ opacity: status === 'loading' ? 0.7 : 1, cursor: status === 'loading' ? 'not-allowed' : 'pointer' }}
                  >
                    {status === 'loading' ? 'Sending…' : 'Send Clinical Input'}
                  </button>
                  <p style={{ fontSize: '0.7rem', color: 'rgba(212,189,212,0.4)', marginTop: '14px', textAlign: 'center' }}>
                    We will send a complete clinical dossier with your response. No sales calls. No spam.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
