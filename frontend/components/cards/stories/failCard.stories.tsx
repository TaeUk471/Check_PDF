import { Meta, StoryObj } from "@storybook/react/*";

import FailCard from "../src/failCard";

export default {
  title: "Components/Card/FailCard",
  component: FailCard,
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      options: ["danger", "warning", "waiting"],
    },
    variant: {
      control: {
        type: "select",
      },
      options: ["solid", "bordered", "shadow"],
    },
    size: {
      control: {
        type: "select",
      },
      options: ["mb", "tb", "pc"],
    },
    radius: {
      control: {
        type: "select",
      },
      options: ["none", "sm", "md", "lg", "full"],
    },
  },
  decorators: [
    Story => (
      <div className="flex justify-center items-center w-screen h-screen bg-stone-300">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof FailCard>;

type FailCardStory = StoryObj<typeof FailCard>;

export const Danger: FailCardStory = {
  args: {
    color: "warning",
    variant: "solid",
    size: "mb",
    radius: "lg",
    tagColor: "danger",
    data: {
      hospitalName: "연세 세브란스 병원",
      errorTitle: "Process Remaining",
      tagMessage: "Danger",
      problemMessage:
        "작업 중이던 프로세스가 일시정지 되었습니다. 클릭하여서 이어서 작업을 진행해주시기 바랍니다. 작업은 (1)시간 이후 초기화됩니다.",
    },
  },
};

export const Warning: FailCardStory = {
  args: {
    color: "warning",
    variant: "shadow",
    size: "tb",
    radius: "full",
    tagColor: "warning",
    data: {
      hospitalName: "강남 베드로 병원 (__병원 코드__)",
      errorTitle: "Find New Type",
      tagMessage: "Warning",
      fileName: "FilePath : M간암_검진_결과통보서/Path",
      problemMessage:
        "강남 베드로 병원에서 (3)개의 새로운 타입이 발견되었습니다. 빠른 시일 내에 확인 바랍니다. \n 빠르게 확인이 불가능할 시 해당 모델에 치명적인 오류가 염려됩니다. 24시간 내에 처리바랍니다.",
    },
  },
};

export const Waiting: FailCardStory = {
  args: {
    color: "check",
    variant: "shadow",
    size: "pc",
    radius: "sm",
    tagColor: "check",
    data: {
      hospitalName: "창원 파티마 병원",
      errorTitle: "Identifier Missing",
      tagMessage: "Check",
      problemMessage:
        "창원 파티마 병원에서 식별자 추출 작업이 실패하였습니다. 실패한 작업에 대해서 다시 진행해주시기 바랍니다. 작업은 (2)시간 이후 초기화됩니다.",
    },
  },
};
