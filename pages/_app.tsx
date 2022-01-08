import { EmptyLayout } from '@/components/Layouts'
import { CacheProvider } from '@emotion/react'
import { createTheme, CssBaseline, responsiveFontSizes, ThemeProvider } from '@mui/material'
import { grey, red } from '@mui/material/colors'
import apiClient from 'axiosClients/apiClient'
import Head from 'next/head'
import { useEffect, useMemo, useState } from 'react'
import { SWRConfig } from 'swr'
import { createEmotionCache, theme } from 'Utils'
import { ColorModeContext } from 'Utils/themeContext'
import { AppPropsWithLayout } from '../models'
import '../styles/globals.css'

const clientSideEmotionCache = createEmotionCache()

function MyApp({
    Component,
    pageProps,
    emotionCache = clientSideEmotionCache,
}: AppPropsWithLayout) {
    const Layout = Component.Layout ?? EmptyLayout
    const [mode, setMode] = useState<'light' | 'dark'>('light')
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
                localStorage.setItem('UiMode', mode === 'light' ? 'dark' : 'light')
            },
        }),
        [mode]
    )
    useEffect(() => {
        const defaultMode = localStorage.getItem('UiMode') as 'light' | 'dark'
        setMode(defaultMode ? defaultMode : mode)
    }, [mode])

    let themeCustom = useMemo(
        () =>
            createTheme(
                createTheme({
                    palette: {
                        mode,
                        ...(mode === 'light'
                            ? {
                                  primary: {
                                      main: '#FF6464',
                                  },
                                  secondary: {
                                      main: '#00ABCC',
                                      light: '#EDF7FA',
                                  },
                                  error: {
                                      main: red.A400,
                                  },
                                  text: {
                                      primary: '#21243D',
                                  },
                              }
                            : {
                                  // palette values for dark mode
                                  primary: grey,
                                  divider: grey[700],
                                  secondary: {
                                      main: '#0A1929',
                                      light: '#030321',
                                  },
                                  text: {
                                      primary: '#fff',
                                      secondary: '#A0AAB4',
                                  },
                                  background: {
                                      default: '#0A1929',
                                      paper: '#021E3C',
                                  },
                              }),
                    },

                    typography: {
                        fontFamily: 'Heebo, sans-serif',
                    },
                    components: {
                        MuiContainer: {
                            styleOverrides: {
                                maxWidthMd: {
                                    maxWidth: '860px',
                                    '@media (min-width: 900px)': {
                                        maxWidth: '860px',
                                    },
                                },
                                maxWidthSm: {
                                    maxWidth: '680px',
                                    '@media (min-width: 600px)': {
                                        maxWidth: '680px',
                                    },
                                },
                                root: {
                                    '@media (min-width: 600px)': {
                                        padding: '14px',
                                    },
                                },
                            },
                            defaultProps: {
                                maxWidth: 'md',
                            },
                        },
                        MuiLink: {
                            defaultProps: {
                                underline: 'none',
                                color: 'black',
                            },
                            styleOverrides: {
                                root: {
                                    color: 'blace',
                                    '&:hover, &.isActive': {
                                        color: '#FF6464',
                                    },
                                },
                            },
                        },
                    },
                })
            ),
        [mode]
    )
    themeCustom = responsiveFontSizes(themeCustom)
    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <title>My page</title>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <SWRConfig value={{ fetcher: (url) => apiClient.get(url), shouldRetryOnError: false }}>
                <ColorModeContext.Provider value={colorMode}>
                    <ThemeProvider theme={themeCustom}>
                        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                        <CssBaseline />
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </ThemeProvider>
                </ColorModeContext.Provider>
            </SWRConfig>
        </CacheProvider>
    )
}

export default MyApp
