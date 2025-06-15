import * as _ from "./style";
import Logo from "../../assets/logo.svg";

interface AlarmProps {
  time: string;
  isActive: boolean;
}

const Alarm: React.FC<AlarmProps> = ({ time, isActive }) => {
  return (
    <_.Container>
      <_.TimeBox>
        <_.Logo src={Logo} />
        <_.Time>{time}</_.Time>
      </_.TimeBox>
      <_.AlarmOnOff>{isActive ? "alarm" : "alarm_off"}</_.AlarmOnOff>
    </_.Container>
  );
};

export default Alarm;
