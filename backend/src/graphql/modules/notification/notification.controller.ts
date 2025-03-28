import { Controller, Get } from "@nestjs/common";

import { NotificationService } from "./notification.service";

@Controller("Notification")
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Get()
  getNotifications() {
    return this.notificationService.getNotifications;
  }
}
