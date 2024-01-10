import { Module } from "@nestjs/common";
import { DatastreamService } from "./datastream.service";

@Module({
  imports: [],
  providers: [DatastreamService],
  exports: [DatastreamService],
})
export class DatastreamModule {}
