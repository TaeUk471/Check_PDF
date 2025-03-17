"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import HospitalSearchBar from "@components/inputs/src/variants/hospitalSearchBar";
import { NotificationDataType } from "graphql/notification/notification.fragment";
import { processResultType, useQueryStreamLine } from "middleware/reactQuery.middleware";

import FailCard from "../src/failCard";

const FailCardHolder = () => {
  const queryResults = useQueryStreamLine({
    queries: [{ queryKey: ["getNotifications"] }],
  });

  const notifications = processResultType<{ notifications: NotificationDataType[] }>(
    queryResults.getNotifications.data,
  )?.notifications;

  const [searchTerm, setSearchTerm] = useState("");

  const filteredNotifications = useMemo(() => {
    return notifications?.filter((notification: NotificationDataType) =>
      notification.hospitalName.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [notifications, searchTerm]);

  return (
    <div className="flex justify-center">
      <div className="flex justify-center items-start flex-col mt-24 mb-12 gap-6">
        <HospitalSearchBar value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        <div className="font-poppins font-black text-4xl text-red-800 ml-2">FailList</div>

        <div className="flex flex-col gap-6 w-[710px] px-2">
          {filteredNotifications?.map((notification: NotificationDataType) => (
            <Link
              key={notification.hospitalId}
              href={`/${notification.hospitalId}/${
                notification.title === "식별자 에러" ? "identifier" : "type"
              }`}>
              <FailCard
                key={notification.hospitalId}
                color={notification.severity.toLowerCase()}
                variant={"shadow"}
                size={"tb"}
                radius={"lg"}
                tagColor={notification.severity.toLowerCase()}
                data={{
                  hospitalName: notification.hospitalName,
                  errorTitle: notification.title,
                  tagMessage: notification.severity,
                  fileName: notification.fileName.filePath,
                  problemMessage: `${notification.hospitalName}에서 ${notification.title}(이)가 발생하였습니다. 실패한 작업에 대해서 다시 진행해주시기 바랍니다. 작업은(2)시간 이후 초기화됩니다.`,
                }}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FailCardHolder;

FailCardHolder.displayName = "FailCardHolder";

// window.addEventListener("beforeunload", () => {
//   const unsavedTask = {
//     userId: "1234", // 사용자 식별 ID
//     taskId: "task_001", // 작업 ID (각 작업에 고유 ID 할당)
//     pageUrl: window.location.href, // 이탈한 페이지 주소
//     taskContent: document.getElementById("inputField").value, // 입력 내용 저장
//     timestamp: Date.now(), // 시간 저장
//   };

//   fetch("/api/save-unsaved-task", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(unsavedTask),
//   });
// });

// // 작업 복원 함수
// function resumeTask(url) {
//   window.location.href = url; // 저장된 페이지로 이동
// }

// // 페이지 로드 시 미완료 작업 불러오기
// window.addEventListener("load", fetchUnfinishedTasks);
