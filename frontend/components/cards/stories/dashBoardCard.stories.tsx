import { Meta, StoryObj } from "@storybook/react/*";

import DashBoardCard from "../src/dashBoardCard";

export default {
  title: "Components/Card/DashBoardCard",
  component: DashBoardCard,
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      options: ["success", "failure", "fail_ratio", "processing", "processing_ratio"],
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
      options: ["sm", "md", "lg", "xl"],
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
} as Meta<typeof DashBoardCard>;

type DashBoardCardStory = StoryObj<typeof DashBoardCard>;

export const Success: DashBoardCardStory = {
  args: {
    color: "success",
    variant: "bordered",
    size: "xl",
    radius: "lg",
    data: {
      title: "Success",
      description: "모델이 성공한 갯수",
      status: "성공 갯수",
      value: "362",
    },
  },
};

export const Failure: DashBoardCardStory = {
  args: {
    color: "failure",
    variant: "bordered",
    size: "xl",
    radius: "full",
    data: {
      title: "Failure",
      description: "모델이 실패한 갯수",
      status: "실패 갯수",
      value: "24",
    },
  },
};

export const Failure_Ratio: DashBoardCardStory = {
  args: {
    color: "failure_ratio",
    variant: "bordered",
    size: "xl",
    radius: "full",
    data: {
      title: "Failure Ratio",
      description: "처리에 실패한 비율",
      status: "처리 실패율",
      value: "0.68%",
    },
  },
};

export const Processing: DashBoardCardStory = {
  args: {
    color: "processing",
    variant: "bordered",
    size: "xl",
    radius: "none",
    data: {
      title: "On Process",
      description: "현재 프로세싱된 전체 갯수입니다.",
      status: "전체 갯수",
      value: "386",
    },
  },
};

export const Processing_Ratio: DashBoardCardStory = {
  args: {
    color: "processing_ratio",
    variant: "shadow",
    size: "xl",
    radius: "full",
    data: {
      title: "Processing Ratio",
      description: "전체 파일 중 처리된 파일의 비율",
      status: "처리 비율",
      value: "72.8%",
    },
  },
};
