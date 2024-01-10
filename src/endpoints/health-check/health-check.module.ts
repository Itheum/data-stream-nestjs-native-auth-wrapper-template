import { Module } from "@nestjs/common";
import { HealthService } from "./health-check.service";

@Module({
  imports: [],
  providers: [HealthService],
  exports: [HealthService],
})
export class HealthModule {}
