import { LayoutProp } from '@/models'
import { Stack } from '@mui/material'
import { Box } from '@mui/system'
import { useAuth } from 'hooks'
import Link from 'next/link'
import * as React from 'react'
import { Footer, Header } from '../common'

export interface MainLayoutProps {}

export function MainLayout({ children }: LayoutProp) {
    const { profile, isValidating, logout } = useAuth()
    return (
        <Stack minHeight={'100vh'}>
            <Header />
            <Box className="main" flexGrow={1}>
                <Box>{children}</Box>
            </Box>

            <Footer />
        </Stack>
    )
}
