import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  gap: 12px;
`;

export const ScrollArea = styled.div`
  position: relative;
  width: 70 px;
  height: 54px;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ScrollWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TimeItem = styled.h1`
  font-size: 54px;
  height: 54px;
  line-height: 54px;
  scroll-snap-align: center;
`;

const Times = styled(TimeItem)``;

export const Hour = Times;
export const Minute = Times;

export const Colon = styled(Times)`
  scroll-snap-align: none;
`;

export const Logo = styled.img`
  width: 30px;
  height: auto;
  filter: drop-shadow(0 0 8px #006fff);
`;
