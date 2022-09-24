import React from 'react'
import CardOne from '../CardOne'

const ConcatM = () => {
  const shapes = [
    {
      name: 'Concat',
      bgBefor: 'bg-white',
      count: 1,
      href: '',
      exec: '.concate(b)',
      tools1: {
        a1: '🔴 🟠 🟡 🟢 🔶 🔷 🟥 🟧 🟨',
        b1: '🔴 🟠 🟡 🟢 🔶 🔷 🟥 🟧 🟨',
        c1: '🔴 🟠 🟡 🟢 🔶 🔷 🟥 🟧 🟨',
        d1: '🔴 🟠 🟡 🟢 🔶 🔷 🟥 🟧 🟨',
        e1: '🔴 🟠 🟡 🟢 🔶 🔷 🟥 🟧 🟨',
        f1: '🔴 🟠 🟡 🟢 🔶 🔷 🟥 🟧 🟨',
        g1: '🔴 🟠 🟡 🟢 🔶 🔷 🟥 🟧 🟨',
        h1: '🔴 🟠 🟡 🟢 🔶 🔷 🟥 🟧 🟨',
        i1: '🔴 🟠 🟡 🟢 🔶 🔷 🟥 🟧 🟨',
      },
      bgAfter: 'bg-red-400',
      tools2: {
        a2: '🔴 🟠 🟡 🟢 🔶 🔷 🟥 🟧 🟨',
        b2: '🔴 🟠 🟡 🟢 🔶 🔷 🟥 🟧 🟨',
        c2: '🔴 🟠 🟡 🟢 🔶 🔷 🟥 🟧 🟨',
        d2: '🔴 🟠 🟡 🟢 🔶 🔷 🟥 🟧 🟨',
        e2: '🔴 🟠 🟡 🟢 🔶 🔷 🟥 🟧 🟨',
        f2: '🔴 🟠 🟡 🟢 🔶 🔷 🟥 🟧 🟨',
        g2: '🔴 🟠 🟡 🟢 🔶 🔷 🟥 🟧 🟨',
        h2: '🔴 🟠 🟡 🟢 🔶 🔷 🟥 🟧 🟨',
        i2: '🔴 🟠 🟡 🟢 🔶 🔷 🟥 🟧 🟨',
  
      },
    }
  ]

  return (
    <>
    <CardOne shapes={shapes} />
    </>
  )
}

export default ConcatM
