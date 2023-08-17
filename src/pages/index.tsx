import { useCallback, useEffect, useMemo } from 'react'
import { useRouter } from 'next/router'
import ManagmentTable from '@/components/ManagmentTable'
import { token } from '@/config'

export default function Home() {
    // const router = useRouter();
    // const memoizedToken = useMemo(() => token, []);
    // const redirect = useCallback(() => {
    //     if (!memoizedToken || memoizedToken === 'undefined') router.push('/login')
    //     else router.push('/')
    // }, [router])
    // useEffect(() => {
    //     redirect()
    // }, [redirect])

    return <ManagmentTable/>
}