import {
    Button,
    Input,
    Label,
    LoginForm,
    MainTitle,
    PrimaryLink,
    StyleLogin, SwitchPage,
    Text
} from '@/components/Users/Login/style.login'
import { Field, Form } from 'react-final-form'
import React from 'react'
import { SignUpFormData } from '@/types'
import ButtonLoader from '@/components/Loaders/ButtonLoader'

const DumbSignUp: React.FC<SignUpFormData> = ({handleSubmit, handleSwitch, loading}) => (
     <StyleLogin>
        <MainTitle>Sign Up</MainTitle>
        <Form
            onSubmit={handleSubmit}
            render={({handleSubmit}) => (
                <LoginForm onSubmit={handleSubmit}>
                    <Label htmlFor="firstname">Firstname</Label>
                    <Field name="firstname">
                        {({input}) => <Input {...input} type="text" id="firstname"/>}
                    </Field>
                    <Label htmlFor="lastname">Lastname</Label>
                    <Field name="lastname">
                        {({input}) => <Input {...input} type="text" id="lastname"/>}
                    </Field>
                    <Label htmlFor="username">Username or Email</Label>
                    <Field name="username">
                        {({input}) => <Input {...input} type="text" id="username"/>}
                    </Field>

                    <Label htmlFor="password">Password</Label>
                    <Field name="password">
                        {({input}) => <Input {...input} type="password" id="password"/>}
                    </Field>

                    <Button type="submit">{loading ? <ButtonLoader /> : "Sign up"}</Button>
                    <SwitchPage>
                        <Text>Do you have an account?</Text>
                        <PrimaryLink onClick={handleSwitch}>Login</PrimaryLink>
                    </SwitchPage>
                </LoginForm>
            )}
        />
    </StyleLogin>
)

export default DumbSignUp