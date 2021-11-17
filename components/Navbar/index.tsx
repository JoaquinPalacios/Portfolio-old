import { Nav, Navbar as NavbarBootstrap } from 'react-bootstrap';
import React, { useState } from 'react';

import AppLink from '../AppLinks';
import Scrollspy from 'react-scrollspy';

export interface NavbarProps {
    
}
 
const Navbar: React.FC<NavbarProps> = () => {
    const [expanded, setExpanded] = useState<boolean | undefined>(false);
    return (
        <>
            <NavbarBootstrap expanded={expanded} collapseOnSelect expand="md" className='border-dark border-bottom shadow-lg fixed-top bgCard pb-2 pt-3' variant="dark">
                <NavbarBootstrap.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(!expanded)} />
                <NavbarBootstrap.Collapse id="responsive-navbar-nav">
                    <Scrollspy  items={ ['Home', 'Porfolio', 'History', 'Skills', 'Contact'] } currentClassName="is-current" className='container-fluid d-flex flex-column flex-md-row justify-content-md-around pt-3 pt-md-0'>
                        <span className='nav-link' onClick={() => setTimeout(() => {setExpanded(false)}, 150)}><AppLink href='#Home' label='Home' /></span>
                        <span className='nav-link' onClick={() => setTimeout(() => {setExpanded(false)}, 150)}><AppLink href='#Porfolio' label='Porfolio' /></span>
                        <span className='nav-link' onClick={() => setTimeout(() => {setExpanded(false)}, 150)}><AppLink href='#History' label='History' /></span>
                        <span className='nav-link' onClick={() => setTimeout(() => {setExpanded(false)}, 150)}><AppLink href='#Skills' label='Skills' /></span>
                        <span className='nav-link' onClick={() => setTimeout(() => {setExpanded(false)}, 150)}><AppLink href='#Contact' label='Contact' /></span>
                    </Scrollspy>
                </NavbarBootstrap.Collapse>
            </NavbarBootstrap>                   
        </>
    );
}
 
export default Navbar;

// export const ScrollspyComponent = () => (
//         <Scrollspy  items={ ['Home', 'Porfolio', 'History', 'Skills', 'Contact'] } currentClassName="is-current" className='d-flex justify-content-around py-3 border-dark border-bottom shadow-lg fixed-top bgCard' id="collasible-nav-dropdown">
//             <AppLink href='#Home' label='Home' />
//             <AppLink href='#Porfolio' label='Porfolio' />
//             <AppLink href='#History' label='History' />
//             <AppLink href='#Skills' label='Skills' />
//             <AppLink href='#Contact' label='Contact' />
//         </Scrollspy>
// );