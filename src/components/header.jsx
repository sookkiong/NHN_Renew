import { useNavigate, useLocation } from "react-router";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { langOnState, sideOnState } from "../store/state";
import SideBox from "./main/SideInfo";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const tabList = [
    { id: "company", name: "소개" },
    { id: "service", name: "서비스" },
    { id: "article", name: "보도자료" },
    { id: "recruit", name: "채용" },
  ];

  let [langOn, setLangOn] = useRecoilState(langOnState);
  let [sideOn, setSideOn] = useRecoilState(sideOnState);
  let [menuOn, setMenuOn] = useState(false);

  return (
    <Wrapper id={location.pathname === "/" ? "home" : undefined}>
      <HeaderInner>
        {/* 데스크탑 */}
        <MainLogo src="/img/mainlogo.png" onClick={() => navigate("/")} />
        <MainNav>
          {tabList.map((tab) => (
            <MenuList
              id={location.pathname.includes(tab.id) ? "selected" : undefined}
              onClick={() => {
                navigate(`/${tab.id}`);
              }}
            >
              {tab.name}
            </MenuList>
          ))}
        </MainNav>
        <LangNNews>
          <SideButton
            id="lang"
            onClick={(e) => {
              e.stopPropagation();
              setLangOn(!langOn);
            }}
          >
            <img src="/img/lang.png" alt="lang icon" />
            {langOn ? (
              <LangBox>
                <LangList>한국어</LangList>
                <LangList>ENG</LangList>
              </LangBox>
            ) : null}
          </SideButton>

          <SideButton
            id="smallPage"
            onClick={(e) => {
              e.stopPropagation();
              setSideOn(!sideOn);
            }}
          >
            <img src="/img/side.png" alt="sidemenu" />
            {sideOn ? <SideBox /> : null}
          </SideButton>
        </LangNNews>

        {/* 태블릿: 960px */}
        <MainNavTab onClick={() => setMenuOn(true)} />
        <MainLogoTab onClick={() => navigate("/")} />
        <LangButtonTab
          id="lang"
          onClick={(e) => {
            e.stopPropagation();
            setLangOn(!langOn);
          }}
        >
          {langOn ? (
            <SelectLangTab>
              <SelectLangListTab>한국어</SelectLangListTab>
              <SelectLangListTab>English</SelectLangListTab>
            </SelectLangTab>
          ) : null}
        </LangButtonTab>

        {menuOn ? (
          <TabNMobMenu>
            <MenuTop>
              <TMTitle>메뉴</TMTitle>
              <CloseMenu onClick={() => setMenuOn(false)} />
            </MenuTop>

            <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
              {tabList.map((v) => {
                return (
                  <TMList
                    onClick={() => {
                      navigate(`/${v.id}`);
                      setMenuOn(false);
                    }}
                  >
                    {v.name}
                  </TMList>
                );
              })}
            </ul>
          </TabNMobMenu>
        ) : undefined}

        {/* 모바일: 550px */}
        <MainLogoMob onClick={() => navigate("/")} />
        <MainNavMob onClick={() => setMenuOn(true)} />
      </HeaderInner>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 60px 0;
  z-index: 1;
  background: #e72f2c;
  position: relative;
  top: 0;
  &#home {
    position: absolute;
    top: 0;
  }
  @media all and (max-width: 960px) {
    padding: 40px 0 30px;
    &#home {
      position: relative;
    }
  }
  @media all and (max-width: 550px) {
    padding: 30px 0;
    &#home {
      position: relative;
    }
  }
`;
const HeaderInner = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
`;

const MainLogo = styled.img`
  width: 110px;
  height: auto;
  cursor: pointer;
  @media all and (max-width: 960px) {
    display: none;
  }
`;
const MainNav = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 45%;
  justify-content: space-between;
  @media all and (max-width: 960px) {
    display: none;
  }
`;
const LangNNews = styled.div`
  display: flex;
  justify-content: space-between;
  width: 7%;
  @media all and (max-width: 960px) {
    display: none;
  }
