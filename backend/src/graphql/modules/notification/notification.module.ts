import { Module } from "@nestjs/common";

import { NotificationController } from "./notification.controller";
import { NotificationResolver } from "./notification.resolver";
import { NotificationService } from "./notification.service";

@Module({
  providers: [NotificationResolver, NotificationService],
  controllers: [NotificationController],
  exports: [NotificationService],
})
export class NotificationModule {}
