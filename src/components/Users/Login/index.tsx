import DumbLogin from '@/components/Users/Login/DumbLogin'
import { LoginFormData } from '@/types'
import { useRouter } from 'next/router'
import { api } from '@/config'

const Login = () => {

    const router = useRouter()

    const handleLogin = (values: LoginFormData) => {
        api.LoginPost("api/login", values).then(data => {
            api.SetToken(data.token)
            router.push("/")
        }).catch(err => console.log(err))
    }

    const handleSwitch = () => {
        router.push("/sign-up")
    }


    return <DumbLogin handleSubmit={handleLogin} handleSwitch={handleSwitch}/>
}

export default Login