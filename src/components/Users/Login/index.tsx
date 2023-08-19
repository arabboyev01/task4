import DumbLogin from '@/components/Users/Login/DumbLogin'
import { LoginFormData } from '@/types'
import { useRouter } from 'next/router'
import { api } from '@/config'
import { useState } from 'react';
import toast from 'react-hot-toast';

const Login = () => {

    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false)

    const handleLogin = (values: LoginFormData) => {
        setLoading(true)
        api.LoginPost('api/login', values).then(data => {
            if (data.error === 'You are blocked account') {
                throw new Error('You are blocked')
            } else {
                toast('You are successfully logged in', {
                    duration: 4000,
                    position: 'top-center',
                })
                api.SetToken(data.token)
                router.push('/');
                window.location.reload();
            }
            setLoading(false)
        }).catch(err => console.log(err))
            .finally(() => setLoading(false))
    }

    const handleSwitch = () => {
        router.push('/sign-up')
    }


    return <DumbLogin handleSubmit={handleLogin} handleSwitch={handleSwitch} loading={loading}/>
}

export default Login