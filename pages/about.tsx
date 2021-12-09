import { MainLayout } from '@/components/Layouts'
import * as React from 'react'

export interface AboutProps {}

export default function About(props: AboutProps) {
    return (
        <div>
            <h3>About</h3>
        </div>
    )
}

About.Layout = MainLayout
