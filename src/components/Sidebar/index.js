import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
         <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>ଆମ ବିଷୟରେ</SidebarLink>
                    <SidebarLink to='discover' onClick={toggle}>ସଂଗ୍ରହ</SidebarLink>
                    <SidebarLink to='services' onClick={toggle}>କିଛି ଲେଖା</SidebarLink>
                    <SidebarLink to='signup' onClick={toggle}>ଯୋଗାଯୋଗ</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/suchi'>ସୂଚୀ</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>

    );
};

export default Sidebar;
