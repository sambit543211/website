
import React, {useState} from 'react' ;
import Navbar from '../components/NavbarB';
import Sidebar from '../components/SidebarB';
import Suchi from '../components/Suchi';
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';

const SuchiPage = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <ScrollToTop/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Suchi/>
            <Footer />


        </>
    );
};

export default SuchiPage;
