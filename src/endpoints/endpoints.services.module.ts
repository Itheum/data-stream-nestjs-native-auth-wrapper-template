import { Module } from "@nestjs/common";
import { DynamicModuleUtils } from "src/utils/dynamic.module.utils";
import { HealthModule } from "./health-check/health-check.module";
import { DatastreamModule } from "./datastream/datastream.module";

@Module({
  imports: [DynamicModuleUtils.getCachingModule(), DatastreamModule, HealthModule],
  exports: [DatastreamModule, HealthModule],
})
export class EndpointsServicesModule {}
