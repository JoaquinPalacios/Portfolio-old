import React, { useState } from 'react';

import AppLink from '../AppLinks';
import { Navbar as NavbarBootstrap } from 'react-bootstrap';
import Scrollspy from 'react-scrollspy';

export interface NavbarProps {
    
}
 
const Navbar: React.FC<NavbarProps> = () => {
    const [expanded, setExpanded] = useState<boolean | undefined>(false);
    return (
        <>
            <NavbarBootstrap expanded={expanded} collapseOnSelect expand="md" className='border-dark border-bottom shadow-lg fixed-top bgCardNavbar' variant="dark">
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