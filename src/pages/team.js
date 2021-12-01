import React, {useState} from 'react' ;
import Team from '../components/Team';
import Navbar from '../components/NavbarB';
import Sidebar from '../components/SidebarB';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';


const TeamPage = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <ScrollToTop/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Team/>
            <Footer />
        </>
    );
};

export default TeamPage;
