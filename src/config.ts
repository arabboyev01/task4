import { ApiCall } from '@/api'

export const api = new ApiCall("http://localhost:3006");
export const token = typeof window !== 'undefined' ? window.localStorage.getItem('AuthToken') : null
