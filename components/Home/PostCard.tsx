import { Card, CardContent, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import * as React from 'react'

export interface PostCardProps {}

export function PostCard(props: PostCardProps) {
    return (
        <Card
            sx={{
                minHeight: {
                    xs: '266px',
                    md: '295px',
                },
            }}
            elevation={0}
        >
            <CardContent
                sx={{
                    px: 3,
                }}
            >
                <Typography sx={{ fontSize: 26 }} fontWeight="bold" mb="17px">
                    Making a design system from scratch
                </Typography>
                <Stack
                    direction="row"
                    alignItems="flex-start"
                    spacing={3.2}
                    mb="17px"
                    fontSize="18px"
                    height="34px"
                >
                    <Typography>12 Feb 2020</Typography>
                    <Box
                        component="span"
                        borderLeft="1px solid black"
                        sx={{
                            height: '21px',
                        }}
                    ></Box>
                    <Typography>Figma, Icon Design</Typography>
                </Stack>
                <Typography>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                    officia consequat duis enim velit mollit. Exercitation veniam consequat sunt
                    nostrud amet.
                </Typography>
            </CardContent>
        </Card>
    )
}
