import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  box-sizing: border-box;
  height: 100%;
  border-radius: 14px;
  padding: 20px 20px 24px 20px;
  gap: 24px;
`;

export const SwichBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px 0;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 12px 0 8px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  line-height: 30px;
  gap: 8px;
  font-weight: 700;
`;

export const Logo = styled.img`
  width: 30px;
  height: auto;
  filter: drop-shadow(0 0 8px #006fff);
`;

export const Undo = styled.a`
  all: unset;
  font-family: "Material Symbols Rounded";
  font-size: 24px;
  line-height: 100%;
  font-weight: 300;
`;

export const LogList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 12px;
`;

export const Lable = styled.p`
  font-size: 11px;
  line-height: 14px;
  color: var(--Text-20);
`;

export const TimeSets = styled.div`
  display: flex;
  gap: 12px;
`;

const TimeSetting = styled.div<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  border-radius: 14px;
  gap: 12px;

  font-size: 24px;
  line-height: 30px;
  font-weight: 700;

  background-color: ${({ isActive }) => (isActive ? "var(--Blue-10)" : "none")};
  color: ${({ isActive }) =>
    isActive ? "var(--Text-OnPrimary)" : "var(--Text-20)"};

  transition: background-color 0.2s ease;
`;

export const GotoBed = TimeSetting;
export const WakeUp = TimeSetting;

export const TimeBox = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Icon = styled.span<{ isActive: boolean }>`
  font-family: "Material Symbols Rounded";
  font-size: 24px;
  font-weight: 300;
  font-variation-settings: "FILL" 1;
  color: ${({ isActive }) =>
    isActive ? "var(--Text-OnPrimary)" : "var(--Text-20)"};
  transition: color 0.2s ease;
`;
