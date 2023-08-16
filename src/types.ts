export interface LoginFormData {
    handleSubmit: (values: LoginFormData) => void;
    handleSwitch: any
    loading: boolean
}

export interface SignUpFormData {
    handleSubmit: (values: SignUpFormData) => void
    handleSwitch: any
    loading: boolean
}