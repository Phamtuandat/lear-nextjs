import { Box, IconButton, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
export interface FooterProps {}

export function Footer(props: FooterProps) {
    return (
        <Paper>
            <Box textAlign={'center'} marginTop={10.2} height={'180px'}>
                <Box display={'flex'} flexDirection="column">
                    <Box display="flex" width={'268px'} justifyContent="space-between" mx="auto">
                        <IconButton>
                            <FacebookIcon fontSize="large" />
                        </IconButton>
                        <IconButton>
                            <InstagramIcon fontSize="large" />
                        </IconButton>
                        <IconButton>
                            <TwitterIcon fontSize="large" />
                        </IconButton>
                        <IconButton>
                            <LinkedInIcon fontSize="large" />
                        </IconButton>
                    </Box>
                    <Typography fontSize={'14px'} my="26px">
                        Copyright ©2020 All rights reserved
                    </Typography>
                </Box>
            </Box>
        </Paper>
    )
}
