import { useEffect } from 'react'
import { useRouter } from 'next/router'

export const isToken = typeof window !== "undefined" ? window.localStorage.getItem("AuthToken") : null

export default function Home() {
    const router = useRouter();
    useEffect(() => {
        if(!isToken) router.push("/login")
    }, [router])

  return (
    <main>
      <h1>This is home page</h1>
    </main>
  )
}