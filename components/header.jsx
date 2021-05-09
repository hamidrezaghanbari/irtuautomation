import styled from "styled-components"
import Link from 'next/link'
import { useState } from "react"
import { useRouter } from "next/router";

const Header = () => {
    const [clicked, setClicked] = useState(false)
    const [fade, setFade] = useState(false)

    const router = useRouter()

    return (
        <HeaderContainer id="header">
            <nav className={clicked ? 'clicked' : ''} id="header__main-nav">
                <div onClick={() => { setClicked(!clicked); setFade(!fade) }} className="header__main-nav--hamburger">
                    <div className="line line-1"></div>
                    <div className="line line-2"></div>
                    <div className="line line-3"></div>
                </div>

                <LinksContainer className="header__main-nav--links">
                    <li className={fade ? 'fade' : ''}><Link href="/">iRTUAutomation</Link></li>
                    <li className={fade ? 'fade' : '' + router.pathname == "/" ? "active" : ""}><Link href="/">About</Link></li>
                    <li className={fade ? 'fade' : '' + router.pathname == "/products" ? "active" : ""}><Link href="/products">Products</Link></li>
                    <li className={fade ? 'fade' : '' + router.pathname == "/solutions" ? "active" : ""}><Link href="/solutions">Solutions</Link></li>
                    <li className={fade ? 'fade' : '' + router.pathname == "/downloads" ? "active" : ""}><Link href="/downloads">Downloads</Link></li>
                    <li className={fade ? 'fade' : '' + router.pathname == "/contact" ? "active" : ""}><Link href="/contact">Contact us</Link></li>
                </LinksContainer>
            </nav>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
   
    background-color: var(--secondary-color);
    height: calc(3vw + 3vh);
    z-index: 2;
    

    & > nav {
        height: 100%;
    }

`

const LinksContainer = styled.ul`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    & > li:first-child {
        flex-grow: 1;
        padding-left: 35px;
    }

    & > li {
        padding-right: 3vw;

        & > a {
            color: white;
            position: relative;
            padding: 0.2rem 0.6rem;
            font-size: calc(1rem + 0.666vw);

            &:link::before ,
            &:visited::before, 
            &:link::after, &:visited::after {
                content: "";
                position: absolute;
                left: 0;
                width: 100%;
                height: 0.25rem;
                background-color: white;

                transform: scaleX(0);
                transition: transform 0.6s cubic-bezier(1, 0, 0, 1);
            }

            &:link::before,
            &:visited::before {
                top: 0;
                transform-origin: left;
            }

            &:link::after,
            &:visited::after {
                bottom: 0;
                transform-origin: right;
            }

            &:hover::before,
            &:active::before,
            &:hover::after,
            &:active::after {
                transform: scaleX(1);    
            }
        }

        &.active > a {
            &:link::before ,
            &:visited::before, 
            &:link::after, &:visited::after {
                content: "";
                position: absolute;
                left: 0;
                width: 100%;
                height: 0.25rem;
                background-color: white;
                transform: scaleX(1);   

                transition: transform 0.6s cubic-bezier(1, 0, 0, 1);
            }
        } 
    }

    
`

export default Header
