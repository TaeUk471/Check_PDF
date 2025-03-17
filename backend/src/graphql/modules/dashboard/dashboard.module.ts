import { Module } from "@nestjs/common";

import { DashboardController } from "./dashboard.controller";
import { DashboardResolver } from "./dashboard.resolver";
import { DashboardService } from "./dashboard.service";

@Module({
  providers: [DashboardService, DashboardResolver],
  controllers: [DashboardController],
  exports: [DashboardService],
})
export class DashboardModule {}
