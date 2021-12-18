import { Box, Container, Stack, Typography } from '@mui/material'
import * as React from 'react'
import { PostCard } from './PostCard'

export interface RecentPostProps {}

export function RecentPost(props: RecentPostProps) {
    return (
        <Box mt={9} mb={2} sx={{ backgroundColor: 'secondary.light' }}>
            <Container>
                <Stack>
                    <Box display="flex" justifyContent="space-between" alignItems={'center'}>
                        <Typography fontSize="22px" lineHeight="60px">
                            Recent Posts
                        </Typography>
                        <Typography
                            color="secondary.main"
                            fontSize="16px"
                            display={{ xs: 'none', md: 'inline' }}
                        >
                            View All
                        </Typography>
                    </Box>
                    <Stack
                        mb={{ xs: 2, md: 4 }}
                        mx={{ md: 0, xs: 1.5 }}
                        direction={{
                            md: 'row',
                            xs: 'column',
                        }}
                        justifyContent="space-between"
                        spacing={2.5}
                        sx={{
                            '&>div': {
                                width: {
                                    xs: '100%',
                                    md: '50%',
                                },
                            },
                        }}
                    >
                        <PostCard />
                        <PostCard />
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}
