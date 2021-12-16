import { Box } from '@mui/system'
import * as React from 'react'
import { HeaderDesktop, HeaderMobile } from './header'

export interface HeaderProps {}

export function Header(props: HeaderProps) {
    return (
        <>
            <HeaderDesktop />
            <HeaderMobile />
        </>
    )
}
