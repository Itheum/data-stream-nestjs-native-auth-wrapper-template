import { NativeAuthGuard } from "@multiversx/sdk-nestjs-auth";
import { Controller, Get, UseGuards } from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { DatastreamService } from "./datastream.service";

@ApiTags("datastream")
@Controller()
export class DatastreamController {
  constructor(private readonly datastreamService: DatastreamService) {}

  // @UseGuards(NativeAuthGuard)
  @Get("/datastream")
  @ApiOperation({
    summary: "Placheholder endpoint for datastream",
    description: "Placeholder where one can put business logic that executes after the native auth guard is checked",
  })
  @ApiOkResponse({ type: [String] })
  datastreamEndpoint() {
    return this.datastreamService.placeholderFunction();
  }
}
