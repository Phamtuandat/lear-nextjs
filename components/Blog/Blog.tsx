import { Divider, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export function Blog() {
    return (
        <>
            <Stack>
                <Box mb={2.5}>
                    <Typography fontSize="30px">UI Interactions of the week</Typography>
                    <Box display={'flex'} fontSize="20px" my={2}>
                        <Typography pr="20px" borderRight="1px solid ">
                            12 Feb 2019
                        </Typography>
                        <Typography
                            pl="20px"
                            sx={{
                                opacity: 0.6,
                            }}
                        >
                            Express, Handlebars
                        </Typography>
                    </Box>
                    <Typography>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        Velit officia consequat duis enim velit mollit. Exercitation veniam
                        consequat sunt nostrud amet.
                    </Typography>
                </Box>
            </Stack>
            <Divider sx={{ mb: 4 }} />
        </>
    )
}
