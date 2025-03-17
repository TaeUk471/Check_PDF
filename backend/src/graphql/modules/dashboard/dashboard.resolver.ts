import { Query, Resolver } from "@nestjs/graphql";

import { DashboardService } from "./dashboard.service";
import { Dashboard } from "./dashboard.type";

@Resolver(() => Dashboard)
export class DashboardResolver {
  constructor(private readonly dashboardService: DashboardService) {}

  @Query(() => Dashboard)
  async dashboard() {
    return this.dashboardService.getDashboard();
  }
}
