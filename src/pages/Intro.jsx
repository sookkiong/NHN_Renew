import { useState } from "react";
import styled from "styled-components";
import HistoryContent from "../components/History";
import { HistoryData } from "../components/company/menus";

const IntroPage = () => {
  let [hover, setHover] = useState("ai");

  const HoverID = (value) => {
    const id = value === hover ? "isHover" : undefined;
    return id;
  };

  return (
    <div style={{ overflowX: "hidden" }}>
      <Para>
        <Section1>
          <Section1Title>
            NHN은 게임, 결제, 엔터테인먼트, IT, 광고 등 IT 기반의 다양한
            사업분야에 진출, 성장해 나가고 있는 글로벌 IT 기업입니다.
          </Section1Title>
          <Section1Content>
            2013년 8월 1일, 대한민국 최대 인터넷 기업인 NHN(주)에서 분할해
            'NHN엔터테인먼트'라는 사명으로 출범했으며, 사명을 NHN으로 다시
            바꾸며 한국 IT 기업의 상진인 'NHN'의 가치를 계승해 글로벌 IT기술
            기업으로 재도약하고 있습니다. 또한 클라우드/커머스/콘텐츠/페이먼트
            4대 핵심사업을 주축으로 2030년까지 글로벌 테크 컴퍼니로의 성장
            비전을 선포했습니다.
          </Section1Content>
        </Section1>
      </Para>

      <Para id="slogan">
        <Section2BG>
          <img src="/img/bodybg.png" alt="슬로건 배경" width="100%" />
        </Section2BG>
        <Section2Wrapper>
          <Section2ExpTop>NHN이 제공하는 결제 서비스</Section2ExpTop>
          <Section2Image>
            <Section2Expbottom>PAYCO</Section2Expbottom>
          </Section2Image>

          <Section2Slogan>
            <span style={{ color: "#e72f2c", display: "block" }}>
              Toward Art, Science &amp; Tech
            </span>
            새로운 세상을 만들기 위해 도전합니다.
          </Section2Slogan>
        </Section2Wrapper>
      </Para>

      <Para id="history">
        <WidthBox>
          <Title>Corporate History</Title>

          <HistoryWrap>
            <HistoryContent
              id="left"
              year="2013"
              img="history1"
              month1="AUG"
              month2="OCT"
              sub1="NHN(주)에서 NHN엔터테인먼트(주)로 인적분할"
              sub2="웹툰 서비스 코미코(Comico) 출시"
            />
            <HistoryContent
              id="right"
              year="2014"
              img="history2"
              month1="FEB"
              month2="DEC"
              sub1="게임 개발 전문 자회사 설림(NHN 픽셀큐브(주))"
              sub2="NHN CLOUD 출시"
            />
            <HistoryContent
              id="left"
              year="2017"
              img="history3"
              month1="APR"
              month2="JUL"
              sub1="NHN페이코(주) 설립"
              sub2="디지털 전문 광고기업 (주)NHN ACE 설립"
            />
            <HistoryContent
              id="right"
              year="2019"
              img="history4"
              month1="FEB"
              month2="APR"
              sub1="2018 연간매출 1조원 돌파"
              sub2="NHN(주)로 사명변경"
            />
          </HistoryWrap>

          <HistoryWrapMob>
            {HistoryData.map((v) => {
              return (
                <div style={{ marginBottom: "40px" }}>
                  <div style={{ fontWeight: "500", fontSize: "18px" }}>
                    {v.year}
                  </div>
                  <HistoryImgMob bg={v.id}></HistoryImgMob>
                  <table>
                    <tr>
                      <th>{v.month1}</th>
                      <HistoryTdMob>{v.content1}</HistoryTdMob>
                    </tr>
                    <tr>
                      <th>{v.month2}</th>
                      <HistoryTdMob>{v.content2}</HistoryTdMob>
                    </tr>
                  </table>
                </div>
              );
            })}
          </HistoryWrapMob>
        </WidthBox>
      </Para>

      <Para id="ethics">
        <WidthBox>
          <Title>Corporate Ethics</Title>
          <EthicsContainer>
            <Ethics>
              <EthicList bg="1">
                <EthicTitle>Work & Life</EthicTitle>
                똑똑하게 일하고 충분한 휴식을 통해 성장하는 문화
              </EthicList>
              <EthicList bg="2">
                <EthicTitle>Purple Time</EthicTitle>
                개인의 라이프 스타일을 존중하는 자율 출퇴근 제도
              </EthicList>
              <EthicList bg="3">
                <EthicTitle>We Family</EthicTitle>
                매년 5월, 임직원 가족들과 함께하는 위패밀리 데이
              </EthicList>
              <EthicList bg="4">
                <EthicTitle>40+ club</EthicTitle>
                똑똑하게 일하고 충분한 휴식을 통해 함께 성장하는 문화
              </EthicList>
            </Ethics>

            <EthicImg />
          </EthicsContainer>
        </WidthBox>
      </Para>

      <Para id="info">
        <WidthBox id="infoWidth">
          <SmallTitle>
            NHN
            <br />
            회사정보
          </SmallTitle>

          <InfoTable>
            <TableTr>
              <TableTh>대표이사</TableTh>
              <TableTd>정우진</TableTd>
            </TableTr>
            <TableTr>
              <TableTh>회사위치</TableTh>
              <TableTd>
                13487 경기도 성남시 분당구 대왕판교로 645번길 16
              </TableTd>
            </TableTr>
            <TableTr>
              <TableTh>회사전화</TableTh>
              <TableTd>1544-6859(ARS)</TableTd>
            </TableTr>
            <TableTr>
              <TableTh>팩스번호</TableTh>
              <TableTd> 031-8038-3000</TableTd>
            </TableTr>
            <TableTr>
              <TableTh>사업자번호</TableTh>
              <TableTd>144-81-15549</TableTd>
            </TableTr>
          </InfoTable>
        </WidthBox>
      </Para>

      <Para id="download">
        <DownloadBox id="ci">
          <SmallTitle>
            CI
            <br />
            다운로드
          </SmallTitle>

          <DownloadUl>
            <DownList>
              <DownLink
                id={HoverID("ai")}
                onMouseOver={() => {
                  setHover("ai");
                }}
                href="/download/AI.zip"
              >
                AI 다운로드
              </DownLink>
            </DownList>
            <DownList>
              <DownLink
                id={HoverID("png")}
                onMouseOver={() => setHover("png")}
                href="/download/PNG.zip"
              >
                PNG 다운로드
              </DownLink>
            </DownList>
          </DownloadUl>
        </DownloadBox>

        <DownloadBox>
          <SmallTitle>
            회사소개서
            <br />
            다운로드
          </SmallTitle>

          <DownloadUl>
            <DownList>
              <DownLink
                id={HoverID("kor")}
                onMouseOver={() => setHover("kor")}
                href="/download/회사소개서_국문.pdf"
              >
                국문 다운로드
              </DownLink>
            </DownList>
            <DownList>
              <DownLink
                id={HoverID("eng")}
                onMouseOver={() => setHover("eng")}
                href="/download/회사소개서_영문.pdf"
              >
                영문 다운로드
              </DownLink>
            </DownList>
          </DownloadUl>
        </DownloadBox>
      </Para>
    </div>
  );
};

