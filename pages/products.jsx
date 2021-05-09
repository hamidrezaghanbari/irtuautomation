import Image from 'next/image'
import styled from 'styled-components'


export default function ProductsPage() {
  return (
    <MainPage>
      <InnerPage>

        <TextContainer>
          <h1>Products</h1>
          <ul>
              <li>iRTU2020 Intelligent RTU </li>
              <li>iRTUIO-16DI CAN/RS485 16 channel DI Remote IO Module </li>
              <li>iRTUIO-16DO CAN/RS485 16 channel DO Remote IO Module </li>
              <li>iRTUIO-8AI CAN/RS485 8 channel AI Remote IO Module </li>
              <li>pbsSoftLogic IEC1131-3 based IDE for iRTU2020 programming </li>
              <li>CSC2020 Industrial RS232 RS485 Convertor </li>
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
  justify-content: space-around;
`

const ImageHolder = styled.div`
  /* background-color: red; */
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TextContainer = styled.div`
  /* background-color: blue; */
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