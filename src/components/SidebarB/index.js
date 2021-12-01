import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
         <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                {/* <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}></SidebarLink>
                    <SidebarLink to='discover' onClick={toggle}></SidebarLink>
                    <SidebarLink to='services' onClick={toggle}></SidebarLink>
                    <SidebarLink to='signup' onClick={toggle}></SidebarLink>
                </SidebarMenu> */}
                <SideBtnWrap>
                    <SidebarRoute to='/signin'>ସୂଚୀ</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>

    );
};

export default Sidebar;
