import { gql } from "@apollo/client";

import { NOTIFICATION_FRAGMENT } from "./notification.fragment";

export const GET_NOTIFICATIONS = gql`
  query GetNotifications {
    notifications {
      ...NotificationFields
    }
  }
  ${NOTIFICATION_FRAGMENT}
`;
