import React, {useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';


const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);
    const changeNav = ()=> {
        if(window.scrollY>= 80){
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);
    
    const toggleHome=()=>{
        scroll.scrollToTop();
    };
    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome} style={{textDecoration:'none'}}>ମାଟିର ସ୍ୱର</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" 
                            style={{color: '#fff', 
                            textDecoration: 'none',
                           }} smooth={true} duration={500} spy={true} exact='true' offset = {-80} activeClass="active">ଆମ ବିଷୟରେ</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover" style={{color:'#fff'}} smooth={true} duration={500} spy={true} exact='true' offset = {-80}>ସଂଗ୍ରହ</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services" style={{color:'#fff'}} smooth={true} duration={500} spy={true} exact='true' offset = {-80}>କିଛି ଲେଖା</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup" style={{color:'#fff'}} smooth={true} duration={500} spy={true} exact='true' offset = {-80}>ଯୋଗାଯୋଗ</NavLinks>
                        </NavItem>  
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/suchi">ସୂଚୀ</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    );
};

export default Navbar;
 