import { Button, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import React from 'react'
import avatar from './../../images/avatar/avatar1.jpg'

export interface HeroSessionProps {}

export function HeroSession(props: HeroSessionProps) {
    return (
        <Box px={0}>
            <Stack
                direction={{ xs: 'column-reverse', md: 'row' }}
                spacing={{ xs: '34px', md: 12 }}
                alignItems={{ xs: 'center', md: 'flex-start' }}
                sx={{
                    pt: { xs: 4, md: '140px' },
                }}
            >
                <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                    <Typography variant="h3" component="h1" fontWeight="bold" pb={{ xs: 4, md: 5 }}>
                        Hi, I am John, <br />
                        Creative Technologist
                    </Typography>
                    <Typography pb={{ xs: 4, md: 5 }}>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        Velit officia consequat duis enim velit mollit. Exercitation veniam
                        consequat sunt nostrud amet.
                    </Typography>
                    <Button variant="contained" size="large" sx={{ color: 'white' }}>
                        Download Resume
                    </Button>
                </Box>
                <Box
                    sx={{
                        minWidth: '240px',
                        boxShadow: '-5px 13px',
                        color: 'secondary.light',
                        borderRadius: '50%',
                        overflow: 'hidden',
                    }}
                >
                    <Image src={avatar} alt="avatar" layout="responsive" />
                </Box>
            </Stack>
        </Box>
    )
}
