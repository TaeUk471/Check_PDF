"use client";

import React, { useEffect, useState } from "react";

import Button from "@components/buttons/src/button";
import Input from "@components/inputs/src/input";
import Naming from "@components/modals/src/naming";
import useToggle from "@hooks/useToggle";
import { useTypeStore } from "store/useTypeStore";

import TypeCard from "../src/typeCard";

interface TypeMapping {
  folderName: string;
  fileIds: string[];
}

const TypeCardHolder = () => {
  const { isOpen, open, close } = useToggle();
  const { selectedIds, clearSelected, addSubmittedIds, clearSubmitted } = useTypeStore();
  const [typeMappings, setTypeMappings] = useState<TypeMapping[]>([]);
  const [namingValue, setNamingValue] = useState("");

  useEffect(() => {
    clearSubmitted();
  }, []);

  const handleNamingConfirm = () => {
    if (namingValue && selectedIds.length > 0) {
      addSubmittedIds(selectedIds);
      setTypeMappings(prev => [
        ...prev,
        {
          folderName: namingValue,
          fileIds: selectedIds,
        },
      ]);
      clearSelected();
      setNamingValue("");
      close();
    } else {
      alert("폴더명과 선택된 파일이 있어야 합니다!");
    }
  };

  const handleSend = async () => {
    const groupKeys = typeMappings.map((_, index) => String.fromCharCode(65 + index));

    const folderNames: Record<string, string> = {};
    groupKeys.forEach((key, i) => {
      folderNames[key] = typeMappings[i].folderName;
    });

    const files = typeMappings.flatMap((mapping, index) => {
      const groupKey = groupKeys[index];
      return mapping.fileIds.map(fileId => ({
        typeId: fileId,
        group: groupKey,
      }));
    });

    console.log(files);
    console.log(folderNames);

    //   해당 데이터 Json.stringify 해서 보내면 끗끗
    //   const bodyToSend = {
    //     hospitalId,
    //     files,
    //     folderNames,
    //   };
  };

  return (
    <div className="flex flex-col justify-center items-center bg-slate-200 gap-4">
      <div className="flex flex-col px-8 py-4 w-[350px] h-[500px] bg-slate-400 rounded-lg gap-3 ring-cyan-800 ring-2 ring-offset-2">
        {typeMappings.length > 0 ? (
          typeMappings.map((mapping, index) => (
            <TypeCard key={index} className={"flex justify-between items-center"}>
              <p className="font-Interop">
                {mapping.folderName} : [{mapping.fileIds.join(", ")}]
              </p>
              <Input
                className={"w-12 text-center h-fit pl-1 font-Interop font-black"}
                type={"number"}
                color={"normal"}
                inputClassName={"w-[22px] text-center"}
                size={"sm"}
                radius={"lg"}
                isOutlined
              />
            </TypeCard>
          ))
        ) : (
          <>
            <TypeCard>
              <div className="flex items-center justify-between">
                <p className="font-Interop">폴더 이름 : 폴더 번호 </p>
                <p className="font-Interop">순번</p>
              </div>
            </TypeCard>
          </>
        )}
      </div>

      <div className="flex w-[350px] py-4 justify-between">
        <Button
          color={"check"}
          variant={"bordered"}
          size={"lg"}
          radius={"full"}
          onClick={handleSend}>
          Send
        </Button>
        <Button color={"submit"} variant={"bordered"} size={"lg"} radius={"full"} onClick={open}>
          Select
        </Button>
      </div>

      <Naming
        value={namingValue}
        isOpen={isOpen}
        onCloseAction={close}
        onButtonClickAction={handleNamingConfirm}
        onChangeAction={setNamingValue}
      />
    </div>
  );
};

export default TypeCardHolder;

TypeCardHolder.displayName = "TypeCardHolder";
