import { Button, Stack } from '@mui/material'
import { authApi } from 'axiosClients'
import React from 'react'
export default function LoginPage() {
    const handleLogin = async () => {
        try {
            await authApi.login({
                username: 'phamdat',
                password: 'phamdat11',
            })
        } catch (error) {
            console.log('something went wrong')
        }
    }
    const handleLogout = async () => {
        try {
            await authApi.logout()
        } catch (error) {
            console.log("something went wrong, can't logout")
        }
    }
    const handleGetProfile = async () => {
        try {
            const data: any = await authApi.getProfile()
        } catch (error) {
            console.log("can't get your profile, try again later")
        }
    }
    return (
        <div>
            <h1>Login Page</h1>
            <Stack spacing={1} direction="row">
                <Button onClick={handleLogin} variant="contained">
                    Login
                </Button>
                <Button onClick={handleLogout} variant="contained">
                    Logout
                </Button>
                <Button onClick={handleGetProfile} variant="contained">
                    Get profile
                </Button>
            </Stack>
        </div>
    )
}
