import { EmptyLayout } from '@/components/Layouts'
import { CacheProvider, ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
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
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <SWRConfig
                    value={{ fetcher: (url) => apiClient.get(url), shouldRetryOnError: false }}
                >
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </SWRConfig>
            </ThemeProvider>
        </CacheProvider>
    )
}

export default MyApp
