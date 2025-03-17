"use client";

import { useMemo, useState } from "react";

import Button from "@components/buttons/src/button";
import Input from "@components/inputs/src/input";
import HospitalSearchBar from "@components/inputs/src/variants/hospitalSearchBar";
import Modal from "@components/modals/src/modal";
import useToggle from "@hooks/useToggle";
import { HospitalDataType } from "graphql/hospital/hospital.fragments";
import {
  processResultType,
  useMutationStreamLine,
  useQueryStreamLine,
} from "middleware/reactQuery.middleware";

import HospitalCard from "../src/hospitalCard";

const FailCardHolder = () => {
  const { isOpen: isMainOpen, open: openMain, close: closeMain } = useToggle();
  const { isOpen: isSecondOpen, open: openSecond, close: closeSecond } = useToggle();

  const queryResults = useQueryStreamLine({
    queries: [{ queryKey: ["getHospitals"] }],
  });

  const hospitals = processResultType<{ hospitals: HospitalDataType[] }>(
    queryResults.getHospitals.data,
  )?.hospitals;

  const { mutateAsync: createHospital } = useMutationStreamLine({
    mutationKey: "createHospital",
  });

  const handleCreateHospital = async () => {
    const createResponse = await createHospital({
      hospitalId: Number(inputs[1]),
      hospitalName: inputs[0],
    });
    console.log(createResponse);
  };

  const swapModal = () => {
    handleCreateHospital();
    closeMain();
    openSecond();
    setInputs(["", ""]);
  };

  const [files, setFiles] = useState<FileList | null>(null);

  const handleSubmit = () => {
    // API 연결을 통한 모든 PDF 전송
    console.log(files, "이거 진짜니?");
    closeSecond();
    setInputs(["", ""]);
    setFiles(null);
  };

  const [searchTerm, setSearchTerm] = useState("");

  const filteredHospitals = useMemo(() => {
    return hospitals?.filter((hospital: HospitalDataType) =>
      hospital.hospitalName.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [hospitals, searchTerm]);

  const [inputs, setInputs] = useState(Array(2).fill(""));

  const handleInputChange = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  return (
    <div className="flex justify-center">
      <div className="flex justify-center items-start flex-col mt-24 mb-12 gap-6">
        <HospitalSearchBar value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        <div className="flex justify-between items-center w-full">
          <div className="font-poppins font-black text-4xl text-green-800 ml-2">Hospital List</div>
          <Button
            color={"default"}
            variant={"bordered"}
            size={"default"}
            radius={"full"}
            onClick={openMain}>
            <i className="fa fa-plus" />
          </Button>
          {isMainOpen && (
            <Modal
              title="병원 추가"
              buttonColor="submit"
              buttonName="확인"
              onCloseAction={() => closeMain()}
              onButtonClickAction={() => swapModal()}>
              <div
                className="flex flex-col gap-4
              ">
                <Input
                  color={"normal"}
                  size={"lg"}
                  radius={"lg"}
                  type={"text"}
                  placeholder="병원 이름"
                  isOutlined
                  value={inputs[0]}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange(0, e.target.value)
                  }
                />
                <Input
                  color={"normal"}
                  size={"lg"}
                  radius={"lg"}
                  placeholder="병원 ID"
                  isOutlined
                  value={inputs[1]}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange(1, e.target.value)
                  }
                />
              </div>
            </Modal>
          )}
          {isSecondOpen && (
            <Modal
              title="병원 PDF 추가"
              buttonColor="submit"
              buttonName="확인"
              onCloseAction={() => closeSecond()}
              onButtonClickAction={() => handleSubmit()}>
              <div
                className="flex flex-col gap-4
              ">
                <Input
                  color={"normal"}
                  size={"lg"}
                  radius={"lg"}
                  type={"file"}
                  placeholder="Upload a file"
                  accept="application/pdf"
                  className="w-fit"
                  multiple
                  startContent={<span>📂</span>}
                  onFileSelect={(files: FileList) => setFiles(files)}
                />
              </div>
            </Modal>
          )}
        </div>
        <div className="flex flex-col gap-6 w-[710px] px-2">
          {filteredHospitals?.map((hospital: HospitalDataType) => (
            <HospitalCard
              key={hospital.hospitalId}
              color={"default"}
              variant={"bordered"}
              size={"tb"}
              radius={"lg"}
              data={{
                hospitalName: hospital.hospitalName,
                hospitalId: hospital.hospitalId,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FailCardHolder;

FailCardHolder.displayName = "FailCardHolder";
