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

export const WellcomeText = styled.h1`
  font-size: 24px;
  line-height: 30px;
`;

export const Logo = styled.img`
  width: 50px;
  height: auto;
  filter: drop-shadow(0 0 24px #006fff);
`;

export const Alarm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Lable = styled.p`
  font-size: 11px;
  line-height: 14px;
  color: var(--Text-20);
`;

export const AlarmList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const NoAlarm = styled.h1`
  font-size: 20px;
  line-height: 24px;
  color: var(--Text-20);
  text-align: center;
  padding: 24px 0;
`;

export const SleepLogBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SleepLog = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 14px;
  background-color: var(--Gray-80);
  padding: 16px;
  gap: 16px;
`;

export const LogTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 16px;
`;

export const Text = styled.h3`
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
`;

export const Logo_S = styled.img`
  width: 30px;
  height: auto;
  filter: drop-shadow(0 0 8px #006fff);
`;

export const LogButton = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--Gray-70);

  padding: 12px;
  border-radius: 8px;

  font-size: 15px;
  line-height: 22px;
  font-weight: 400;
`;
