import { authApi } from 'axiosClients'
import useSWR from 'swr'
import { PublicConfiguration } from 'swr/dist/types'

export const useAuth = (option?: Partial<PublicConfiguration>) => {
    const {
        data: profile,
        mutate,
        isValidating,
        error,
    } = useSWR('/profile', {
        dedupingInterval: 60 * 60 * 1000,
        revalidateOnFocus: false,
        ...option,
    })
    async function login() {
        await authApi.login({
            username: 'phamdat',
            password: 'phamdat11',
        })
        await mutate()
    }
    async function logout() {
        await authApi.logout()
        mutate({}, false)
    }
    return {
        profile,
        isValidating,
        error,
        login,
        logout,
    }
}
