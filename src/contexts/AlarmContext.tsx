import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Alarm {
  id: string;
  time: string;
  isActive: boolean;
}

interface AlarmContextType {
  alarms: Alarm[];
  addAlarm: (time: string) => void;
  toggleAlarm: (id: string) => void;
  deleteAlarm: (id: string) => void;
}

const AlarmContext = createContext<AlarmContextType | undefined>(undefined);

export const AlarmProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [alarms, setAlarms] = useState<Alarm[]>([]);
  const navigate = useNavigate();

  const addAlarm = (time: string) => {
    const newAlarm: Alarm = {
      id: Date.now().toString(),
      time,
      isActive: true,
    };
    setAlarms([...alarms, newAlarm]);
  };

  const toggleAlarm = (id: string) => {
    setAlarms(
      alarms.map((alarm) =>
        alarm.id === id ? { ...alarm, isActive: !alarm.isActive } : alarm
      )
    );
  };

  const deleteAlarm = (id: string) => {
    setAlarms(alarms.filter((alarm) => alarm.id !== id));
  };

  useEffect(() => {
    const checkAlarms = () => {
      const now = new Date();
      const currentTime = `${String(now.getHours()).padStart(2, "0")}:${String(
        now.getMinutes()
      ).padStart(2, "0")}`;

      const activeAlarm = alarms.find(
        (alarm) => alarm.isActive && alarm.time === currentTime
      );

      if (activeAlarm) {
        setAlarms(
          alarms.map((alarm) =>
            alarm.id === activeAlarm.id ? { ...alarm, isActive: false } : alarm
          )
        );
        navigate("/calling");
      }
    };

    const interval = setInterval(checkAlarms, 1000);
    return () => clearInterval(interval);
  }, [alarms, navigate]);

  return (
    <AlarmContext.Provider
      value={{ alarms, addAlarm, toggleAlarm, deleteAlarm }}
    >
      {children}
    </AlarmContext.Provider>
  );
};

export const useAlarm = () => {
  const context = useContext(AlarmContext);
  if (context === undefined) {
    throw new Error("useAlarm must be used within an AlarmProvider");
  }
  return context;
};
