import { HeroSession, RecentPost } from '@/components/Home'
import { MainLayout } from '@/components/Layouts'
import { Box, Container } from '@mui/material'
import { NextPageWithLayout } from '../models'

const Home: NextPageWithLayout = () => {
    return (
        <Box>
            <Container>
                <HeroSession />
                <RecentPost />
            </Container>
        </Box>
    )
}

Home.Layout = MainLayout

export default Home
