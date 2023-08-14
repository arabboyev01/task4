import DumbLogin from '@/components/Users/Login/DumbLogin'
import { LoginFormData } from '@/types'
import { useRouter } from 'next/router'

const Login = () => {

    const router = useRouter()

    const handleLogin = (values: LoginFormData) => {
        console.log(values)
    }

    const handleSwitch = () => {
        router.push("/sign-up")
    }


    return <DumbLogin handleSubmit={handleLogin} handleSwitch={handleSwitch}/>
}

export default Login