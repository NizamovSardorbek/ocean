import styled from "styled-components";

export const Contain = styled.div`
  display: flex;
  height: 430px;
  margin: 40px 100px;
`;
export const Left = styled.div`
  flex: 1;
  position: relative;
`;

export const Images1 = styled.img`
  width: 400px;
  height: 300px;
  position: absolute;
  z-index: 1;
  bottom: 50px;
  left: 3px;
`;
export const Images2 = styled.img`
  width: 400px;
  height: 300px;
  position: absolute;
  bottom: 20px;
  z-index: 0;
  top: 20px;
  left: 60px;
`;

export const Right = styled.div`
  flex: 1;
  line-height: 35px;
`;
export const Community = styled.h3`
  color: #0082f4;
  :hover {
    border-bottom: 1px solid blue;
    margin-right: 430px;
    cursor: pointer;
  }
`;
export const Promited = styled.h1`
  font-size: 38px;
`;

export const Lorems = styled.h6`
  font-size: 16px;
  color: #837a7a;
  margin-bottom: 50px;
  line-height: 21px;
`;
export const Buttons = styled.button`
  color: white;
  width: 143px;
  height: 43px;
  background: #0082f4;
  border-radius: 6px;
  transition: ease-in-out;
  cursor: pointer;
`;
