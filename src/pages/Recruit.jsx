import styled from "styled-components";
import { card, notice, recruit } from "../components/recruit/recruit";
import {
  FContainer,
  FLink,
  FLinkContainer,
  FList,
  FLogo,
  Footer,
  Fsns,
} from "./service";
import { useNavigate } from "react-router-dom";

const Recruit = () => {
  let navigate = useNavigate();

  return (
    <>
      <Container>
        <TitleWrap>
          <div>
            <Title>채용공고</Title>
            <Explain>
              놀이가 작품이 되고, 상상이 현실이 되는 곳에서 함께 성장하세요!
            </Explain>
          </div>

          <GoMain
            onClick={() =>
              window.open(
                "https://recruit.nhn.com/ent/recruitings?type=company"
              )
            }
          >
            채용 사이트 바로가기
          </GoMain>
        </TitleWrap>

        <Cards>
          {card.map((value) => {
            return (
              <Card bg={value.id}>
                <Category>{value.category}</Category>
                <Content id={"card" + value.id} bg={value.id}>
                  {value.content}
                </Content>
                <Detail>{value.detail}</Detail>
              </Card>
            );
          })}
        </Cards>

        <NoticeNRecruit>
          <NRWrap>
            <NRTitle>공지사항</NRTitle>
            <Table>
              {notice.map((value) => {
                return (
                  <Tr
                    onClick={() => navigate(`/recruit/notice?id=${value.id}`)}
                  >
                    <Td id="under">{value.title}</Td>
                    <Td id="date">{value.date}</Td>
                  </Tr>
                );
              })}
            </Table>
          </NRWrap>

          <NRWrap>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <NRTitle>채용공고</NRTitle>
              <More
                onClick={() =>
                  window.open(
                    "https://recruit.nhn.com/ent/recruitings?type=company"
                  )
                }
              >
                채용공고 더 보기 +
              </More>
            </div>

            <Table>
              {recruit.map((value) => {
                return (
                  <Tr onClick={() => window.open(value.url)}>
                    <Td id="under">{value.title}</Td>
                    <Td id="date">{value.date}</Td>
                  </Tr>
                );
              })}
            </Table>
          </NRWrap>
        </NoticeNRecruit>
      </Container>

      <Footer>
        <FContainer>
          <FLogo>
            <img src="/img/logo.png" alt="footer 로고" width="100%" />
          </FLogo>
          <FLinkContainer>
            <FList>
              <FLink
                onClick={() => {
                  window.open("/privacy", "", "width=800 height=800");
                }}
              >
                개인정보처리방침
              </FLink>
            </FList>
            <FList id="sepa">|</FList>
            <FList>
              <FLink
                onClick={() => {
                  window.open("/mails", "", "width=500,height=500");
                }}
              >
                대표메일
              </FLink>
            </FList>
          </FLinkContainer>
        </FContainer>

        <FContainer>
          <Fsns
            bg="1"
            href="https://www.instagram.com/accounts/login/?next=%2Finside_nhn%2F&source=omni_redirect"
            target="_blank"
          ></Fsns>
          <Fsns
            bg="2"
            href="https://twitter.com/nhn_ent"
            target="_blank"
          ></Fsns>
          <Fsns
            bg="3"
            href="https://www.facebook.com/NHNCloud/"
            target="_blank"
          ></Fsns>
        </FContainer>
      </Footer>
    </>
  );
};

export default Recruit;

const Container = styled.div`
  background-color: #e72f2c;
  padding: 0 16%;
  @media all and (max-width: 960px) {
    padding: 0 10%;
  }
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 80px 0 30px;
  align-items: flex-end;
  @media all and (max-width: 960px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
const Title = styled.span`
  color: #fff;
  font-size: 56px;
  font-weight: 500;
  letter-spacing: 1.8px;
`;
const Explain = styled.span`
  display: block;
  color: #fff;
  letter-spacing: 1.8px;
  padding-top: 10px;
`;

const GoMain = styled.button`
  padding: 0;
  background: none;
  border: 1px solid #fff;
  padding: 5px 30px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background: #fff;
    color: #000;
    font-weight: 600;
  }
  @media all and (max-width: 960px) {
    margin-top: 20px;
  }
`;

const Cards = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
  padding-top: 50px;
  display: flex;
  justify-content: space-between;
  width: 90%;
  height: 30rem;
  @media all and (max-width: 1315px) {
    width: 100%;
    padding-top: 0px;
    height: fit-content;
    margin: 60px 0;
  }
  @media all and (max-width: 686px) {
    flex-direction: column;
    align-items: center;
    height: fit-content;
    margin-top: 50px;
  }
`;

const Card = styled.li`
  width: 30%;
  background: url("/img/card${(props) => props.bg}.png") no-repeat center center;
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2.2rem;
  @media all and (max-width: 1315px) {
    padding: 0 1.5rem;
    height: fit-content;
    width: 30%;
    height: 300px;
  }
  @media all and (max-width: 686px) {
    width: 300px;
    height: 360px;
    margin-bottom: 20px;
    padding: 0 2.5rem;
  }
`;

const Category = styled.span`
  padding-bottom: 20px;
  display: block;
  font-weight: 500;
  @media all and (max-width: 960px) {
    font-size: 13px;
    padding-bottom: 10px;
  }
  @media all and (max-width: 686px) {
    padding-bottom: 20px;
  }
`;

const Content = styled.span`
  display: block;
  font-size: 26px;
  font-weight: 600;
  background: url("/img/cardbg${(props) => props.bg}.png") no-repeat right
    center;
  background-size: 11% auto;
  &#card2 {
    background-size: 17% auto;
  }
  &#card3 {
    background-size: 18% auto;
  }
  @media all and (max-width: 1315px) {
    font-size: 20px;
  }
  @media all and (max-width: 960px) {
    font-size: 18px;
  }
`;
const Detail = styled.span`
  padding-top: 35px;
  display: block;
  color: #7c7c7c;
  @media all and (max-width: 1315px) {
    padding-top: 20px;
  }
  @media all and (max-width: 960px) {
    font-size: 14px;
  }
  @media all and (max-width: 686px) {
    padding-top: 40px;
  }
`;

const NoticeNRecruit = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 80px 0;
  width: 100%;
  margin: 0 auto;
  @media all and (max-width: 960px) {
    padding-top: 0;
  }
  @media all and (max-width: 686px) {
    display: flex;
    flex-direction: column;
    justify-content: start-end;
  }
`;

const NRWrap = styled.div`
  width: 45%;
  @media all and (max-width: 686px) {
    width: 100%;
    margin-bottom: 15px;
  }
`;
const NRTitle = styled.span`
  color: #fff;
`;

const More = styled.span`
  color: #fff;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Table = styled.table`
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  margin-top: 15px;
  border-top: 1px solid #fff;
`;

const Tr = styled.tr`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 15px 0;
  color: #fff;
  cursor: pointer;
  &:hover {
    #under {
      text-decoration: underline;
    }
  }
  @media all and (max-width: 1315px) {
    font-size: 15px;
  }
`;
const Td = styled.td`
  &#under {
    width: 80%;
  }
  &#date {
    font-size: 13px;
    font-weight: 300;
  }
`;
