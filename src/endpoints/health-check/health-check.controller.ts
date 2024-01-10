import { Controller, Get } from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { HealthService } from "./health-check.service";

@ApiTags("health-check")
@Controller()
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get("/health-check")
  @ApiOperation({
    summary: "Health check",
  })
  @ApiOkResponse({ type: String, description: "Health check" })
  async checkHealth() {
    return await this.healthService.checkHealth();
  }
}
