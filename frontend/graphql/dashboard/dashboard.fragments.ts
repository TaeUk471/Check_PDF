import { gql } from "@apollo/client";

export const DASHBOARD_FRAGMENT = gql`
  fragment DashboardField on Dashboard {
    process
    success
    fail
  }
`;

// 타입 관리

export type DashboardDataType = {
  process: number;
  success: number;
  fail: number;
};
