import { Container, Divider, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import React from 'react'
import workImage from './../../images/works/work1.png'

export interface WorkProps {}

export function Work(props: WorkProps) {
    return (
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
            <Box minWidth={'246px'}>
                <Image src={workImage} alt="work" layout="responsive" />
            </Box>
            <Stack spacing={2}>
                <Typography fontSize="30px" fontWeight="bold">
                    Designing Dashboards
                </Typography>
                <Box display="flex">
                    <Box
                        color={'white'}
                        fontWeight="bold"
                        bgcolor="#142850"
                        borderRadius="16px"
                        width="62px"
                        textAlign={'center'}
                    >
                        2020
                    </Box>
                    <Box component="span" mt={0} mx={4.5} fontWeight="300" sx={{ opacity: 0.6 }}>
                        Dashboard
                    </Box>
                </Box>
                <Typography>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                    officia consequat duis enim velit mollit. Exercitation veniam consequat sunt
                    nostrud amet.
                </Typography>
            </Stack>
        </Stack>
    )
}
