import React from 'react'
import CardOne from '../CardOne'
const shapes = [
  {
    name: 'Reverse',
    bgBefor: 'bg-white',
    count: 2,
    href: '',
    exec: '.Reverse()',
    next: 'slice',
    prev: 'filter',
    tools1: {
      a1: '🔴',
      b1: '🔴',
      c1: '🔴',
      d1: '🟠',
      e1: '🟠',
      f1: '🟠',
      g1: '🟡',
      h1: '🟡',
      i1: '🟡',
    },
    bgAfter: 'bg-white',
    tools2: {
      a2: '🟡',
      b2: '🟡',
      c2: '🟡',
      d2: '🟠',
      e2: '🟠',
      f2: '🟠',
      g2: '🔴',
      h2: '🔴',
      i2: '🔴',

    },
  }
]
const Reverse = () => {
  return (
    <div>
      <CardOne shapes={shapes} />
    </div>
  )
}

export default Reverse
