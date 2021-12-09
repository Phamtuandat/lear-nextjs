import { LayoutProp } from '@/models'
import Link from 'next/link'
import * as React from 'react'

export function Admin({ children }: LayoutProp) {
    return (
        <div>
            <h1>Admin layout</h1>
            <div>Sidebar</div>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>about</a>
            </Link>
            <div>{children}</div>
        </div>
    )
}
