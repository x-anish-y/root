import React, { Suspense } from 'react'
import Wrapper from './Wrapper'

const Page = () => {
  return (
    <Suspense>
      <Wrapper />
    </Suspense>
  )
}

export default Page