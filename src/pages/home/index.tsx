import * as _ from "./style";
import Logo from "../../assets/logo.svg";
import Button from "../../components/button";
import Alarm from "../../components/Alarm/index";
import { useAlarm } from "../../contexts/AlarmContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { alarms } = useAlarm();
  const navigate = useNavigate();

  return (
    <_.Container>
      <_.WelcomeBox>
        <_.WellcomeText>
          어서오세요! 👋 <br />
          기상 도우미 rise+ 입니다.
        </_.WellcomeText>
        <_.Logo src={Logo} />
      </_.WelcomeBox>
      <_.Alarm>
        <_.Lable>알람</_.Lable>
        <_.AlarmList>
          {alarms.length === 0 ? (
            <_.NoAlarm>No Alarms</_.NoAlarm>
          ) : (
            alarms.map((alarm) => (
              <Alarm
                key={alarm.id}
                time={alarm.time}
                isActive={alarm.isActive}
              />
            ))
          )}
        </_.AlarmList>
        <Button Text="알람추가" Icon="add" Link="set-alarm" />
      </_.Alarm>
      <_.SleepLogBox>
        <_.Lable>수면일지</_.Lable>
        <_.SleepLog>
          <_.LogTitle>
            <_.Logo_S src={Logo} />
            <_.Text>
              내일의 나를 위한! <br />
              수면일지 작성하기
            </_.Text>
          </_.LogTitle>
          <_.LogButton onClick={() => navigate("/sleep-log")}>
            수면일지 작성하러 가기
          </_.LogButton>
        </_.SleepLog>
      </_.SleepLogBox>
    </_.Container>
  );
};

export default Home;
