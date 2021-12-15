import { Button, CircularProgress, Stack } from '@mui/material'
import { Box } from '@mui/system'
import { useAuth } from 'hooks'
import { useRouter } from 'next/router'
import React from 'react'
export default function LoginPage() {
    const { error, isValidating, login, logout, profile } = useAuth({
        revalidateOnMount: false,
    })
    const router = useRouter()
    const handleLogin = async () => {
        try {
            await login()
            router.push('/dashboard')
        } catch (error) {
            console.log('something went wrong')
        }
    }
    const handleLogout = async () => {
        try {
            await logout()
            router.push('/')
        } catch (error) {
            console.log("something went wrong, can't logout")
        }
    }

    return (
        <div>
            <h1>Login Page</h1>
            {isValidating ? (
                <CircularProgress size={18} />
            ) : (
                <Box>{JSON.stringify(profile || {}, null, '')}</Box>
            )}

            <Stack spacing={1} direction="row">
                <Button onClick={handleLogin} variant="contained">
                    Login
                </Button>
                <Button onClick={handleLogout} variant="contained">
                    Logout
                </Button>
            </Stack>
        </div>
    )
}