export default IntroPage;

export const IntroTop = styled.div`
  width: 100%;
  height: 33vw;
  background: url("/img/introbg.png") no-repeat center bottom;
  background-size: cover;
  @media all and (max-width: 960px) {
    height: 34vw;
  }
  @media all and (max-width: 550px) {
    height: 37vw;
    background: #e72f2c;
  }
`;
export const IntroInner = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media all and (max-width: 550px) {
    justify-content: flex-start;
    padding-top: 10px;
  }
`;

export const IntroSpan = styled.span`
  color: #fff;
  font-size: 62px;
  font-weight: 500;
  letter-spacing: 3px;
  &#explain {
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 1px;
  }
  @media all and (max-width: 960px) {
    font-size: 46px;
  }
  @media all and (max-width: 550px) {
    font-size: 30px;
    letter-spacing: 1px;
    &#explain {
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 1px;
    }
  }
`;

export const TabUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  color: #fff;
  text-align: center;
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
  @media all and (max-width: 550px) {
    margin-top: 10px;
  }
`;

export const TabList = styled.li`
  width: 120px;
  padding: 10px;
  font-size: 14px;
  cursor: pointer;
  color: #fff;
  &#nowOn {
    background: #fff;
    color: #e72f2c;
    font-weight: 600;
  }
  &:hover {
    text-decoration: underline;
    font-weight: 500;
  }
  @media all and (max-width: 550px) {
    padding: 5px;
  }
`;

