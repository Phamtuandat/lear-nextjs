import { Blog } from '@/components/Blog'
import { MainLayout } from '@/components/Layouts'
import { Box, Container, Paper, Stack, Typography } from '@mui/material'
import * as React from 'react'

export interface BlogPageProps {}

export default function BlogPage(props: BlogPageProps) {
    return (
        <Box bgcolor="secondary.light">
            <Container maxWidth="md">
                <Typography mb={7} component="h1" fontSize="40px" fontWeight="bold">
                    Blog
                </Typography>
                <Blog />
                <Blog />
                <Blog />
            </Container>
        </Box>
    )
}
BlogPage.Layout = MainLayout
