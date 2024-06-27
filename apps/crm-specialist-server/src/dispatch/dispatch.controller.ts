import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DispatchService } from "./dispatch.service";
import { DispatchControllerBase } from "./base/dispatch.controller.base";

@swagger.ApiTags("dispatches")
@common.Controller("dispatches")
export class DispatchController extends DispatchControllerBase {
  constructor(protected readonly service: DispatchService) {
    super(service);
  }
}
