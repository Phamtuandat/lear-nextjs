import { StudentDetail } from '@/components/swr'
import { List, ListItem, Typography } from '@mui/material'
import * as React from 'react'

export default function Swr() {
    return (
        <div>
            <Typography variant="h1">SWR Playground</Typography>

            <List>
                <ListItem>
                    <StudentDetail studentId="sktwi1cgkkuif36f3" />
                </ListItem>
                <ListItem>
                    <StudentDetail studentId="sktwi1cgkkuif36f3" />
                </ListItem>
                <ListItem>
                    <StudentDetail studentId="sktwi1cgkkuif36f3" />
                </ListItem>
            </List>
        </div>
    )
}
