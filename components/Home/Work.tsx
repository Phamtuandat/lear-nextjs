import { Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import React from 'react'
import workImage from './../../images/works/work1.png'

export interface WorkProps {}

export function Work(props: WorkProps) {
    return (
        <Stack direction={{ xs: 'column', md: 'row' }}>
            <Box minWidth={'246px'}>
                <Image src={workImage} alt="work" layout="responsive" />
            </Box>
            <Box>
                <Typography>Designing Dashboards</Typography>
                <Box>
                    <Box
                        minWidth="62px"
                        component="span"
                        bgcolor="#142850"
                        borderRadius="25%"
                        color={'white'}
                    >
                        2020
                    </Box>
                </Box>
                <Typography>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                    officia consequat duis enim velit mollit. Exercitation veniam consequat sunt
                    nostrud amet.
                </Typography>
            </Box>
        </Stack>
    )
}
