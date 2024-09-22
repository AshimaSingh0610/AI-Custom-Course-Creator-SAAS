import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='flex justify-between p-5 shadow-sm'>
      <Link href={'/'}>
        <Image src={'/logo.svg'} width={150} height={100}/>
        </Link>
        <Link href={'/dashboard'}>
          <Button>Get Started</Button>
        </Link>
    </div>
  )
}

export default Header