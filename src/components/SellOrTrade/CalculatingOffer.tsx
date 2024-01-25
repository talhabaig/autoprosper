import { CircleCar } from '@/assests/Images'
import Image from 'next/image'
import React from 'react'

const CalculatingOffer = () => {
  return (
    <div>
        <Image
            src={CircleCar}
            width={200}
            height={200}
            alt="CircleCar"
        />
        <p>Calculating your offer...</p>
    </div>
  )
}

export default CalculatingOffer