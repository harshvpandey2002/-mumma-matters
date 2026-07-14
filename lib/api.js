const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'

// ── Email subscribe ──
// source: 'hero' | 'products'
// formulaInterest: 'general' | 'conceive' | 'nursing' | 'rebuild'
export async function subscribeEmail({ email, formulaInterest = 'general', source = 'hero' }) {
  const res = await fetch(`${API_URL}/api/subscribe`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, formulaInterest, source }),
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data.message || 'Subscribe failed')
  return data
}

// ── Product vote ──
// formula: 'conceive' | 'nursing' | 'rebuild'
export async function castVote({ email, formula }) {
  const res = await fetch(`${API_URL}/api/vote`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, formula }),
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data.message || 'Vote failed')
  return data
}

// ── Vote counts (live) ──
export async function getVoteSummary() {
  const res = await fetch(`${API_URL}/api/votes/summary`)
  const data = await res.json()
  if (!res.ok) throw new Error(data.message || 'Failed to fetch votes')
  return data
}

// ── Doctor enquiry ──
export async function submitDoctorEnquiry({ fullName, specialisation, cityHospital, email, clinicalInput }) {
  const res = await fetch(`${API_URL}/api/doctor-enquiry`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fullName, specialisation, cityHospital, email, clinicalInput }),
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data.message || 'Submission failed')
  return data
}

// ── Site Content (dynamic sections) ──
export async function getContent(pageKey) {
  const res = await fetch(`${API_URL}/api/content/${pageKey}`)
  const data = await res.json()
  if (!res.ok) throw new Error(data.message || 'Failed to load content')
  return data.data
}
