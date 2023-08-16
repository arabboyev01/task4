import DumbSignUp from '@/components/Users/SignUp/DumbSignUp'
import { SignUpFormData } from '@/types'
import { useRouter } from 'next/router'
import { api } from '@/config'
import { useState } from "react"

const SignUp = () => {

    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const handleSignUp = (values: SignUpFormData) => {
        setLoading(true)
        api.SignUp("api/sign-up", values).then(data => {
            api.SetToken(data.token)
            router.push("/")
            setLoading(false)
        })
            .catch(err => console.log(err)).finally(() => setLoading(false))
    }
     const handleSwitch = () => router.push("/login")

    return <DumbSignUp handleSubmit={handleSignUp} handleSwitch={handleSwitch} loading={loading}/>
}

export default SignUp