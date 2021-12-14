import { EmptyLayout } from '@/components/Layouts'
import apiClient from 'axiosClients/apiClient'
import { SWRConfig } from 'swr'
import { AppPropsWithLayout } from '../models'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const Layout = Component.Layout ?? EmptyLayout
    return (
        <SWRConfig value={{ fetcher: (url) => apiClient.get(url), shouldRetryOnError: false }}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </SWRConfig>
    )
}

export default MyApp
