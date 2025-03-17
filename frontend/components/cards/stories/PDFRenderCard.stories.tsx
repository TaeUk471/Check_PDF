import { Meta, StoryObj } from "@storybook/react";

import { WithModalRoot } from "@components/modals/decorators/withModalRoot";

import PDFRenderCard from "../src/PDFRenderCard";

export default {
  title: "components/Card/PDFRenderCard",
  component: PDFRenderCard,
  argTypes: {
    pdfId: {
      control: { type: "text" },
      description: "The ID of the PDF document to render",
    },
    color: {
      control: "select",
      options: ["normal", "selected", "disabled"],
    },

    size: {
      control: "select",
      options: ["sm", "md", "magnified"],
    },
    radius: {
      control: "select",
      options: ["none", "sm", "md", "lg", "full"],
    },
    isDisabled: {
      control: "boolean",
    },
    title: {
      control: "boolean",
      description: "Render only the first page of the PDF",
    },
  },
  decorators: [
    WithModalRoot,
    Story => (
      <div className="flex justify-center items-center w-screen h-screen bg-gray-300">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof PDFRenderCard>;

type PDFRenderCardStory = StoryObj<typeof PDFRenderCard>;

export const Default: PDFRenderCardStory = {
  args: {
    pdfId: "default-pdf-id", // 테스트용 PDF ID
    color: "normal",
    size: "md",
    radius: "lg",
    isDisabled: false,
    title: true,
  },
};

export const Selected: PDFRenderCardStory = {
  args: {
    ...Default.args,
    color: "selected",
  },
};

export const Disabled: PDFRenderCardStory = {
  args: {
    ...Default.args,
    isDisabled: true,
  },
};

export const FirstPageOnly: PDFRenderCardStory = {
  args: {
    ...Default.args,
    title: true,
  },
};
