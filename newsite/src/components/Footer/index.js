import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FooterContainer, SocialIcon, SocialIcons, SocialIconLink, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from "./FooterElements"

const Footer = () => {
    return (
        <FooterContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        <SocialIcon>
                            STRITAGO
                        </SocialIcon>
                    </SocialLogo>
                    <WebsiteRights>
                        STRITAGO © {new Date().getFullYear()}
                    </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="//www.stritago.de/" target="_blank" aria-label="Facebook" rel="noopener noreferrer">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="//www.stritago.de/" target="_blank" aria-label="Instagram" rel="noopener noreferrer">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="//www.stritago.de/" target="_blank" aria-label="Youtube" rel="noopener noreferrer">
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href="//www.stritago.de/" target="_blank" aria-label="Twitter" rel="noopener noreferrer">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href="//www.stritago.de/" target="_blank" aria-label="LinkedIn" rel="noopener noreferrer">
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer