import * as _ from "./style";
import Logo from "../../assets/logo.svg";
import { useState, useRef } from "react";

const hours = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, "0"));
const minutes = Array.from({ length: 60 }, (_, i) =>
  String(i).padStart(2, "0")
);

interface SetTimeProps {
  onTimeChange: (time: string) => void;
}

const SetTime: React.FC<SetTimeProps> = ({ onTimeChange }) => {
  const [selectedHour, setSelectedHour] = useState("00");
  const [selectedMinute, setSelectedMinute] = useState("00");
  const hourRef = useRef<HTMLDivElement>(null);
  const minuteRef = useRef<HTMLDivElement>(null);

  const handleScroll = (
    ref: React.RefObject<HTMLDivElement | null>,
    isHour: boolean
  ) => {
    if (!ref.current) return;

    const scrollTop = ref.current.scrollTop;
    const itemHeight = 54; // TimeItem의 height
    const index = Math.round(scrollTop / itemHeight);
    const value = isHour ? hours[index] : minutes[index];

    if (isHour) {
      setSelectedHour(value);
      onTimeChange(`${value}:${selectedMinute}`);
    } else {
      setSelectedMinute(value);
      onTimeChange(`${selectedHour}:${value}`);
    }
  };

  return (
    <_.Container>
      <_.Logo src={Logo} />
      <_.ScrollArea ref={hourRef} onScroll={() => handleScroll(hourRef, true)}>
        <_.ScrollWrapper>
          {hours.map((hour) => (
            <_.Hour key={hour}>{hour}</_.Hour>
          ))}
        </_.ScrollWrapper>
      </_.ScrollArea>

      <_.Colon>:</_.Colon>

      <_.ScrollArea
        ref={minuteRef}
        onScroll={() => handleScroll(minuteRef, false)}
      >
        <_.ScrollWrapper>
          {minutes.map((minute) => (
            <_.Minute key={minute}>{minute}</_.Minute>
          ))}
        </_.ScrollWrapper>
      </_.ScrollArea>
    </_.Container>
  );
};

export default SetTime;
