"use client";

import { useParams } from "next/navigation";
import React, { useEffect } from "react";

import { TypeDataType } from "graphql/merge/type.fragment";
import { processResultType, useQueryStreamLine } from "middleware/reactQuery.middleware";
import { useTypeStore } from "store/useTypeStore";

import PDFRenderCard from "../src/PDFRenderCard";

const cardIds = Array.from({ length: 30 }, (_, i) => `${i + 1}`);

const PDFRenderCardHolder = () => {
  const { selectedIds, submittedIds, addSelectedId, removeSelectedId } = useTypeStore();

  const handleCardClick = (id: string) => {
    if (submittedIds.includes(id)) {
      return;
    }
    if (selectedIds.includes(id)) {
      removeSelectedId(id);
    } else {
      addSelectedId(id);
    }
  };

  const { hospitalId } = useParams();
  const hospitalIdNum = Number(hospitalId);
  console.log(hospitalIdNum);

  const typeResult = useQueryStreamLine({
    queries: [{ queryKey: ["getTypes"], variables: { hospitalId: hospitalIdNum } }],
  });

  const types = processResultType<{ types: TypeDataType[] }>(typeResult.getTypes.data)?.types;

  useEffect(() => {
    console.log(types);
  }, []);

  return (
    <div className="w-full overflow-auto relative">
      <div
        className="grid p-6 bg-slate-300 gap-y-8"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}>
        {cardIds.map(id => {
          const isSubmitted = submittedIds.includes(id);
          const isSelected = selectedIds.includes(id);

          let colorVariant: "normal" | "selected" | "disabled";
          if (isSubmitted) {
            colorVariant = "disabled";
          } else {
            colorVariant = isSelected ? "selected" : "normal";
          }

          return (
            <PDFRenderCard
              key={id}
              pdfId={id}
              pageNumber={id}
              color={colorVariant}
              size="sm"
              radius="lg"
              isDisabled={isSubmitted}
              onClick={() => handleCardClick(id)}
              title
            />
          );
        })}
      </div>
    </div>
  );
};

export default PDFRenderCardHolder;
