import { Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { Work } from './Work'

export interface FeaturedWorksProps {}

export function FeaturedWorks(props: FeaturedWorksProps) {
    return (
        <Container>
            <Typography mb={1.2} variant="h5" height="60px" lineHeight="60px">
                Featured works
            </Typography>
            <Stack>
                <Work />
            </Stack>
        </Container>
    )
}
