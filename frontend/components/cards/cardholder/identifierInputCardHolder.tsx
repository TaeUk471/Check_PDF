"use client";

import React, { useState } from "react";

import Button from "@components/buttons/src/button";
import Input from "@components/inputs/src/input";

export default function Cardholder() {
  const [inputs, setInputs] = useState(
    Array(4)
      .fill(null)
      .map(() => Array(2).fill("")),
  );

  const handleInputChange = (row: number, col: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[row][col] = value;
    setInputs(newInputs);
  };

  return (
    <div className="border-2 border-purple-600 rounded-xl shadow-xl p-4 mx-12 my-auto">
      <div className="my-8 font-poppins text-6xl text-center text-purple-700 text-stroke-black">
        Identifier Check
      </div>
      <p className="mb-12 font-Interop place-self-center">
        빨간 박스 내의 글씨가 맞는 지 확인하고, 해당 글씨를 (키:값)으로 타이핑 해주세요.
      </p>
      <div className="grid grid-cols-[1fr_5fr] gap-12">
        <div className="flex flex-col gap-16 ml-14 mt-4 font-Interop">
          <p>환자 명 : </p>
          <p className="mt-2">환자 ID : </p>
          <p className="mt-1">의사 명 : </p>
          <p className="mt-1">주민등록번호 : </p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          {/* Input 태그 전반부에 search Value 값 제공 */}
          {inputs.map((row, rowIndex) =>
            row.map((value, colIndex) => (
              <Input
                key={`${rowIndex}-${colIndex}`}
                color="normal"
                size="lg"
                radius="lg"
                value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(rowIndex, colIndex, e.target.value)
                }
                placeholder={colIndex === 1 ? `value ${rowIndex + 1}` : `key ${rowIndex + 1}`}
              />
            )),
          )}
        </div>
      </div>
      <Button
        color={"submit"}
        variant={"shadow"}
        size={"xl"}
        radius={"full"}
        className={"place-self-end mt-10 mb-6"}
        onClick={() => console.log(JSON.stringify(inputs, null, 2))}>
        Send
      </Button>
    </div>
  );
}
