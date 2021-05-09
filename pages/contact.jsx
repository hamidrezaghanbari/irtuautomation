import Image from 'next/image'
import styled from 'styled-components'


export default function ContactPage() {
  return (
    <MainPage>
      <InnerPage>

        <TextContainer>
          <h1>Contact us</h1>
          <ul>
              <li>International Sales Office </li>
              <li>PRO-E Automation Company</li>
              <li>NO 58,Jalan Masjid 3/69 ,Seksyen 3 </li>
              <li>4600 Petaling Jaya,Selangor</li>
              <li>Web Site : <a href="https://www.pro-e.net">www.pro-e.net</a></li>
              <li>Tel: +603 77 81 55 59</li>
              <li>FAX : +603 77 84 85 22</li>
              <li>Mr.Magesh Kumar Supp </li>
              <li>email : magesh(atsign)pro-e.net </li>
          </ul>
        </TextContainer>

        <ImageHolder>
          <Image src="/images/placeholder.jpg" width={200} height={500} alt="hero of page" />
        </ImageHolder>
      </InnerPage>

    </MainPage>
  )
}

const MainPage = styled.div`
  width: 100%;
  min-height: calc(97vh - 3vw);
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const InnerPage = styled.div`
  height: 80vh;
  width: 90%;
  margin-top: 5vh;
  background-color: white;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
`

const ImageHolder = styled.div`
  /* background-color: red; */
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15%;
`

const TextContainer = styled.div`
  /* background-color: blue; */
  margin-left: 5%;
  max-width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 70px;

  & > h1 {
    font-size: 25px;
  }

  & > ul > li {
    font-size: 21px;
    line-height: 2;
    padding: 5px 0;
  }
`