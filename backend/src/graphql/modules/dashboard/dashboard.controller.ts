import { Controller, Get } from "@nestjs/common";

import { DashboardService } from "./dashboard.service";

@Controller("Dashboard")
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get()
  getDashboard() {
    return this.dashboardService.getDashboard();
  }
}
