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

export interface User {
  id: number;
  firstname: string;
  lastname: string;
  username: string;
  registration_time: string;
  status: string;
  selected: boolean;
}

export interface tableInterfaces {
    selectAll: boolean;
    toggleSelectAll: () => void
    users: User[]
    toggleSelectUser: (id: number) => void
}