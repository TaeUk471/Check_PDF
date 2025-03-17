//Alert Trigger

//발생한 시점에 대한 시간 데이터를 id를 통해
//출력해야 할 내용물에 대한 데이터를 message를 통해 받아
//최대 3개의 알림을 출력한다
import React, { useState } from "react";

import Button from "@components/buttons/src/button";

import Alert from "./alert";

interface AlertProps {
  id: number;
  message: string;
}

const AlertManager = () => {
  const [alerts, setAlerts] = useState<AlertProps[]>([]);

  const addAlert = () => {
    // 추후 api를 통해 받게 변경 예정
    const newAlert: AlertProps = {
      id: Date.now(),
      message: `새로운 알림 발생 at ${new Date().toLocaleTimeString()}`,
    };

    setAlerts(prev => {
      const updatedAlerts = [...prev, newAlert].slice(-3);
      return updatedAlerts;
    });

    setTimeout(() => {
      setAlerts(prev => prev.slice(1));
    }, 5000);
  };

  // 사용자의 Alert 임의 제거를 도움움
  const removeAlert = (id: number) => {
    setAlerts(prev => prev.filter(alert => alert.id !== id));
  };

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 space-y-4 z-50">
      <Button color={"check"} variant={"bordered"} onClick={addAlert}>
        새로운 알림 발생
      </Button>
      {alerts.map(({ id, message }) => (
        <Alert key={id} onClose={() => removeAlert(id)}>
          {message}
        </Alert>
      ))}
    </div>
  );
};

export default AlertManager;
