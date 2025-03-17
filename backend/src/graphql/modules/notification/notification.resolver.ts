import { Query, Resolver } from "@nestjs/graphql";

import { NotificationService } from "./notification.service";
import { Notification } from "./notification.type";

@Resolver(() => Notification)
export class NotificationResolver {
  constructor(private readonly notificationService: NotificationService) {}

  @Query(() => [Notification])
  async notifications() {
    console.log("여기가 notification reolver입니다");
    return this.notificationService.getNotifications();
  }
}
