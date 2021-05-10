import '../styles/globals.css'
import '../styles/header.responsive.css'

import { GlobalStyles } from './../lib/theme/global-styles'
import Head from 'next/head'
import styled from "styled-components";
import Aside from "../components/aside";
import Header from "../components/header";

function App({ Component, pageProps }) {

  return (

    <>
      {/* // * theme provider is for styledcomponents for theme of the app */}

      {/* // * head is for title and something else meta data */}
      <Head>
        <title>irtu automation</title>
        {/* <link rel="shortcut icon" href="/logo.png" /> */}
        <meta name="description" content="irtu automation project" />
      </Head>


      {/* * global style */}
      <GlobalStyles />


      <Body>
        <Aside />

        <Main>
          <Header />


          <Component {...pageProps} />

          <Footer>
            <p>©2021 - iRTUAutomation  All right reserved    </p>
          </Footer>
        </Main>
      </Body>

    </>
  )
}

const Main = styled.main`
  /* flex-grow: 1; */
  /* ** this is sinunim of flex-grow: 1 */
  flex: 1;
`
const Body = styled.div`
  display: flex;
`
const Footer = styled.div`
  background-color: #010101;
  height: 6vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

   p {
     color: white;
     font-size: 20px;
   }
   @media (max-width: 850px) {
      & > p {
        font-size: 16.5px;
      }
    }
`

export default App