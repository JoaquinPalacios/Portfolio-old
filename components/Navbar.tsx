import AppLink from './AppLinks';
import Scrollspy from 'react-scrollspy';

export interface NavbarProps {
    
}
 
const Navbar: React.FC<NavbarProps> = () => {
    return (
        <>
            <Scrollspy  items={ ['Home', 'Porfolio', 'History', 'Skills', 'Contact'] } currentClassName="is-current" className='d-flex justify-content-around py-3 border-dark border-bottom shadow-lg fixed-top bgCard'>
                <AppLink href='#Home' label='Home' />
                <AppLink href='#Porfolio' label='Porfolio' />
                <AppLink href='#History' label='History' />
                <AppLink href='#Skills' label='Skills' />
                <AppLink href='#Contact' label='Contact' />
            </Scrollspy>                     
        </>
    );
}
 
export default Navbar;