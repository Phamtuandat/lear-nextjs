import { LayoutProp } from '@/models'
import Link from 'next/link'
import * as React from 'react'
import { Auth } from '../common'

export interface MainLayoutProps {}

export function MainLayout({ children }: LayoutProp) {
    return (
        <>
            <h1>Main Layout</h1>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Auth>
                <Link href="./dashboard">
                    <a>dashboard</a>
                </Link>
            </Auth>
            <div>{children}</div>
        </>
    )
}
