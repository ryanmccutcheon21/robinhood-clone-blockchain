import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { RobinhoodProvider } from '../context/RobinhoodContext'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      // This should be in a .env file
      serverUrl='https://by5sdi5vqavn.usemoralis.com:2053/server'
      appId='R0rEzYAEWk8Yq6VbHVft53mvlPnlGRvXwd5SgbbF'
    >
      <RobinhoodProvider>
        <Component {...pageProps} />
      </RobinhoodProvider>
    </MoralisProvider>
  )
}

export default MyApp