export const GoTop = styled.button`
  width: 60px;
  height: 60px;
  background-color: #fff;
  color: #e72f2c;
  font-size: 26px;
  text-align: center;
  line-height: 50px;
  position: fixed;
  right: 0;
  bottom: 1px;
  border: 1px solid #e72f2c;
  z-index: 200;
  cursor: pointer;
  box-sizing: border-box;
`;

const Para = styled.div`
  z-index: 100;
  width: 100%;
  margin-top: 120px;
  padding-left: 10%;
  display: flex;
  justify-content: flex-start;
  &#slogan {
    margin-top: 280px;
    padding-left: 0;
    justify-content: flex-end;
    position: relative;
  }
  @media all and (max-width: 550px) {
    &#slogan {
      margin-top: 120px;
    }
  }
  &#history {
    padding: 0 10%;
  }

  &#ethics {
    padding: 0 23%;
    margin-top: 100px;
  }
  @media all and (max-width: 960px) {
    &#ethics {
      padding: 0 12%;
    }
  }
  &#info {
    padding: 0 12%;
    margin-top: 200px;
  }
  &#download {
    padding: 0 12%;
    margin-top: 200px;
    flex-direction: column;
  }
`;
const Section1 = styled.div`
  width: 38%;
  @media all and (max-width: 960px) {
    width: 70%;
  }
  @media all and (max-width: 550px) {
    width: 90%;
  }
`;
const Section1Title = styled.div`
  font-size: 32px;
  font-weight: 500;
  text-align: justify;
  @media all and (max-width: 960px) {
    font-size: 28px;
  }
  @media all and (max-width: 550px) {
    font-size: 24px;
  }
`;
const Section1Content = styled.div`
  font-size: 16px;
  line-height: 28px;
  color: #7c7c7c;
  text-align: justify;
  margin-top: 20px;
`;
const Section2BG = styled.div`
  position: absolute;
  top: -190px;
  left: 18%;
  width: 680px;
  @media all and (max-width: 960px) {
    left: 10%;
  }
  @media all and (max-width: 550px) {
    width: 300px;
    top: -100px;
  }
`;
const Section2Wrapper = styled.div`
  width: 60%;
  @media all and (max-width: 960px) {
    width: 75%;
  }
  @media all and (max-width: 550px) {
    width: 80%;
  }
`;
const Section2ExpTop = styled.span`
  display: block;
  margin-bottom: 10px;
  padding-right: 15px;
  color: #7c7c7c;
  width: 100%;
  text-align: right;
  z-index: 10;
`;
const Section2Image = styled.div`
  width: 100%;
  height: 48vh;
  background: url("/img/sect2img.jpg") no-repeat center center;
  background-size: cover;
  position: relative;
  @media all and (max-width: 550px) {
    height: 23vh;
  }
`;
const Section2Expbottom = styled.span`
  display: block;
  position: absolute;
  left: 0;
  bottom: -30px;
  color: #7c7c7c;
`;
const Section2Slogan = styled.div`
  font-size: 28px;
  font-weight: 500;
  width: 100%;
  text-align: right;
  margin-top: 60px;
  padding-right: 50px;
  @media all and (max-width: 550px) {
    font-size: 22px;
    padding-right: 30px;
  }
`;
const WidthBox = styled.div`
  width: 100%;
  &#infoWidth {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  &#footerWidth {
    display: flex;
  }
  @media all and (max-width: 960px) {
    width: 90%;
    margin: 0 auto;
  }
  @media all and (max-width: 550px) {
    width: 100%;
  }
`;

