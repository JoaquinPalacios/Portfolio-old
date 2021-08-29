import Footer from "./Footer"
import Head from "next/head"
import Navbar from "./Navbar"

export interface LayoutProps {
    
}
 
const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <div>
            <Head>
              <link rel="icon" type="image/png" sizes="16x16" href="/images/logo.png" />
            </Head>        
            <div>
                <Navbar />
                { children }
                <Footer />
            </div>
        </div>
    );
}
 
export default Layout;