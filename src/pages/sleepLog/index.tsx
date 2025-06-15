import * as _ from "./style";
import { useState, useEffect } from "react";
import Logo from "../../assets/logo.svg";
import Button from "../../components/button";
import { useLocation } from "react-router-dom";

interface SleepData {
  id: string;
  date: string;
  sleepType: string;
  bedTime: string;
  wakeTime: string;
  duration: string;
  isBookmarked: boolean;
}

const SleepLog: React.FC = () => {
  const location = useLocation();
  const [sleepLogs, setSleepLogs] = useState<SleepData[]>(() => {
    const savedLogs = localStorage.getItem("sleepLogs");
    return savedLogs ? JSON.parse(savedLogs) : [];
  });

  useEffect(() => {
    const newSleepData = location.state as SleepData;
    if (newSleepData) {
      const newLog: SleepData = {
        ...newSleepData,
        id: Date.now().toString(),
        isBookmarked: false,
      };

      const updatedLogs = [...sleepLogs, newLog];
      setSleepLogs(updatedLogs);
      localStorage.setItem("sleepLogs", JSON.stringify(updatedLogs));
    }
  }, [location.state]);

  const handleBookmark = (id: string) => {
    const updatedLogs = sleepLogs.map((log) =>
      log.id === id ? { ...log, isBookmarked: !log.isBookmarked } : log
    );
    setSleepLogs(updatedLogs);
    localStorage.setItem("sleepLogs", JSON.stringify(updatedLogs));
  };

  return (
    <_.Container>
      <_.Header>
        <_.Title>
          <_.Undo href="../">undo</_.Undo>수면일지
        </_.Title>
        <_.Logo src={Logo} />
      </_.Header>
      <_.LogList>
        {sleepLogs.length > 0 ? (
          sleepLogs.map((log) => (
            <_.Log key={log.id}>
              <_.LogHeader>
                <_.LogHeaderText>
                  <_.Date>{log.date}</_.Date>
                  <_.SleepType>{log.sleepType}</_.SleepType>
                </_.LogHeaderText>
                <_.Bookmark
                  onClick={() => handleBookmark(log.id)}
                  style={{
                    fontVariationSettings: log.isBookmarked
                      ? '"FILL" 1'
                      : '"FILL" 0',
                    filter: log.isBookmarked
                      ? "drop-shadow(0 0 8px #006fff)"
                      : "none",
                  }}
                >
                  bookmark
                </_.Bookmark>
              </_.LogHeader>
              <_.Tags>{log.duration}</_.Tags>
            </_.Log>
          ))
        ) : (
          <_.EmptyMessage>아직 작성된 수면 기록이 없습니다.</_.EmptyMessage>
        )}
      </_.LogList>
      <Button Text="일지 작성" Icon="ink_pen" Link="add-sleep" />
    </_.Container>
  );
};

export default SleepLog;
