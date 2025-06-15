import * as _ from "./style";
import Logo from "../../assets/logo.svg";
import { useState } from "react";
import Switch from "../../components/switch";
import SetTime from "../../components/setTime";
import Button from "../../components/button";
import { useNavigate } from "react-router-dom";

const AddSleep = () => {
  const navigate = useNavigate();
  const [activeTime, setActiveTime] = useState<"bed" | "wake">("bed");
  const [bedTime, setBedTime] = useState("00:00");
  const [wakeTime, setWakeTime] = useState("00:00");
  const [selectedDate, setSelectedDate] = useState("월");
  const [selectedSleepType, setSelectedSleepType] = useState("낮잠");

  const date = [
    { id: "월", text: "월" },
    { id: "화", text: "화" },
    { id: "수", text: "수" },
    { id: "목", text: "목" },
    { id: "금", text: "금" },
    { id: "토", text: "토" },
    { id: "일", text: "일" },
  ];

  const sleepType = [
    { id: "낮잠", text: "낮잠" },
    { id: "수면", text: "수면" },
  ];

  const handleTimeChange = (time: string) => {
    if (activeTime === "bed") {
      setBedTime(time);
    } else {
      setWakeTime(time);
    }
  };

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
  };

  const handleSleepTypeChange = (type: string) => {
    setSelectedSleepType(type);
  };

  const handleSubmit = () => {
    const sleepData = {
      date: selectedDate,
      sleepType: selectedSleepType,
      bedTime,
      wakeTime,
      duration: `${bedTime} ~ ${wakeTime}`,
    };

    navigate("/sleep-log", { state: sleepData });
  };

  return (
    <_.Container>
      <_.Header>
        <_.Title>
          <_.Undo href="/sleep-log">undo</_.Undo>
          수면 기록
        </_.Title>
        <_.Logo src={Logo} />
      </_.Header>
      <_.SwichBox>
        <Switch
          options={date}
          defaultSelected="월"
          onChange={handleDateChange}
        />
        <Switch
          options={sleepType}
          defaultSelected="낮잠"
          onChange={handleSleepTypeChange}
        />
      </_.SwichBox>
      <_.TimeSets>
        <_.TimeBox>
          <_.Lable>취침</_.Lable>
          <_.GotoBed
            isActive={activeTime === "bed"}
            onClick={() => setActiveTime("bed")}
          >
            <_.Icon isActive={activeTime === "bed"}>moon_stars</_.Icon>
            {bedTime}
          </_.GotoBed>
        </_.TimeBox>
        <_.TimeBox>
          <_.Lable>기상</_.Lable>
          <_.WakeUp
            isActive={activeTime === "wake"}
            onClick={() => setActiveTime("wake")}
          >
            <_.Icon isActive={activeTime === "wake"}>clear_day</_.Icon>
            {wakeTime}
          </_.WakeUp>
        </_.TimeBox>
      </_.TimeSets>
      <SetTime onTimeChange={handleTimeChange} />
      <Button Text="작성완료" Icon="ink_pen" onClick={handleSubmit} />
    </_.Container>
  );
};

export default AddSleep;
