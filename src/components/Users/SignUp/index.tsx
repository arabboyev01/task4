import DumbSignUp from '@/components/Users/SignUp/DumbSignUp'
import { SignUpFormData } from '@/types'
import { useRouter } from 'next/router'

const SignUp = () => {

    const router = useRouter()
    const handleSignUp = (values: SignUpFormData) => {
        console.log(values)
    }
     const handleSwitch = () => {
        router.push("/login")
    }

    return <DumbSignUp handleSubmit={handleSignUp} handleSwitch={handleSwitch}/>
}

export default SignUp