`;

const SideButton = styled.button`
  border: none;
  background: none;
  &#lang {
    position: relative;
  }
  cursor: pointer;
`;
const LangBox = styled.ul`
  position: absolute;
  padding: 0;
  bottom: -85px;
  right: -25px;
  background-color: rgba(255, 255, 255, 0.5);
  @media all and (max-width: 960px) {
    display: none;
  }
`;

const LangList = styled.li`
  list-style: none;
  width: 80px;
  padding: 0px 5px;
  margin: 10px 0px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const MenuList = styled.li`
  width: 20%;
  text-align: center;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
  padding: 3px 0;
  &:hover {
    background: #fff;
    color: #e72f2c;
    border-radius: 14px;
    font-weight: 600;
  }
  &#selected {
    background: #fff;
    color: #e72f2c;
    border-radius: 14px;
    font-weight: 600;
  }
`;

// 반응형(태블릿:960px / 모바일:550px)
const MainNavTab = styled.div`
  display: none;
  width: 30px;
  height: 30px;
  background: url("/img/ham.png") no-repeat center center;
  background-size: contain;
  cursor: pointer;
  @media all and (max-width: 960px) {
    display: block;
  }
  @media all and (max-width: 550px) {
    display: none;
  }
`;
const MainLogoTab = styled.div`
  display: none;
  width: 108px;
  height: 30px;
  background: url("/img/mainlogo.png") no-repeat center center;
  background-size: contain;
  @media all and (max-width: 960px) {
    display: block;
  }
  @media all and (max-width: 550px) {
    display: none;
  }
`;
const LangTab = styled.div`
  display: none;
  @media all and (max-width: 960px) {
    display: block;
    width: 28px;
    height: 28px;
    padding-top: 5px;
  }
  @media all and (max-width: 550px) {
    display: none;
  }
`;
const LangButtonTab = styled.button`
  display: none;

  @media all and (max-width: 960px) {
    display: block;
    border: none;
    width: 28px;
    height: 28px;
    background: url("/img/lang.png") no-repeat right center;
    background-size: contain;
    cursor: pointer;
    margin-top: 3px;
    &#lang {
      position: relative;
    }
  }
  @media all and (max-width: 550px) {
    display: none;
  }
`;
const SelectLangTab = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: fit-content;
  position: absolute;
  top: 38px;
  left: -17px;
  background: rgba(255, 255, 255, 0.5);
`;
const SelectLangListTab = styled.li`
  padding: 5px 10px;
  cursor: pointer;
`;
const MainLogoMob = styled.div`
  display: none;
  @media all and (max-width: 960px) {
    display: none;
  }
  @media all and (max-width: 550px) {
    display: block;
    cursor: pointer;
    width: 110px;
    height: 50px;
    background: url("/img/mainlogo.png") no-repeat center center;
    background-size: contain;
  }
`;
const MainNavMob = styled.div`
  display: none;
  @media all and (max-width: 960px) {
    display: none;
  }
  @media all and (max-width: 550px) {
    display: block;
    width: 30px;
    height: 50px;
    background: url("/img/ham.png") no-repeat center center;
    background-size: contain;
    cursor: pointer;
  }
`;
const TabNMobMenu = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 50%;
  height: 100%;
  z-index: 100;
  background: #fff;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);

  @media all and (max-width: 550px) {
    width: 100%;
  }
`;
const MenuTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 2px solid #e72f2c;
  @media all and (max-width: 550px) {
    padding: 30px;
  }
`;
const TMTitle = styled.div`
  font-size: 24px;
  font-weight: 500;
`;
const CloseMenu = styled.button`
  border: none;
  width: 18px;
  height: 18px;
  background: url("/img/close_b.png") no-repeat center center;
  background-size: contain;
  cursor: pointer;
`;
const TMList = styled.li`
  padding: 20px;
  border-bottom: 1px solid #e72f2c;
  cursor: pointer;
  &:hover {
    background: #e72f2c;
    color: #fff;
  }
  @media all and (max-width: 550px) {
    padding: 30px;
  }
`;
