"use client";
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

function Home() {

  const router = useRouter();
  useEffect(() => {
    router.push('/user/dashboard');
  }, [router])

  return (
    <div>Home</div>
  )
}

export default Home