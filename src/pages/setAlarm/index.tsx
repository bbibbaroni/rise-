import * as _ from "./style";
import Logo from "../../assets/logo.svg";
import Switch from "../../components/switch";
import SetTime from "../../components/setTime";
import Button from "../../components/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAlarm } from "../../contexts/AlarmContext";

const SetAlarm: React.FC = () => {
  const [selectedTime, setSelectedTime] = useState("00:00");
  const navigate = useNavigate();
  const { addAlarm } = useAlarm();

  const voice = [
    { id: "clame", text: "차분한" },
    { id: "fun", text: "신나는" },
    { id: "option3", text: "ㅁㅁㅁㅁ" },
  ];

  const handleAddAlarm = () => {
    console.log("Adding alarm with time:", selectedTime); // 디버깅용 로그
    addAlarm(selectedTime);
    navigate("/");
  };

  return (
    <_.Container>
      <_.WelcomeBox>
        <_.WellcomeText>
          안녕하세요 정혁님 <br />
          알람 시간을 정해주세요!
        </_.WellcomeText>
        <_.Logo src={Logo} />
      </_.WelcomeBox>
      <_.SwichBox>
        <Switch options={voice} defaultSelected="clame" />
      </_.SwichBox>
      <SetTime onTimeChange={setSelectedTime} />
      <Button Text="추가하기" Icon="add" onClick={handleAddAlarm} Link="" />
    </_.Container>
  );
};

export default SetAlarm;
