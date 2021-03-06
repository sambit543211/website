import React, {useState} from 'react' ;
import Navbar from '../components/NavbarB';
import Sidebar from '../components/SidebarB';
import Content from '../components/Page6';
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';



const Writing3 = () => {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <ScrollToTop/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Content/>
            <Footer />
        </>
    );
};

export default Writing3;
