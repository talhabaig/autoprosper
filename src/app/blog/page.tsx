"use client"
import React, { useState } from 'react'


function Blog() {
  const [state , setState] = useState('blog test page')
  return (
    <>
    <div>{state}</div>
    <div>Blog</div>
    <div>Blog</div>
    </>
  )
}

export default Blog