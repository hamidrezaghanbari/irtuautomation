import Image from 'next/image'
import styled from 'styled-components'


export default function HomePage() {
  return (
    <MainPage>
      <InnerPage>

        <TextContainer className="text-container">
          <h1>About us</h1>
          <p>
            iRTUAutomation Supply full SCADA Solutions for Power , Water , Wastewater , Oil and Gas Industries.

            We Designed and Developed our RTU solutions based on Raspberry PI Hardware and pbsControl Software Platforms.

            Our Design Team Has more than 20 Years experience on SCADA Systems and knows exactly all requirements of SCADA .

            iRTU2020 Platform is ready solution for modern SCADA systems and optimized for Mobile Networking and IOT

            iRTU2020 is Intelligent RTU and Simple Programmable Logic Controller in one module powered by pbsSoftLogic Runtime Kernel .
          </p>
        </TextContainer>

        <ImageHolder className="image-container">
          <Image src="/images/hero.jpg" width={650} height={500} alt="hero of page" />
        </ImageHolder>
      </InnerPage>

      <ProductsHolder>
        <Product>
          <Image src="/images/iRTU2020CG.jpg" width={100} height={100} alt="iRTU2020" />
          <h1>iRTU2020CG</h1>
          <p>Intelligent RTU with 1.5 Ghz ARM v8 64 bit CPU,1GB RAM, 3xRS232 ,1xRS485,1xEthernet,3G Modem  ,1xCAN , 4xDI,2xDO ports with 2xTemperature and Humidity Sensors .</p>
        </Product>
        <Product>
          <Image src="/images/iRTU2020B.jpg" width={100} height={100} alt="iRTU2020" />
          <h1>iRTU2020</h1>
          <p>Intelligent RTU with 1.5 Ghz ARM v8 64 bit CPU , 1 GB RAM , 1xRS232 , 1xEthernet , 1xCAN , 2xDI,2xDO ports </p>
        </Product>
        <Product>
          <Image src="/images/iRTU2020IO.jpg" width={100} height={100} alt="iRTU2020" />
          <h1>iRTU-IO</h1>
          <p>CAN/RS485 IO Modules with pbsCAN Protocol and Modbus RTU :16 DI , 16 DO ,8 AI </p>
        </Product>
        <Product>
          <Image src="/images/psle.jpg" width={100} height={100} alt="iRTU2020" />
          <h1>pbsSoftLogic</h1>
          <p>Open Software Platform for RTU programming and configuration with Modbus , DNP3 , IEC101 , IEC104 ,IEC61850, OPC UA Server, SQLite , GSP , MQTT , pbsCAN and CANOpen Drivers . </p>
        </Product>
      </ProductsHolder>


      
    </MainPage>
  )
}

const MainPage = styled.div`
  width: 100%;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const InnerPage = styled.div`
  min-height: 80vh;
  width: 90%;
  margin-top: 5vh;
  background-color: white;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: 850px) {
    flex-direction: column;
  }
`

const ImageHolder = styled.div`
  /* background-color: red; */
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;

  @media (max-width: 850px) {
    width: 100%;
    margin: 20px 4px;
  }
`

const TextContainer = styled.div`
  /* background-color: blue; */
  max-width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 40px;

  & > h1 {
    font-size: 25px;
  }

  & > p {
    font-size: 21px;
    line-height: 2;
  }

  @media (max-width: 850px) {
    max-width: 100% !important;
    padding: 5px;

    & > h1 {
      font-size: 20px;
    }

    & > p {
      font-size: 18px;
      line-height: 1.7;
    }
  }
`

const ProductsHolder = styled.div`
  /* height: 30vh; */
  width: 90%;
  margin: 3vh 0;
  background-color: white;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

const Product = styled.div`
  min-width: 200px;
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  padding: 40px 10px;
  border-radius: 5px;

  & > h1 {
    font-size: 22px;
    padding: 10px 0;
  }

  & > p {
    font-size: 20px;
  }

  & img {
    border-radius: 50%;
  }
  @media (max-width: 850px) {
    & > p {
      font-size: 18px;
      line-height: 1.7;
    }
  }
`

