import React from 'react'
import Link from 'next/link';
const PropertyPage = () => {
  return (
    <div>
        <h1 className='text-5xl'>Properties</h1>
        <Link href='./' className='text-3xl'>Go Home</Link>
    </div>
  )
}

export default PropertyPage