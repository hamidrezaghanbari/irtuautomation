import Image from 'next/image'
import styled from 'styled-components'


export default function SolutionsPage() {
  return (
    <MainPage>
      <InnerPage>

        <TextContainer>
          <h1>Solutions</h1>
          <ul>
              <li>DNP3 Solution</li>
              <li>IEC101/104 Solution</li>
              <li>MQTT Solution</li>
              <li>GSP Solution</li>
              <li>IEC61850 Solution</li>
              <li>OPC UA Solution </li>
              <li>Communication Gateway Solutions</li>
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
    padding: 15px 0;
  }
`