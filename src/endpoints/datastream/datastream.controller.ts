import { NativeAuth, NativeAuthGuard } from "@multiversx/sdk-nestjs-auth";
import { Controller, Get, UseGuards, Headers } from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { DatastreamService } from "./datastream.service";

@ApiTags("datastream")
@Controller()
export class DatastreamController {
  constructor(private readonly datastreamService: DatastreamService) {}

  // @UseGuards(NativeAuthGuard)
  // you can turn on/off native auth protection on this endpoint here
  @Get("/datastream")
  @ApiOperation({
    summary: "Placheholder endpoint for datastream",
    description: "Placeholder where one can put business logic that executes after the native auth guard is checked",
  })
  @ApiOkResponse({ type: [String] })
  datastreamEndpoint(@Headers() headers, @NativeAuth() auth: any) {
    // can also use @NativeAuth('address') for example

    // here is where you call your main business logic function
    // ... in this example, we just call this place holder function.
    // ... go into it to work out what "headers" you have access to to configure a private (as it's native auth protected),
    // ... and personalized data stream (as it uses native auth info and data marshal headers to personalize response)
    return this.datastreamService.placeholderFunction(headers, auth);
  }
}
