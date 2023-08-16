import DumbLogin from '@/components/Users/Login/DumbLogin'
import { LoginFormData } from '@/types'
import { useRouter } from 'next/router'
import { api } from '@/config'
import { useState } from "react";

const Login = () => {

    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false)

    const handleLogin = (values: LoginFormData) => {
        setLoading(true)
        api.LoginPost("api/login", values).then(data => {
            api.SetToken(data.token)
            router.push("/");
            setLoading(false)
        }).catch(err => console.log(err)).finally(() => setLoading(false))
    }

    const handleSwitch = () => {
        router.push("/sign-up")
    }


    return <DumbLogin handleSubmit={handleLogin} handleSwitch={handleSwitch} loading={loading}/>
}

export default Login