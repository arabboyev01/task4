import { useEffect } from 'react'
import { useRouter } from 'next/router'
import ManagmentTable from '@/components/ManagmentTable'

export default function Home() {
    const router = useRouter();
    const isToken = typeof window !== "undefined" ? window.localStorage.getItem("AuthToken") : null
    useEffect(() => {
        if(!isToken || isToken === "undefined") router.push("/login")
        else router.push("/")
    }, [router, isToken])

  return <ManagmentTable />
}