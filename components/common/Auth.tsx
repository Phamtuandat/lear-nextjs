import { CircularProgress } from '@mui/material'
import { useAuth } from 'hooks'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export function Auth({ children }: any) {
    const { profile, error, isValidating } = useAuth()
    console.log(isValidating)
    const router = useRouter()
    useEffect(() => {
        if (!isValidating && !(profile as any)?.username) router.push('/login')
    }, [error, profile, isValidating, router])
    if (isValidating) {
        return <CircularProgress />
    }

    return <div>{children}</div>
}
