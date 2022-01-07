import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import {
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    Link as MuiLink,
    Divider,
    useTheme,
} from '@mui/material'
import Link from 'next/link'
import React, { useContext } from 'react'
import { ROUTE_LIST } from './router'
import clsx from 'clsx'
import { useRouter } from 'next/router'

import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { ColorModeContext } from 'Utils/themeContext'

export interface HeaderMobileProp {}

export function HeaderMobile(props: HeaderMobileProp) {
    const [open, setOpen] = React.useState(false)
    const theme = useTheme()
    const colorMode = useContext(ColorModeContext)
    const handleClose = () => {
        setOpen(false)
    }
    const router = useRouter()
    return (
        <Box display={{ xs: 'flex', md: 'none' }} py={2} justifyContent={'flex-end'}>
            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <IconButton onClick={() => setOpen(true)}>
                <MenuIcon sx={{ fontSize: '36px' }} />
            </IconButton>

            <Drawer anchor="right" open={open} onClose={handleClose}>
                <Box sx={{ position: 'relative' }}>
                    <List sx={{ width: '275px', py: 4 }}>
                        {ROUTE_LIST.map((x) => (
                            <Box key={x.path}>
                                <Link href={x.path} passHref>
                                    <ListItem key={x.path} onClick={handleClose}>
                                        <MuiLink
                                            sx={{ fontSize: '20px', py: 1 }}
                                            className={clsx({
                                                isActive: x.path === router.pathname,
                                            })}
                                        >
                                            {x.label}
                                        </MuiLink>
                                    </ListItem>
                                </Link>
                                <Divider />
                            </Box>
                        ))}
                    </List>
                    <IconButton
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            top: '0',
                            right: 0,
                        }}
                    >
                        <CloseIcon sx={{ fontSize: '32px' }} />
                    </IconButton>
                </Box>
            </Drawer>
        </Box>
    )
}
