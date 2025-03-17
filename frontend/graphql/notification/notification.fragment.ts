import { gql } from "@apollo/client";

export const NOTIFICATION_FRAGMENT = gql`
  fragment NotificationFields on Notification {
    title
    severity
    hospitalName
    hospitalId
    fileName {
      filePath
    }
    createdAt
  }
`;

export type NotificationDataType = {
  title: string;
  severity: severityType;
  hospitalName: string;
  hospitalId: number;
  fileName: {
    filePath: string;
  };
  createdAt: string;
};

type severityType = "danger" | "warning" | "waiting";

// only query라 mutation 없음.
