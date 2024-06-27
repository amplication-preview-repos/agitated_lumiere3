import * as graphql from "@nestjs/graphql";
import { DispatchResolverBase } from "./base/dispatch.resolver.base";
import { Dispatch } from "./base/Dispatch";
import { DispatchService } from "./dispatch.service";

@graphql.Resolver(() => Dispatch)
export class DispatchResolver extends DispatchResolverBase {
  constructor(protected readonly service: DispatchService) {
    super(service);
  }
}
