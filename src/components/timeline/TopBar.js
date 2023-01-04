import styled from "styled-components";

export default function TopBar() {
  return (
    <Container>
      <Logo>
        <Linkr>linkr</Linkr>
      </Logo>
      <UserContainer>
        <DropdownList>
            <h1>⌄</h1>
        </DropdownList>
        <UserImage />
      </UserContainer>
    </Container>
  );
}

const Container = styled.div`
  height: 72px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #151515;
`;

const Logo = styled.div`
  margin-left: 23px;
  display: flex;
  align-items: center;
`;

const Linkr = styled.h1`
  font-family: "Passion One", cursive;
  font-size: 49px;
  color: #ffffff;
`;

const UserContainer = styled.div`
  width: 100px;
  margin-right: 23px;
  display: flex;
  align-items: center;
`;

const DropdownList = styled.div`
    margin-right: 10px;
    h1 {
        color: #ffffff;
        font-size: 43px;
    }
`;

const UserImage = styled.img`
    width: 53px;
    height: 53px;
    background-color: #000000;
    border-radius: 30px;
`;
