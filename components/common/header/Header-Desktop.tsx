import { Container, Stack, Link as MuiLink, Button, IconButton } from '@mui/material'
import { Box, useTheme } from '@mui/system'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { ROUTE_LIST } from './router'
import clsx from 'clsx'
import { ColorModeContext } from 'Utils/themeContext'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

export interface HeaderDesktopProp {}

export function HeaderDesktop(props: HeaderDesktopProp) {
    const router = useRouter()
    const theme = useTheme()
    const colorMode = useContext(ColorModeContext)
    return (
        <Box display={{ xs: 'none', md: 'block' }} py={2}>
            <Container>
                <Stack direction="row" justifyContent="flex-end">
                    {ROUTE_LIST.map((x, i) => (
                        <Link href={x.path} key={i} passHref>
                            <MuiLink
                                sx={{
                                    fontWeight: 'medium',
                                    fontSize: '20px',
                                    mx: '15px',
                                    color: 'text.primary',
                                    lineHeight: '40px',
                                }}
                                className={clsx({ isActive: router.pathname === x.path })}
                            >
                                {x.label}
                            </MuiLink>
                        </Link>
                    ))}

                    <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                </Stack>
            </Container>
        </Box>
    )
}

// position: absolute;
// width: 57px;
// height: 43px;
// left: 856px;
// top: 27px;

// font-family: Heebo;
// font-style: normal;
// font-weight: 500;
// font-size: 20px;
// line-height: 29px;
// text-align: right;

// color: #000000;
