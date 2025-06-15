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

export const Log = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--Gray-80);
  border-radius: 14px;
  padding: 12px;
  gap: 20px;
`;

export const LogHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  flex: 1;
`;

export const Bookmark = styled.span`
  font-family: "Material Symbols Rounded";
  font-size: 28px;
  font-weight: 300;
  color: var(--Blue-10);
  transition: all 0.2s ease-in-out;
`;

export const LogHeaderText = styled.h2`
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;

  display: flex;
  gap: 8px;
`;

export const Date = LogHeaderText;
export const SleepType = LogHeaderText;

export const Tags = styled.div`
  background-color: var(--Gray-70);
  width: fit-content;
  padding: 4px 6px;
  border-radius: 999px;
`;

export const EmptyMessage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666;
  font-size: 16px;
`;