const Title = styled.span`
  color: #e72f2c;
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 1px;
  padding-bottom: 35px;
  display: block;
`;
const HistoryWrap = styled.div`
  display: block;
  @media all and (max-width: 960px) {
    display: none;
  }
`;
const HistoryWrapMob = styled.div`
  display: none;
  @media all and (max-width: 960px) {
    display: block;
  }
`;
const HistoryImgMob = styled.div`
  display: none;
  @media all and (max-width: 960px) {
    display: block;
    width: 100%;
    height: 300px;
    background: url("/img/history${(props) => props.bg}.jpg") no-repeat center
      center;
    background-size: cover;
    margin: 15px 0;
  }
  @media all and (max-width: 550px) {
    height: 200px;
  }
`;
const HistoryTdMob = styled.td`
  color: #7c7c7c;
  padding-left: 10px;
`;

const EthicTitle = styled.span`
  display: block;
  padding-bottom: 10px;
  color: #e72f2c;
  font-weight: 600;
`;

const EthicImg = styled.div`
  width: 40%;
  height: 30rem;
  background: url("/img/ethic.jpg") no-repeat;
  background-size: cover;
  background-position: 75% bottom;
  display: block;

  @media all and (max-width: 550px) {
    display: none;
  }
`;

const Ethics = styled.ul`
  width: 55%;
  height: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  @media all and (max-width: 550px) {
    width: 100%;
  }
`;
const EthicList = styled.li`
  width: 100%;
  background: url("/img/eth${(props) => props.bg}.png") no-repeat left center;
  background-size: 15% auto;
  margin-bottom: 20px;
  padding: 20px 0 20px 22%;
  box-sizing: border-box;
`;
const EthicsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const InfoTable = styled.table`
  width: 77%;
  border-top: 3px solid #e72f2c;
  border-collapse: collapse;
  @media all and (max-width: 960px) {
    width: 72%;
  }
`;

const TableTr = styled.tr`
  width: 100%;
  display: block;
  border-bottom: 1px solid #ccc;
  padding: 25px 0;
`;

const TableTh = styled.th`
  text-align: left;
  font-weight: 500;
  width: 20%;
  display: inline-block;
  @media all and (max-width: 960px) {
    width: 30%;
  }
`;
const TableTd = styled.td`
  text-align: left;
  font-weight: 400;
  width: 80%;
  display: inline-block;
  color: #7c7c7c;
  @media all and (max-width: 960px) {
    width: 70%;
  }
`;

const SmallTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

const DownloadBox = styled.div`
  display: flex;
  justify-content: space-between;
  &#ci {
    margin-bottom: 70px;
  }
`;

const DownloadUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  width: 77%;
  @media all and (max-width: 550px) {
    width: 73%;
    margin-left: 10px;
  }
`;

const DownList = styled.li`
  width: 260px;
  margin-right: 80px;
  @media all and (max-width: 960px) {
    margin-right: 30px;
  }
  @media all and (max-width: 550px) {
    width: 120px;
    height: 50px;
    margin-right: 30px;
  }
`;
const DownLink = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 50px;
  text-decoration: none;
  color: #000;
  border: 1px solid #ccc;
  font-size: 14px;
  &#isHover {
    background: #e72f2c;
    color: #fff;
    border: 1px solid #e72f2c;
  }
`;

export const Footer = styled.footer`
  padding: 40px 12%;
  margin-top: 200px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media all and (max-width: 960px) {
    margin-top: 100px;
  }
`;

export const FooterLeft = styled.div`
  display: flex;
`;
export const FooterRight = styled.div`
  display: flex;
`;
export const FLogo = styled.div`
  @media all and (max-width: 960px) {
    width: 50px;
  }
`;

export const FLinkContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  margin-left: 100px;
  align-items: center;
  @media all and (max-width: 960px) {
    margin-left: 30px;
  }
  @media all and (max-width: 550px) {
    display: none;
  }
`;

export const FList = styled.li`
  margin-right: 20px;
  color: #ccc;
  cursor: pointer;
  font-size: 13px;
  &#sepa {
    color: #ccc;
    font-size: 13px;
  }
`;
export const FLink = styled.a``;
export const Fsns = styled.a`
  display: block;
  width: 22px;
  height: 22px;
  margin-left: 50px;
  background: url("/img/fsns${(props) => props.bg}.png") no-repeat center center;
  background-size: contain;
  @media all and (max-width: 960px) {
    margin-left: 20px;
    width: 18px;
    height: 18px;
  }
`;
