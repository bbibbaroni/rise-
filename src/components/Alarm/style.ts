import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--Gray-80);

  border-radius: 14px;
  padding: 24px 20px;
`;

export const Logo = styled.img`
  width: 30px;
  height: auto;
  filter: drop-shadow(0 0 8px #006fff);
`;

export const Time = styled.h2`
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
`;

export const TimeBox = styled.div`
  display: flex;
  gap: 12px;
`;

export const AlarmOnOff = styled.span`
  font-family: "Material Symbols Rounded";
  font-size: 24px;
  line-height: 100%;
  font-variation-settings: "FILL" 1;
`;
