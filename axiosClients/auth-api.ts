import { LoginPayload } from 'models/auth'
import apiClient from './apiClient'

export const authApi = {
    login(payload: LoginPayload) {
        return apiClient.post('login', payload)
    },
    logout() {
        return apiClient.post('logout')
    },
    getProfile() {
        return apiClient.get('profile')
    },
}
