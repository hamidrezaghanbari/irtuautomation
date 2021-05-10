import styled from 'styled-components'


export default function DownloadsPage() {
  return (
    <MainPage>
      <InnerPage>

        <TextContainer>
          <h1>Downloads</h1>
          <ul>
              <li><a href="/api/download-pdf">iRTU2020 Datasheet </a></li>
              <li>iRTUIO Manual </li>
              <li>iRTU2020 Kernel installation and Update Manual </li>
              <li>pbsSoftLogic IDE , pbsSoftLogic Manual </li>
              <li>Modbus Master Configuration Training Video</li>
              <li>Modbus Slave Configuration Training Video</li>
              <li>DNP3 Master Configuration Training Video</li>
              <li>IEC104 Concepts Training Video</li>
              <li>Modbus Concepts Training Video </li>
          </ul>
        </TextContainer>

        <TextContainer>
          <ul>
              <li>DNP3 Slave Configuration Training Video</li>
              <li>IEC101/104 Master Configuration Training Video</li>
              <li>IEC101/104 Slave Configuration Training Video</li>
              <li>OPC UA Server Configuration Training Video</li>
              <li>IEC61850 Solution</li>
              <li>OPC UA Solution </li>
              <li>GSP Client Configuration Training Video</li>
              <li>DNP3 Concepts Training Video</li>
              <li>MQTT Configuration Training Video</li>
          </ul>
        </TextContainer>

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

  & a {
    text-decoration: underline !important;
  }
`

const InnerPage = styled.div`
  min-height: 80vh;
  width: 90%;
  margin-top: 3vh;
  background-color: white;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;

  align-items: center;
  
  @media (max-width: 850px) {
    flex-direction: column;
  }
`

const TextContainer = styled.div`
  /* background-color: blue; */
  margin-left: 5%;
  margin-right: 5%;
  max-width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 40px;

  & > h1 {
    font-size: 25px;
  }

  & > ul > li {
    font-size: 21px;
    line-height: 2;
    padding: 5px 0;
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