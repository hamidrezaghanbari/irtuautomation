import styled from "styled-components"
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAt, faEnvelope, faFax, faPhoneAlt, faXRay } from "@fortawesome/free-solid-svg-icons"
import ReactTooltip from "react-tooltip"

const Aside = () => (
    <AsideBar>
        <div>
            <LogoContainer>
                <Image src="/images/logo.png" layout="fill" alt="irtuautomation" />
            </LogoContainer>

            <SocialContainer>
                <li>
                    <Link href="/">
                        <a>
                            <ReactTooltip place="right" type="info" effect="solid" />
                            <FontAwesomeIcon data-tip="Tel: +603 77 81 55 59" icon={faPhoneAlt} />
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>
                            <ReactTooltip place="right" type="info" effect="solid" />
                            <FontAwesomeIcon data-tip="https://www.pro-e.net" icon={faEnvelope} />
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>
                            <ReactTooltip place="right" type="info" effect="solid" />
                            <FontAwesomeIcon data-tip="FAX : +603 77 84 85 22" icon={faFax} />
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>

                            <ReactTooltip place="right" type="info" effect="solid" />
                            <FontAwesomeIcon data-tip="magesh(atsign)pro-e.net" icon={faAt} />
                        </a>
                    </Link>
                </li>
            </SocialContainer>

        </div>
    </AsideBar>
)

const AsideBar = styled.aside`
    position: sticky;
    top: 0;
    left: 0;
    height: 100vh;
    width: calc(3vw + 3vh);

    & > div {
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        background-color: var(--primary-color);
    }
`

const LogoContainer = styled.div`

    & > div {
        width: calc(3vw + 3vh);
        height: calc(3vw + 3vh);
    }
    & > div > img {
        object-fit: cover;
    }
`

const SocialContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    & > li {
        width: 100%;
        height: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    & > li:not(:last-child) {
        margin-bottom: calc(2rem + 0.666vw);

    }

    & > li:hover {
        background-color: var(--secondary-color);
        cursor: pointer;
    }

    & > li > a > svg {
        font-size: calc(1rem + 0.666vw);
        color: white;
        transition: color 0.35s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    } 
    & > li > a > svg:hover {
        color: white;
    }
`

export default Aside
