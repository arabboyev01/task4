import { ApiCall } from '@/api'

export const api = new ApiCall("https://backend-itransition.onrender.com");
export const token = typeof window !== 'undefined' ? window.localStorage.getItem('AuthToken') : null
