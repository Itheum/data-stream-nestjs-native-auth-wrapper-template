import { NativeAuth, NativeAuthGuard } from "@multiversx/sdk-nestjs-auth";
import { Controller, Get, UseGuards, Headers } from "@nestjs/common";
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
  datastreamEndpoint(@Headers() headers, @NativeAuth() auth: any) {
    // can also use @NativeAuth('address') for example
    return this.datastreamService.placeholderFunction(headers, auth);
  }
}
