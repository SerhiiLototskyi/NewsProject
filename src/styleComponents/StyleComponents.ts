import styled from "styled-components";

export const HeaderBlock = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #FCFCFC;
  width: 100%;
  height: 60px;
  box-shadow: 0px 2px 10px rgba(109, 109, 109, 0.25), inset 0px 1px 0px rgba(255, 255, 255, 0.3);
`;

export const AppWrapper = styled.div`
  background-color: #F9F9FA;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: relative;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
`;
export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3% ;
`;

export const LinePosition = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export const SignIn = styled.div`
  margin-bottom: 40px;
  margin-right: 10px;
  color: #1976d2;
  font-size: 30px;
`;

export const HeaderButton = styled.div`
  border-radius: 100px;
  width: 113px;
  height: 36px;
`;

export const HeaderButtons = styled.div`
 display: flex;
  width: 250px;
  justify-content: space-around;
  align-items: center;
`;

export const SignInFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #FFFFFF;
  width: 400px;
  height: 350px;
  box-shadow: 0px 2px 10px rgba(109, 109, 109, 0.25), inset 0px 1px 0px rgba(255, 255, 255, 0.3);
`;
export const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 300px;
`;
export const NewsContainer = styled.div`
  display: flex;
  align-items: self-start;
  justify-content: space-around;
  flex-wrap: wrap;
`;
export const NewsPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;


