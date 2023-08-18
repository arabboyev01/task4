import DumbSignUp from '@/components/Users/SignUp/DumbSignUp'
import { SignUpFormData } from '@/types'
import { useRouter } from 'next/router'
import { api } from '@/config'
import { useState } from 'react'
import toast from 'react-hot-toast';

const SignUp = () => {

    const router = useRouter()
    const [loading, setLoading] = useState<boolean>(false)
    const handleSwitch = () => router.push('/login')
    const handleSignUp = (values: SignUpFormData) => {
        setLoading(true)
        api.SignUp('api/sign-up', values).then(data => {
            api.SetToken(data.token)
            router.push('/')
            setLoading(false)
            toast('You are successfully signed up', {
                duration: 4000,
                position: 'top-center',
            })
        }).catch(err => console.log(err)).finally(() => setLoading(false))
    }

    return <DumbSignUp handleSubmit={handleSignUp} handleSwitch={handleSwitch} loading={loading}/>
}

export default SignUp