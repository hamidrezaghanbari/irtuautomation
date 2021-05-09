import styled from 'styled-components'


export default function DownloadsPage() {
  return (
    <MainPage>
      <InnerPage>

        <TextContainer>
          <h1>Contact us</h1>
          <ul>
              <li>International Sales Office </li>
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

const TextContainer = styled.div`
  /* background-color: blue; */
  margin-left: 5%;
  margin-right: 5%;
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