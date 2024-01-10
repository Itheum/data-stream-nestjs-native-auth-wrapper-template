import { Injectable, InternalServerErrorException } from "@nestjs/common";

@Injectable()
export class HealthService {
  constructor() {}

  checkHealth() {
    try {
      return "OK";
    } catch {
      throw new InternalServerErrorException();
    }
  }
}
