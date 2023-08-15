import DumbSignUp from '@/components/Users/SignUp/DumbSignUp'
import { SignUpFormData } from '@/types'
import { useRouter } from 'next/router'
import { api } from '@/config'

const SignUp = () => {

    const router = useRouter()
    const handleSignUp = (values: SignUpFormData) => {
        console.log(values)
        api.SignUp("api/sign-up", values).then(console.log)
            .catch(err => console.log(err))
    }
     const handleSwitch = () => {
        router.push("/login")
    }

    return <DumbSignUp handleSubmit={handleSignUp} handleSwitch={handleSwitch}/>
}

export default SignUp