import { EmptyLayout } from '@/components/Layouts'
import { CacheProvider } from '@emotion/react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import apiClient from 'axiosClients/apiClient'
import Head from 'next/head'
import { SWRConfig } from 'swr'
import { createEmotionCache, theme } from 'Utils'
import { AppPropsWithLayout } from '../models'
import '../styles/globals.css'

const clientSideEmotionCache = createEmotionCache()

function MyApp({
    Component,
    pageProps,
    emotionCache = clientSideEmotionCache,
}: AppPropsWithLayout) {
    const Layout = Component.Layout ?? EmptyLayout
    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <title>My page</title>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <SWRConfig value={{ fetcher: (url) => apiClient.get(url), shouldRetryOnError: false }}>
                <ThemeProvider theme={theme}>
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline />
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </ThemeProvider>
            </SWRConfig>
        </CacheProvider>
    )
}

export default MyApp
