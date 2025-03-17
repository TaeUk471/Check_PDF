import { gql } from "@apollo/client";

import { DASHBOARD_FRAGMENT } from "./dashboard.fragments";

export const GET_DASHBOARD = gql`
  query GetDashboard {
    dashboard {
      ...DashboardField
    }
  }
  ${DASHBOARD_FRAGMENT}
`;
