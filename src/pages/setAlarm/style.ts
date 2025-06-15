import styled from "@emotion/styled";

export const Container = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 24px 20px 20px;
  gap: 24px;
`;

export const WelcomeBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 12px;
`;

export const SwichBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px 0;
`;

export const WellcomeText = styled.h1`
  font-size: 24px;
  line-height: 30px;
`;

export const Logo = styled.img`
  width: 50px;
  height: auto;
  filter: drop-shadow(0 0 24px #006fff);
`;
