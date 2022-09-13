import styled from "styled-components";

export const WrapperInput = styled.div`
  height: 350px;
  background: rgba(232, 236, 255, 0.3);
  margin: 0 100px;
  padding-top: 50px;
`;
export const SignWords = styled.h3`
  color: #058aff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 35px;
`;
export const SignWords2 = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  color: #817e7e;
`;
export const InputsWords = styled.input`
  border: none;
  padding: 30px 60px;
  cursor: pointer;
  font-size: 25px;
  background: rgba(232, 236, 255, 0.3);
`;
export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(232, 236, 255, 0.3);
  > i {
    position: absolute;
    left: 15px;
    font-size: 37px;
    color: #969393;
    margin-right: 1%;
  }
  > button {
    position: absolute;
    right: 25px;
    height: 44px;
    width: 100px;
    margin-left: 2%;
    border-radius: 13%;
    background-color: #058aff;
    color: white;
    font-size: 18px;
    cursor: pointer;
  }
`;
