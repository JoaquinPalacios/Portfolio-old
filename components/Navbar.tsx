import AppLink from './AppLinks';

// import { LinkProps } from 'next/link';

export interface NavbarProps {
    
}
 
const Navbar: React.FC<NavbarProps> = (href, label) => {
    return (
        <>
            <nav>
                <AppLink href='/' label='Home' />
                <AppLink href='/contact' label='Contact' />
            </nav>                     
        </>
    );
}
 
export default Navbar;