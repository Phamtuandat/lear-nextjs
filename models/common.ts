import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'

export interface LayoutProp {
    children: ReactNode
}

export type NextPageWithLayout = NextPage & {
    Layout?: (props: LayoutProp) => ReactElement
}

export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}
