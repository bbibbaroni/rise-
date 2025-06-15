import styled from "@emotion/styled";

export const Container = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 24px 20px 20px;

  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 200px;
  height: auto;
  filter: drop-shadow(0 0 40px #006fff);
`;

export const Title = styled.img`
  height: 30px;
  width: auto;
`;

export const CallBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 24px;

  font-size: 24px;
  line-height: 30px;
  font-weight: 700;
`;

export const CallButton = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 100%;
  background-color: var(--Blue-10);
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 24px;
  line-height: 100%;

  margin-top: 12px;
  margin-bottom: 24px;

  font-family: "Material Symbols Rounded";
  font-variation-settings: "FILL" 1;
  filter: drop-shadow(0 0 8px #006fff);
`;
