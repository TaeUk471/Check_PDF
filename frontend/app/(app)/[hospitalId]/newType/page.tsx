"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";

import TypeContainer from "@components/container/typeContainer";
import Header from "@components/Header/src/header";
import { NewTypeDataType } from "graphql/newType/newType.fragment";
import { processResultType, useQueryStreamLine } from "middleware/reactQuery.middleware";

const NewTypePage = () => {
  const { hospitalId } = useParams();
  const hospitalIdNum = Number(hospitalId);

  const newTypeResult = useQueryStreamLine({
    queries: [{ queryKey: ["getNewType"], variables: { hospitalId: hospitalIdNum } }],
  });

  const newTypes = processResultType<{ newTypes: NewTypeDataType }>(
    newTypeResult.getNewType.data,
  )?.newTypes;

  useEffect(() => {
    console.log(newTypes, "타입스타입스 뉴타입스!");
  }, []);

  return (
    <div className="flex flex-col flex-1 w-screen h-screen bg-slate-100 overflow-x-hidden">
      <Header as="div" user={{ id: "HTW123", name: "한태욱" }} isSigned="admin" hasProblem />
      <TypeContainer />
    </div>
  );
};

export default NewTypePage;

NewTypePage.displayName = "TypePage";
