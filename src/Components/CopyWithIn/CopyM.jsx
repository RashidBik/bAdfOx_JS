import React from 'react'
import CardOne from '../CardOne'

const CopyM = () => {
  const shapes = [
    {
      name: 'Concat',
      bgBefor: 'bg-white',
      count: 1,
      href: '',
      exec: '.concate(b)',
      tools1: {
        a1: 'rectingle',
        b1: 'circle',
        c1: 'circle',
        d1: 'circle',
        e1: 'circle',
        f1: 'circle',
        g1: 'circle',
        h1: 'circle',
        i1: 'circle',
      },
      bgAfter: 'bg-red-400',
      tools2: {
        a2: 'circle',
        b2: 'circle',
        c2: 'circle',
        d2: 'circle',
        e2: 'circle',
        f2: 'circle',
        g2: 'circle',
        h2: 'circle',
        i2: 'circle',

      },
    }
  ]
  return (
    <CardOne shapes={shapes} />
  )
}

export default CopyM
