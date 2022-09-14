import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: 400px;
  margin: 40px 100px;
`;

export const Left = styled.div`
  flex: 1;
`;
export const Right = styled.div`
  flex: 1;
`;
export const Image = styled.img`
  display: flex;
  align-items: center;
  width: 300px;
  justify-content: center;
  margin-left: 140px;
  margin-top: 30px;
`;
export const Smart = styled.h4`
  color: #0080fd;
  display: flex;
  justify-content: left;
  font-size: 30px;

  :hover {
    border-bottom: 1px solid blue;
    margin-right: 280px;
    cursor: pointer;
  }
`;
export const Connecting = styled.h1`
  font-size: 60px;
`;
export const Business = styled.span`
  color: #0080fd;
  :hover {
    border-bottom: 1px solid blue;
    margin-right: 20px;
    cursor: pointer;
  }
`;
export const Rule = styled.h6`
  color: #000000;
  margin-right: 120px;
`;
export const Buttons = styled.div`
  display: flex;
`;
export const Get = styled.button`
  width: 100px;
  height: 40px;
  background: #0082f4;
  border-radius: 10px;
  transition: ease-out;
`;
export const Play = styled.button`
  width: 100px;
  height: 40px;
  background: #e9ebec;
  border-radius: 10px;
  transition: ease-out;
  margin-left: 30px;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icons {
    color: blue;
    border-radius: 70%;
    font-size: large;
  }
`;
