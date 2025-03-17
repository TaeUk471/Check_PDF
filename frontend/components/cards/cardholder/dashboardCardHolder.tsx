"use client";

import { DashboardDataType } from "graphql/dashboard/dashboard.fragments";
import { processResultType, useQueryStreamLine } from "middleware/reactQuery.middleware";

import DashBoardCard from "../src/dashBoardCard";

const DashboardCardHolder = () => {
  const queryResults = useQueryStreamLine({
    queries: [{ queryKey: ["getDashboard"] }],
  });

  const dashboard = processResultType<{ dashboard: DashboardDataType }>(
    queryResults.getDashboard.data,
  )?.dashboard;

  const rating = ((Number(dashboard?.success) / Number(dashboard?.process)) * 100).toFixed(2);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-3 mt-24 w-[700px] rounded-xl ">
        <div className="font-poppins font-black text-4xl text-amber-950">MODEL DASHBOARD</div>
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          <DashBoardCard
            as={"div"}
            color={"success"}
            variant={"solid"}
            size={"md"}
            radius={"lg"}
            data={{
              title: "Success",
              description: "모델이 성공한 갯수",
              status: "성공 갯수",
              value: dashboard?.success,
            }}
          />
          <DashBoardCard
            as={"div"}
            color={"failure"}
            variant={"solid"}
            size={"md"}
            radius={"lg"}
            data={{
              title: "Failure",
              description: "모델이 실패한 갯수",
              status: "실패 갯수",
              value: dashboard?.fail,
            }}
          />
          <DashBoardCard
            as={"div"}
            color={"processing"}
            variant={"solid"}
            size={"md"}
            radius={"lg"}
            data={{
              title: "Processing",
              description: "프로세싱된 갯수",
              status: "프로세싱 갯수",
              value: dashboard?.process,
            }}
          />
          <DashBoardCard
            as={"div"}
            color={"processing_ratio"}
            variant={""}
            size={"md"}
            radius={"lg"}
            data={{
              title: "Processing Ratio",
              description: "전체 파일 중 처리된 파일의 비율",
              status: "처리 비율",
              value: rating,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardCardHolder;

DashboardCardHolder.displayName = "DashboardCardHolder";
