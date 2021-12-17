import { Box, Stack } from '@mui/material'
import * as React from 'react'

export interface RecentPostProps {}

export function RecentPost(props: RecentPostProps) {
    return (
        <Box mt={9} sx={{ backgroundColor: 'secondary.light' }}>
            <Stack>
                <Box>Header</Box>
                <Stack></Stack>
            </Stack>
        </Box>
    )
}
