import '@styles/globals.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { PageTransition } from '../components/PageTransition'
import GoogleAnalytics from '@bradgarropy/next-google-analytics'
import Script from 'next/script'


function Application ({ Component, pageProps }) {
  return (
    <>
      <div className='center'>
        <GoogleAnalytics measurementId='G-REYHDZZ5K8' />
        {/* Add any other scripts or components needed globally */}
        <PageTransition>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </PageTransition>
    
      </div>
    </>
  )
}

export default Application
