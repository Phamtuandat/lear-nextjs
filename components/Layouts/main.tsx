import { LayoutProp } from '@/models'
import Link from 'next/link'
import * as React from 'react'

export interface MainLayoutProps {}

export function MainLayout({ children }: LayoutProp) {
    return (
        <>
            <h1>Main Layout</h1>
            <Link href="/">
                <a>Home</a>
            </Link>
            <div>
                <Link href="./about">
                    <a>about</a>
                </Link>
            </div>
            <div>{children}</div>
        </>
    )
}
