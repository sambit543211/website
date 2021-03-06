import React from 'react';
import { FaFacebook, FaInstagram,  FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FooterContainer,FooterWrap, FooterLinksContainer, FooterLinksWrapper, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements';
import { animateScroll as scroll } from 'react-scroll';
const Footer = () => {
    const toggleHome=()=>{
        scroll.scrollToTop();
    };
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        {/* <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to ="/signin">How it works</FooterLink>
                                <FooterLink to ="/signin">Testimonials</FooterLink>
                                <FooterLink to ="/signin">Careers</FooterLink>
                                <FooterLink to ="/signin">Terms of Service</FooterLink> 
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                                <FooterLink to ="/signin">How it works</FooterLink>
                                <FooterLink to ="/signin">Care</FooterLink>
                                <FooterLink to ="/signin">About Us</FooterLink>
                                <FooterLink to ="/signin">Abogug s</FooterLink> 
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to ="/signin">Contact</FooterLink>
                                <FooterLink to ="/signin">Support</FooterLink>
                                <FooterLink to ="/signin">Destinations</FooterLink>
                                <FooterLink to ="/signin">Abogug s</FooterLink> 
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink to ="/signin">Facebook</FooterLink>
                                <FooterLink to ="/signin">Instagram</FooterLink>
                                <FooterLink to ="/signin">Twitter</FooterLink>
                                <FooterLink to ="/signin">Abogug s</FooterLink> 
                        </FooterLinkItems> */}
                    </FooterLinksWrapper>
                    
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/team" onClick={toggleHome}>
                         ??????????????? 
                        </SocialLogo>
                        <WebsiteRights>??????????????? ???????????? ?? ????????????, ??????????????? ?????????????????? ???????????????????????? </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://www.facebook.com/%E0%AC%AE%E0%AC%BE%E0%AC%9F%E0%AC%BF%E0%AC%B0-%E0%AC%B8%E0%AD%8D%E0%AD%B1%E0%AC%B0-110450721511349" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.instagram.com/matiraswaraodia/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            {/* <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink> */}
                            <SocialIconLink href="https://twitter.com/MatiraSwara?t=33XiYiVxQYnFonATJzn1bg&s=09" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.linkedin.com/in/c-s-sambit-10212433/" target="_blank" aria-label="LinkedIn">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
