import {
    StyleLogin,
    LoginForm,
    Label,
    Button,
    Input,
    MainTitle,
    SwitchPage, Text, PrimaryLink
} from '@/components/Users/Login/style.login'
import { Form, Field } from 'react-final-form';
import { LoginFormData } from '@/types'
import React from 'react'
import ButtonLoader from '@/components/Loaders/ButtonLoader'

const DumbLogin: React.FC<LoginFormData> = ({handleSubmit, handleSwitch, loading}) => (
    <StyleLogin>
        <MainTitle>Login</MainTitle>
        <Form
            onSubmit={handleSubmit}
            render={({handleSubmit}) => (
                <LoginForm onSubmit={handleSubmit}>
                    <Label htmlFor="username">Username</Label>
                    <Field name="username">
                        {({input}) => <Input {...input} type="text" id="username"/>}
                    </Field>

                    <Label htmlFor="password">Password</Label>
                    <Field name="password">
                        {({input}) => <Input {...input} type="password" id="password"/>}
                    </Field>

                    <Button type="submit">{loading ? <ButtonLoader/> : 'Login'}</Button>
                    <SwitchPage>
                        <Text>Don&apos;t have an account?</Text>
                        <PrimaryLink onClick={handleSwitch}>Sign up</PrimaryLink>
                    </SwitchPage>
                </LoginForm>
            )}
        />
    </StyleLogin>
)
export default DumbLogin