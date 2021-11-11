import Footer from "../Footer"
import Head from "next/head"
import Navbar from "../Navbar"

export interface LayoutProps {
    
}
 
const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <>
            <Head>
              <meta name='viewport' content='initial-scale=1.0, width=device-width' />
              <link rel="icon" type="image/png" sizes="16x16" href="/images/logo.png" />
              <meta property="og:title" content='Joa Palacios Portfolio' />
              <meta property="og:description" content='Personal website porfolio of Joa Palacios' />
              <meta property="og:type" content="website" />
              <meta property="og:image" content="/images/webPortfolio.png" />
              <meta property="og:url" content="" />
              <meta property="og:locale" content="en" />
            </Head>        
            <div>
                <Navbar />
                { children }
                <Footer />
            </div>
        </>
    );
}
 
export default Layout;