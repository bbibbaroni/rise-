import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const TimeScrollContainer = styled.div`
  height: 100px;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TimeItem = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: center;
  font-size: 24px;
  color: #666;
`;

export const Hour = styled.div`
  font-size: 24px;
  font-weight: bold;
  min-width: 40px;
  text-align: center;
`;

export const Miminute = styled.div`
  font-size: 24px;
  font-weight: bold;
  min-width: 40px;
  text-align: center;
`;

export const Colon = styled.div`
  font-size: 24px;
  font-weight: bold;
`;
