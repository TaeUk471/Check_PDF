"use client";

import { HospitalDataType } from "graphql/hospital/hospital.fragments";
import { NotificationDataType } from "graphql/notification/notification.fragment";
import { processResultType, useQueryStreamLine } from "middleware/reactQuery.middleware";

const CheckHospitalList = () => {
  const queryResults = useQueryStreamLine({
    queries: [{ queryKey: ["getHospitals"] }, { queryKey: ["getNotifications"] }],
  });

  const hospitals = processResultType<{ hospitals: HospitalDataType[] }>(
    queryResults.getHospitals.data,
  )?.hospitals;

  const notifications = processResultType<{ notifications: NotificationDataType[] }>(
    queryResults.getNotifications.data,
  )?.notifications;

  console.log("병원 정보", hospitals);

  return (
    <>
      <div className="flex flex-col gap-6 justify-center items-center bg-slate-300">
        {hospitals?.map((hospital: HospitalDataType) => (
          <div className={"flex gap-2"} key={hospital.hospitalId}>
            <p> Id: {hospital.hospitalId}</p>
            <p> Name : {hospital.hospitalName}</p>
          </div>
        ))}

        {notifications?.map((notification: NotificationDataType) => (
          <div className={"flex gap-2"} key={notification.hospitalId}>
            <p> Id: {notification.hospitalId}</p>
            <p> Name : {notification.hospitalName}</p>
            <div> title : {notification.title}</div>
            <div> severity : {notification.severity}</div>
            <div> filName : {notification.fileName.filePath}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CheckHospitalList;
