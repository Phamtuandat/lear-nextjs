import { FeaturedWorks, HeroSession, RecentPost } from '@/components/Home'
import { MainLayout } from '@/components/Layouts'
import { Box, Container } from '@mui/material'
import { NextPageWithLayout } from '../models'

const Home: NextPageWithLayout = () => {
    return (
        <Box>
            <Container>
                <HeroSession />
            </Container>
            <RecentPost />
            <FeaturedWorks />
        </Box>
    )
}

Home.Layout = MainLayout

export default Home
