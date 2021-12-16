import { Admin } from '@/components/Layouts'
import React from 'react'

export interface AboutProps {}

export default function About(props: AboutProps) {
    return (
        <div>
            <h3>Dashboard Page</h3>
        </div>
    )
}

About.Layout = Admin
