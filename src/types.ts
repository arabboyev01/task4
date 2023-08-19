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

export interface TableButtons {
    handleBlockClick: () => void
    handleUnblockClick: () => void
    handleDeleteClick: () => void
}
export interface ActiveProps {
  status: 'active' | 'blocked'; // Define the possible values for status
}

export interface AuthPageProps {
  token?: string;
}