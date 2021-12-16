import { Container, Stack, Link as MuiLink } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link'
import { useRouter } from 'next/router'
import * as React from 'react'
import { ROUTE_LIST } from './router'
import clsx from 'clsx'

export interface HeaderDesktopProp {}

export function HeaderDesktop(props: HeaderDesktopProp) {
    const router = useRouter()

    return (
        <Box display={{ xs: 'none', md: 'block' }} py={2}>
            <Container>
                <Stack direction="row" justifyContent="flex-end">
                    {ROUTE_LIST.map((x, i) => (
                        <Link href={x.path} key={i} passHref>
                            <MuiLink
                                sx={{
                                    fontWeight: '500',
                                    fontSize: '20px',
                                    mx: '15px',
                                    lineHeight: '29px',
                                }}
                                className={clsx({ isActive: router.pathname === x.path })}
                            >
                                {x.label}
                            </MuiLink>
                        </Link>
                    ))}
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
