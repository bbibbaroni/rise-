import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px 0;
`;

export const Button = styled.button`
  all: unset;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  gap: 8px;
  padding: 16px 24px;
  border-radius: 16px;
  background-color: var(--Blue-10);

  font-family: wanted-sans;
  font-size: 15px;
  line-height: 22px;
  font-weight: 400;
`;

export const Icon = styled.span`
  font-size: 20px;
  line-height: 100%;
  font-weight: 430;
  font-family: "Material Symbols Rounded";
`;
