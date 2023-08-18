import type { AppProps } from 'next/app'
// import { useRouter } from 'next/router';
// import { useCallback, useEffect, useMemo } from 'react'
// import { token } from '../config'
import { Toaster } from 'react-hot-toast';

export default function App({Component, pageProps}: AppProps) {

    // const router = useRouter();
    // const memoizedToken = useMemo(() => token, []);
    // const redirect = useCallback(() => {
    //     if (!memoizedToken || memoizedToken === 'undefined') router.push('/login')
    //     else router.push('/')
    // }, [router, memoizedToken]);
    //
    // useEffect(() => {
    //     redirect()
    // }, [redirect])

    return (
        <>
            <Toaster/>
            <Component {...pageProps} />
        </>
    )
}