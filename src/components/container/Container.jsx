import React from 'react'
import './Container.scss'

export default function Container({ children, padding }) {
  return (
    <div style={{ padding: `0 ${padding}px`, width: 'auto' }} className='container'>
      {children}
    </div>
  )
}
