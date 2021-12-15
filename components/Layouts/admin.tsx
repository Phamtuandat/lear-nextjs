import { LayoutProp } from '@/models'
import { Box } from '@mui/material'
import Link from 'next/link'
import * as React from 'react'
import { Auth } from '../common'

export function Admin({ children }: LayoutProp) {
    return (
        <Auth>
            <h1>Admin layout</h1>
            <div>Sidebar</div>
            <Box display="flex" flexDirection={'column'}>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/dashboard">
                    <a>dashboard</a>
                </Link>
            </Box>
            <div>{children}</div>
        </Auth>
    )
}
