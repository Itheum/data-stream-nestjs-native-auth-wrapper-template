import { Inject, Injectable } from "@nestjs/common";
import { NativeAuthServer } from "@multiversx/sdk-native-auth-server";
import {
  DecoratorUtils,
  ErdnestConfigService,
  ERDNEST_CONFIG_SERVICE,
  UrlUtils,
  ExecutionContextUtils,
} from "@multiversx/sdk-nestjs-common";
@Injectable()
export class DatastreamService {
  placeholderFunction(headers: any, auth: any) {
    const accessToken = headers["Authorization"];
    return auth || [];
  }
}
