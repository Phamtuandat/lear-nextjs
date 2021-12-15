import { LayoutProp } from '@/models'
import { Button } from '@mui/material'
import { useAuth } from 'hooks'
import Link from 'next/link'
import * as React from 'react'
import { Auth } from '../common'

export interface MainLayoutProps {}

export function MainLayout({ children }: LayoutProp) {
    const { profile, isValidating, logout } = useAuth()
    return (
        <>
            <h1>Main Layout</h1>
            <Link href="/">
                <a>Home</a>
            </Link>
            {(profile as any)?.username ? (
                <Link href="./dashboard">
                    <a>dashboard</a>
                </Link>
            ) : null}

            <div>{children}</div>
        </>
    )
}
